import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import BlogFilterGrid from "@/components/BlogFilterGrid";
import { BLOG_CONTENT } from "@/content/site";

export const metadata: Metadata = {
  title: "Blog & Research — Hirelytics.ai",
  description:
    "Explore engineering insights, AI ethics in hiring, explainable scorecards, and recruitment intelligence research from the Hirelytics team.",
  alternates: {
    canonical: "/blog",
  },
};

export default function BlogPage() {
  const { header, categories, featured, articles } = BLOG_CONTENT;

  return (
    <>
      <Navbar />
      <main id="main-content" className="flex-1">
        <PageHeader
          badge={header.badge}
          title={header.title}
          subtitle={header.subtitle}
          breadcrumbs={[{ label: "Blog" }]}
        />

        <section className="section-padding bg-[#F6F8FF]" aria-label="Blog Articles and Insights">
          <div className="container-xl max-w-6xl">
            <BlogFilterGrid
              categories={categories}
              featured={featured}
              articles={articles}
            />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
