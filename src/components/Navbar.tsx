"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight } from "lucide-react";
import { NAV_LINKS, SITE } from "@/content/site";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname?.startsWith(href + "/");
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-nav shadow-lg" : "glass-nav"
      }`}
      role="banner"
    >
      <nav
        className="container-xl flex items-center justify-between h-16"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <Link href="/" className="flex-shrink-0" aria-label="Hirelytics.ai home">
          <Image
            src="/brand/logo-horizontal.png"
            alt="Hirelytics.ai"
            width={180}
            height={40}
            priority
            className="h-8 w-auto object-contain"
          />
        </Link>

        {/* Desktop nav links */}
        <ul className="hidden md:flex items-center gap-8 list-none m-0 p-0">
          {NAV_LINKS.map((link) => {
            const active = isActive(link.href);
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`text-sm transition-colors duration-150 relative py-1 ${
                    active
                      ? "text-[#02B9FE] font-semibold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#02B9FE] after:rounded-full"
                      : "text-white/80 hover:text-white font-medium"
                  }`}
                  aria-current={active ? "page" : undefined}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Desktop CTAs */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/login"
            className="text-sm font-semibold text-white/80 hover:text-white transition-colors duration-150 px-2"
          >
            Log in
          </Link>
          <Link href={SITE.bookDemoUrl} className="btn-gradient text-sm">
            Book a demo
            <ArrowRight size={14} />
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          id="mobile-menu-toggle"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          className="md:hidden text-white p-1.5 rounded-lg hover:bg-white/10 transition-colors"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile drawer */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
        className={`md:hidden glass-nav border-t border-white/10 transition-all duration-300 overflow-hidden ${
          open ? "max-h-[480px] opacity-100" : "max-h-0 opacity-0 pointer-events-none"
        }`}
      >
        <nav className="container-xl py-4 flex flex-col gap-2">
          {NAV_LINKS.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`py-2.5 px-3 rounded-xl font-medium text-sm transition-colors ${
                  active
                    ? "bg-white/15 text-[#02B9FE] font-semibold"
                    : "text-white/80 hover:text-white hover:bg-white/10"
                }`}
                aria-current={active ? "page" : undefined}
              >
                {link.label}
              </Link>
            );
          })}
          <hr className="border-white/10 my-1" />
          <Link
            href="/login"
            onClick={() => setOpen(false)}
            className="py-2.5 px-3 rounded-xl text-white/80 hover:text-white font-semibold text-sm transition-colors"
          >
            Log in
          </Link>
          <Link
            href={SITE.bookDemoUrl}
            onClick={() => setOpen(false)}
            className="btn-gradient text-sm justify-center mt-1"
          >
            Book a demo
            <ArrowRight size={14} />
          </Link>
        </nav>
      </div>
    </header>
  );
}
