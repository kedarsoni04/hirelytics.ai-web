"use client";

import { useEffect, useRef, useState } from "react";

interface Pillar {
  label: string;
  score: number; // 0-100
  color: string;
}

const PILLARS: Pillar[] = [
  { label: "Job Match", score: 88, color: "#02B9FE" },
  { label: "Programming Skills", score: 76, color: "#2F70FE" },
  { label: "Soft Skills", score: 82, color: "#694EFE" },
  { label: "Technical Interview", score: 79, color: "#9B7DFF" },
];

const OVERALL = 82;

// SVG ring: r=39, circumference ≈ 245
const R = 39;
const CIRC = 2 * Math.PI * R;

export default function ScorecardMockup() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const ringOffset = CIRC - (OVERALL / 100) * CIRC;

  return (
    <div
      ref={ref}
      className="relative bg-[#07156A] rounded-2xl border border-white/10 p-6 shadow-2xl max-w-sm w-full mx-auto animate-float transition-all duration-300 hover:shadow-[0_20px_50px_rgba(47,112,254,0.25)]"
      role="img"
      aria-label="Sample scorecard mockup showing overall score and four pillar scores"
    >
      {/* Sample data badge */}
      <span className="absolute top-3 right-3 text-[10px] font-bold uppercase tracking-widest bg-white/10 text-white/50 px-2 py-0.5 rounded-full">
        Sample data
      </span>

      {/* Header */}
      <div className="mb-5">
        <p className="text-white/50 text-xs font-medium uppercase tracking-wider">
          Candidate Report
        </p>
        <h3 className="text-white font-bold text-base mt-0.5">
          Alex Johnson
        </h3>
        <p className="text-white/40 text-xs">Senior Software Engineer</p>
      </div>

      {/* Overall ring + pillars */}
      <div className="flex items-center gap-6">
        {/* SVG Ring */}
        <div className="flex-shrink-0 flex flex-col items-center gap-1">
          <svg
            width="100"
            height="100"
            viewBox="0 0 88 88"
            fill="none"
            aria-hidden="true"
          >
            {/* Track */}
            <circle
              cx="44"
              cy="44"
              r={R}
              stroke="rgba(255,255,255,0.08)"
              strokeWidth="9"
              fill="none"
            />
            {/* Fill */}
            <circle
              cx="44"
              cy="44"
              r={R}
              stroke="url(#ringGrad)"
              strokeWidth="9"
              fill="none"
              strokeLinecap="round"
              strokeDasharray={CIRC}
              strokeDashoffset={visible ? ringOffset : CIRC}
              transform="rotate(-90 44 44)"
              style={{
                transition: visible
                  ? "stroke-dashoffset 1.4s cubic-bezier(0.4,0,0.2,1)"
                  : "none",
              }}
            />
            <defs>
              <linearGradient id="ringGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#02B9FE" />
                <stop offset="100%" stopColor="#694EFE" />
              </linearGradient>
            </defs>
            <text
              x="44"
              y="44"
              dominantBaseline="middle"
              textAnchor="middle"
              fill="white"
              fontSize="18"
              fontWeight="700"
              fontFamily="Plus Jakarta Sans, sans-serif"
            >
              {OVERALL}
            </text>
            <text
              x="44"
              y="58"
              dominantBaseline="middle"
              textAnchor="middle"
              fill="rgba(255,255,255,0.45)"
              fontSize="8"
              fontFamily="Plus Jakarta Sans, sans-serif"
            >
              /100
            </text>
          </svg>
          <span className="text-white/50 text-[10px] font-medium">
            Overall score
          </span>
        </div>

        {/* Pillar bars */}
        <div className="flex-1 flex flex-col gap-3">
          {PILLARS.map((p, i) => (
            <div key={p.label}>
              <div className="flex items-center justify-between mb-0.5">
                <span className="text-white/65 text-[10px] font-medium leading-none">
                  {p.label}
                </span>
                <span className="text-white text-[10px] font-bold">{p.score}</span>
              </div>
              <div className="h-1.5 bg-white/8 rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full"
                  style={{
                    backgroundColor: p.color,
                    width: visible ? `${p.score}%` : "0%",
                    transition: visible
                      ? `width 1.2s cubic-bezier(0.4,0,0.2,1) ${i * 0.12}s`
                      : "none",
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* AI insight snippet */}
      <div className="mt-5 p-3 rounded-xl bg-white/5 border border-white/8">
        <p className="text-white/40 text-[10px] font-semibold uppercase tracking-wider mb-1">
          AI insight
        </p>
        <p className="text-white/70 text-[11px] leading-relaxed">
          Strong systems-design depth and clear communication. Soft-skill score reflects collaborative answers and structured problem-solving.
        </p>
      </div>

      {/* Shortlisted badge */}
      <div className="mt-4 flex items-center gap-2">
        <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold px-3 py-1 rounded-full bg-gradient-to-r from-[#02B9FE]/20 to-[#694EFE]/20 border border-[#694EFE]/30 text-[#9B7DFF]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#02B9FE] inline-block" />
          Auto-shortlisted · above threshold
        </span>
      </div>
    </div>
  );
}
