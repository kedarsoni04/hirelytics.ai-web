"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Send,
  Loader2,
  CheckCircle2,
  AlertCircle,
  Mail,
  Sparkles,
} from "lucide-react";

const contactFormSchema = z.object({
  name: z.string().min(2, "Please enter your name"),
  email: z.string().email("Please enter a valid email address"),
  category: z.string().min(1, "Please select an inquiry category"),
  company: z.string().optional(),
  message: z.string().min(10, "Message should be at least 10 characters"),
  hp_website: z.string().optional(),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

const CATEGORIES = [
  "Sales & Demo",
  "Product Question",
  "Partnership & Careers",
  "Security & Privacy",
  "General Inquiry",
];

export default function ContactForm() {
  const [submissionState, setSubmissionState] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    watch,
    setValue,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      category: "Sales & Demo",
      company: "",
      message: "",
      hp_website: "",
    },
  });

  const selectedCategory = watch("category");

  const onSubmit = async (data: ContactFormData) => {
    // Honeypot check
    if (data.hp_website && data.hp_website.trim().length > 0) {
      setSubmissionState("success");
      return;
    }

    setSubmissionState("loading");
    setErrorMessage(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        throw new Error(`Server returned ${res.status}`);
      }

      setSubmissionState("success");
      reset();
    } catch {
      setSubmissionState("error");
      setErrorMessage(
        "Could not submit via API. You can still email us directly at hirelytics.ai@gmail.com."
      );
    }
  };

  if (submissionState === "success") {
    return (
      <div className="bg-white rounded-3xl border border-[#E3E8F7] p-8 sm:p-10 shadow-xl shadow-[#0B1250]/5 text-center animate-fade-in">
        <div className="w-16 h-16 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto mb-6 shadow-sm">
          <CheckCircle2 size={32} />
        </div>
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 text-xs font-semibold mb-3">
          <Sparkles size={13} />
          Message Received
        </div>
        <h3 className="text-2xl font-extrabold text-[#0B1250] mb-3">
          Thank you for reaching out!
        </h3>
        <p className="text-sm text-[#4B5578] leading-relaxed mb-6 max-w-md mx-auto">
          We have safely received your inquiry. A member of the Hirelytics team will review your message and get back to you within one business day.
        </p>

        <div className="bg-[#F6F8FF] border border-[#E3E8F7] rounded-2xl p-4 text-xs text-[#4B5578] max-w-sm mx-auto mb-6">
          Urgent question? You can always reach us directly at{" "}
          <a
            href="mailto:hirelytics.ai@gmail.com"
            className="text-[#2F70FE] font-semibold hover:underline"
          >
            hirelytics.ai@gmail.com
          </a>
        </div>

        <button
          type="button"
          onClick={() => setSubmissionState("idle")}
          className="text-xs font-semibold text-[#2F70FE] hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-3xl border border-[#E3E8F7] p-8 sm:p-10 shadow-xl shadow-[#0B1250]/5">
      <div className="mb-6">
        <span className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-[#F6F8FF] border border-[#E3E8F7] text-[#2F70FE] mb-2.5">
          Direct Message
        </span>
        <h2 className="text-2xl font-extrabold text-[#0B1250]">
          Send us a message
        </h2>
        <p className="text-xs sm:text-sm text-[#4B5578] mt-1">
          Have a question or request? Fill out the details below.
        </p>
      </div>

      {submissionState === "error" && errorMessage && (
        <div
          role="alert"
          className="mb-6 p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-xs flex items-start gap-2.5"
        >
          <AlertCircle size={16} className="text-amber-600 shrink-0 mt-0.5" />
          <div className="flex-1">
            <p className="font-semibold mb-0.5">Submission notice</p>
            <p>{errorMessage}</p>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
        {/* Honeypot field */}
        <div className="hidden" aria-hidden="true">
          <label htmlFor="hp_website_contact">Website</label>
          <input
            id="hp_website_contact"
            type="text"
            tabIndex={-1}
            autoComplete="off"
            {...register("hp_website")}
          />
        </div>

        {/* Category Pills */}
        <div>
          <label className="block text-xs font-semibold text-[#0B1250] mb-2">
            Inquiry Topic *
          </label>
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => {
              const active = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setValue("category", cat)}
                  className={`text-xs px-3 py-1.5 rounded-full font-medium transition-all duration-150 cursor-pointer ${
                    active
                      ? "bg-[#2F70FE] text-white shadow-sm"
                      : "bg-[#F6F8FF] text-[#4B5578] border border-[#E3E8F7] hover:border-[#2F70FE]/40"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Name & Email */}
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="contact-name"
              className="block text-xs font-semibold text-[#0B1250] mb-1"
            >
              Your Name *
            </label>
            <input
              id="contact-name"
              type="text"
              placeholder="e.g. Alex Morgan"
              className={`w-full px-3.5 py-2.5 text-xs rounded-xl border bg-[#F6F8FF] text-[#0B1250] placeholder:text-[#4B5578]/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#2F70FE] transition-colors ${
                errors.name ? "border-red-400" : "border-[#E3E8F7]"
              }`}
              {...register("name")}
            />
            {errors.name && (
              <p className="text-[11px] text-red-500 mt-1">{errors.name.message}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="contact-email"
              className="block text-xs font-semibold text-[#0B1250] mb-1"
            >
              Email Address *
            </label>
            <input
              id="contact-email"
              type="email"
              placeholder="you@company.com"
              className={`w-full px-3.5 py-2.5 text-xs rounded-xl border bg-[#F6F8FF] text-[#0B1250] placeholder:text-[#4B5578]/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#2F70FE] transition-colors ${
                errors.email ? "border-red-400" : "border-[#E3E8F7]"
              }`}
              {...register("email")}
            />
            {errors.email && (
              <p className="text-[11px] text-red-500 mt-1">{errors.email.message}</p>
            )}
          </div>
        </div>

        {/* Company */}
        <div>
          <label
            htmlFor="contact-company"
            className="block text-xs font-semibold text-[#0B1250] mb-1"
          >
            Company / Organization (optional)
          </label>
          <input
            id="contact-company"
            type="text"
            placeholder="e.g. Acme Labs"
            className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-[#E3E8F7] bg-[#F6F8FF] text-[#0B1250] placeholder:text-[#4B5578]/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#2F70FE] transition-colors"
            {...register("company")}
          />
        </div>

        {/* Message */}
        <div>
          <label
            htmlFor="contact-message"
            className="block text-xs font-semibold text-[#0B1250] mb-1"
          >
            Your Message *
          </label>
          <textarea
            id="contact-message"
            rows={4}
            placeholder="Tell us about your team's hiring workflow, questions, or requirements..."
            className={`w-full px-3.5 py-2.5 text-xs rounded-xl border bg-[#F6F8FF] text-[#0B1250] placeholder:text-[#4B5578]/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#2F70FE] transition-colors resize-none ${
              errors.message ? "border-red-400" : "border-[#E3E8F7]"
            }`}
            {...register("message")}
          />
          {errors.message && (
            <p className="text-[11px] text-red-500 mt-1">{errors.message.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={submissionState === "loading"}
          className="btn-gradient w-full justify-center text-xs py-3 rounded-xl disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
        >
          {submissionState === "loading" ? (
            <>
              <Loader2 size={14} className="animate-spin" />
              Sending Message…
            </>
          ) : (
            <>
              Send message
              <Send size={13} />
            </>
          )}
        </button>

        <p className="text-[11px] text-[#9CA5C2] text-center pt-1">
          Prefer plain email? Reach us directly at{" "}
          <a
            href="mailto:hirelytics.ai@gmail.com"
            className="text-[#2F70FE] hover:underline"
          >
            hirelytics.ai@gmail.com
          </a>
        </p>
      </form>
    </div>
  );
}
