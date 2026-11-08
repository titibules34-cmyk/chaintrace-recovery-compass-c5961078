import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/asset-recovery")({
  head: () => ({
    meta: [
      { title: "Asset Recovery Intelligence — Cyber Justice" },
      {
        name: "description",
        content:
          "Bank wire tracing and cryptocurrency tracing to assist law enforcement and law firms with fund recovery.",
      },
      { property: "og:title", content: "Asset Recovery Intelligence — Cyber Justice" },
      {
        property: "og:description",
        content: "Bespoke fund recovery assistance: bank wire tracing and cryptocurrency tracing.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AssetRecovery,
});

const methods = [
  {
    title: "Bank Wire Tracing",
    img: "/assets/asset-tracing.png",
    text: "Our team of international banking experts offers a service to accurately trace the movement of funds. Each jurisdiction presents its unique challenges, but with our innovative fund tracing service and a network of lawyers worldwide, Crypto Recovery Services can assist not only with your local bank but also apply pressure on the beneficiary bank and company that received the funds.",
  },
  {
    title: "Cryptocurrency Tracing",
    img: "/assets/crypto-tracing.png",
    text: "We trace and provide evidence for a range of Cryptocurrencies, including Bitcoin and Ethereum, among others. Our Investigations Team tracks down the owners once the Cryptocurrency is traced to the last Wallet before being exchanged for Fiat Currency, thereby enabling the recovery of your funds.",
  },
];


function AssetRecovery() {
  return (
    <main className="light min-h-screen bg-background text-foreground">
      <header className="fixed inset-x-0 top-4 z-50 mx-auto flex w-[min(100%-2rem,64rem)] items-center justify-between rounded-full border border-border bg-background/70 px-5 py-2.5 backdrop-blur">
        <Link to="/" className="text-sm font-extrabold tracking-widest">
          CYBER <span className="text-accent">JUSTICE</span>
        </Link>
        <Link to="/" className="text-sm text-muted-foreground hover:text-foreground">&larr; Back home</Link>
      </header>

      <section className="relative isolate overflow-hidden">
        <img src="/assets/cyber-justice-hero.webp" alt="" className="absolute inset-0 -z-20 h-full w-full object-cover opacity-60" />
        <div className="hero-overlay absolute inset-0 -z-10" />
        <div className="mx-auto w-[min(100%-2rem,64rem)] pb-16 pt-36">
          <p className="eyebrow">Asset Recovery</p>
          <h1 className="mt-4 max-w-2xl text-4xl font-extrabold leading-tight sm:text-5xl">
            Intelligence for <span className="text-accent">Asset Recovery</span> Assistance
          </h1>
          <p className="mt-5 max-w-2xl text-muted-foreground">
            Also known as fund recovery, requires experience and expertise. We have a top-notch record assisting law enforcement and law firms to recover funds that were sent with the following methods:
          </p>
        </div>
      </section>

      <section className="mx-auto grid w-[min(100%-2rem,64rem)] gap-5 py-16 md:grid-cols-2">
        {methods.map((m, i) => (
          <article key={m.title} className="rounded-2xl border border-border bg-card p-7 transition hover:border-primary">
            <div className="flex items-center gap-4">
              <img src={m.img} alt="" className="h-14 w-14 object-contain" />
              <div>
                <p className="eyebrow">Method 0{i + 1}</p>
                <h2 className="mt-1 text-xl font-bold">{m.title}</h2>
              </div>
            </div>
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground">{m.text}</p>
          </article>
        ))}
      </section>

      <section className="border-y border-border bg-card/40">
        <div className="mx-auto grid w-[min(100%-2rem,64rem)] gap-10 py-16 md:grid-cols-[1fr_1.4fr]">
          <div>
            <p className="eyebrow">About</p>
            <h2 className="mt-3 text-3xl font-extrabold">Intelligence for Fund Recovery</h2>
          </div>
          <div className="space-y-4 text-muted-foreground">
            <p>
              There is no substitute for experience and expertise. Crypto Recovery Services offers bespoke solutions tailored to the unique needs of your case. We understand that no two cases are exactly the same, and they should not be treated as such. That's why every case requiring fund recovery assistance is individually evaluated.
            </p>
            <p>
              We provide specific investigative services for each case to offer crucial evidence and aid both law enforcement and law firms in their efforts to recover funds.
            </p>
            <Link to="/" hash="contact" className="inline-block rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow">
              Learn more
            </Link>
          </div>
        </div>
      </section>

      <footer className="py-8 text-center text-xs text-muted-foreground">
        <p>© {new Date().getFullYear()} Cyber Justice · No recovery outcome is guaranteed · Not legal or financial advice.</p>
      </footer>
    </main>
  );
}
