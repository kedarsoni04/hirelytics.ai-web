import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Mail,
  Briefcase,
  Shield,
  Users,
  ArrowRight,
  ExternalLink,
  ChevronDown,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";
import { CONTACT_CONTENT, SITE } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact — Hirelytics.ai",
  description:
    "Get in touch with the Hirelytics team. Reach us for general enquiries, demo requests, security reports, or career opportunities.",
  alternates: {
    canonical: "/contact",
  },
};

const iconMap: Record<string, React.ReactNode> = {
  Mail: <Mail size={22} />,
  Briefcase: <Briefcase size={22} />,
  Shield: <Shield size={22} />,
  Users: <Users size={22} />,
};

const channelGradients = [
  "from-[#02B9FE]/10 to-[#2F70FE]/5",
  "from-[#694EFE]/10 to-[#2F70FE]/5",
  "from-[#2F70FE]/10 to-[#02B9FE]/5",
  "from-[#694EFE]/10 to-[#02B9FE]/5",
];

const channelIconColors = [
  "text-[#02B9FE] bg-[#02B9FE]/10",
  "text-[#694EFE] bg-[#694EFE]/10",
  "text-[#2F70FE] bg-[#2F70FE]/10",
  "text-[#02B9FE] bg-[#02B9FE]/10",
];

export default function ContactPage() {
  const { header, channels, social, faq } = CONTACT_CONTENT;

  return (
    <>
      <Navbar />
      <main id="main-content" className="flex-1">
        <PageHeader
          badge={header.badge}
          title={header.title}
          subtitle={header.subtitle}
          breadcrumbs={[{ label: "Contact" }]}
        />

        {/* ── Contact Channels ── */}
        <section
          className="section-padding bg-white"
          aria-label="Contact Channels"
        >
          <div className="container-xl">
            <Reveal direction="up" className="text-center mb-14">
              <span className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-[#F6F8FF] border border-[#E3E8F7] text-[#2F70FE] mb-3">
                How to Reach Us
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1250]">
                Pick the best channel for you
              </h2>
            </Reveal>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {channels.map((channel, i) => {
                const isExternal = channel.href.startsWith("mailto:");
                const isInternal = channel.href.startsWith("/");

                return (
                  <Reveal
                    key={channel.title}
                    delay={i * 0.08}
                    direction="up"
                    className="flex"
                  >
                    <div
                      className={`bg-gradient-to-br ${channelGradients[i]} border border-[#E3E8F7] rounded-2xl p-6 card-hover-glow flex flex-col justify-between w-full`}
                    >
                      <div>
                        <div
                          className={`w-11 h-11 rounded-xl flex items-center justify-center mb-4 ${channelIconColors[i]}`}
                        >
                          {iconMap[channel.icon]}
                        </div>
                        <h3 className="text-base font-bold text-[#0B1250] mb-1.5">
                          {channel.title}
                        </h3>
                        <p className="text-sm text-[#4B5578] leading-relaxed mb-4">
                          {channel.description}
                        </p>
                        {isExternal ? (
                          <span className="text-xs font-semibold text-[#4B5578]">
                            {channel.contact}
                          </span>
                        ) : (
                          <span className="text-xs font-semibold text-[#4B5578]">
                            {channel.contact}
                          </span>
                        )}
                      </div>
                      <div className="mt-5">
                        {isInternal ? (
                          <Link
                            href={channel.href}
                            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#2F70FE] hover:text-[#694EFE] transition-colors duration-150"
                          >
                            {channel.cta}
                            <ArrowRight size={13} />
                          </Link>
                        ) : (
                          <a
                            href={channel.href}
                            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#2F70FE] hover:text-[#694EFE] transition-colors duration-150"
                          >
                            {channel.cta}
                            <ExternalLink size={13} />
                          </a>
                        )}
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── Direct email CTA + social ── */}
        <section
          className="section-padding bg-[#F6F8FF] border-t border-[#E3E8F7]"
          aria-label="Direct Contact"
        >
          <div className="container-xl max-w-4xl">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              {/* Contact Form */}
              <Reveal direction="left" className="md:col-span-1">
                <ContactForm />
              </Reveal>

              {/* Social links */}
              <Reveal direction="right">
                <span className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-white border border-[#E3E8F7] text-[#694EFE] mb-4">
                  Follow Us
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1250] mb-4">
                  Find us online
                </h2>
                <p className="text-[#4B5578] text-sm leading-relaxed mb-6">
                  Stay up to date with product announcements, hiring insights,
                  and early-access updates.
                </p>
                <div className="flex flex-col gap-3">
                  {social.map((s) => {
                    const isMail = s.href.startsWith("mailto:");
                    return (
                      <a
                        key={s.label}
                        href={s.href}
                        target={isMail ? undefined : "_blank"}
                        rel={isMail ? undefined : "noopener noreferrer"}
                        className="flex items-center justify-between px-4 py-3 rounded-xl bg-white border border-[#E3E8F7] hover:border-[#2F70FE]/50 hover:bg-[#F6F8FF] transition-all duration-200 group"
                      >
                        <div className="flex items-center gap-3">
                          {s.label === "LinkedIn" ? (
                            <div className="w-8 h-8 rounded-lg bg-[#0077B5]/10 flex items-center justify-center shrink-0">
                              <Image
                                src="/brand/LI-In-Bug.png"
                                alt="LinkedIn"
                                width={18}
                                height={18}
                                className="w-4 h-4 object-contain rounded-[2px]"
                              />
                            </div>
                          ) : (
                            <div className="w-8 h-8 rounded-lg bg-[#2F70FE]/10 text-[#2F70FE] flex items-center justify-center shrink-0">
                              <Mail size={16} />
                            </div>
                          )}
                          <div>
                            <div className="text-sm font-bold text-[#0B1250]">
                              {s.label}
                            </div>
                            <div className="text-xs text-[#4B5578]">{s.handle}</div>
                          </div>
                        </div>
                        <ExternalLink
                          size={15}
                          className="text-[#4B5578] group-hover:text-[#2F70FE] transition-colors"
                        />
                      </a>
                    );
                  })}
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section
          className="section-padding bg-white border-t border-[#E3E8F7]"
          aria-label="Frequently Asked Questions"
        >
          <div className="container-xl max-w-3xl">
            <Reveal direction="up" className="text-center mb-12">
              <span className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-[#F6F8FF] border border-[#E3E8F7] text-[#2F70FE] mb-3">
                FAQ
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1250]">
                Common questions
              </h2>
            </Reveal>

            <div className="flex flex-col gap-4">
              {faq.map((item, i) => (
                <Reveal key={i} delay={i * 0.08} direction="up">
                  <details className="group bg-[#F6F8FF] border border-[#E3E8F7] rounded-2xl overflow-hidden">
                    <summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer text-sm font-bold text-[#0B1250] list-none">
                      <span>{item.q}</span>
                      <ChevronDown
                        size={16}
                        className="text-[#4B5578] flex-shrink-0 transition-transform duration-200 group-open:rotate-180"
                      />
                    </summary>
                    <div className="px-6 pb-5 text-sm text-[#4B5578] leading-relaxed border-t border-[#E3E8F7] pt-4">
                      {item.a}
                    </div>
                  </details>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── Book Demo CTA ── */}
        <section
          className="section-padding bg-[#04135B]"
          aria-label="Book a Demo"
        >
          <div className="container-xl text-center">
            <Reveal direction="up">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">
                Want to see it live?
              </h2>
              <p className="text-white/60 mb-8 max-w-lg mx-auto text-sm">
                Book a 30-minute personalized demo with our team — no
                commitment, no credit card required.
              </p>
              <Link
                href={SITE.bookDemoUrl}
                className="btn-gradient text-sm inline-flex"
              >
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
