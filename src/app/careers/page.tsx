import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  MapPin,
  Clock,
  Building2,
  Send,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import { CAREERS_CONTENT, SITE } from "@/content/site";

export const metadata: Metadata = {
  title: "Careers — Hirelytics.ai",
  description:
    "Join the Hirelytics team. We're building AI that makes hiring fairer, faster, and more human. See open roles in engineering, AI/ML, and design.",
  alternates: {
    canonical: "/careers",
  },
};

export default function CareersPage() {
  const { header, mission, values, openings, noRoleCta, perks } =
    CAREERS_CONTENT;

  return (
    <>
      <Navbar />
      <main id="main-content" className="flex-1">
        <PageHeader
          badge={header.badge}
          title={header.title}
          subtitle={header.subtitle}
          breadcrumbs={[{ label: "Careers" }]}
        />

        {/* ── Mission ── */}
        <section className="section-padding bg-white" aria-label="Our Mission">
          <div className="container-xl max-w-4xl">
            <Reveal direction="up" className="text-center">
              <span className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-[#F6F8FF] border border-[#E3E8F7] text-[#2F70FE] mb-4">
                Why Hirelytics
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1250] mb-4">
                {mission.title}
              </h2>
              <p className="text-[#4B5578] text-base sm:text-lg leading-relaxed max-w-3xl mx-auto">
                {mission.body}
              </p>
            </Reveal>
          </div>
        </section>

        {/* ── Perks strip ── */}
        <section
          className="bg-[#04135B] py-10"
          aria-label="Benefits and Perks"
        >
          <div className="container-xl">
            <Reveal direction="up">
              <div className="flex flex-wrap justify-center gap-4">
                {perks.map((perk) => (
                  <div
                    key={perk.label}
                    className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/10 border border-white/15 text-white text-sm font-medium backdrop-blur-sm"
                  >
                    <span>{perk.emoji}</span>
                    <span>{perk.label}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* ── Values ── */}
        <section
          className="section-padding bg-[#F6F8FF] border-t border-[#E3E8F7]"
          aria-label="Our Values"
        >
          <div className="container-xl">
            <Reveal direction="up" className="text-center mb-14">
              <span className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-white border border-[#E3E8F7] text-[#694EFE] mb-3">
                How We Work
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1250]">
                Our values
              </h2>
            </Reveal>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((val, i) => (
                <Reveal key={val.title} delay={i * 0.1} direction="up">
                  <div className="bg-white rounded-2xl border border-[#E3E8F7] p-6 card-hover-glow h-full">
                    <div className="text-3xl mb-4">{val.emoji}</div>
                    <h3 className="text-base font-bold text-[#0B1250] mb-2">
                      {val.title}
                    </h3>
                    <p className="text-sm text-[#4B5578] leading-relaxed">
                      {val.description}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── Open Roles ── */}
        <section
          className="section-padding bg-white border-t border-[#E3E8F7]"
          aria-label="Open Roles"
        >
          <div className="container-xl">
            <Reveal direction="up" className="text-center mb-14">
              <span className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-[#F6F8FF] border border-[#E3E8F7] text-[#2F70FE] mb-3">
                Open Positions
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1250]">
                Come build with us
              </h2>
              <p className="text-[#4B5578] mt-2 text-sm max-w-lg mx-auto">
                All roles are fully remote. We value clear communication,
                ownership, and shipping things that work.
              </p>
            </Reveal>

            <div className="flex flex-col gap-6 max-w-3xl mx-auto">
              {openings.map((role, i) => (
                <Reveal key={role.id} delay={i * 0.1} direction="up">
                  <div className="bg-white rounded-2xl border border-[#E3E8F7] p-6 sm:p-8 card-hover-glow">
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                      <div>
                        <div className="flex flex-wrap gap-2 mb-2">
                          <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#F6F8FF] border border-[#E3E8F7] text-[#2F70FE]">
                            <Building2 size={10} />
                            {role.department}
                          </span>
                          <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#F6F8FF] border border-[#E3E8F7] text-[#4B5578]">
                            <MapPin size={10} />
                            Remote
                          </span>
                          <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#F6F8FF] border border-[#E3E8F7] text-[#4B5578]">
                            <Clock size={10} />
                            {role.type.split("·")[0].trim()}
                          </span>
                        </div>
                        <h3 className="text-lg font-extrabold text-[#0B1250]">
                          {role.title}
                        </h3>
                      </div>
                      <a
                        href={`mailto:${noRoleCta.email}?subject=Application: ${role.title}`}
                        className="btn-gradient text-sm whitespace-nowrap flex-shrink-0"
                        aria-label={`Apply for ${role.title}`}
                      >
                        Apply <Send size={13} />
                      </a>
                    </div>

                    <p className="text-sm text-[#4B5578] leading-relaxed mb-5">
                      {role.description}
                    </p>

                    {/* Requirements */}
                    <ul className="flex flex-col gap-2">
                      {role.requirements.map((req) => (
                        <li
                          key={req}
                          className="flex items-start gap-2 text-sm text-[#4B5578]"
                        >
                          <CheckCircle2
                            size={15}
                            className="text-[#02B9FE] mt-0.5 flex-shrink-0"
                          />
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              ))}
            </div>

            {/* No role CTA */}
            <Reveal direction="up" delay={0.3} className="mt-12 text-center">
              <div className="inline-block bg-gradient-to-br from-[#F6F8FF] to-white border border-[#E3E8F7] rounded-2xl p-8 max-w-md mx-auto">
                <h3 className="text-lg font-extrabold text-[#0B1250] mb-2">
                  {noRoleCta.title}
                </h3>
                <p className="text-sm text-[#4B5578] mb-5">{noRoleCta.body}</p>
                <a
                  href={`mailto:${noRoleCta.email}?subject=Open Application — Hirelytics`}
                  className="btn-gradient text-sm inline-flex"
                >
                  Send us a note
                  <ArrowRight size={14} />
                </a>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ── Final CTA ── */}
        <section className="section-padding bg-[#04135B]" aria-label="Call to Action">
          <div className="container-xl text-center">
            <Reveal direction="up">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">
                Not ready to apply? See Hirelytics in action first.
              </h2>
              <p className="text-white/60 mb-8 max-w-lg mx-auto text-sm">
                Book a 30-minute demo and experience what we're building — from
                the inside.
              </p>
              <Link href={SITE.bookDemoUrl} className="btn-gradient text-sm inline-flex">
                Book a demo
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
