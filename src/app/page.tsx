import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Shield,
  FileX,
  MessageSquareX,
  LayoutDashboard,
  UserCheck,
  Eye,
  Lightbulb,
  Lock,
  Rocket,
  Briefcase,
  Building2,
  Check,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScorecardMockup from "@/components/ScorecardMockup";
import FeatureMockup from "@/components/FeatureMockup";
import FaqAccordion from "@/components/FaqAccordion";
import Reveal from "@/components/Reveal";
import {
  HERO,
  PROBLEMS,
  HOW_IT_WORKS,
  FEATURES,
  RESPONSIBLE_AI,
  WHO_ITS_FOR,
  PRICING_TEASER,
  FAQ,
  SITE,
} from "@/content/site";

export const metadata: Metadata = {
  title: "Hirelytics.ai — Smarter Hiring. Brighter Futures.",
  description:
    "AI-powered resume screening, job-specific voice interviews, and explainable four-pillar scorecards for companies that hire seriously.",
  alternates: {
    canonical: "/",
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Hirelytics.ai",
  url: "https://hirelytics.ai",
  logo: "https://hirelytics.ai/brand/logo-horizontal.png",
  description:
    "AI-powered hiring intelligence platform that screens resumes, conducts job-specific voice interviews, and delivers explainable candidate scorecards.",
  sameAs: [
    "https://www.linkedin.com/company/hirelytics-ai",
  ],
};

const softwareAppJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Hirelytics",
  operatingSystem: "Web",
  applicationCategory: "BusinessApplication",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
    category: "Early-access Pilot",
  },
  description:
    "AI recruitment platform featuring semantic resume matching, Whisper-powered AI voice interviews, and four-pillar explainable candidate scoring.",
};

// ─── Icon resolver ────────────────────────────────────────────────────────────
const iconMap: Record<string, React.FC<{ size?: number; className?: string }>> = {
  FileX,
  MessageSquareX,
  LayoutDashboard,
  UserCheck,
  Eye,
  Lightbulb,
  Lock,
  Rocket,
  Briefcase,
  Building2,
  Shield,
  CheckCircle2,
};

function DynIcon({ name, size = 24, className = "" }: { name: string; size?: number; className?: string }) {
  const Icon = iconMap[name];
  if (!Icon) return null;
  return <Icon size={size} className={className} />;
}

// ─── Section label ────────────────────────────────────────────────────────────
function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-[#F6F8FF] border border-[#E3E8F7] text-[#2F70FE] mb-3">
      {children}
    </span>
  );
}

// ─── HOME PAGE ─────────────────────────────────────────────────────────────────
export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareAppJsonLd) }}
      />
      <Navbar />
      <main id="main-content" className="flex-1">
        {/* ── 1. HERO ─────────────────────────────────────────────────────── */}
        <section
          className="relative min-h-screen flex flex-col justify-center overflow-hidden"
          style={{ background: "linear-gradient(160deg, #04135B 0%, #0B1871 100%)" }}
          aria-label="Hero"
        >
          {/* Radial glow */}
          <div className="absolute inset-0 hero-glow pointer-events-none" aria-hidden="true" />

          {/* Subtle dot grid */}
          <div
            className="absolute inset-0 opacity-[0.04] pointer-events-none"
            aria-hidden="true"
            style={{
              backgroundImage:
                "radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)",
              backgroundSize: "32px 32px",
            }}
          />

          <div className="container-xl pt-28 pb-20 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left: copy */}
              <Reveal direction="up" delay={0.1}>
                {/* Badge with shimmer */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/8 border border-white/14 text-white/85 text-xs font-semibold mb-8 backdrop-blur-sm badge-shimmer hover:border-white/30 transition-colors">
                  {HERO.badgeText}
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] tracking-tight mb-6">
                  Hire faster with{" "}
                  <span className="gradient-text">AI that interviews</span>{" "}
                  for you.
                </h1>

                <p className="text-white/70 text-lg leading-relaxed max-w-xl mb-10">
                  {HERO.subhead}
                </p>

                <div className="flex flex-wrap gap-4">
                  <Link href={SITE.bookDemoUrl} className="btn-gradient text-base">
                    {HERO.cta1}
                    <ArrowRight size={16} />
                  </Link>
                  <Link href="/#how-it-works" className="btn-glass text-base">
                    {HERO.cta2}
                  </Link>
                </div>

                {/* Trust signals */}
                <div className="flex flex-wrap items-center gap-5 mt-10">
                  {[
                    "No credit card required",
                    "Full feature access",
                    "Start in under a day",
                  ].map((t) => (
                    <span key={t} className="flex items-center gap-1.5 text-white/55 text-sm">
                      <CheckCircle2 size={14} className="text-[#02B9FE]" />
                      {t}
                    </span>
                  ))}
                </div>
              </Reveal>

              {/* Right: scorecard mockup */}
              <Reveal direction="up" delay={0.25} className="flex items-center justify-center lg:justify-end">
                <ScorecardMockup />
              </Reveal>
            </div>
          </div>
        </section>

        {/* ── 2. PROBLEM STRIP ────────────────────────────────────────────── */}
        <section
          className="section-padding bg-[#F6F8FF]"
          aria-label="Problems we solve"
        >
          <div className="container-xl">
            <Reveal direction="up" className="text-center mb-12">
              <SectionLabel>The Problem</SectionLabel>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1250] leading-tight">
                Hiring is broken at scale.
              </h2>
              <p className="text-[#4B5578] mt-3 max-w-xl mx-auto">
                Traditional recruitment wasn&apos;t designed for the volume and speed modern teams need.
              </p>
            </Reveal>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {PROBLEMS.map((p, i) => (
                <Reveal key={p.title} delay={i * 0.12} direction="up">
                  <div className="card card-hover-glow p-6 h-full">
                    <div className="w-10 h-10 rounded-xl bg-[#F6F8FF] border border-[#E3E8F7] flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110">
                      <DynIcon name={p.icon} size={20} className="text-[#2F70FE]" />
                    </div>
                    <h3 className="text-[#0B1250] font-bold text-base mb-2">{p.title}</h3>
                    <p className="text-[#4B5578] text-sm leading-relaxed">{p.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── 3. HOW IT WORKS ─────────────────────────────────────────────── */}
        <section
          id="how-it-works"
          className="section-padding"
          style={{ background: "linear-gradient(180deg, #04135B 0%, #0B1871 100%)" }}
          aria-label="How it works"
        >
          <div className="container-xl">
            <Reveal direction="up" className="text-center mb-14">
              <SectionLabel>How it works</SectionLabel>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
                {HOW_IT_WORKS.heading}
              </h2>
            </Reveal>

            {/* Steps */}
            <div className="relative">
              {/* Connector line (desktop) */}
              <div
                className="hidden lg:block absolute top-9 left-0 right-0 h-px"
                style={{
                  background:
                    "linear-gradient(90deg, transparent, rgba(255,255,255,0.12) 10%, rgba(255,255,255,0.12) 90%, transparent)",
                }}
                aria-hidden="true"
              />

              <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 list-none p-0 m-0">
                {HOW_IT_WORKS.steps.map((step, i) => (
                  <li key={step.number} className="flex flex-col items-center text-center lg:items-center relative">
                    <Reveal delay={i * 0.1} direction="up" className="flex flex-col items-center text-center">
                      {/* Number bubble */}
                      <div className="w-[72px] h-[72px] rounded-full flex items-center justify-center text-2xl font-extrabold text-white mb-4 relative z-10 border border-white/12 transition-transform duration-300 hover:scale-110"
                        style={{
                          background: `linear-gradient(135deg, rgba(2,185,254,${0.15 + i * 0.05}) 0%, rgba(105,78,254,${0.15 + i * 0.05}) 100%)`,
                        }}
                      >
                        <span className="gradient-text text-xl font-extrabold">{step.number}</span>
                      </div>
                      <h3 className="text-white font-bold text-sm mb-2">{step.title}</h3>
                      <p className="text-white/55 text-xs leading-relaxed max-w-[180px]">{step.body}</p>
                    </Reveal>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* ── 4. FEATURE DEEP-DIVES ────────────────────────────────────────── */}
        <section
          id="features"
          className="section-padding bg-white"
          aria-label="Features"
        >
          <div className="container-xl">
            <Reveal direction="up" className="text-center mb-16">
              <SectionLabel>Product</SectionLabel>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1250] leading-tight">
                Everything you need. Nothing you don&apos;t.
              </h2>
            </Reveal>

            <div className="flex flex-col gap-24">
              {FEATURES.map((feat) => (
                <Reveal
                  key={feat.id}
                  direction="up"
                  delay={0.15}
                  className={`grid lg:grid-cols-2 gap-12 items-center ${
                    feat.flip ? "lg:flex lg:flex-row-reverse lg:gap-12" : ""
                  }`}
                >
                  {/* Copy */}
                  <div className={feat.flip ? "lg:ml-0" : ""}>
                    <SectionLabel>{feat.label}</SectionLabel>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0B1250] leading-snug mb-4">
                      {feat.heading}
                    </h3>
                    <p className="text-[#4B5578] leading-relaxed mb-6">{feat.body}</p>
                    <ul className="flex flex-col gap-3 list-none p-0 m-0">
                      {feat.bullets.map((b) => (
                        <li key={b} className="flex items-start gap-2.5 text-sm text-[#0B1250]">
                          <Check size={16} className="text-[#02B9FE] flex-shrink-0 mt-0.5" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Mockup */}
                  <div className="flex justify-center transition-transform duration-300 hover:scale-[1.02]">
                    <FeatureMockup type={feat.mockupType} />
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── 5. RESPONSIBLE AI ───────────────────────────────────────────── */}
        <section
          className="section-padding"
          style={{ background: "linear-gradient(160deg, #04135B 0%, #0B1871 100%)" }}
          aria-label="Responsible AI principles"
        >
          <div className="container-xl">
            <Reveal direction="up" className="text-center mb-12">
              <SectionLabel>Responsible AI</SectionLabel>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
                {RESPONSIBLE_AI.heading}
              </h2>
              <p className="text-white/60 mt-3 max-w-xl mx-auto">
                We&apos;ve built Hirelytics with fairness and transparency at the core, not as an afterthought.
              </p>
            </Reveal>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {RESPONSIBLE_AI.items.map((item, i) => (
                <Reveal key={item.title} delay={i * 0.1} direction="up">
                  <div className="rounded-2xl border border-white/10 p-6 bg-white/4 hover:bg-white/8 hover:border-white/20 transition-all duration-300 h-full card-hover-glow">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#02B9FE]/20 to-[#694EFE]/20 border border-white/10 flex items-center justify-center mb-4">
                      <DynIcon name={item.icon} size={18} className="text-[#02B9FE]" />
                    </div>
                    <h3 className="text-white font-bold text-sm mb-2">{item.title}</h3>
                    <p className="text-white/55 text-xs leading-relaxed">{item.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── 6. WHO IT'S FOR ─────────────────────────────────────────────── */}
        <section
          className="section-padding bg-[#F6F8FF]"
          aria-label="Who Hirelytics is for"
        >
          <div className="container-xl">
            <Reveal direction="up" className="text-center mb-12">
              <SectionLabel>Who it&apos;s for</SectionLabel>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1250] leading-tight">
                {WHO_ITS_FOR.heading}
              </h2>
            </Reveal>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {WHO_ITS_FOR.cards.map((card, i) => (
                <Reveal key={card.title} delay={i * 0.12} direction="up">
                  <div className="card card-hover-glow p-7 flex flex-col gap-3 h-full">
                    <div className="w-11 h-11 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                      style={{ background: "linear-gradient(135deg, rgba(2,185,254,0.12) 0%, rgba(105,78,254,0.12) 100%)" }}
                    >
                      <DynIcon name={card.icon} size={22} className="text-[#2F70FE]" />
                    </div>
                    <h3 className="text-[#0B1250] font-bold text-base">{card.title}</h3>
                    <p className="text-[#4B5578] text-sm leading-relaxed">{card.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── 7. PRICING TEASER ───────────────────────────────────────────── */}
        <section
          className="section-padding bg-white"
          aria-label="Pricing"
        >
          <div className="container-xl">
            <Reveal direction="up" className="text-center mb-12">
              <SectionLabel>Pricing</SectionLabel>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1250] leading-tight">
                {PRICING_TEASER.heading}
              </h2>
              <p className="text-[#4B5578] mt-3 max-w-lg mx-auto">
                {PRICING_TEASER.subhead}
              </p>
            </Reveal>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
              {PRICING_TEASER.plans.map((plan, i) => (
                <Reveal key={plan.name} delay={i * 0.12} direction="up" className="flex">
                  <div
                    className={`relative rounded-2xl flex flex-col p-7 w-full card-hover-glow ${
                      plan.highlighted
                        ? "border-2 border-[#2F70FE] shadow-xl shadow-[#2F70FE]/10"
                        : "border border-[#E3E8F7] shadow-md"
                    } bg-white`}
                  >
                    {plan.badge && (
                      <span
                        className={`absolute -top-3 left-1/2 -translate-x-1/2 text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full whitespace-nowrap ${
                          plan.highlighted
                            ? "bg-gradient-to-r from-[#02B9FE] to-[#694EFE] text-white shadow-sm"
                            : "bg-[#F6F8FF] border border-[#E3E8F7] text-[#2F70FE]"
                        }`}
                      >
                        {plan.badge}
                      </span>
                    )}

                    <div className="mb-5">
                      <p className="text-xs font-bold uppercase tracking-widest text-[#4B5578] mb-1">
                        {plan.name}
                      </p>
                      <p className={`text-3xl font-extrabold mb-2 ${plan.highlighted ? "gradient-text" : "text-[#0B1250]"}`}>
                        {plan.price}
                      </p>
                      <p className="text-[#4B5578] text-sm">{plan.description}</p>
                    </div>

                    <ul className="flex flex-col gap-2.5 list-none p-0 m-0 flex-1 mb-6">
                      {plan.features.map((f) => (
                        <li key={f} className="flex items-center gap-2 text-sm text-[#0B1250]">
                          <Check size={14} className="text-[#02B9FE] flex-shrink-0" />
                          {f}
                        </li>
                      ))}
                    </ul>

                    <Link
                      href={plan.href}
                      className={plan.highlighted ? "btn-gradient justify-center text-sm" : "btn-outline-dark justify-center text-sm"}
                    >
                      {plan.cta}
                    </Link>
                  </div>
                </Reveal>
              ))}
            </div>

            <p className="text-center text-[#4B5578] text-sm mt-8">
              Need more detail?{" "}
              <Link href="/pricing" className="text-[#2F70FE] font-semibold hover:underline">
                See full pricing →
              </Link>
            </p>
          </div>
        </section>

        {/* ── 8. FAQ ──────────────────────────────────────────────────────── */}
        <section
          className="section-padding bg-[#F6F8FF]"
          aria-label="Frequently asked questions"
        >
          <div className="container-xl">
            <div className="text-center mb-12">
              <SectionLabel>FAQ</SectionLabel>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1250] leading-tight">
                {FAQ.heading}
              </h2>
            </div>

            <div className="max-w-3xl mx-auto bg-white rounded-2xl border border-[#E3E8F7] shadow-md px-6 sm:px-10 py-2">
              <FaqAccordion items={FAQ.items} />
            </div>
          </div>
        </section>

        {/* ── 9. FINAL CTA BAND ────────────────────────────────────────────── */}
        <section
          className="section-padding"
          style={{ background: "linear-gradient(160deg, #04135B 0%, #0B1871 100%)" }}
          aria-label="Get started"
        >
          <div className="container-xl text-center">
            {/* Glow decoration */}
            <div
              className="absolute left-1/2 top-0 -translate-x-1/2 w-[600px] h-[300px] pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse, rgba(45,47,242,0.3) 0%, transparent 70%)",
              }}
              aria-hidden="true"
            />

            <div className="relative z-10">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-5">
                Ready to hire{" "}
                <span className="gradient-text">smarter</span>?
              </h2>
              <p className="text-white/65 text-lg max-w-xl mx-auto mb-10 leading-relaxed">
                Join our early-access program. Full feature access. No credit card needed. Start interviewing candidates within a day.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href={SITE.bookDemoUrl} className="btn-gradient text-base">
                  Book a demo
                  <ArrowRight size={16} />
                </Link>
                <Link href="/#how-it-works" className="btn-glass text-base">
                  See how it works
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
