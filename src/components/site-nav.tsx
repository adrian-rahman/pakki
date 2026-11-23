"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navItems } from "@/content/site";

export function SiteNav() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#beranda");

  // Sorot menu sesuai section yang sedang terlihat
  useEffect(() => {
    const sections = navItems
      .map((item) => document.querySelector<HTMLElement>(item.href))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(`#${visible[0].target.id}`);
      },
      { rootMargin: "-30% 0px -60% 0px" },
    );

    sections.forEach((s) => observer.observe(s));

    // Footer (Kontak) pendek dan tak pernah mencapai tengah layar: sorot saat sudah di dasar halaman
    const onScroll = () => {
      const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4;
      if (atBottom) setActive(navItems[navItems.length - 1].href);
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  // Tutup menu mobile dengan tombol Escape
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <div className="sticky top-0 z-40 bg-brand-900 text-white shadow-md shadow-brand-950/20">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 md:px-8">
        {/* Desktop */}
        <nav aria-label="Navigasi utama" className="hidden lg:flex">
          {navItems.map((item) => {
            const isActive = active === item.href;
            return (
              <a
                key={item.href}
                href={item.href}
                aria-current={isActive ? "true" : undefined}
                className={`relative px-4 py-3.5 text-sm font-medium transition-colors ${
                  isActive ? "text-white" : "text-brand-100/85 hover:bg-white/5 hover:text-white"
                }`}
              >
                {item.label}
                <span
                  className={`absolute inset-x-3 bottom-0 h-0.5 bg-brand-300 transition-opacity ${
                    isActive ? "opacity-100" : "opacity-0"
                  }`}
                />
              </a>
            );
          })}
        </nav>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          className="-ml-2 flex items-center gap-2 px-2 py-3 text-sm font-semibold lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          Menu
        </button>

        <a
          href="#keanggotaan"
          className="border border-gold-400 bg-gold-500 px-4 py-2 text-xs font-bold uppercase tracking-wider text-brand-950 transition-colors hover:bg-gold-400"
        >
          Daftar Anggota
        </a>
      </div>

      {/* Mobile panel */}
      {open && (
        <nav
          id="mobile-nav"
          aria-label="Navigasi utama"
          className="absolute inset-x-0 top-full border-t border-white/10 bg-brand-950 shadow-xl lg:hidden"
        >
          <ul className="mx-auto max-w-7xl px-4 py-2">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`block px-3 py-3 text-base ${
                    active === item.href ? "bg-white/10 font-semibold text-white" : "text-brand-100"
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </div>
  );
}
