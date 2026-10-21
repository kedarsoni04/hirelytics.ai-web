import { FileText, Mic, BarChart2, Kanban } from "lucide-react";

type MockupType = "resume" | "interview" | "scorecard" | "pipeline";

function ResumeMockup() {
  const candidates = [
    { name: "Priya S.", match: 94, color: "#02B9FE" },
    { name: "Marcus T.", match: 87, color: "#2F70FE" },
    { name: "Lena W.", match: 81, color: "#694EFE" },
    { name: "Daniel R.", match: 73, color: "#9B7DFF" },
  ];
  return (
    <div className="bg-white rounded-2xl border border-[#E3E8F7] shadow-lg p-5 w-full max-w-sm">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-7 h-7 rounded-lg bg-[#F6F8FF] flex items-center justify-center">
          <FileText size={14} className="text-[#2F70FE]" />
        </div>
        <div>
          <p className="text-[11px] font-semibold text-[#0B1250]">Resume Screening</p>
          <p className="text-[10px] text-[#4B5578]">Senior Software Engineer · 12 applicants</p>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        {candidates.map((c, i) => (
          <div key={c.name} className="flex items-center gap-3 p-2.5 rounded-xl bg-[#F6F8FF] border border-[#E3E8F7]">
            <span className="text-[10px] font-bold text-[#4B5578] w-4 text-center">
              #{i + 1}
            </span>
            <div className="flex-1">
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-semibold text-[#0B1250]">{c.name}</span>
                <span className="text-xs font-bold" style={{ color: c.color }}>{c.match}%</span>
              </div>
              <div className="h-1 bg-[#E3E8F7] rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full"
                  style={{ width: `${c.match}%`, backgroundColor: c.color }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <p className="text-[10px] text-[#4B5578] mt-3 text-center">
        Ranked by semantic JD match · Sample data
      </p>
    </div>
  );
}

function InterviewMockup() {
  return (
    <div className="bg-[#04135B] rounded-2xl border border-white/10 shadow-xl p-5 w-full max-w-sm">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-7 h-7 rounded-lg bg-white/10 flex items-center justify-center">
          <Mic size={14} className="text-[#02B9FE]" />
        </div>
        <div>
          <p className="text-[11px] font-semibold text-white">AI Voice Interview</p>
          <p className="text-[10px] text-white/50">Live · Question 2 of 6</p>
        </div>
        <span className="ml-auto flex items-center gap-1 text-[10px] font-semibold text-red-400">
          <span className="w-1.5 h-1.5 rounded-full bg-red-400 animate-pulse" />
          REC
        </span>
      </div>

      {/* AI Question with Follow-up tag */}
      <div className="bg-white/6 rounded-xl p-3 mb-3">
        <div className="flex items-center justify-between mb-1.5">
          <p className="text-white/40 text-[10px] font-semibold uppercase tracking-wider">
            AI Question
          </p>
          <span className="px-1.5 py-0.5 rounded text-[9px] font-bold bg-[#694EFE]/40 text-[#C4B5FD] border border-[#694EFE]/50">
            Follow-up
          </span>
        </div>
        <p className="text-white text-xs leading-relaxed">
          &quot;You mentioned message partitioning earlier. How would you handle hot-partition bottlenecks under peak write load?&quot;
        </p>
      </div>

      {/* Rubric Evidence Line */}
      <div className="bg-white/5 border border-white/10 rounded-xl p-2.5 mb-3">
        <div className="flex items-center justify-between text-[10px] mb-1">
          <span className="text-[#02B9FE] font-medium">Rubric Match · Key Points Addressed</span>
          <span className="text-emerald-400 font-semibold text-[9px]">Evaluated</span>
        </div>
        <p className="text-white/80 text-[10px] leading-snug italic">
          Evidence: &quot;I isolated write shards by tenant hash and introduced backpressure buffers to prevent queue saturation.&quot;
        </p>
      </div>

      {/* Informational Delivery Insights */}
      <div className="flex items-center justify-between text-[9px] text-white/50 mb-2 px-0.5">
        <span>Pace: 142 wpm</span>
        <span>Pauses: 2</span>
        <span>Fillers (approx.): 1</span>
      </div>

      {/* Waveform */}
      <div className="flex items-center gap-0.5 h-7 mb-2" aria-label="Voice waveform">
        {[3, 5, 8, 6, 4, 9, 7, 5, 8, 6, 4, 7, 5, 8, 6, 3, 5, 7, 4, 6].map((h, i) => (
          <div
            key={i}
            className="flex-1 rounded-full bg-gradient-to-t from-[#02B9FE] to-[#694EFE] opacity-80 animate-waveform"
            style={{
              height: `${h * 8}%`,
              animationDelay: `${(i % 5) * 0.18}s`,
              animationDuration: `${1 + (i % 3) * 0.25}s`,
            }}
          />
        ))}
      </div>
      <div className="flex items-center gap-2 text-[10px] text-white/40">
        <span className="text-white/60 font-medium">Transcribing audio…</span>
        <span className="ml-auto">0:47</span>
      </div>
      <p className="text-[10px] text-white/30 mt-2 text-center">Sample data</p>
    </div>
  );
}

function ScorecardSmallMockup() {
  const pillars = [
    { label: "Job Match", score: 88, color: "#02B9FE" },
    { label: "Programming", score: 76, color: "#2F70FE" },
    { label: "Soft Skills", score: 82, color: "#694EFE" },
    { label: "Tech Interview", score: 79, color: "#9B7DFF" },
  ];
  return (
    <div className="bg-white rounded-2xl border border-[#E3E8F7] shadow-lg p-5 w-full max-w-sm">
      <div className="flex items-center justify-between mb-4">
        <div>
          <p className="text-[11px] font-semibold text-[#0B1250]">Four-Pillar Scorecard</p>
          <p className="text-[10px] text-[#4B5578]">Alex Johnson · Sample data</p>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-2xl font-extrabold text-[#0B1250]">82</span>
          <span className="text-[10px] text-[#4B5578]">Overall</span>
        </div>
      </div>
      <div className="flex flex-col gap-3">
        {pillars.map((p) => (
          <div key={p.label}>
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs text-[#4B5578]">{p.label}</span>
              <span className="text-xs font-bold" style={{ color: p.color }}>{p.score}</span>
            </div>
            <div className="h-1.5 bg-[#E3E8F7] rounded-full overflow-hidden">
              <div
                className="h-full rounded-full"
                style={{ width: `${p.score}%`, backgroundColor: p.color }}
              />
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 p-2.5 rounded-xl bg-[#F6F8FF] border border-[#E3E8F7]">
        <p className="text-[10px] text-[#4B5578] font-medium">
          <span className="font-semibold text-[#0B1250]">AI insight:</span> Strong systems design and clear communication across all pillars.
        </p>
      </div>
    </div>
  );
}

function PipelineMockup() {
  const stages = [
    { name: "Applied", count: 47, color: "#E3E8F7", text: "#0B1250" },
    { name: "Screened", count: 18, color: "#DBEAFE", text: "#1E40AF" },
    { name: "Interview", count: 9, color: "#EDE9FE", text: "#6D28D9" },
    { name: "Offer", count: 2, color: "#D1FAE5", text: "#065F46" },
  ];
  return (
    <div className="bg-white rounded-2xl border border-[#E3E8F7] shadow-lg p-5 w-full max-w-sm">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-7 h-7 rounded-lg bg-[#F6F8FF] flex items-center justify-center">
          <Kanban size={14} className="text-[#2F70FE]" />
        </div>
        <div>
          <p className="text-[11px] font-semibold text-[#0B1250]">Hiring Pipeline</p>
          <p className="text-[10px] text-[#4B5578]">Senior Software Engineer · Sample data</p>
        </div>
      </div>
      <div className="flex gap-2">
        {stages.map((s) => (
          <div
            key={s.name}
            className="flex-1 rounded-xl p-2.5 flex flex-col gap-1.5"
            style={{ backgroundColor: s.color }}
          >
            <span className="text-[9px] font-semibold uppercase tracking-wide" style={{ color: s.text }}>
              {s.name}
            </span>
            <span className="text-xl font-extrabold" style={{ color: s.text }}>{s.count}</span>
          </div>
        ))}
      </div>
      {/* Mini funnel bar */}
      <div className="mt-4">
        <div className="flex items-center justify-between mb-1">
          <span className="text-[10px] text-[#4B5578]">Conversion rate</span>
          <span className="text-[10px] font-bold text-[#2F70FE]">4.3%</span>
        </div>
        <div className="h-2 bg-[#F6F8FF] rounded-full overflow-hidden border border-[#E3E8F7]">
          <div className="h-full rounded-full bg-gradient-to-r from-[#02B9FE] to-[#694EFE]" style={{ width: "38%" }} />
        </div>
      </div>
      <div className="mt-3 flex items-center gap-1.5 text-[10px] text-[#4B5578]">
        <BarChart2 size={12} className="text-[#2F70FE]" />
        <span>Real-time updates · Analytics available</span>
      </div>
    </div>
  );
}

export default function FeatureMockup({ type }: { type: MockupType }) {
  switch (type) {
    case "resume":
      return <ResumeMockup />;
    case "interview":
      return <InterviewMockup />;
    case "scorecard":
      return <ScorecardSmallMockup />;
    case "pipeline":
      return <PipelineMockup />;
  }
}
