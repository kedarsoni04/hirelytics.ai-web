import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Bot, UserCheck } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import { HOW_IT_WORKS_TIMELINE, SITE } from "@/content/site";

export const metadata: Metadata = {
  title: "How It Works — The AI & Human Recruitment Pipeline",
  description:
    "See how Hirelytics works stage by stage: what the AI does to automate analysis, and what the human recruiter decides at every phase.",
  alternates: {
    canonical: "/how-it-works",
  },
};

export default function HowItWorksPage() {
  const { header, stages } = HOW_IT_WORKS_TIMELINE;

  return (
    <>
      <Navbar />
      <main id="main-content" className="flex-1">
        <PageHeader
          badge={header.badge}
          title={header.title}
          subtitle={header.subtitle}
          breadcrumbs={[{ label: "How it works" }]}
        />

        <section className="section-padding bg-white" aria-label="Pipeline Timeline">
          <div className="container-xl max-w-4xl">
            {/* Vertical timeline wrapper */}
            <div className="relative pl-6 sm:pl-10 border-l-2 border-[#E3E8F7] flex flex-col gap-12 sm:gap-16">
              {stages.map((stage, idx) => (
                <Reveal key={stage.step} delay={idx * 0.08} direction="up" className="relative">
                  {/* Step node on the vertical line */}
                  <div className="absolute -left-[35px] sm:-left-[51px] top-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-[#02B9FE] to-[#694EFE] text-white flex items-center justify-center font-bold text-xs sm:text-sm shadow-md transition-transform duration-300 hover:scale-110">
                    {stage.step}
                  </div>

                  {/* Stage card */}
                  <div className="bg-[#F6F8FF] border border-[#E3E8F7] rounded-2xl p-6 sm:p-8 card-hover-glow">
                    <div className="mb-4">
                      <span className="text-xs font-bold uppercase tracking-wider text-[#2F70FE] mb-1 block">
                        Stage {stage.step}
                      </span>
                      <h2 className="text-xl sm:text-2xl font-extrabold text-[#0B1250]">
                        {stage.name}
                      </h2>
                      <p className="text-sm text-[#4B5578] mt-1">{stage.summary}</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4 mt-6">
                      {/* What the AI does */}
                      <div className="bg-[#F0F9FF] border border-[#BAE6FD] rounded-xl p-4 sm:p-5">
                        <div className="flex items-center gap-2 mb-2 text-[#0369A1] font-bold text-xs uppercase tracking-wide">
                          <Bot size={16} className="text-[#02B9FE]" />
                          <span>What the AI does</span>
                        </div>
                        <p className="text-xs sm:text-sm text-[#0C4A6E] leading-relaxed">
                          {stage.aiRole}
                        </p>
                      </div>

                      {/* What the human decides */}
                      <div className="bg-[#FAF5FF] border border-[#E9D5FF] rounded-xl p-4 sm:p-5">
                        <div className="flex items-center gap-2 mb-2 text-[#6B21A8] font-bold text-xs uppercase tracking-wide">
                          <UserCheck size={16} className="text-[#694EFE]" />
                          <span>What the human decides</span>
                        </div>
                        <p className="text-xs sm:text-sm text-[#581C87] leading-relaxed">
                          {stage.humanRole}
                        </p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            {/* Bottom summary / Call to action */}
            <Reveal direction="up" delay={0.2} className="mt-20 p-8 rounded-2xl bg-gradient-to-r from-[#04135B] to-[#0B1871] text-white text-center shadow-xl">
              <h3 className="text-xl sm:text-2xl font-extrabold mb-3">
                Ready to experience human-in-the-loop AI?
              </h3>
              <p className="text-white/70 text-sm max-w-lg mx-auto mb-6">
                See how Hirelytics accelerates candidate analysis while keeping your hiring managers in complete control.
              </p>
              <Link href={SITE.bookDemoUrl} className="btn-gradient text-sm inline-flex">
                Book a personalized demo
                <ArrowRight size={14} />
              </Link>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
