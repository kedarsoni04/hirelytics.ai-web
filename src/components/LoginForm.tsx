"use client";

import { useState } from "react";
import Image from "next/image";
import { Eye, EyeOff, ArrowRight, Loader2, LogOut, CheckCircle2, AlertCircle, Sparkles } from "lucide-react";
import { signIn, signOut, useSession } from "next-auth/react";

interface LoginFormProps {
  appUrl: string;
}

export default function LoginForm({ appUrl }: LoginFormProps) {
  const { data: session, status } = useSession();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);
  const [authError, setAuthError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Redirect to the real app with credentials
    const params = new URLSearchParams({ email });
    window.location.href = `${appUrl}/login?${params.toString()}`;
  };

  const handleGoogleSignIn = async () => {
    try {
      setGoogleLoading(true);
      setAuthError(null);
      await signIn("google", {
        callbackUrl: window.location.origin,
      });
    } catch (err: unknown) {
      console.error("Google sign in error:", err);
      setAuthError(
        "Could not initiate Google sign in. Please verify your AUTH_GOOGLE_ID and AUTH_GOOGLE_SECRET in .env.local."
      );
      setGoogleLoading(false);
    }
  };

  // If the user is already authenticated via Google / NextAuth:
  if (status === "authenticated" && session?.user) {
    return (
      <div className="flex flex-col gap-6 animate-fade-in">
        <div className="p-5 rounded-2xl bg-emerald-50 border border-emerald-200/80 flex items-start gap-3.5">
          <CheckCircle2 size={20} className="text-emerald-600 shrink-0 mt-0.5" />
          <div className="flex-1">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[11px] font-bold mb-1.5">
              <Sparkles size={11} />
              Connected with Google
            </span>
            <p className="text-sm font-bold text-[#0B1250]">
              Signed in as {session.user.name || "User"}
            </p>
            <p className="text-xs text-[#4B5578] break-all">{session.user.email}</p>
          </div>
          {session.user.image ? (
            <Image
              src={session.user.image}
              alt={session.user.name || "User Avatar"}
              width={40}
              height={40}
              className="rounded-full border border-emerald-300"
            />
          ) : (
            <div className="w-10 h-10 rounded-full bg-[#2F70FE] text-white font-bold flex items-center justify-center text-sm">
              {(session.user.name?.[0] || session.user.email?.[0] || "U").toUpperCase()}
            </div>
          )}
        </div>

        <div className="flex flex-col gap-3">
          <a
            href={appUrl}
            className="btn-gradient w-full justify-center text-sm py-3 rounded-xl flex items-center gap-2"
          >
            Go to Hiring Dashboard
            <ArrowRight size={16} />
          </a>

          <button
            type="button"
            onClick={() => signOut({ callbackUrl: window.location.origin })}
            className="w-full rounded-xl border border-[#E3E8F7] bg-white px-4 py-3 text-sm font-semibold text-[#4B5578] hover:bg-[#F6F8FF] hover:text-[#0B1250] transition-colors flex items-center justify-center gap-2 cursor-pointer"
          >
            <LogOut size={16} />
            Sign out
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
      {authError && (
        <div
          role="alert"
          className="p-3.5 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-xs flex items-start gap-2.5"
        >
          <AlertCircle size={16} className="text-amber-600 shrink-0 mt-0.5" />
          <div className="flex-1">
            <p className="font-semibold mb-0.5">Authentication Note</p>
            <p>{authError}</p>
          </div>
        </div>
      )}

      {/* Google SSO Button */}
      <button
        id="login-sso"
        type="button"
        disabled={googleLoading}
        onClick={handleGoogleSignIn}
        className="w-full rounded-xl border border-[#E3E8F7] bg-white px-4 py-3 text-sm font-semibold text-[#0B1250] hover:bg-[#F6F8FF] hover:border-[#2F70FE]/40 transition-all duration-200 flex items-center justify-center gap-2.5 cursor-pointer shadow-sm hover:shadow disabled:opacity-60 disabled:cursor-not-allowed"
        aria-label="Sign in with Google"
      >
        {googleLoading ? (
          <>
            <Loader2 size={18} className="animate-spin text-[#2F70FE]" />
            <span>Connecting to Google…</span>
          </>
        ) : (
          <>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                fill="#4285F4"
              />
              <path
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                fill="#34A853"
              />
              <path
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
                fill="#FBBC05"
              />
              <path
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                fill="#EA4335"
              />
            </svg>
            <span>Sign in with Google</span>
          </>
        )}
      </button>

      {/* Divider */}
      <div className="flex items-center gap-3 my-0.5">
        <div className="flex-1 h-px bg-[#E3E8F7]" />
        <span className="text-xs text-[#9CA5C2] font-medium">or continue with work email</span>
        <div className="flex-1 h-px bg-[#E3E8F7]" />
      </div>

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
            Sign in with email
            <ArrowRight size={16} />
          </>
        )}
      </button>
    </form>
  );
}
