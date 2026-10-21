import type { Metadata } from "next";
import { AlertCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { LEGAL_PAGES } from "@/content/site";

export const metadata: Metadata = {
  title: "Privacy Policy (Draft) — Hirelytics.ai",
  description:
    "Hirelytics Privacy Policy draft covering data collection, Whisper audio transcripts, tenant isolation, and candidate rights.",
  alternates: {
    canonical: "/privacy",
  },
};

export default function PrivacyPage() {
  const { privacy } = LEGAL_PAGES;

  return (
    <>
      <Navbar />
      <main id="main-content" className="flex-1">
        <PageHeader
          badge={privacy.badge}
          title={privacy.title}
          subtitle={`Last Updated: ${privacy.lastUpdated}`}
          breadcrumbs={[{ label: "Privacy Policy" }]}
        />

        <section className="section-padding bg-white" aria-label="Privacy Policy Content">
          <div className="container-xl max-w-3xl">
            {/* Legal draft disclaimer banner */}
            <div className="mb-10 p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-xs flex items-center gap-2.5">
              <AlertCircle size={16} className="text-amber-600 shrink-0" />
              <p className="font-medium">
                <strong>Notice:</strong> This document is a preliminary draft and is currently pending formal legal review.
              </p>
            </div>

            <p className="text-sm text-[#4B5578] leading-relaxed mb-8">{privacy.intro}</p>

            <div className="space-y-8">
              {privacy.sections.map((section) => (
                <div key={section.heading} className="border-b border-[#E3E8F7] pb-6 last:border-b-0">
                  <h2 className="text-lg font-bold text-[#0B1250] mb-2">{section.heading}</h2>
                  <p className="text-sm text-[#4B5578] leading-relaxed">{section.content}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
