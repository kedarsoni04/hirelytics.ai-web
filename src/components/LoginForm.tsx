"use client";

import { useState } from "react";
import Link from "next/link";
import { Eye, EyeOff, ArrowRight, Loader2 } from "lucide-react";

interface LoginFormProps {
  appUrl: string;
}

export default function LoginForm({ appUrl }: LoginFormProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Redirect to the real app with credentials — in production this would
    // POST to the auth endpoint. For now we redirect to the app URL.
    const params = new URLSearchParams({ email });
    window.location.href = `${appUrl}/login?${params.toString()}`;
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
      {/* Email */}
      <div className="flex flex-col gap-1.5">
        <label
          htmlFor="login-email"
          className="text-sm font-semibold text-[#0B1250]"
        >
          Work email
        </label>
        <input
          id="login-email"
          type="email"
          autoComplete="email"
          required
          placeholder="you@company.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full rounded-xl border border-[#E3E8F7] bg-[#F6F8FF] px-4 py-3 text-sm text-[#0B1250] placeholder-[#9CA5C2] outline-none transition-all duration-200 focus:border-[#2F70FE] focus:bg-white focus:ring-3 focus:ring-[#2F70FE]/10"
        />
      </div>

      {/* Password */}
      <div className="flex flex-col gap-1.5">
        <div className="flex items-center justify-between">
          <label
            htmlFor="login-password"
            className="text-sm font-semibold text-[#0B1250]"
          >
            Password
          </label>
          <a
            href={`${appUrl}/forgot-password`}
            className="text-xs text-[#2F70FE] hover:underline font-medium"
          >
            Forgot password?
          </a>
        </div>
        <div className="relative">
          <input
            id="login-password"
            type={showPassword ? "text" : "password"}
            autoComplete="current-password"
            required
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full rounded-xl border border-[#E3E8F7] bg-[#F6F8FF] px-4 py-3 pr-11 text-sm text-[#0B1250] placeholder-[#9CA5C2] outline-none transition-all duration-200 focus:border-[#2F70FE] focus:bg-white focus:ring-3 focus:ring-[#2F70FE]/10"
          />
          <button
            type="button"
            aria-label={showPassword ? "Hide password" : "Show password"}
            onClick={() => setShowPassword((v) => !v)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-[#9CA5C2] hover:text-[#4B5578] transition-colors p-1"
          >
            {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
          </button>
        </div>
      </div>

      {/* Submit */}
      <button
        id="login-submit"
        type="submit"
        disabled={loading || !email || !password}
        className="btn-gradient justify-center mt-1 disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none"
      >
        {loading ? (
          <>
            <Loader2 size={16} className="animate-spin" />
            Signing in…
          </>
        ) : (
          <>
            Sign in
            <ArrowRight size={16} />
          </>
        )}
      </button>

      {/* Divider */}
      <div className="flex items-center gap-3 my-1">
        <div className="flex-1 h-px bg-[#E3E8F7]" />
        <span className="text-xs text-[#9CA5C2] font-medium">or</span>
        <div className="flex-1 h-px bg-[#E3E8F7]" />
      </div>

      {/* SSO coming soon */}
      <button
        id="login-sso"
        type="button"
        disabled
        className="w-full rounded-xl border border-[#E3E8F7] bg-white px-4 py-3 text-sm font-semibold text-[#4B5578] flex items-center justify-center gap-2.5 cursor-not-allowed opacity-55"
        aria-label="Single Sign-On — coming soon"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
          <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
          <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
          <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
        </svg>
        Sign in with Google
        <span className="text-[10px] font-normal text-[#9CA5C2] ml-1">(Coming soon)</span>
      </button>
    </form>
  );
}
