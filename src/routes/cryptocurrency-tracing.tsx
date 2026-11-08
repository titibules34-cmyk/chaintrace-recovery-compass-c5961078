import { createFileRoute } from "@tanstack/react-router";
import { CryptocurrencyTracing } from "../components/CryptocurrencyTracing";

export const Route = createFileRoute("/cryptocurrency-tracing")({
  head: () => ({
    meta: [
      { title: "Cryptocurrency Tracing and Recovery — Cyber Justice" },
      { name: "description", content: "Find where misappropriated virtual assets moved and to whom, with experienced Blockchain Analysts." },
      { property: "og:title", content: "Cryptocurrency Tracing and Recovery — Cyber Justice" },
      { property: "og:description", content: "Trace Bitcoin, Ethereum and more. Request an evaluation." },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: CryptocurrencyTracing,
});
