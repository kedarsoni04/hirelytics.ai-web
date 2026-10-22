"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Calendar,
  Clock,
  ArrowRight,
  User,
  Sparkles,
  CheckCircle2,
  Mail,
  BookOpen,
} from "lucide-react";

interface Article {
  id: string;
  category: string;
  title: string;
  summary: string;
  date: string;
  readTime: string;
  author: string;
}

interface BlogFilterGridProps {
  categories: string[];
  featured: Article;
  articles: Article[];
}

export default function BlogFilterGrid({
  categories,
  featured,
  articles,
}: BlogFilterGridProps) {
  const [activeCategory, setActiveCategory] = useState("All");
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [loading, setLoading] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  const filteredArticles =
    activeCategory === "All"
      ? articles
      : articles.filter((art) => art.category === activeCategory);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubscribed(true);
    }, 600);
  };

  return (
    <div className="flex flex-col gap-16">
      {/* ── Featured Article Card ── */}
      <div className="relative rounded-3xl p-8 sm:p-12 bg-gradient-to-br from-[#04135B] to-[#0B1871] text-white shadow-xl overflow-hidden border border-[#2F70FE]/30">
        <div
          className="absolute top-0 right-0 w-96 h-96 bg-[#02B9FE]/10 rounded-full blur-3xl pointer-events-none"
          aria-hidden="true"
        />
        <div
          className="absolute -bottom-10 -left-10 w-80 h-80 bg-[#694EFE]/15 rounded-full blur-3xl pointer-events-none"
          aria-hidden="true"
        />

        <div className="relative z-10 max-w-3xl">
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#02B9FE]/20 text-[#02B9FE] text-xs font-bold uppercase tracking-wider border border-[#02B9FE]/30">
              <Sparkles size={13} />
              Featured Deep-Dive
            </span>
            <span className="text-xs text-white/70 font-medium px-2.5 py-1 rounded-full bg-white/10">
              {featured.category}
            </span>
            <span className="text-xs text-white/60 flex items-center gap-1">
              <Calendar size={13} />
              {featured.date}
            </span>
            <span className="text-xs text-white/60 flex items-center gap-1">
              <Clock size={13} />
              {featured.readTime}
            </span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold leading-tight text-white mb-4">
            {featured.title}
          </h2>

          <p className="text-white/80 text-base sm:text-lg leading-relaxed mb-8">
            {featured.summary}
          </p>

          <div className="flex flex-wrap items-center justify-between gap-6 pt-6 border-t border-white/15">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#02B9FE] to-[#694EFE] flex items-center justify-center font-bold text-sm text-white shadow-sm">
                AI
              </div>
              <div>
                <p className="text-sm font-semibold text-white">{featured.author}</p>
                <p className="text-xs text-white/60">Hirelytics Research</p>
              </div>
            </div>

            <button
              onClick={() => setSelectedArticle(featured)}
              className="btn-gradient inline-flex items-center gap-2 text-sm font-semibold px-5 py-2.5 rounded-xl cursor-pointer"
            >
              <span>Read article</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* ── Category Filter Bar ── */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2 border-b border-[#E3E8F7]">
        <div className="flex flex-wrap items-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                activeCategory === cat
                  ? "bg-[#04135B] text-white shadow-md scale-105"
                  : "bg-[#F6F8FF] text-[#4B5578] hover:bg-[#E3E8F7] hover:text-[#0B1250]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
        <p className="text-xs text-[#4B5578] font-medium">
          Showing {filteredArticles.length} {filteredArticles.length === 1 ? "article" : "articles"}
        </p>
      </div>

      {/* ── Articles Grid ── */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredArticles.map((article) => (
          <article
            key={article.id}
            className="bg-white border border-[#E3E8F7] rounded-2xl p-6 sm:p-7 flex flex-col justify-between card-hover-glow transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#2F70FE] bg-[#2F70FE]/10 px-2.5 py-1 rounded-full">
                  {article.category}
                </span>
                <span className="text-xs text-[#4B5578] flex items-center gap-1 font-medium">
                  <Clock size={12} />
                  {article.readTime}
                </span>
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-[#0B1250] mb-3 group-hover:text-[#2F70FE] transition-colors leading-snug">
                {article.title}
              </h3>

              <p className="text-sm text-[#4B5578] leading-relaxed line-clamp-3 mb-6">
                {article.summary}
              </p>
            </div>

            <div className="pt-4 border-t border-[#F0F4FC] flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-full bg-[#F6F8FF] border border-[#E3E8F7] flex items-center justify-center text-[#2F70FE]">
                  <User size={13} />
                </div>
                <span className="text-xs text-[#4B5578] font-medium">{article.author}</span>
              </div>

              <button
                onClick={() => setSelectedArticle(article)}
                className="text-xs font-bold text-[#2F70FE] inline-flex items-center gap-1 group-hover:gap-2 transition-all cursor-pointer"
              >
                <span>Read</span>
                <ArrowRight size={13} />
              </button>
            </div>
          </article>
        ))}
      </div>

      {/* ── Article Reading Modal / Drawer ── */}
      {selectedArticle && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#04135B]/70 backdrop-blur-sm animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
        >
          <div className="bg-white rounded-3xl p-6 sm:p-10 max-w-2xl w-full shadow-2xl border border-[#E3E8F7] max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between gap-4 mb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#2F70FE] bg-[#2F70FE]/10 px-3 py-1 rounded-full">
                {selectedArticle.category}
              </span>
              <button
                onClick={() => setSelectedArticle(null)}
                className="text-gray-400 hover:text-gray-700 text-lg font-bold p-1 cursor-pointer"
                aria-label="Close modal"
              >
                ✕
              </button>
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1250] mb-3 leading-snug">
              {selectedArticle.title}
            </h2>

            <div className="flex items-center gap-4 text-xs text-[#4B5578] mb-6 pb-4 border-b border-[#E3E8F7]">
              <span>By {selectedArticle.author}</span>
              <span>•</span>
              <span>{selectedArticle.date}</span>
              <span>•</span>
              <span>{selectedArticle.readTime}</span>
            </div>

            <div className="prose prose-slate max-w-none text-sm text-[#4B5578] leading-relaxed space-y-4">
              <p className="text-base font-medium text-[#0B1250]">
                {selectedArticle.summary}
              </p>
              <div className="p-4 rounded-xl bg-[#F6F8FF] border border-[#E3E8F7]">
                <h4 className="font-bold text-[#0B1250] text-xs uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <BookOpen size={14} className="text-[#02B9FE]" /> Key Takeaways
                </h4>
                <ul className="list-disc list-inside space-y-1 text-xs text-[#4B5578]">
                  <li>Human-in-the-loop decision boundaries ensure recruitment compliance and ethics.</li>
                  <li>Multi-tenant architecture partitions candidate data and Whisper audio streams safely.</li>
                  <li>Explainable scorecards provide transparent reasoning quotes rather than opaque scores.</li>
                </ul>
              </div>
              <p>
                As part of our commitment to transparent engineering, the full white paper detailing
                the empirical benchmarks and algorithmic rubrics is available upon request for research
                partners and prospective customers.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-[#E3E8F7] flex flex-wrap items-center justify-between gap-4">
              <Link
                href="/book-demo"
                className="btn-gradient text-xs font-semibold px-4 py-2.5 rounded-xl inline-flex items-center gap-1.5"
              >
                <span>Experience this in a demo</span>
                <ArrowRight size={14} />
              </Link>
              <button
                onClick={() => setSelectedArticle(null)}
                className="btn-glass text-xs font-semibold px-4 py-2.5 rounded-xl cursor-pointer"
              >
                Close preview
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ── Newsletter Box ── */}
      <div className="rounded-3xl p-8 sm:p-12 bg-[#04135B] text-white border border-[#2F70FE]/20 text-center relative overflow-hidden">
        <div
          className="absolute -top-24 -right-24 w-72 h-72 bg-[#02B9FE]/10 rounded-full blur-3xl pointer-events-none"
          aria-hidden="true"
        />
        <div className="relative z-10 max-w-xl mx-auto">
          <div className="w-12 h-12 rounded-2xl bg-[#02B9FE]/10 border border-[#02B9FE]/30 text-[#02B9FE] flex items-center justify-center mx-auto mb-4">
            <Mail size={22} />
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
            Stay ahead in AI recruitment
          </h3>
          <p className="text-sm text-white/70 mb-6 leading-relaxed">
            Get our latest research papers, rubric updates, and engineering benchmarks delivered directly to your inbox.
          </p>

          {subscribed ? (
            <div className="p-4 rounded-xl bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-sm font-semibold flex items-center justify-center gap-2">
              <CheckCircle2 size={18} />
              <span>You&apos;re subscribed! Welcome to the Hirelytics research briefing.</span>
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your work email"
                className="flex-1 px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 text-sm focus:outline-none focus:ring-2 focus:ring-[#02B9FE]"
              />
              <button
                type="submit"
                disabled={loading}
                className="btn-gradient px-6 py-3 rounded-xl text-sm font-bold text-white whitespace-nowrap cursor-pointer disabled:opacity-50"
              >
                {loading ? "Subscribing..." : "Subscribe"}
              </button>
            </form>
          )}
          <p className="text-xs text-white/50 mt-3">
            No spam, ever. Unsubscribe with a single click at any time.
          </p>
        </div>
      </div>
    </div>
  );
}
