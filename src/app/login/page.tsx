import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, LogIn, Sparkles } from "lucide-react";
import LoginForm from "@/components/LoginForm";
import { SITE } from "@/content/site";

export const metadata: Metadata = {
  title: "Sign In — Hirelytics.ai",
  description:
    "Sign in to your Hirelytics.ai account to manage AI-powered hiring pipelines, review candidate scorecards, and run AI voice interviews.",
  alternates: {
    canonical: "/login",
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function LoginPage() {
  return (
    <div className="min-h-screen flex">
      {/* ── Left panel: branding ─────────────────────────────────────────── */}
      <div
        className="hidden lg:flex lg:w-[52%] xl:w-[55%] flex-col relative overflow-hidden"
        style={{ background: "linear-gradient(155deg, #04135B 0%, #0B1871 55%, #122090 100%)" }}
      >
        {/* Radial glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 70% 60% at 30% 80%, rgba(2,185,254,0.18) 0%, transparent 65%), radial-gradient(ellipse 50% 40% at 80% 20%, rgba(105,78,254,0.18) 0%, transparent 55%)",
          }}
          aria-hidden="true"
        />

        {/* Dot grid */}
        <div
          className="absolute inset-0 opacity-[0.035] pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.9) 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
          aria-hidden="true"
        />

        {/* Content */}
        <div className="relative z-10 flex flex-col h-full px-12 py-10">
          {/* Logo */}
          <Link href="/" aria-label="Hirelytics.ai home">
            <Image
              src="/brand/logo-horizontal.png"
              alt="Hirelytics.ai"
              width={180}
              height={40}
              priority
              className="h-9 w-auto object-contain"
            />
          </Link>

          {/* Main copy */}
          <div className="flex-1 flex flex-col justify-center max-w-md">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/15 text-[#02B9FE] text-xs font-semibold mb-8 w-fit backdrop-blur-sm">
              <Sparkles size={13} />
              AI-Powered Hiring Intelligence
            </div>

            <h1 className="text-3xl xl:text-4xl font-extrabold text-white leading-[1.15] tracking-tight mb-5">
              Welcome back to{" "}
              <span className="gradient-text">smarter hiring</span>.
            </h1>

            <p className="text-white/65 text-base leading-relaxed mb-10">
              Resume screening, AI voice interviews, and explainable scorecards — all in one place.
            </p>

            {/* Feature list */}
            <ul className="flex flex-col gap-4 list-none p-0 m-0">
              {[
                { icon: "🎯", text: "Semantic resume matching & shortlisting" },
                { icon: "🎙️", text: "Job-specific AI voice interviews" },
                { icon: "📊", text: "Explainable four-pillar candidate scorecards" },
                { icon: "🔐", text: "Enterprise-grade security & data isolation" },
              ].map((item) => (
                <li key={item.text} className="flex items-center gap-3 text-white/75 text-sm">
                  <span className="text-base">{item.icon}</span>
                  {item.text}
                </li>
              ))}
            </ul>
          </div>

          {/* Bottom note */}
          <p className="text-white/30 text-xs">
            © 2025 Hirelytics.ai · All rights reserved.
          </p>
        </div>
      </div>

      {/* ── Right panel: login form ──────────────────────────────────────── */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 py-12 bg-[#F6F8FF] relative">
        {/* Mobile logo */}
        <Link href="/" className="lg:hidden mb-10" aria-label="Hirelytics.ai home">
          <Image
            src="/brand/logo-horizontal.png"
            alt="Hirelytics.ai"
            width={160}
            height={36}
            priority
            className="h-8 w-auto object-contain"
          />
        </Link>

        <div className="w-full max-w-md">
          {/* Card */}
          <div className="bg-white rounded-3xl border border-[#E3E8F7] shadow-xl shadow-[#0B1250]/6 px-8 py-10 sm:px-10">
            {/* Header */}
            <div className="mb-8">
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5"
                style={{
                  background: "linear-gradient(135deg, rgba(2,185,254,0.15) 0%, rgba(105,78,254,0.15) 100%)",
                  border: "1px solid rgba(47,112,254,0.2)",
                }}
              >
                <LogIn size={22} className="text-[#2F70FE]" />
              </div>
              <h2 className="text-2xl font-extrabold text-[#0B1250] tracking-tight">
                Sign in to Hirelytics
              </h2>
              <p className="text-[#4B5578] text-sm mt-1.5">
                Enter your credentials to access your hiring dashboard.
              </p>
            </div>

            {/* Form */}
            <LoginForm appUrl={SITE.appUrl} />
          </div>

          {/* Footer links */}
          <p className="text-center text-[#4B5578] text-sm mt-6">
            Don&apos;t have an account?{" "}
            <Link href="/book-demo" className="text-[#2F70FE] font-semibold hover:underline">
              Apply for early access
              <ArrowRight size={12} className="inline ml-0.5" />
            </Link>
          </p>

          <div className="flex items-center justify-center gap-4 mt-5 text-xs text-[#4B5578]">
            <Link href="/privacy" className="hover:text-[#2F70FE] transition-colors">Privacy Policy</Link>
            <span className="text-[#E3E8F7]">·</span>
            <Link href="/terms" className="hover:text-[#2F70FE] transition-colors">Terms of Service</Link>
            <span className="text-[#E3E8F7]">·</span>
            <Link href="/security" className="hover:text-[#2F70FE] transition-colors">Security</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
