import Link from "next/link";
import { ChevronRight } from "lucide-react";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface PageHeaderProps {
  title: string | React.ReactNode;
  subtitle?: string;
  badge?: string;
  breadcrumbs: BreadcrumbItem[];
  children?: React.ReactNode;
}

export default function PageHeader({
  title,
  subtitle,
  badge,
  breadcrumbs,
  children,
}: PageHeaderProps) {
  return (
    <header className="relative pt-28 pb-16 md:pt-36 md:pb-20 overflow-hidden bg-[#04135B] border-b border-white/10">
      {/* Background gradients and glows */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 50% 0%, rgba(2, 185, 254, 0.15) 0%, transparent 60%), radial-gradient(circle at 85% 30%, rgba(105, 78, 254, 0.12) 0%, transparent 50%)",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(#ffffff 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
        aria-hidden="true"
      />

      <div className="container-xl relative z-10">
        {/* Breadcrumbs */}
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex items-center flex-wrap gap-2 text-xs text-white/55">
            <li>
              <Link
                href="/"
                className="hover:text-white transition-colors duration-150"
              >
                Home
              </Link>
            </li>
            {breadcrumbs.map((item, index) => {
              const isLast = index === breadcrumbs.length - 1;
              return (
                <li key={item.label} className="flex items-center gap-2">
                  <ChevronRight size={12} className="text-white/30" />
                  {item.href && !isLast ? (
                    <Link
                      href={item.href}
                      className="hover:text-white transition-colors duration-150"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <span
                      aria-current={isLast ? "page" : undefined}
                      className="text-white font-medium"
                    >
                      {item.label}
                    </span>
                  )}
                </li>
              );
            })}
          </ol>
        </nav>

        {/* Badge */}
        {badge && (
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-[#02B9FE] text-xs font-semibold mb-4 backdrop-blur-sm">
            <span>{badge}</span>
          </div>
        )}

        {/* Title & Subtitle */}
        <div className="max-w-3xl">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-4 text-base sm:text-lg text-white/70 leading-relaxed max-w-2xl">
              {subtitle}
            </p>
          )}
          {children && <div className="mt-6">{children}</div>}
        </div>
      </div>
    </header>
  );
}
