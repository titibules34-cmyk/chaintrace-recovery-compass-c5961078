import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Globe, UserSearch, Bitcoin, FileSearch, Landmark, ShieldCheck, Coins, Scale, Earth, Gavel, Wallet, Search, BadgeCheck, type LucideIcon } from "lucide-react";

const solutions = [
  ["Cyber Intelligence & Website Forensics", "Our team uses a variety of methods, including Open Source Intelligence (OSINT) and advanced forensic techniques, to provide the raw data needed for actionable intelligence. We also specialize in uncovering the individuals or entities behind suspicious websites and identifying any fraudulent or malicious activities online."],
  ["Asset Tracing & Skip Trace Services", "The first step to recovery is locating recoverable assets, whether they are physical, financial, or digital. Our experienced team can also locate missing or elusive individuals through advanced skip-tracing techniques, ensuring that no lead is left unexplored."],
  ["Cryptocurrency & Expert Opinion Services", "We track the movement of most cryptocurrencies and assets across the blockchain. Our certified experts provide in-depth analysis and authoritative opinions on complex blockchain transactions, supporting legal proceedings and regulatory compliance."],
  ["Due Diligence & Background Reports", "We offer comprehensive appraisals of assets, risk, historic data, and liabilities for individual and corporate entities. Our due diligence services are essential for making informed decisions, whether in business partnerships or investments."],
  ["Asset Tracing, Recovery Assistance & Financial Investigations", "We offer solutions for asset tracing, recovery assistance, and financial investigations. If you or your clients have recoverable assets, we can build a recovery plan tailored to fit your case, including retrocession fee recovery and other financial inquiries."],
  ["Cyber Investigations", "We use state-of-the-art cyber tools, software solutions, and intelligence techniques, including OSINT, HUMINT, CYBINT, and FININT. Our certified cyber investigators have experience with investigations spanning six continents, providing you with comprehensive support in complex cases."],
  ["Retrocession Fee Recovery", "Retrocession fees, also known colloquially as “kickbacks” are paid to a wealth manager to encourage them to promote specific financial products or investment funds."],
  ["Litigation Support", "We offer support to law firms and individuals involved in complex litigation. Including analysis of large data sets, data analysis and investigative services."],
  ["Global Investigations", "Our Cyber Investigators are Certified in the United States and experienced with investigations spanning 6 continents."],
];

const icons: LucideIcon[] = [Globe, UserSearch, Bitcoin, FileSearch, Landmark, ShieldCheck, Coins, Scale, Earth];

const clients: [string, LucideIcon][] = [
  ["Law Firms", Gavel],
  ["Virtual Asset Service Providers", Wallet],
  ["Private Investigators", Search],
  ["Law Enforcement", BadgeCheck],
];

export function CyberInvestigationTeam() {
  const [pair, setPair] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setPair((p) => (p + 1) % 2), 3000);
    return () => clearInterval(t);
  }, []);
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
        <div className="mx-auto w-[min(100%-2rem,64rem)] pb-14 pt-36">
          <p className="eyebrow">CYBER INVESTIGATION TEAM · OSINT · HUMINT · CYBINT · FININT</p>
          <h1 className="mt-4 max-w-3xl text-4xl font-extrabold leading-tight sm:text-6xl">
            Cyber investigations. <span className="text-accent">Clear intelligence.</span>
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Certified investigators, advanced digital forensics and global intelligence capabilities for complex cases, organisations and legal professionals.
          </p>
        </div>
      </section>

      <section className="mx-auto w-[min(100%-2rem,64rem)] py-16">
        <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="eyebrow">Explore capabilities</p>
            <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">A complete investigative picture.</h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
            From the first digital lead to expert evidence and recovery planning, our specialists connect the detail.
          </p>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {solutions.map(([title, text], i) => (
            <article key={title} className={`group relative flex flex-col overflow-hidden rounded-xl border border-border bg-card p-4 transition duration-300 hover:-translate-y-1 hover:border-primary/60 hover:shadow-glow`}>
              <div className="absolute right-0 top-0 h-16 w-16 rounded-bl-full bg-primary/[0.04] transition group-hover:bg-primary/[0.09]" />
              <div className="relative flex items-center justify-between">
                {(() => {
                  const Icon = icons[i] ?? Globe;
                  return (
                    <span className="grid h-9 w-9 place-items-center rounded-lg border border-primary/15 bg-primary/10 text-primary">
                      <Icon className="h-4 w-4" strokeWidth={1.75} />
                    </span>
                  );
                })()}
                <span className="font-mono text-xs tracking-[0.2em] text-muted-foreground/70">{String(i + 1).padStart(2, "0")}</span>
              </div>
              <h3 className="relative mt-3 text-sm font-bold leading-snug">{title}</h3>
              <p className="relative mt-2 text-xs leading-5 text-muted-foreground">{text}</p>
              <div className="relative mt-auto pt-3">
                <span className="inline-flex items-center gap-1 text-[0.65rem] font-semibold uppercase tracking-wider text-accent">
                  Specialist capability <span aria-hidden="true">↗</span>
                </span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-secondary/50">
        <div className="mx-auto w-[min(100%-2rem,64rem)] py-16">
          <p className="eyebrow">Our Clients</p>
          <h2 className="mt-3 text-3xl font-extrabold">We Serve A Variety Of Businesses & Industries</h2>
          <p className="mt-3 max-w-xl text-muted-foreground">
            We provide solutions for a variety of Industries as well as High-Net-Worth Individuals.
          </p>
          <div key={pair} className="mt-8 grid gap-4 sm:grid-cols-2">
            {clients.slice(pair * 2, pair * 2 + 2).map(([c, Icon], i) => (
              <div key={c} className="client-in flex items-center gap-4 rounded-2xl border border-border bg-card p-6" style={{ animationDelay: `${i * 120}ms` }}>
                <span className="grid h-14 w-14 place-items-center rounded-xl bg-primary text-primary-foreground shadow-glow">
                  <Icon className="h-7 w-7" />
                </span>
                <div>
                  <span className="eyebrow">0{pair * 2 + i + 1}</span>
                  <p className="text-lg font-bold">{c}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 flex gap-2">
            {[0, 1].map((d) => (
              <button key={d} type="button" aria-label={`Show clients ${d * 2 + 1}-${d * 2 + 2}`} onClick={() => setPair(d)} className={`h-1.5 rounded-full transition-all ${pair === d ? "w-8 bg-primary" : "w-4 bg-border"}`} />
            ))}
          </div>
          <Link to="/" hash="contact" className="mt-8 inline-block rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow">
            Request a consultation
          </Link>
        </div>
      </section>

      <footer className="py-8 text-center text-xs text-muted-foreground">
        <p>© {new Date().getFullYear()} Cyber Justice · No recovery outcome is guaranteed · Not legal or financial advice.</p>
      </footer>
    </main>
  );
}
