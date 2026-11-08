import { useEffect, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import certAcfeCfe from "@/assets/certs/acfe-cfe.png";
import certTali from "@/assets/certs/tali.png";
import certCyberExpert from "@/assets/certs/cyber-expert.png";
import certWad from "@/assets/certs/wad.png";
import certCtce from "@/assets/certs/ctce.png";
import certSectigo from "@/assets/certs/sectigo.png";
import certBig from "@/assets/certs/big.png";
import certGba from "@/assets/certs/gba.png";
import certGasa from "@/assets/certs/gasa.png";
import certCompliassure from "@/assets/certs/compliassure.png";
import certChainalysisReactor from "@/assets/certs/chainalysis-reactor.png";
import certIacis from "@/assets/certs/iacis.png";
import certBbb from "@/assets/certs/bbb.png";
import certFali from "@/assets/certs/fali.png";
import certChainalysisSpecialist from "@/assets/certs/chainalysis-specialist.png";
import certTrmAci from "@/assets/certs/trm-aci.png";
import certDuns from "@/assets/certs/duns.png";
import certDmca from "@/assets/certs/dmca.png";
import certAcfeMember from "@/assets/certs/acfe-member.png";
import certAuthorizeNet from "@/assets/certs/authorize-net.png";

const certifications: [string, string][] = [
  [certAcfeCfe, "Certified Fraud Examiner"],
  [certTali, "Texas Association of Licensed Investigators"],
  [certCyberExpert, "Board Certified Cyber Investigations Expert"],
  [certWad, "World Association of Detectives"],
  [certCtce, "Certified Cryptocurrency Expert"],
  [certSectigo, "Secured by Sectigo"],
  [certBig, "Blockchain Intelligence Group"],
  [certGba, "Government Blockchain Association"],
  [certGasa, "Global Anti-Scam Alliance"],
  [certCompliassure, "CompliAssure Secured"],
  [certChainalysisReactor, "Chainalysis Reactor Certification"],
  [certIacis, "International Association of Computer Investigative Specialists"],
  [certBbb, "BBB Accredited Business — A+ Rating"],
  [certFali, "Florida Association of Licensed Investigators"],
  [certChainalysisSpecialist, "Chainalysis Investigation Specialist Certification"],
  [certTrmAci, "TRM Anti-Money Laundering Cryptoasset Investigator"],
  [certDuns, "D-U-N-S Registered"],
  [certDmca, "Protected by DMCA"],
  [certAcfeMember, "ACFE Associate Member"],
  [certAuthorizeNet, "Authorize.Net Verified Merchant"],
];

import { ArrowLeft, ArrowRight, Scale, ShieldCheck, Search, Network, FileCheck2, Globe, DollarSign, ScanSearch, Radar, LockKeyhole, Crosshair, RotateCcw, SearchCheck, BadgeCheck } from "lucide-react";

export const Route = createFileRoute("/about-us")({
  head: () => ({
    meta: [
      { title: "About Us — Cyber Justice" },
      { name: "description", content: "Learn about Cyber Justice: evidence-led cyber intelligence, digital investigations and asset tracing." },
      { property: "og:title", content: "About Us — Cyber Justice" },
      { property: "og:description", content: "A focused approach to cyber intelligence, investigations and digital evidence." },
    ],
  }),
  component: AboutUs,
});

const principles = [
  { icon: Search, title: "Intelligence-led research", text: "OSINT, HUMINT, cyber and financial intelligence help build a clearer picture from fragmented digital information." },
  { icon: Network, title: "Connected investigations", text: "We examine relationships between wallets, transactions, entities and digital activity to develop useful investigative leads." },
  { icon: FileCheck2, title: "Evidence with context", text: "Findings are organised into clear timelines and documented material so clients and professional advisers can assess the next steps." },
];

const capabilities = [
  { icon: ShieldCheck, tag: "DIGITAL INVESTIGATIONS", title: "Cyber Investigations", text: "We examine suspicious online activity, digital footprints and connected entities to help establish what happened and identify useful investigative leads." },
  { icon: DollarSign, tag: "BLOCKCHAIN FORENSICS", title: "Digital Asset Tracing", text: "We analyse blockchain transactions, wallet activity and asset movements to map flows and help identify where digital funds may have travelled." },
  { icon: Globe, tag: "OSINT & HUMINT", title: "Open Source Intelligence", text: "We bring together relevant public-source research and human intelligence enquiries to develop context, verify information and support investigations." },
  { icon: ScanSearch, tag: "RECOVERY INTELLIGENCE", title: "Intelligence for Asset Recovery", text: "We organise investigative findings into clear leads and documented intelligence to help clients and their legal advisers consider informed next steps." },
];

const metrics = [
  { value: "04", label: "Specialist service areas", detail: "Tracing, intelligence and investigations" },
  { value: "06", label: "Intelligence capabilities", detail: "A connected toolkit for complex cases" },
  { value: "UK", label: "Registered company", detail: "Cyber Justice Ltd · No. 16458332" },
  { value: "Clear", label: "Evidence-led approach", detail: "Careful analysis. Practical direction." },
];

const EXPERT_WORDS = ["Digital Asset Recovery", "Cyber Investigations", "Cryptocurrency Tracing", "Offshore Intelligence"];

function AboutUs() {
  const [word, setWord] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setWord((w) => (w + 1) % EXPERT_WORDS.length), 2200);
    return () => clearInterval(t);
  }, []);
  return (
    <main className="about-page relative min-h-screen overflow-hidden px-4 pb-20 pt-8 text-foreground sm:pt-10 sm:px-6">
      <style>{`
        @keyframes about-rise { from { opacity: 0; transform: translateY(28px) scale(.985); } to { opacity: 1; transform: translateY(0) scale(1); } }
        @keyframes about-glow { 0%,100% { opacity:.35; transform:scale(1); } 50% { opacity:.65; transform:scale(1.12); } }
        @keyframes about-drift { 0%,100% { transform:translate3d(0,0,0); } 50% { transform:translate3d(0,-12px,0); } }
        @keyframes about-word-cycle {
          0%, 3% { opacity:0; transform:translateY(14px); filter:blur(5px); }
          8%, 27% { opacity:1; transform:translateY(0); filter:blur(0); }
          33%, 100% { opacity:0; transform:translateY(-14px); filter:blur(5px); }
        }
        .about-word { position:absolute; inset:0; opacity:0; animation:about-word-cycle 9s ease-in-out infinite; }
        .about-word:nth-child(2) { animation-delay:3s; }
        .about-word:nth-child(3) { animation-delay:6s; }
        .about-word-window { position:relative; display:inline-block; min-width:min(78vw, 31rem); height:1.25em; vertical-align:bottom; }
        .about-rise { opacity:0; animation:about-rise .8s cubic-bezier(.2,.75,.25,1) forwards; }
        .about-delay-1 { animation-delay:.12s; } .about-delay-2 { animation-delay:.24s; } .about-delay-3 { animation-delay:.36s; }
        .about-delay-4 { animation-delay:.48s; } .about-delay-5 { animation-delay:.6s; }
        .about-orb { animation:about-glow 8s ease-in-out infinite; }
        .about-float { animation:about-drift 7s ease-in-out infinite; }
        .about-grid { background-image:linear-gradient(rgba(148,183,255,.045) 1px,transparent 1px),linear-gradient(90deg,rgba(148,183,255,.045) 1px,transparent 1px); background-size:52px 52px; mask-image:linear-gradient(to bottom,black,transparent 88%); }
        @media (prefers-reduced-motion: reduce) { .about-rise,.about-orb,.about-float { animation:none; opacity:1; } .about-word { animation:none; opacity:0; } .about-word:first-child { opacity:1; } }
      `}</style>
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_50%_0%,rgba(43,120,220,.22),transparent_55%),linear-gradient(180deg,#081b3c_0%,#0b2048_55%,#081a39_100%)]" />
      <div className="about-grid pointer-events-none absolute inset-0 -z-10" />
      <div className="about-orb pointer-events-none absolute -right-32 top-32 -z-10 h-80 w-80 rounded-full bg-blue-500/20 blur-[100px]" />
      <div className="about-float pointer-events-none absolute -left-24 top-[28rem] -z-10 h-72 w-72 rounded-full bg-cyan-400/10 blur-[90px]" />

      <header className="about-rise mx-auto flex w-[min(100%,64rem)] items-center justify-between">
        <Link to="/" className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[.06] px-4 py-2 text-sm font-semibold text-blue-100 transition hover:bg-white/10">
          <ArrowLeft className="h-4 w-4" /> Back to home
        </Link>
        <span className="text-xs font-bold tracking-[.22em] text-blue-200/70">CYBER <span className="text-cyan-300">JUSTICE</span></span>
      </header>

      <section className="mx-auto w-[min(100%,64rem)] pt-12 sm:pt-16">
        <div className="about-rise text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-cyan-300/25 bg-cyan-300/[.08] px-4 py-1.5 text-[.68rem] font-bold tracking-[.2em] text-cyan-200">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(103,232,249,.9)]" /> WHO WE ARE
          </span>
          <h1 className="mt-5 text-3xl font-extrabold tracking-tight text-white sm:text-5xl">About Us</h1>
          <p className="mx-auto mt-4 max-w-3xl min-h-[3.5rem] text-lg font-semibold leading-snug text-blue-100/75 sm:min-h-0 sm:text-xl">
            Experts in{" "}
            <span className="block sm:inline"><span key={word} className="word-swap inline-block bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">{EXPERT_WORDS[word]}</span></span>
          </p>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-blue-100/60 sm:text-base">
            Bringing clarity to complex digital investigations through intelligence, rigorous analysis and evidence-led action.
          </p>
        </div>

        <div className="about-rise about-delay-1 mt-8 rounded-[2rem] border border-blue-200/20 bg-white/[.075] p-6 shadow-[0_24px_90px_rgba(0,0,0,.22)] backdrop-blur-xl sm:mt-10 sm:p-7">
          <div className="flex items-start gap-4">
            <span className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-300/10 text-cyan-200 sm:flex"><Scale className="h-6 w-6" /></span>
            <div>
              <p className="text-base font-semibold leading-7 text-white sm:text-lg sm:leading-7">
                Cyber Justice is a specialist cyber intelligence and digital investigations company. We help individuals, businesses and professional teams make sense of complex online activity, trace digital assets and develop clear investigative leads.
              </p>
              <p className="mt-4 max-w-5xl leading-7 text-blue-100/75">
                Our work brings together asset tracing, cryptocurrency investigations, open-source research and cyber intelligence. We focus on careful analysis, transparent communication and practical findings — never promises of a guaranteed recovery or outcome.
              </p>
            </div>
          </div>

          <div className="my-8 h-px bg-gradient-to-r from-transparent via-blue-200/25 to-transparent" />
          <div className="grid gap-8 md:grid-cols-2">
            <div className="flex items-start gap-4">
              <span className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-300/10 text-cyan-200"><ShieldCheck className="h-5 w-5" /></span>
              <p className="leading-7 text-blue-100/80">
                We combine <strong className="text-white">OSINT, HUMINT, cyber and financial intelligence</strong> with investigative tools to identify patterns, map connections and turn scattered information into actionable intelligence.
              </p>
            </div>
            <div className="flex items-start gap-4">
              <span className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-300/10 text-cyan-200"><FileCheck2 className="h-5 w-5" /></span>
              <p className="leading-7 text-blue-100/80">
                <strong className="text-white">Cyber Justice Ltd</strong> is registered in the United Kingdom (Company No. 16458332). We work with clients and professional advisers on digital matters that can cross borders and jurisdictions.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {metrics.map((metric, index) => (
            <article key={metric.label} className={`about-rise rounded-3xl border border-blue-200/15 bg-white/[.055] p-6 text-center shadow-lg backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-white/[.09] about-delay-${index + 2}`}>
              <p className="bg-gradient-to-r from-cyan-200 to-blue-300 bg-clip-text text-3xl font-extrabold tracking-tight text-transparent sm:text-4xl">{metric.value}</p>
              <h2 className="mt-3 text-sm font-bold text-white">{metric.label}</h2>
              <p className="mt-2 text-xs leading-5 text-blue-100/60">{metric.detail}</p>
            </article>
          ))}
        </div>

        <section className="about-rise about-delay-5 mt-12">
          <div className="text-center">
            <p className="text-[.68rem] font-bold tracking-[.22em] text-cyan-200">HOW WE WORK</p>
            <h2 className="mt-3 text-2xl font-extrabold text-white sm:text-3xl">Clarity through intelligence.</h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-blue-100/65">A disciplined approach that keeps the facts, the evidence and the client’s objectives at the centre.</p>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {principles.map(({ icon: Icon, title, text }) => (
              <article key={title} className="rounded-2xl border border-blue-200/15 bg-white/[.045] p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/35">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-300/10 text-cyan-200"><Icon className="h-5 w-5" /></span>
                <h3 className="mt-5 font-bold text-white">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-blue-100/65">{text}</p>
              </article>
            ))}
          </div>
        </section>



        <section className="about-rise mt-10 sm:mt-12">
          <div className="grid items-center gap-6 rounded-[1.5rem] border border-blue-200/20 bg-white/[.065] p-5 shadow-[0_18px_55px_rgba(0,0,0,.18)] backdrop-blur-xl sm:p-6 lg:grid-cols-[.85fr_1.15fr] lg:gap-8 lg:p-7">
            <div className="relative mx-auto flex w-full max-w-[22rem] items-center justify-center py-6">
              <div className="absolute left-1/2 top-1/2 h-[17rem] w-[17rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/[.08] blur-3xl" />
              <div className="absolute left-1/2 top-2 z-10 -translate-x-1/2 rounded-full border border-cyan-200/20 bg-[#102b55]/95 px-3 py-1.5 text-[.58rem] font-bold tracking-wide text-cyan-100 shadow-xl backdrop-blur">
                <span className="mr-2 text-cyan-300">✓</span> INTELLIGENCE-LED APPROACH
              </div>
              <div className="relative aspect-square w-[min(60vw,12rem)] rounded-full border border-cyan-200/25 p-3 shadow-[0_22px_45px_rgba(0,0,0,.35)] transition duration-700 hover:rotate-2">
                <div className="absolute inset-3 rounded-full border border-white/10" />
                <div className="absolute inset-0 rounded-full bg-[conic-gradient(from_-18deg,#1769b5_0deg,#0d3973_72deg,#1265a9_144deg,#0c3269_216deg,#1681b7_288deg,#1769b5_360deg)] shadow-[inset_0_3px_18px_rgba(255,255,255,.18)]" />
                <div className="absolute inset-[47%] rounded-full bg-[#0b2147] opacity-40 blur-md" />
                <div className="absolute left-1/2 top-[5%] z-10 flex -translate-x-1/2 flex-col items-center text-center text-white">
                  <Search className="h-5 w-5" />
                  <span className="mt-1 text-[.55rem] font-bold">Identify</span>
                </div>
                <div className="absolute right-[8%] top-[26%] z-10 flex flex-col items-center text-center text-white">
                  <LockKeyhole className="h-7 w-7" />
                  <span className="mt-1 text-[.55rem] font-bold">Protect</span>
                </div>
                <div className="absolute bottom-[24%] right-[8%] z-10 flex flex-col items-center text-center text-white">
                  <Crosshair className="h-7 w-7" />
                  <span className="mt-1 text-[.55rem] font-bold">Trace</span>
                </div>
                <div className="absolute bottom-[5%] left-1/2 z-10 flex -translate-x-1/2 flex-col items-center text-center text-white">
                  <RotateCcw className="h-7 w-7" />
                  <span className="mt-1 text-[.55rem] font-bold">Respond</span>
                </div>
                <div className="absolute bottom-[24%] left-[8%] z-10 flex flex-col items-center text-center text-white">
                  <BadgeCheck className="h-7 w-7" />
                  <span className="mt-1 text-[.55rem] font-bold">Recover</span>
                </div>
                <div className="absolute left-1/2 top-1/2 z-20 flex h-[5.5rem] w-[5.5rem] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border border-cyan-100/40 bg-gradient-to-br from-slate-100 to-blue-100 text-center text-[#15549a] shadow-[0_10px_28px_rgba(0,0,0,.3)]">
                  <span className="text-[.57rem] font-bold tracking-wide">CYBER JUSTICE</span>
                  <span className="mt-1 text-xs font-extrabold leading-tight">ASSET<br/>RECOVERY</span>
                </div>
              </div>
              <div className="absolute bottom-2 left-0 z-20 rounded-full border border-cyan-200/20 bg-[#102b55]/95 px-3 py-1.5 text-[.55rem] font-semibold text-blue-100 shadow-xl backdrop-blur">
                <ShieldCheck className="mr-2 inline h-3 w-3 text-cyan-300" /> Evidence-led investigations
              </div>
            </div>

            <div className="relative">
              <span className="inline-flex rounded-full border border-cyan-200/20 bg-cyan-300/[.08] px-3 py-1 text-[.58rem] font-bold tracking-[.18em] text-cyan-200">OUR APPROACH</span>
              <h2 className="mt-4 text-xl font-extrabold leading-tight tracking-tight text-white sm:text-2xl">
                Our Approach to <span className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">Asset Recovery</span>
              </h2>
              <p className="mt-3 text-xs leading-6 text-blue-100/75 sm:text-sm">
                At Cyber Justice, asset recovery begins with understanding the facts. We investigate the movement of funds and assets, examine the people and entities connected to them, and build an intelligence picture that can help guide the next steps.
              </p>
              <p className="mt-3 text-xs leading-6 text-blue-100/75 sm:text-sm">
                Asset recovery investigations can involve complex wallet activity, multiple blockchain networks, company structures and cross-border connections. We combine <strong className="text-white">blockchain tracing, open-source research and financial intelligence</strong> to follow asset movements, identify potential leads and prepare clear findings for clients and their professional advisers.
              </p>
              <p className="mt-4 text-sm leading-7 text-blue-100/75 sm:text-base">
                Each case is different. Our structured process focuses on identifying, tracing and documenting potentially recoverable assets, giving clients and their legal teams clearer information when considering recovery options. We provide investigative intelligence, not guarantees of recovery.
              </p>
              <a href="/#contact" className="mt-5 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 px-5 py-2.5 text-xs font-bold text-white shadow-[0_10px_30px_rgba(14,165,233,.25)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_14px_38px_rgba(14,165,233,.38)]">
                Discuss Your Case <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </section>

        <section className="about-rise mt-14 sm:mt-16">
          <div className="text-center">
            <p className="text-[.68rem] font-bold tracking-[.22em] text-cyan-200">INVESTIGATIVE &amp; FORENSIC CAPABILITIES</p>
            <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-white sm:text-4xl">Specialist Capabilities</h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-blue-100/65 sm:text-base">
              Combining investigative methods, digital forensics and cross-border intelligence to bring clarity to complex cases.
            </p>
          </div>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {capabilities.map(({ icon: Icon, tag, title, text }, index) => (
              <article key={title} className={`group relative flex flex-col overflow-hidden rounded-2xl border border-blue-200/15 bg-white/[.055] shadow-[0_18px_60px_rgba(0,0,0,.16)] backdrop-blur-xl transition duration-500 hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-white/[.085] p-4 sm:p-5 about-rise about-delay-${index + 1}`}>
                <div className="pointer-events-none absolute -right-16 -top-20 h-52 w-52 rounded-full bg-cyan-400/[.07] blur-3xl transition duration-500 group-hover:bg-cyan-300/[.14]" />
                <div className="relative flex items-center justify-between gap-4">
                  <span className="flex h-6 w-6 items-center justify-center rounded-lg border border-cyan-200/15 bg-cyan-300/10 text-cyan-200 transition duration-300 group-hover:scale-110 group-hover:bg-cyan-300/15">
                    <Icon className="h-3 w-3" />
                  </span>
                  <span className="rounded-full border border-blue-200/15 bg-blue-300/[.08] px-3 py-1.5 text-[.58rem] font-bold tracking-[.13em] text-cyan-100/90">{tag}</span>
                </div>
                <div className="relative flex flex-1 flex-col pt-4">
                  <div className="mb-3 hidden">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-cyan-200/15 bg-gradient-to-br from-cyan-300/15 to-blue-500/10 text-cyan-200 shadow-[0_0_50px_rgba(34,211,238,.08)] transition duration-500 group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-[0_0_55px_rgba(34,211,238,.18)]">
                      <Icon className="h-4 w-4 stroke-[1.6]" />
                    </div>
                  </div>
                  <h3 className="text-base font-bold text-white">{title}</h3>
                  <p className="mt-2 text-xs leading-5 text-blue-100/65">{text}</p>
                  <div className="mt-3 h-px w-10 bg-gradient-to-r from-cyan-300/70 to-transparent transition-all duration-500 group-hover:w-24" />
                </div>
              </article>
            ))}
          </div>
        </section>

        <div className="about-rise mt-8 flex flex-col items-center justify-between gap-5 rounded-3xl border border-cyan-200/20 bg-gradient-to-r from-blue-500/10 to-cyan-400/[.08] p-5 text-center sm:flex-row sm:text-left sm:p-6">
          <div>
            <h2 className="text-xl font-extrabold text-white sm:text-xl">Need clarity on a digital investigation?</h2>
            <p className="mt-2 text-sm text-blue-100/65">Speak with our team about your situation and the evidence available.</p>
          </div>
          <a href="/#contact" className="inline-flex shrink-0 items-center gap-2 rounded-full bg-cyan-300 px-6 py-3 text-sm font-bold text-slate-950 shadow-[0_8px_30px_rgba(34,211,238,.2)] transition hover:-translate-y-0.5 hover:bg-cyan-200">
            Contact Cyber Justice <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>

      <section className="about-rise mt-12 border-y border-blue-200/10 py-10 sm:mt-14 sm:py-12" aria-label="Accreditations and certifications">
        <div className="mx-auto w-[min(100%,64rem)]">
          <div className="text-center">
            <span className="inline-flex rounded-full border border-cyan-200/20 bg-cyan-300/[.08] px-4 py-1.5 text-[.65rem] font-bold tracking-[.18em] text-cyan-200">CREDENTIALS &amp; RECOGNITION</span>
            <h2 className="mt-4 text-2xl font-extrabold text-white sm:text-3xl">Certificates &amp; Affiliations</h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-blue-100/65">
              Professional credentials, industry affiliations and security-related marks displayed across Cyber Justice.
            </p>
          </div>
          <ul className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {certifications.map(([src, label], index) => (
              <li key={label} className={`group flex min-h-28 items-center justify-center rounded-2xl border border-blue-200/15 bg-white/[.045] p-4 shadow-lg backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-white/[.08] about-rise about-delay-${(index % 5) + 1}`}>
                <img src={src} alt={label} title={label} loading="lazy" width={816} height={816} className="h-14 w-auto max-w-full object-contain opacity-85 transition duration-300 group-hover:scale-105 group-hover:opacity-100" />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <footer className="about-rise mt-10 border-t border-blue-200/15 pt-12 sm:mt-12">
        <div className="grid gap-9 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1.1fr]">
          <div>
            <p className="text-sm font-extrabold tracking-[.18em] text-white">CYBER <span className="text-cyan-300">JUSTICE</span></p>
            <p className="mt-3 max-w-xs text-sm leading-6 text-blue-100/60">
              Cyber intelligence, digital investigations and asset recovery intelligence — bringing clarity to complex digital matters.
            </p>
            <p className="mt-4 text-xs leading-5 text-blue-100/45">Cyber Justice Ltd · Company No. 16458332 · United Kingdom</p>
          </div>
          <nav aria-label="Quick links">
            <p className="text-[.68rem] font-bold tracking-[.2em] text-cyan-200">QUICK LINKS</p>
            <ul className="mt-4 flex flex-col gap-3 text-sm text-blue-100/65">
              <li><Link to="/" className="transition hover:text-cyan-200">Home</Link></li>
              <li><a href="/#services" className="transition hover:text-cyan-200">All Services</a></li>
              <li><a href="/#tools" className="transition hover:text-cyan-200">Cyber Tools</a></li>
              <li><a href="/#offices" className="transition hover:text-cyan-200">Office Locations</a></li>
              <li><a href="/#contact" className="transition hover:text-cyan-200">Contact Us</a></li>
            </ul>
          </nav>
          <nav aria-label="Services">
            <p className="text-[.68rem] font-bold tracking-[.2em] text-cyan-200">SERVICES</p>
            <ul className="mt-4 flex flex-col gap-3 text-sm text-blue-100/65">
              <li><Link to="/asset-recovery" className="transition hover:text-cyan-200">Asset Tracing &amp; Investigations</Link></li>
              <li><Link to="/cyber-intelligence" className="transition hover:text-cyan-200">Cyber Intelligence Services</Link></li>
              <li><Link to="/cyber-investigation-team" className="transition hover:text-cyan-200">Cyber Investigation Team</Link></li>
              <li><Link to="/cryptocurrency-tracing" className="transition hover:text-cyan-200">Cryptocurrency Tracing</Link></li>
            </ul>
          </nav>
          <div>
            <p className="text-[.68rem] font-bold tracking-[.2em] text-cyan-200">COMPANY DETAILS</p>
            <dl className="mt-4 flex flex-col gap-3 text-xs text-blue-100/60">
              <div className="flex justify-between gap-3 border-b border-blue-100/10 pb-2"><dt>Company number</dt><dd className="font-semibold text-blue-50">16458332</dd></div>
              <div className="flex justify-between gap-3 border-b border-blue-100/10 pb-2"><dt>Incorporated</dt><dd className="font-semibold text-blue-50">19 May 2025</dd></div>
              <div className="flex justify-between gap-3 border-b border-blue-100/10 pb-2"><dt>Status</dt><dd className="font-semibold text-blue-50">Active</dd></div>
            </dl>
            <a href="/#contact" className="mt-5 inline-flex items-center gap-2 rounded-full border border-cyan-200/25 bg-cyan-300/[.08] px-4 py-2 text-xs font-bold text-cyan-100 transition hover:border-cyan-200/60 hover:bg-cyan-300/[.14]">
              Contact Case Intake <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
        <div className="mt-8 border-t border-blue-200/10 py-5 text-center text-[.68rem] text-blue-100/45">
          © {new Date().getFullYear()} Cyber Justice Ltd · No recovery outcome is guaranteed · Not legal or financial advice.
        </div>
      </footer>
    </main>
  );
}
