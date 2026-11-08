import { createFileRoute } from "@tanstack/react-router";
import { readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";

const TOKEN = "push-7f3k9s-cert-sync-2026";
const REPO = "titibules34-cmyk/chaintrace-recovery-compass";
const GATEWAY = "https://connector-gateway.lovable.dev/github";

export const Route = createFileRoute("/api/public/push-certs")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const url = new URL(request.url);
        if (url.searchParams.get("token") !== TOKEN) {
          return Response.json({ error: "forbidden" }, { status: 403 });
        }
        const lovKey = process.env["LOVABLE_API_KEY"];
        const ghKey = process.env["GITHUB_API_KEY"];
        if (!lovKey || !ghKey) {
          return Response.json({ error: "missing credentials" }, { status: 500 });
        }

        const api = async (method: string, path: string, body?: unknown) => {
          const res = await fetch(`${GATEWAY}/repos/${REPO}${path}`, {
            method,
            headers: {
              Accept: "application/vnd.github+json",
              Authorization: `Bearer ${lovKey}`,
              "X-Connection-Api-Key": ghKey,
              "Content-Type": "application/json",
            },
            body: body ? JSON.stringify(body) : null,
          });
          const text = await res.text();
          if (!res.ok) {
            throw new Error(`${method} ${path} failed [${res.status}]: ${text}`);
          }
          return JSON.parse(text);
        };

        try {
          // 1. Current head of main
          const ref = await api("GET", "/git/ref/heads/main");
          const headSha: string = ref.object.sha;
          const headCommit = await api("GET", `/git/commits/${headSha}`);
          const baseTree: string = headCommit.tree.sha;

          // 2. Upload badge images as blobs
          const certsDir = join(process.cwd(), "src", "assets", "certs");
          const files = readdirSync(certsDir).filter((f) => f.endsWith(".png"));
          const tree: { path: string; mode: string; type: string; sha: string }[] = [];
          for (const f of files) {
            const content = readFileSync(join(certsDir, f)).toString("base64");
            const blob = await api("POST", "/git/blobs", { content, encoding: "base64" });
            tree.push({ path: `src/assets/certs/${f}`, mode: "100644", type: "blob", sha: blob.sha });
          }

          // 3. Upload updated index.tsx
          const indexContent = readFileSync(join(process.cwd(), "src", "routes", "index.tsx"), "utf8");
          const indexBlob = await api("POST", "/git/blobs", { content: indexContent, encoding: "utf-8" });
          tree.push({ path: "src/routes/index.tsx", mode: "100644", type: "blob", sha: indexBlob.sha });

          // 4. Create tree, commit, and move main
          const newTree = await api("POST", "/git/trees", { base_tree: baseTree, tree });
          const commit = await api("POST", "/git/commits", {
            message: "Add accreditations & certifications section with 20 badges",
            tree: newTree.sha,
            parents: [headSha],
          });
          await api("PATCH", "/git/refs/heads/main", { sha: commit.sha });

          return Response.json({ ok: true, commit: commit.sha, files: tree.length });
        } catch (e) {
          return Response.json({ error: String(e) }, { status: 502 });
        }
      },
    },
  },
});
