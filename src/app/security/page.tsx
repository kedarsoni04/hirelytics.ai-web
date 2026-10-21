import type { Metadata } from "next";
import Link from "next/link";
import {
  ShieldCheck,
  Lock,
  KeyRound,
  Users,
  Server,
  FileCheck,
  ArrowRight,
  AlertTriangle,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { SECURITY_CONTENT, SITE } from "@/content/site";

export const metadata: Metadata = {
  title: "Security and Responsible AI — Hirelytics.ai",
  description:
    "Learn about Hirelytics security architecture, bcrypt password hashing, JWT sessions, tenant isolation, and responsible AI evaluation principles.",
  alternates: {
    canonical: "/security",
  },
};

const pillarIcons = [KeyRound, Lock, Users, Server, ShieldCheck, FileCheck];

export default function SecurityPage() {
  const { header, pillars, responsibleAi, legalDraft } = SECURITY_CONTENT;

  return (
    <>
      <Navbar />
      <main id="main-content" className="flex-1">
        <PageHeader
          badge={header.badge}
          title={header.title}
          subtitle={header.subtitle}
          breadcrumbs={[{ label: "Security" }]}
        />

        {/* ── Security Architecture Pillars ── */}
        <section className="section-padding bg-white" aria-label="Security Controls">
          <div className="container-xl">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-[#F6F8FF] border border-[#E3E8F7] text-[#2F70FE] mb-3">
                Security Architecture
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1250]">
                Verified Security Controls
              </h2>
              <p className="text-[#4B5578] mt-2 text-sm">
                Engineering safeguards protecting your candidates, audio transcripts, and organizational workspaces.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {pillars.map((pillar, i) => {
                const IconComponent = pillarIcons[i % pillarIcons.length];
                return (
                  <div
                    key={pillar.title}
                    className="p-6 rounded-2xl bg-[#F6F8FF] border border-[#E3E8F7] hover:border-[#2F70FE]/30 transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-10 h-10 rounded-xl bg-white border border-[#E3E8F7] flex items-center justify-center text-[#2F70FE]">
                          <IconComponent size={20} />
                        </div>
                        <span className="text-[11px] font-bold tracking-wider px-2.5 py-1 rounded-full bg-white border border-[#E3E8F7] text-[#4B5578]">
                          {pillar.badge}
                        </span>
                      </div>
                      <h3 className="text-base font-bold text-[#0B1250] mb-2">{pillar.title}</h3>
                      <p className="text-xs sm:text-sm text-[#4B5578] leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── Responsible AI ── */}
        <section
          className="section-padding bg-[#F6F8FF] border-t border-[#E3E8F7]"
          aria-label="Responsible AI Principles"
        >
          <div className="container-xl max-w-5xl">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-white border border-[#E3E8F7] text-[#694EFE] mb-3">
                Ethical Benchmarks
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1250]">
                {responsibleAi.title}
              </h2>
              <p className="text-[#4B5578] mt-2 text-sm">{responsibleAi.subtitle}</p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {responsibleAi.principles.map((principle) => (
                <div
                  key={principle.title}
                  className="bg-white rounded-2xl border border-[#E3E8F7] p-6 shadow-sm"
                >
                  <h3 className="text-base font-bold text-[#0B1250] mb-2 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#02B9FE]" />
                    {principle.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#4B5578] leading-relaxed">
                    {principle.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Data and Privacy [DRAFT, needs legal review] ── */}
        <section className="section-padding bg-white border-t border-[#E3E8F7]">
          <div className="container-xl max-w-4xl">
            <div className="bg-[#FFFBEB] border border-[#FDE68A] rounded-2xl p-6 sm:p-8">
              <div className="flex items-center gap-2 text-[#92400E] font-bold text-xs uppercase tracking-wider mb-3">
                <AlertTriangle size={16} className="text-[#D97706]" />
                <span>[{legalDraft.badge}]</span>
              </div>
              <h3 className="text-xl font-bold text-[#78350F] mb-4">{legalDraft.title}</h3>
              <div className="flex flex-col gap-3 text-xs sm:text-sm text-[#92400E] leading-relaxed">
                {legalDraft.body.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>
            </div>

            <div className="mt-12 text-center">
              <Link href={SITE.bookDemoUrl} className="btn-gradient text-sm inline-flex">
                Ask our team security questions
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
