# AGENTS.md — PAKKI Official Web Portal Project

## 1. Project Overview & Organizational Context
- **Organization**: PAKKI (Perhimpunan Ahli Kesehatan Kerja Indonesia) / *Indonesian Association of Occupational Health Experts*.
- **Domain**: Occupational Health, Industrial Hygiene, Ergonomics, Work Safety & Medicine (Kesehatan & Keselamatan Kerja - K3).
- **CRITICAL DISTINCTION**: DO NOT confuse this organization with *Perkumpulan Ahli Keselamatan Konstruksi Indonesia* (`pakki.org`), which is an entirely different civil engineering/construction entity. This project is strictly for the **Health & Occupational Medicine** professional association, founded **3 November 2015** (AD/ART Pasal 3).
- **Authoritative sources**: `AD-ART PAKKI.docx.pdf` (Munas II, Bogor 2022) and `No.SK 011- SK Susunan Dewan Pengurus...pdf` in the repo root. Prefer these over any other claim; they are NOT for public download yet, so do not copy them into `public/`.
- **Membership types (ART Pasal 14)**: Anggota Biasa, Anggota Khusus (foreign nationals), Anggota Kehormatan. There is no "Luar Biasa" or "Mahasiswa" category. Fees: uang pangkal Rp100.000, iuran Rp240.000/tahun.
- **Leadership**: DPP, Dewan Pakar, Dewan Pembina periode 2022–2027 per SK No. 011/DPP.PAKKI/SK/K/X/2022 (data in `src/content/site.ts` → `leadership`).
- **Headquarters / Secretariat**: Gedung C Lantai 3, Fakultas Kesehatan Masyarakat, Universitas Indonesia (FKM UI), Kampus Baru UI Depok 16424.
- **Legal Credential**: Registered under Ministry of Law and Human Rights (SK Kemenkumham RI) — SK number not yet provided.
- **Key Program**: P2KB (Program Pengembangan Keprofesian Berkelanjutan) & SIPORLIN (Sistem Informasi Portofolio SKP Online Kemenkes) — not mentioned in AD/ART; kept as assumed by the project owner.

---

## 2. Tech Stack & Environment
- **Framework**: Next.js 16 (App Router, TypeScript).
- **Styling**: Tailwind CSS v4 (with `@theme` font & color tokens in `globals.css`).
- **Icons**: `lucide-react`.
- **Project Directory**: `C:\Users\Adrian\.gemini\antigravity\scratch\pakki-website`
- **Asset Directory**: Public assets are located at `public/` (e.g. `public/logo-pakki.png`).

---

## 3. Design System & Guardrails (Strict Institutional Aesthetic)
The project strictly enforces a formal, credible institutional look (no bubbly curves, no pill buttons, no generic SaaS landing page patterns):
- **Rectilinear Geometry (`rounded-none` / minimal radius)**: Crisp, 90-degree square corners for buttons, cards, badges, and tables.
- **Color Palette**:
  - Primary Brand: Forest Green (`#007A3D` / `#004D25` / `#003B1C`).
  - Neutral Backgrounds: Crisp white (`#FFFFFF`) and light slate (`#F8FAFC` / `#FDFDFD`).
  - Contrast & Dark Sections: Slate-900 / Slate-950 (`#111827` / `#0B192C`).
- **Typography & Alignment**: 
  - Uses Geist Sans with strict visual hierarchy.
  - Left-aligned text (avoid justified alignment to maintain natural word-spacing on mobile).
  - Tone of voice: Authoritative, formal, institutional Indonesian language (official gazette/communique style).

---

## 4. Architecture & Content Separation
Content data is decoupled from presentation components:
- **`src/content/site.ts`**: Centralized single source of truth for all content, including:
  - Secretariat address, email, and contact placeholders.
  - Notice board items and press releases.
  - Regulation index (Permenaker, Permenkes, PP, UU).
  - P2KB agenda events and member registration steps.
- **`src/components/site-nav.tsx`**: Modular navigation component with scroll-aware active section state and mobile drawer overlay.
- **`src/app/page.tsx`**: Structured homepage consuming `site.ts`.

---

## 5. Mobile Responsiveness Standards
- **Top Utility Bar**: Compact single-line marquee/ticker on small screens.
- **Navigation**: Full-screen / dropdown mobile drawer triggered via hamburger toggle (`site-nav.tsx`), with accessible 44px+ touch targets.
- **Quick Access Hub**: 2x2 grid on mobile (`grid-cols-2 lg:grid-cols-4`).
- **Regulation Table**: 
  - Desktop: Multi-column data table.
  - Mobile: Enforces `min-w-[660px]` inside `overflow-x-auto` or renders as stacked card view to prevent column crushing and ensure the "Unduh PDF" button is never clipped.

---

## 6. Current File Map
```text
pakki-website/
├── public/
│   └── logo-pakki.png          # Official green emblem with medical cross & book
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root metadata, font setup, skip-to-content
│   │   ├── globals.css         # Tailwind tokens (@theme brand colors & fonts)
│   │   └── page.tsx            # Main landing page consuming site.ts
│   ├── components/
│   │   └── site-nav.tsx        # Scroll-aware sticky navbar & mobile drawer
│   └── content/
│       └── site.ts             # Centralized text data, regulations, and announcements
├── .claude/
│   └── launch.json             # Dev preview runner config
├── package.json
└── tsconfig.json
```

---

## 7. Next Roadmap & Remaining Tasks
1. **Membership Registration Flow (`/keanggotaan/daftar`)**: Form with validation for member categories (Biasa, Khusus, Kehormatan — per ART Pasal 14–18), ijazah & sertifikat kompetensi upload requirements, and WhatsApp/Email routing.
2. **Full Profile & Board Directory (`/profil`)**: Historical timeline from 2015 (Munas II 2022), AD/ART download (once the client approves publishing it), expanded DPP leadership directory (homepage `#pengurus` section already lists the 2022–2027 board).
3. **Regulation & Library Hub (`/regulasi`)**: Filterable repository of Kemenaker/Kemenkes occupational health regulations with search & PDF downloads.
4. **News & Press Release Dynamic Engine (`/berita/[slug]`)**: Dynamic routes for articles and P2KB educational releases.
