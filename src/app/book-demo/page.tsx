import type { Metadata } from "next";
import { CheckCircle2, Zap } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import BookDemoForm from "@/components/BookDemoForm";
import { BOOK_DEMO_CONTENT } from "@/content/site";

export const metadata: Metadata = {
  title: "Book a Demo — See Hirelytics In Action",
  description:
    "Request a 30-minute tailored walkthrough of Hirelytics. Explore AI resume screening, job-specific voice interviews, and explainable four-pillar scorecards.",
  alternates: {
    canonical: "/book-demo",
  },
};

export default function BookDemoPage() {
  const { header, whatToExpect } = BOOK_DEMO_CONTENT;

  return (
    <>
      <Navbar />
      <main id="main-content" className="flex-1">
        <PageHeader
          badge={header.badge}
          title={header.title}
          subtitle={header.subtitle}
          breadcrumbs={[{ label: "Book a demo" }]}
        />

        <section className="section-padding bg-[#F6F8FF]" aria-label="Demo Booking Section">
          <div className="container-xl">
            <div className="grid lg:grid-cols-12 gap-12 items-start max-w-6xl mx-auto">
              {/* Left Column: What to expect */}
              <div className="lg:col-span-5 flex flex-col justify-between">
                <div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#E3E8F7] text-[#2F70FE] text-xs font-bold uppercase tracking-wider mb-4">
                    <Zap size={13} className="text-[#02B9FE]" />
                    Interactive Walkthrough
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1250] mb-3">
                    {whatToExpect.title}
                  </h2>
                  <p className="text-sm text-[#4B5578] mb-8 leading-relaxed">
                    We know your time is valuable. Our team skips generic sales slides and dives straight into live product capabilities tailored to your tech stack.
                  </p>

                  <div className="space-y-6">
                    {whatToExpect.points.map((point) => (
                      <div key={point.title} className="flex items-start gap-3.5">
                        <div className="w-7 h-7 rounded-lg bg-white border border-[#E3E8F7] flex items-center justify-center text-[#02B9FE] shrink-0 mt-0.5 shadow-xs">
                          <CheckCircle2 size={16} />
                        </div>
                        <div>
                          <h3 className="text-sm font-bold text-[#0B1250]">{point.title}</h3>
                          <p className="text-xs text-[#4B5578] mt-0.5 leading-relaxed">
                            {point.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Stat pills */}
                <div className="grid grid-cols-3 gap-3 mt-10 pt-8 border-t border-[#E3E8F7]">
                  {whatToExpect.stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="bg-white rounded-xl border border-[#E3E8F7] p-3 text-center"
                    >
                      <div className="text-xl font-extrabold text-[#0B1250]">{stat.value}</div>
                      <div className="text-[10px] text-[#4B5578] font-medium mt-0.5">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: Lead Form */}
              <div className="lg:col-span-7">
                <BookDemoForm />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
