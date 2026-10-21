import type { Metadata } from "next";
import Link from "next/link";
import { GraduationCap, ArrowRight, Target, Users } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { ABOUT_CONTENT, SITE } from "@/content/site";

export const metadata: Metadata = {
  title: "About Us — Mission & Origins at Indus University",
  description:
    "Learn about Hirelytics.ai: our mission to make recruitment faster, fairer, and explainable, and our origins as an Indus University Software Group Project.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  const { header, mission, theProblem, originStory, team } = ABOUT_CONTENT;

  return (
    <>
      <Navbar />
      <main id="main-content" className="flex-1">
        <PageHeader
          badge={header.badge}
          title={header.title}
          subtitle={header.subtitle}
          breadcrumbs={[{ label: "About" }]}
        />

        {/* ── Mission ── */}
        <section className="section-padding bg-white" aria-label="Our Mission">
          <div className="container-xl max-w-4xl">
            <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-[#04135B] to-[#0B1871] text-white shadow-xl relative overflow-hidden">
              <div
                className="absolute top-0 right-0 w-80 h-80 bg-[#02B9FE]/10 rounded-full blur-3xl pointer-events-none"
                aria-hidden="true"
              />
              <div className="flex items-center gap-2 text-[#02B9FE] font-bold text-xs uppercase tracking-wider mb-4">
                <Target size={16} />
                <span>{mission.title}</span>
              </div>
              <p className="text-2xl sm:text-3xl font-extrabold leading-snug mb-4">
                {mission.statement}
              </p>
              <p className="text-white/70 text-sm sm:text-base leading-relaxed">
                {mission.subtext}
              </p>
            </div>
          </div>
        </section>

        {/* ── The Problem We Saw ── */}
        <section
          className="section-padding bg-[#F6F8FF] border-y border-[#E3E8F7]"
          aria-label="The Problem We Saw"
        >
          <div className="container-xl max-w-4xl">
            <span className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-white border border-[#E3E8F7] text-[#2F70FE] mb-3">
              Background
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1250] mb-6">
              {theProblem.title}
            </h2>
            <div className="flex flex-col gap-4 text-sm sm:text-base text-[#4B5578] leading-relaxed">
              {theProblem.paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>
          </div>
        </section>

        {/* ── Origin Story (Indus University) ── */}
        <section className="section-padding bg-white" aria-label="Our Origins">
          <div className="container-xl max-w-4xl">
            <div className="bg-[#FAF5FF] border border-[#E9D5FF] rounded-2xl p-8 sm:p-10 flex flex-col md:flex-row gap-8 items-start">
              <div className="w-14 h-14 rounded-2xl bg-white border border-[#E9D5FF] flex items-center justify-center shrink-0 text-[#694EFE] shadow-sm">
                <GraduationCap size={28} />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#694EFE] mb-1 block">
                  {originStory.badge}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-[#0B1250] mb-3">
                  {originStory.title}
                </h3>
                <p className="text-sm sm:text-base text-[#4B5578] leading-relaxed">
                  {originStory.body}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Team Placeholders ── */}
        <section
          className="section-padding bg-[#F6F8FF] border-t border-[#E3E8F7]"
          aria-label="The Team"
        >
          <div className="container-xl max-w-5xl">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-white border border-[#E3E8F7] text-[#2F70FE] mb-3">
                <Users size={12} className="inline mr-1" />
                Team
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1250]">
                {team.title}
              </h2>
              <p className="text-[#4B5578] mt-2 text-sm">{team.subtitle}</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {team.members.map((member) => (
                <div
                  key={member.name}
                  className="bg-white rounded-2xl border border-[#E3E8F7] p-6 shadow-sm flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#02B9FE] to-[#694EFE] text-white font-bold text-lg flex items-center justify-center mb-4">
                      {member.name.charAt(0)}
                    </div>
                    <h3 className="text-base font-bold text-[#0B1250]">{member.name}</h3>
                    <p className="text-xs font-semibold text-[#2F70FE] mt-0.5">{member.role}</p>
                    <p className="text-[11px] text-[#4B5578] mt-0.5 mb-3">{member.institution}</p>
                    <p className="text-xs text-[#4B5578] leading-relaxed">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16 text-center">
              <Link href={SITE.bookDemoUrl} className="btn-gradient text-sm inline-flex">
                Talk with our team
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
