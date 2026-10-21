import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Sparkles, Clock } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import FeatureMockup from "@/components/FeatureMockup";
import { PRODUCT_TOUR, SITE } from "@/content/site";

export const metadata: Metadata = {
  title: "Product Tour — Role-Based AI Recruitment Platform",
  description:
    "Explore the Hirelytics platform tour for company recruiters, candidates, and platform administrators. Built with semantic resume screening, AI voice interviews, and explainable scorecards.",
  alternates: {
    canonical: "/product",
  },
};

export default function ProductPage() {
  const { header, roles, roadmap } = PRODUCT_TOUR;

  return (
    <>
      <Navbar />
      <main id="main-content" className="flex-1">
        <PageHeader
          badge={header.badge}
          title={header.title}
          subtitle={header.subtitle}
          breadcrumbs={[{ label: "Product" }]}
        />

        {/* ── Role Tours ── */}
        <section className="section-padding bg-white" aria-label="Role Feature Tours">
          <div className="container-xl flex flex-col gap-24">
            {roles.map((roleSection, idx) => {
              const isEven = idx % 2 === 1;
              return (
                <div
                  key={roleSection.id}
                  id={roleSection.id}
                  className="scroll-mt-24 grid lg:grid-cols-12 gap-12 items-center"
                >
                  <div
                    className={`lg:col-span-7 flex flex-col justify-center ${
                      isEven ? "lg:order-2" : "lg:order-1"
                    }`}
                  >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F6F8FF] border border-[#E3E8F7] text-[#2F70FE] text-xs font-bold uppercase tracking-wider mb-4 w-fit">
                      <Sparkles size={13} />
                      {roleSection.role}
                    </div>
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0B1250] leading-tight mb-3">
                      {roleSection.tagline}
                    </h2>

                    <div className="grid sm:grid-cols-2 gap-6 mt-8">
                      {roleSection.features.map((feat) => (
                        <div
                          key={feat.title}
                          className="p-5 rounded-2xl bg-[#F6F8FF] border border-[#E3E8F7] hover:border-[#2F70FE]/30 transition-colors"
                        >
                          <div className="flex items-center gap-2 mb-2">
                            <CheckCircle2 size={16} className="text-[#02B9FE] shrink-0" />
                            <h3 className="text-sm font-bold text-[#0B1250]">{feat.title}</h3>
                          </div>
                          <p className="text-xs text-[#4B5578] leading-relaxed">
                            {feat.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Reusable CSS Mockup */}
                  <div
                    className={`lg:col-span-5 flex justify-center items-center ${
                      isEven ? "lg:order-1" : "lg:order-2"
                    }`}
                  >
                    <FeatureMockup type={roleSection.mockupType} />
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ── Coming Soon: Roadmap ── */}
        <section
          className="section-padding bg-[#F6F8FF] border-t border-[#E3E8F7]"
          aria-label="Product Roadmap"
        >
          <div className="container-xl">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-white border border-[#E3E8F7] text-[#2F70FE] mb-3">
                {roadmap.badge}
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1250] leading-tight">
                {roadmap.title}
              </h2>
              <p className="text-[#4B5578] mt-3">{roadmap.subtitle}</p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {roadmap.items.map((item) => (
                <div
                  key={item.title}
                  className="bg-white rounded-2xl border border-[#E3E8F7] p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-bold text-[#2F70FE] bg-[#F6F8FF] px-2.5 py-1 rounded-lg border border-[#E3E8F7]">
                        {item.quarter}
                      </span>
                      <span className="flex items-center gap-1.5 text-xs text-[#4B5578] font-medium">
                        <Clock size={13} className="text-[#694EFE]" />
                        {item.status}
                      </span>
                    </div>
                    <h3 className="text-base font-bold text-[#0B1250] mb-2">{item.title}</h3>
                    <p className="text-xs text-[#4B5578] leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom CTA */}
            <div className="mt-16 text-center">
              <Link href={SITE.bookDemoUrl} className="btn-gradient text-sm inline-flex">
                Experience the platform live
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
