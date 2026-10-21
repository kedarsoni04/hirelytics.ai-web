import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, Minus } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { PRICING_CONTENT } from "@/content/site";

export const metadata: Metadata = {
  title: "Pricing Plans — Early-Access Pilot & Custom Quotes",
  description:
    "Explore transparent Hirelytics plans for early-access pilot teams, scaling companies, and enterprise organizations. Compare features across evaluation, candidate experience, and security.",
  alternates: {
    canonical: "/pricing",
  },
};

export default function PricingPage() {
  const { header, plans, comparison } = PRICING_CONTENT;

  return (
    <>
      <Navbar />
      <main id="main-content" className="flex-1">
        <PageHeader
          badge={header.badge}
          title={header.title}
          subtitle={header.subtitle}
          breadcrumbs={[{ label: "Pricing" }]}
        />

        {/* ── 3 Plans Grid ── */}
        <section className="section-padding bg-white" aria-label="Pricing Plans">
          <div className="container-xl">
            <div className="grid md:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
              {plans.map((plan) => (
                <div
                  key={plan.id}
                  className={`rounded-2xl p-8 flex flex-col justify-between transition-all duration-200 relative ${
                    plan.highlighted
                      ? "bg-[#04135B] text-white shadow-2xl ring-2 ring-[#02B9FE] scale-[1.02]"
                      : "bg-[#F6F8FF] border border-[#E3E8F7] text-[#0B1250]"
                  }`}
                >
                  {plan.badge && (
                    <div
                      className={`absolute -top-3.5 left-1/2 -translate-x-1/2 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider ${
                        plan.highlighted
                          ? "bg-gradient-to-r from-[#02B9FE] to-[#694EFE] text-white"
                          : "bg-[#2F70FE] text-white"
                      }`}
                    >
                      {plan.badge}
                    </div>
                  )}

                  <div>
                    <h2
                      className={`text-xl font-bold mb-2 ${
                        plan.highlighted ? "text-white" : "text-[#0B1250]"
                      }`}
                    >
                      {plan.name}
                    </h2>
                    <p
                      className={`text-xs mb-6 leading-relaxed ${
                        plan.highlighted ? "text-white/70" : "text-[#4B5578]"
                      }`}
                    >
                      {plan.description}
                    </p>

                    {/* Price display */}
                    <div className="mb-6 pb-6 border-b border-current/10">
                      <div className="flex items-baseline gap-2">
                        <span className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                          {plan.price}
                        </span>
                      </div>
                      <span
                        className={`text-xs ${
                          plan.highlighted ? "text-white/60" : "text-[#4B5578]"
                        }`}
                      >
                        {plan.period}
                      </span>
                    </div>

                    {/* Feature list */}
                    <ul className="flex flex-col gap-3 mb-8">
                      {plan.features.map((feat) => (
                        <li key={feat} className="flex items-start gap-2.5 text-xs sm:text-sm">
                          <Check
                            size={16}
                            className={`shrink-0 mt-0.5 ${
                              plan.highlighted ? "text-[#02B9FE]" : "text-[#2F70FE]"
                            }`}
                          />
                          <span
                            className={plan.highlighted ? "text-white/90" : "text-[#0B1250]"}
                          >
                            {feat}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA */}
                  <Link
                    href={plan.href}
                    className={`w-full py-3 px-4 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 transition-all ${
                      plan.highlighted
                        ? "btn-gradient"
                        : "bg-white border border-[#E3E8F7] hover:border-[#2F70FE] text-[#0B1250] shadow-sm hover:shadow"
                    }`}
                  >
                    {plan.cta}
                    <ArrowRight size={14} />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Feature Comparison Table ── */}
        <section
          className="section-padding bg-[#F6F8FF] border-t border-[#E3E8F7]"
          aria-label="Feature Comparison Table"
        >
          <div className="container-xl max-w-5xl">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1250]">
                {comparison.title}
              </h2>
              <p className="text-sm text-[#4B5578] mt-2">{comparison.subtitle}</p>
            </div>

            <div className="bg-white rounded-2xl border border-[#E3E8F7] shadow-sm overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-[#04135B] text-white text-xs uppercase tracking-wider">
                      <th className="py-4 px-6 font-bold w-2/5">Feature</th>
                      <th className="py-4 px-4 font-bold text-center w-1/5">Early Pilot</th>
                      <th className="py-4 px-4 font-bold text-center w-1/5 bg-[#0B1871] text-[#02B9FE]">
                        Growth
                      </th>
                      <th className="py-4 px-4 font-bold text-center w-1/5">Enterprise</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparison.categories.map((category) => (
                      <tbody key={category.category}>
                        <tr className="bg-[#F6F8FF] border-y border-[#E3E8F7]">
                          <td
                            colSpan={4}
                            className="py-2.5 px-6 font-bold text-xs text-[#2F70FE] uppercase tracking-wider"
                          >
                            {category.category}
                          </td>
                        </tr>
                        {category.rows.map((row) => (
                          <tr
                            key={row.feature}
                            className="border-b border-[#E3E8F7] hover:bg-[#FAF5FF]/30 transition-colors text-xs sm:text-sm"
                          >
                            <td className="py-3.5 px-6 font-medium text-[#0B1250]">
                              {row.feature}
                            </td>
                            <td className="py-3.5 px-4 text-center">
                              {renderTableCell(row.pilot)}
                            </td>
                            <td className="py-3.5 px-4 text-center bg-[#F6F8FF]/50 font-semibold">
                              {renderTableCell(row.growth)}
                            </td>
                            <td className="py-3.5 px-4 text-center">
                              {renderTableCell(row.enterprise)}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function renderTableCell(value: boolean | string) {
  if (value === true) {
    return <Check size={16} className="text-[#02B9FE] inline-block" />;
  }
  if (value === false) {
    return <Minus size={16} className="text-gray-300 inline-block" />;
  }
  return <span className="text-xs text-[#4B5578] font-semibold">{value}</span>;
}
