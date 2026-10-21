"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Loader2, CheckCircle2, AlertCircle, ArrowRight, Calendar } from "lucide-react";
import { BOOK_DEMO_CONTENT } from "@/content/site";

const leadFormSchema = z.object({
  name: z.string().min(2, "Please enter your full name"),
  workEmail: z.string().email("Please enter a valid email address"),
  company: z.string().min(2, "Please enter your company name"),
  role: z.string().min(2, "Please enter your job role/title"),
  companySize: z.string().min(1, "Please select company size"),
  hiresPerYear: z.string().min(1, "Please select expected hires per year"),
  message: z.string().optional(),
  hp_website: z.string().optional(), // Honeypot
});

type LeadFormData = z.infer<typeof leadFormSchema>;

export default function BookDemoForm() {
  const [submissionState, setSubmissionState] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<LeadFormData>({
    resolver: zodResolver(leadFormSchema),
    defaultValues: {
      name: "",
      workEmail: "",
      company: "",
      role: "",
      companySize: "",
      hiresPerYear: "",
      message: "",
      hp_website: "",
    },
  });

  const onSubmit = async (data: LeadFormData) => {
    // Honeypot check: If bot filled hp_website, silently pretend success
    if (data.hp_website && data.hp_website.trim().length > 0) {
      setSubmissionState("success");
      return;
    }

    setSubmissionState("loading");
    setErrorMessage(null);

    const apiUrl = process.env.NEXT_PUBLIC_API_URL || "";

    try {
      const response = await fetch(`${apiUrl}/api/leads`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: data.name,
          work_email: data.workEmail,
          company: data.company,
          role: data.role,
          company_size: data.companySize,
          hires_per_year: data.hiresPerYear,
          message: data.message || "",
          hp_website: data.hp_website || "",
        }),
      });

      if (!response.ok) {
        throw new Error(`Server returned status ${response.status}`);
      }

      setSubmissionState("success");
      reset();
    } catch {
      // If mock API is offline or returns an error, inform the user or provide fallback
      setSubmissionState("error");
      setErrorMessage(
        "Could not send your request directly to the API endpoint right now. You can also email us directly at hirelytics.ai@gmail.com."
      );
    }
  };

  if (submissionState === "success") {
    return (
      <div className="bg-white rounded-3xl border border-[#E3E8F7] p-8 sm:p-10 shadow-lg text-center animate-fade-in">
        <div className="w-16 h-16 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto mb-6 shadow-sm">
          <CheckCircle2 size={32} />
        </div>
        <h3 className="text-2xl font-extrabold text-[#0B1250] mb-3">
          {BOOK_DEMO_CONTENT.form.successTitle}
        </h3>
        <p className="text-sm text-[#4B5578] leading-relaxed mb-8 max-w-md mx-auto">
          {BOOK_DEMO_CONTENT.form.successMessage}
        </p>

        <div className="bg-[#F6F8FF] border border-[#E3E8F7] rounded-2xl p-5 text-left mb-8">
          <h4 className="text-xs font-bold text-[#0B1250] uppercase tracking-wider mb-2 flex items-center gap-2">
            <Calendar size={14} className="text-[#2F70FE]" />
            Next Steps
          </h4>
          <ol className="text-xs text-[#4B5578] space-y-2 list-decimal list-inside leading-relaxed">
            <li>Our solutions architect will review your role requirements.</li>
            <li>You will receive an email invite to pick a convenient calendar slot.</li>
            <li>We will prepare a customized pilot environment ready for your session.</li>
          </ol>
        </div>

        <button
          type="button"
          onClick={() => setSubmissionState("idle")}
          className="text-xs font-semibold text-[#2F70FE] hover:underline"
        >
          Submit another request
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-3xl border border-[#E3E8F7] p-8 sm:p-10 shadow-lg">
      <div className="mb-6">
        <h2 className="text-2xl font-extrabold text-[#0B1250]">
          {BOOK_DEMO_CONTENT.form.title}
        </h2>
        <p className="text-xs sm:text-sm text-[#4B5578] mt-1">
          {BOOK_DEMO_CONTENT.form.subtitle}
        </p>
      </div>

      {submissionState === "error" && errorMessage && (
        <div
          role="alert"
          className="mb-6 p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-xs flex items-start gap-2.5"
        >
          <AlertCircle size={16} className="text-amber-600 shrink-0 mt-0.5" />
          <div className="flex-1">
            <p className="font-semibold mb-0.5">Submission issue</p>
            <p>{errorMessage}</p>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
        {/* Honeypot field (hidden from screen readers & visual users) */}
        <div className="hidden" aria-hidden="true">
          <label htmlFor="hp_website">Website</label>
          <input
            id="hp_website"
            type="text"
            tabIndex={-1}
            autoComplete="off"
            {...register("hp_website")}
          />
        </div>

        {/* Name & Work Email */}
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="name" className="block text-xs font-semibold text-[#0B1250] mb-1">
              Full Name *
            </label>
            <input
              id="name"
              type="text"
              placeholder="e.g. Jordan Smith"
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
            <label htmlFor="workEmail" className="block text-xs font-semibold text-[#0B1250] mb-1">
              Work Email *
            </label>
            <input
              id="workEmail"
              type="email"
              placeholder="name@company.com"
              className={`w-full px-3.5 py-2.5 text-xs rounded-xl border bg-[#F6F8FF] text-[#0B1250] placeholder:text-[#4B5578]/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#2F70FE] transition-colors ${
                errors.workEmail ? "border-red-400" : "border-[#E3E8F7]"
              }`}
              {...register("workEmail")}
            />
            {errors.workEmail && (
              <p className="text-[11px] text-red-500 mt-1">{errors.workEmail.message}</p>
            )}
          </div>
        </div>

        {/* Company & Role */}
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="company" className="block text-xs font-semibold text-[#0B1250] mb-1">
              Company Name *
            </label>
            <input
              id="company"
              type="text"
              placeholder="e.g. Acme Corp"
              className={`w-full px-3.5 py-2.5 text-xs rounded-xl border bg-[#F6F8FF] text-[#0B1250] placeholder:text-[#4B5578]/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#2F70FE] transition-colors ${
                errors.company ? "border-red-400" : "border-[#E3E8F7]"
              }`}
              {...register("company")}
            />
            {errors.company && (
              <p className="text-[11px] text-red-500 mt-1">{errors.company.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="role" className="block text-xs font-semibold text-[#0B1250] mb-1">
              Your Role / Title *
            </label>
            <input
              id="role"
              type="text"
              placeholder="e.g. Head of Talent"
              className={`w-full px-3.5 py-2.5 text-xs rounded-xl border bg-[#F6F8FF] text-[#0B1250] placeholder:text-[#4B5578]/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#2F70FE] transition-colors ${
                errors.role ? "border-red-400" : "border-[#E3E8F7]"
              }`}
              {...register("role")}
            />
            {errors.role && (
              <p className="text-[11px] text-red-500 mt-1">{errors.role.message}</p>
            )}
          </div>
        </div>

        {/* Company Size & Hires Per Year */}
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="companySize" className="block text-xs font-semibold text-[#0B1250] mb-1">
              Company Size *
            </label>
            <select
              id="companySize"
              className={`w-full px-3.5 py-2.5 text-xs rounded-xl border bg-[#F6F8FF] text-[#0B1250] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#2F70FE] transition-colors ${
                errors.companySize ? "border-red-400" : "border-[#E3E8F7]"
              }`}
              {...register("companySize")}
            >
              <option value="">Select size</option>
              <option value="1-10">1 – 10 employees</option>
              <option value="11-50">11 – 50 employees</option>
              <option value="51-200">51 – 200 employees</option>
              <option value="201-500">201 – 500 employees</option>
              <option value="500+">500+ employees</option>
            </select>
            {errors.companySize && (
              <p className="text-[11px] text-red-500 mt-1">{errors.companySize.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="hiresPerYear" className="block text-xs font-semibold text-[#0B1250] mb-1">
              Hires Per Year *
            </label>
            <select
              id="hiresPerYear"
              className={`w-full px-3.5 py-2.5 text-xs rounded-xl border bg-[#F6F8FF] text-[#0B1250] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#2F70FE] transition-colors ${
                errors.hiresPerYear ? "border-red-400" : "border-[#E3E8F7]"
              }`}
              {...register("hiresPerYear")}
            >
              <option value="">Select hiring volume</option>
              <option value="1-10">1 – 10 hires / yr</option>
              <option value="11-50">11 – 50 hires / yr</option>
              <option value="51-100">51 – 100 hires / yr</option>
              <option value="100+">100+ hires / yr</option>
            </select>
            {errors.hiresPerYear && (
              <p className="text-[11px] text-red-500 mt-1">{errors.hiresPerYear.message}</p>
            )}
          </div>
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-xs font-semibold text-[#0B1250] mb-1">
            Anything specific you&apos;d like to see? (Optional)
          </label>
          <textarea
            id="message"
            rows={3}
            placeholder="Tell us about your current hiring workflow or tech stack..."
            className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-[#E3E8F7] bg-[#F6F8FF] text-[#0B1250] placeholder:text-[#4B5578]/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#2F70FE] transition-colors"
            {...register("message")}
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={submissionState === "loading"}
          className="btn-gradient w-full py-3.5 rounded-xl font-bold text-sm justify-center disabled:opacity-60 disabled:cursor-not-allowed shadow-md hover:shadow-lg transition-all"
        >
          {submissionState === "loading" ? (
            <>
              <Loader2 size={16} className="animate-spin" />
              Submitting request...
            </>
          ) : (
            <>
              Request Personalized Demo
              <ArrowRight size={16} />
            </>
          )}
        </button>

        <p className="text-[11px] text-center text-[#4B5578] mt-2">
          No credit card required. Full feature access during the early pilot.
        </p>
      </form>
    </div>
  );
}
