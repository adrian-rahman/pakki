"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navItems } from "@/content/site";

export function SiteNav() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(navItems[0].href);

  // Sorot menu sesuai section yang sedang dibaca.
  // Aturan: section aktif = section terakhir yang bagian atasnya sudah melewati garis 35% tinggi layar.
  // Pengecualian: di dasar halaman, footer (Kontak) baru aktif bila sudah terlihat cukup besar,
  // supaya section panjang sebelum footer (Keanggotaan) tidak terlewati.
  useEffect(() => {
    const sections = navItems
      .map((item) => document.querySelector<HTMLElement>(item.href))
      .filter((el): el is HTMLElement => el !== null);
    if (sections.length === 0) return;

    let frame = 0;
    const update = () => {
      frame = 0;
      const line = window.innerHeight * 0.35;
      let current = sections[0];
      for (const s of sections) {
        if (s.getBoundingClientRect().top <= line) current = s;
      }

      const last = sections[sections.length - 1];
      const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4;
      if (atBottom && last.getBoundingClientRect().top <= window.innerHeight * 0.6) current = last;

      setActive(`#${current.id}`);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
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
