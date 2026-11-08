import { Link } from "@tanstack/react-router";
import { Bitcoin, Blocks, ChartNoAxesCombined, Search, ShieldCheck, Wallet } from "lucide-react";

const features = [
  { icon: Bitcoin, title: "Not all Cryptos are Equal", text: "Most Cryptocurrencies are traceable, however, not all. We are able to trace the most popular Cryptocurrencies, including Bitcoin and Ethereum, as well as others." },
  { icon: Wallet, title: "The Technical Solution", text: "We are able to not only trace the movement of Cryptocurrency and identify the specific wallets, we are also able to identify where those wallets are being held and even track the locations of those that access the wallets." },
  { icon: Search, title: "Are Cryptos Traceable?", text: "Almost all virtual currencies are traceable. Each time Cryptocurrency is moved from one wallet to another it is recorded in the Blockchain." },
];

export function CryptocurrencyTracing() {
  return (
    <main className="light min-h-screen bg-background text-foreground">
      <header className="fixed inset-x-0 top-4 z-50 mx-auto flex w-[min(100%-2rem,64rem)] items-center justify-between rounded-full border border-border bg-background/70 px-5 py-2.5 backdrop-blur">
        <Link to="/" className="text-sm font-extrabold tracking-widest">CYBER <span className="text-accent">JUSTICE</span></Link>
        <Link to="/" className="text-sm text-muted-foreground hover:text-foreground">&larr; Back home</Link>
      </header>

      <section className="relative isolate overflow-hidden">
        <img src="/assets/cyber-justice-hero.webp" alt="" className="absolute inset-0 -z-20 h-full w-full object-cover opacity-60" />
        <div className="hero-overlay absolute inset-0 -z-10" />
        <div className="mx-auto w-[min(100%-2rem,64rem)] pb-16 pt-36">
          <p className="eyebrow">Blockchain intelligence · Digital asset investigations</p>
          <h1 className="mt-4 max-w-3xl text-4xl font-extrabold leading-tight sm:text-6xl">
            Cryptocurrency <span className="text-accent">Tracing and Recovery</span>
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            The first step to recovering virtual assets is to determine where they were moved to and to whom. This establishes our target.
          </p>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-muted-foreground">
            We are ready to find your misappropriated virtual assets with state of the art technology and experienced Blockchain Analysts with years of experience with Cryptocurrencies.
          </p>
          <Link to="/" hash="contact" className="mt-8 inline-flex rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow">
            Request an evaluation
          </Link>
        </div>
      </section>

      <section className="mx-auto w-[min(100%-2rem,64rem)] py-16">
        <div className="grid gap-10 md:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="eyebrow">About</p>
            <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">Cryptocurrencies</h2>
          </div>
          <div className="space-y-4 text-sm leading-7 text-muted-foreground">
            <p>Cryptocurrencies are digital assets that utilize Blockchain technology in order to provide a decentralized monetary system, often outside of the Jurisdiction of regulatory bodies.</p>
            <p><strong className="text-foreground">Are Cryptos Traceable?</strong> While Cryptocurrencies are, with few exceptions, decentralized, almost all virtual currencies are traceable. Cryptocurrencies are kept in digital accounts referred to as wallets. Each time Cryptocurrency is moved from one wallet to another it is recorded in the Blockchain.</p>
          </div>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {features.map(({ icon: Icon, title, text }, i) => (
            <article key={title} className="rounded-2xl border border-border bg-card p-6 transition hover:-translate-y-1 hover:border-primary/60 hover:shadow-glow">
              <span className="grid h-12 w-12 place-items-center rounded-xl border border-primary/15 bg-primary/10 text-primary"><Icon className="h-6 w-6" strokeWidth={1.75} /></span>
              <p className="mt-5 font-mono text-xs tracking-[0.2em] text-muted-foreground/70">0{i + 1}</p>
              <h3 className="mt-2 text-lg font-bold">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-secondary/50">
        <div className="mx-auto grid w-[min(100%-2rem,64rem)] gap-10 py-16 md:grid-cols-[1fr_1fr] md:items-center">
          <div>
            <p className="eyebrow">The technical solution</p>
            <h2 className="mt-3 text-3xl font-extrabold">Trace the wallets. Find the target.</h2>
            <p className="mt-4 text-sm leading-7 text-muted-foreground">We are able to not only trace the movement of Cryptocurrency and identify the specific wallets, we are also able to identify where those wallets are being held and even track the locations of those that access the wallets.</p>
          </div>
          <div className="rounded-2xl border border-border bg-card p-6">
            <div className="flex items-center gap-3"><Blocks className="h-6 w-6 text-accent" /><span className="font-semibold">Blockchain transaction trail</span></div>
            <div className="mt-6 flex items-center justify-between gap-2">
              {["Origin", "Wallet", "Wallet", "Service"].map((label, i) => (
                <div key={i} className="flex min-w-0 flex-1 flex-col items-center gap-2">
                  <span className="grid h-10 w-10 place-items-center rounded-xl border border-primary/20 bg-primary/10 text-primary"><Wallet className="h-5 w-5" /></span>
                  <span className="text-center text-[11px] text-muted-foreground">{label}</span>
                  {i < 3 && <span className="sr-only">leads to</span>}
                </div>
              ))}
            </div>
            <p className="mt-5 text-xs leading-6 text-muted-foreground">Illustrative flow only. Actual tracing paths and attribution depend on the blockchain, available evidence and investigative context.</p>
          </div>
        </div>
      </section>

      <section className="mx-auto w-[min(100%-2rem,64rem)] py-16">
        <div className="grid gap-8 md:grid-cols-2 md:items-center">
          <div>
            <p className="eyebrow">About</p>
            <h2 className="mt-3 text-3xl font-extrabold">How Much Bitcoin</h2>
            <p className="mt-4 text-sm leading-7 text-muted-foreground">While the amount of Cryptocurrency that is either stolen, embezzled or misappropriated is unknown, experts agree the figure is in the Billions every year. You do not have to be part of this statistic.</p>
          </div>
          <div className="rounded-2xl border border-border bg-card p-8">
            <ChartNoAxesCombined className="h-10 w-10 text-accent" />
            <p className="mt-5 text-xl font-bold">Due diligence before you buy.</p>
            <p className="mt-2 text-sm leading-7 text-muted-foreground">Before making any Cryptocurrency purchase, we can provide a full due-diligence report of all the Crypto Wallets involved.</p>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-secondary/50">
        <div className="mx-auto w-[min(100%-2rem,64rem)] py-16">
          <div className="mx-auto max-w-2xl text-center">
            <span className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-primary/10 text-primary"><ShieldCheck className="h-7 w-7" /></span>
            <h2 className="mt-5 text-3xl font-extrabold">Already lost cryptocurrency?</h2>
            <p className="mt-4 text-sm leading-7 text-muted-foreground">If you have already lost Cryptocurrency, then schedule a complimentary consultation to see if your case may benefit from Cryptocurrency Tracing services.</p>
            <Link to="/" hash="contact" className="mt-7 inline-flex rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow">Learn more</Link>
          </div>
        </div>
      </section>

      <footer className="py-8 text-center text-xs text-muted-foreground"><p>© {new Date().getFullYear()} Cyber Justice · No recovery outcome is guaranteed · Not legal or financial advice.</p></footer>
    </main>
  );
}
