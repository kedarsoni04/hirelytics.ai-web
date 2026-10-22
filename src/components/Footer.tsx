import Link from "next/link";
import Image from "next/image";
import { Mail } from "lucide-react";
import { FOOTER } from "@/content/site";

const iconMap: Record<string, React.ReactNode> = {
  Linkedin: (
    <Image
      src="/brand/LI-In-Bug.png"
      alt="LinkedIn"
      width={18}
      height={18}
      className="w-4 h-4 object-contain rounded-[2px]"
    />
  ),
  Mail: <Mail size={16} className="text-white/80" />,
};

export default function Footer() {
  return (
    <footer
      className="bg-[#04135B] text-white"
      role="contentinfo"
      aria-label="Site footer"
    >
      <div className="container-xl py-16">
        {/* Top row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <Link href="/" aria-label="Hirelytics.ai home">
              <Image
                src="/brand/logo-horizontal.png"
                alt="Hirelytics.ai"
                width={180}
                height={40}
                className="h-8 w-auto object-contain"
              />
            </Link>
            <p className="text-white/60 text-sm leading-relaxed max-w-xs">
              {FOOTER.tagline}
              <br />
              <span className="text-white/40">
                AI-powered hiring intelligence for modern teams.
              </span>
            </p>
            {/* Social */}
            <div className="flex items-center gap-3 mt-1">
              {FOOTER.social.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-9 h-9 rounded-full bg-white/8 hover:bg-white/16 border border-white/10 text-white/70 hover:text-white transition-all duration-200"
                >
                  {iconMap[s.icon]}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {FOOTER.columns.map((col) => (
            <div key={col.heading}>
              <h3 className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-4">
                {col.heading}
              </h3>
              <ul className="flex flex-col gap-2.5 list-none p-0 m-0">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/65 hover:text-white transition-colors duration-150"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <hr className="border-white/10 mt-12 mb-6" />

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/40">
          <span>{FOOTER.copyright}</span>
          <span className="flex items-center gap-1">
            Built with care for better hiring.
          </span>
        </div>
      </div>
    </footer>
  );
}
