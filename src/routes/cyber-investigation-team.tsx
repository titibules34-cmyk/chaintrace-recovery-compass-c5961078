import { createFileRoute } from "@tanstack/react-router";
import { CyberInvestigationTeam } from "../components/CyberInvestigationTeam";

export const Route = createFileRoute("/cyber-investigation-team")({
  head: () => ({
    meta: [
      { title: "Cyber Investigation Team — Cyber Justice" },
      { name: "description", content: "Certified cyber investigators using OSINT, HUMINT, CYBINT and FININT across six continents." },
      { property: "og:title", content: "Cyber Investigation Team — Cyber Justice" },
      { property: "og:description", content: "Solutions based on intelligence for law firms, VASPs and law enforcement." },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: CyberInvestigationTeam,
});
