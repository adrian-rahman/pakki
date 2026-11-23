import Image from "next/image";
import {
  ArrowRight,
  ArrowUpRight,
  Award,
  BellRing,
  BookOpen,
  Building2,
  Calendar,
  CircleCheck,
  Clock,
  Download,
  FileText,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  UserCheck,
} from "lucide-react";
import { SiteNav } from "@/components/site-nav";
import {
  agenda,
  announcements,
  contact,
  emblemMeaning,
  leadership,
  membershipFees,
  membershipRequirements,
  membershipSteps,
  membershipTypes,
  news,
  objectives,
  organization,
  regulations,
  values,
} from "@/content/site";

const toneClass = {
  brand: "text-brand-800 bg-brand-50 border-brand-200",
  blue: "text-blue-800 bg-blue-50 border-blue-200",
  amber: "text-amber-800 bg-amber-50 border-amber-200",
} as const;

const waLink = `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(
  "Halo Sekretariat DPP PAKKI, saya ingin berkonsultasi mengenai pendaftaran anggota.",
)}`;

const quickLinks = [
  {
    icon: UserCheck,
    title: "Registrasi Anggota",
    body: "Pendaftaran anggota baru serta penerbitan Nomor dan Kartu Anggota PAKKI.",
    cta: "Alur daftar",
    href: "#keanggotaan",
  },
  {
    icon: Award,
    title: "Portofolio SKP",
    body: "Ikuti kegiatan terakreditasi dan kumpulkan satuan kredit profesi.",
    cta: "Agenda P2KB",
    href: "#agenda",
  },
  {
    icon: FileText,
    title: "Bank Regulasi",
    body: "Undang-undang, PP, Permenaker, dan Permenkes bidang kesehatan kerja.",
    cta: "Arsip regulasi",
    href: "#regulasi",
  },
  {
    icon: Building2,
    title: "Bantuan DPP",
    body: "Pengesahan berkas, rekomendasi keprofesian, dan kontak resmi.",
    cta: "Hubungi kami",
    href: "#kontak",
  },
];

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mb-8 max-w-2xl">
      <p className="text-xs font-bold uppercase tracking-wider text-brand-700">{eyebrow}</p>
      <h2 className="mt-1 text-2xl font-black tracking-tight text-slate-900 sm:text-3xl">{title}</h2>
      {description && <p className="mt-2 text-base text-slate-600">{description}</p>}
    </div>
  );
}

function DocAction({ href }: { href: string | null }) {
  if (!href) {
    return (
      <span className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-400">
        <Clock className="h-3.5 w-3.5" /> Dokumen menyusul
      </span>
    );
  }
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1.5 border border-brand-300 bg-brand-50 px-2.5 py-1 text-xs font-bold uppercase tracking-wider text-brand-800 hover:bg-brand-100"
    >
      <Download className="h-3.5 w-3.5" /> Unduh PDF
    </a>
  );
}

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col font-sans">
      <a
        href="#konten"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:bg-white focus:px-4 focus:py-2 focus:text-brand-900 focus:shadow-lg"
      >
        Lewati ke konten utama
      </a>

      {/* 1. BAR PENGUMUMAN */}
      <div className="border-b border-brand-950 bg-brand-950 text-brand-100">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-2 text-xs md:px-8 md:text-sm">
          <p className="flex min-w-0 items-center gap-2">
            <span className="inline-flex shrink-0 items-center gap-1 border border-brand-700 bg-brand-800 px-1.5 py-0.5 text-[11px] font-bold uppercase tracking-wider">
              <BellRing className="h-3 w-3" /> Warta
            </span>
            <span className="truncate">Pemutakhiran data anggota & verifikasi SKP periode 2026/2027</span>
          </p>
          <div className="hidden shrink-0 items-center gap-5 md:flex">
            <a href="#regulasi" className="hover:text-white">
              Pusat Dokumen
            </a>
            <a href={`mailto:${contact.email}`} className="hover:text-white">
              {contact.email}
            </a>
          </div>
        </div>
      </div>

      {/* 2. HEADER IDENTITAS */}
      <header id="beranda" className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-4 md:px-8 md:py-5">
          <a href="#beranda" className="flex items-center gap-3 sm:gap-4">
            <div className="relative h-12 w-12 shrink-0 sm:h-16 sm:w-16">
              <Image src="/logo-pakki.png" alt="Lambang PAKKI" fill sizes="64px" className="object-contain" priority />
            </div>
            <div className="flex flex-col border-l-2 border-slate-300 pl-3 sm:pl-4">
              <span className="text-xl font-black leading-none tracking-tight text-brand-700 sm:text-2xl">PAKKI</span>
              <span className="mt-1 text-xs font-bold uppercase leading-tight text-slate-800 sm:text-sm">
                Perhimpunan Ahli Kesehatan Kerja Indonesia
              </span>
              <span className="hidden text-xs italic text-slate-500 sm:block">
                Indonesian Association of Occupational Health Experts
              </span>
            </div>
          </a>

          <dl className="hidden items-center gap-6 border border-slate-300 bg-slate-50 px-4 py-2.5 text-sm lg:flex">
            <div className="border-r border-slate-300 pr-6">
              <dt className="text-[11px] font-bold uppercase tracking-wider text-slate-500">Status Hukum</dt>
              <dd className="mt-0.5 flex items-center gap-1.5 font-semibold text-slate-800">
                <ShieldCheck className="h-4 w-4 text-brand-700" /> Terdaftar di Kemenkumham RI
              </dd>
            </div>
            <div>
              <dt className="text-[11px] font-bold uppercase tracking-wider text-slate-500">Sekretariat Pusat</dt>
              <dd className="mt-0.5 flex items-center gap-1.5 font-semibold text-slate-800">
                <Building2 className="h-4 w-4 text-brand-700" /> FKM UI, Depok
              </dd>
            </div>
          </dl>
        </div>
      </header>

      <SiteNav />

      <main id="konten" className="flex-1">
        <h1 className="sr-only">PAKKI – Perhimpunan Ahli Kesehatan Kerja Indonesia</h1>

        {/* 3. HERO: Rilis utama + papan pengumuman */}
        <section aria-label="Sorotan" className="border-b border-slate-200 bg-white py-6 md:py-10">
          <div className="mx-auto grid max-w-7xl items-start gap-6 px-4 md:px-8 lg:grid-cols-12 lg:gap-8">
            <article className="border border-slate-300 bg-white lg:col-span-8">
              <div className="relative isolate flex min-h-72 flex-col overflow-hidden bg-brand-950 p-5 sm:min-h-80 sm:p-8">
                {/* Latar dekoratif */}
                <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,var(--color-brand-700),transparent_65%)]" />
                <div className="absolute inset-0 -z-10 bg-[radial-gradient(var(--color-brand-400)_1px,transparent_1px)] [background-size:18px_18px] opacity-15" />
                <div className="absolute -right-12 -top-12 -z-10 h-64 w-64 opacity-[0.08] sm:h-96 sm:w-96">
                  <Image src="/logo-pakki.png" alt="" fill sizes="384px" className="object-contain brightness-0 invert" />
                </div>

                <span className="self-start border border-gold-400 bg-gold-500 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-brand-950">
                  Rilis Pers & Pernyataan Sikap
                </span>

                <div className="mt-auto space-y-3 pt-16 text-white">
                  <p className="flex flex-wrap items-center gap-x-2 text-xs font-semibold uppercase tracking-wider text-brand-200 sm:text-sm">
                    <span>Dewan Pengurus Pusat PAKKI</span>
                    <span aria-hidden>•</span>
                    <time>November 2026</time>
                  </p>
                  <h2 className="text-2xl font-black leading-tight tracking-tight sm:text-3xl lg:text-[2rem]">
                    Penguatan Standar Higiene Industri dan Surveilans Kesehatan Kerja dalam Menghadapi
                    Transformasi Industri Nasional
                  </h2>
                </div>
              </div>

              <div className="space-y-5 p-5 sm:p-8">
                <p className="text-base leading-relaxed text-slate-700">
                  PAKKI menegaskan komitmennya mengawal implementasi regulasi kesehatan lingkungan kerja terpadu.
                  Sebagai wadah profesi para ahli dan praktisi kesehatan kerja, PAKKI mendorong standardisasi
                  kompetensi guna mencegah Penyakit Akibat Kerja (PAK) dan menciptakan tempat kerja yang sehat,
                  selamat, dan berdaya saing.
                </p>
                <div className="flex flex-wrap items-center justify-between gap-3 border-t border-slate-200 pt-4 text-sm">
                  <span className="flex items-center gap-1.5 text-slate-500">
                    <BookOpen className="h-4 w-4" /> Divisi Regulasi & Advokasi
                  </span>
                  <a
                    href="#warta"
                    className="group inline-flex items-center gap-1 font-bold text-brand-700 hover:text-brand-900"
                  >
                    Warta lainnya
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </a>
                </div>
              </div>
            </article>

            <aside aria-labelledby="papan-pengumuman" className="border border-slate-300 bg-white lg:col-span-4">
              <div className="flex items-center justify-between bg-brand-900 px-5 py-3.5 text-white">
                <h2 id="papan-pengumuman" className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider">
                  <BellRing className="h-4 w-4 text-brand-300" /> Papan Pengumuman
                </h2>
                <span className="bg-white/10 px-2 py-0.5 text-[11px] font-bold uppercase">DPP</span>
              </div>

              <ul className="divide-y divide-slate-200">
                {announcements.map((item) => (
                  <li key={item.title}>
                    <a
                      href={item.href}
                      className="group block border-l-4 border-transparent p-5 transition-colors hover:border-brand-600 hover:bg-slate-50"
                    >
                      <span
                        className={`inline-block border px-2 py-0.5 text-[11px] font-bold uppercase tracking-wider ${toneClass[item.tone]}`}
                      >
                        {item.category}
                      </span>
                      <h3 className="mt-2 font-bold leading-snug text-slate-900 group-hover:text-brand-700">
                        {item.title}
                      </h3>
                      <p className="mt-1 line-clamp-2 text-sm text-slate-600">{item.summary}</p>
                      <p className="mt-2 flex items-center gap-1.5 text-xs text-slate-500">
                        <Clock className="h-3.5 w-3.5" /> {item.meta}
                      </p>
                    </a>
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </section>

        {/* 4. AKSES CEPAT */}
        <section aria-label="Akses cepat" className="border-b border-slate-200 bg-slate-50 py-8 md:py-10">
          <div className="mx-auto grid max-w-7xl grid-cols-2 gap-3 px-4 sm:gap-4 md:px-8 lg:grid-cols-4">
            {quickLinks.map(({ icon: Icon, ...item }) => (
              <a
                key={item.title}
                href={item.href}
                className="group flex flex-col border-2 border-slate-200 bg-white p-4 transition-all hover:-translate-y-0.5 hover:border-brand-600 hover:shadow-[4px_4px_0_0_var(--color-brand-700)] sm:p-6"
              >
                <span className="mb-3 flex h-10 w-10 items-center justify-center border border-brand-200 bg-brand-50 text-brand-700 transition-colors group-hover:bg-brand-700 group-hover:text-white sm:h-11 sm:w-11">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="text-sm font-bold uppercase leading-tight tracking-tight text-slate-900 sm:text-base">
                  {item.title}
                </h3>
                <p className="mt-1 hidden text-sm leading-relaxed text-slate-600 sm:block">{item.body}</p>
                <span className="mt-auto inline-flex items-center gap-1 pt-3 text-xs font-bold uppercase tracking-wider text-brand-700 sm:text-sm sm:normal-case sm:tracking-normal">
                  {item.cta}
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </span>
              </a>
            ))}
          </div>
        </section>

        {/* 5. WARTA */}
        <section id="warta" className="border-b border-slate-200 bg-white py-12 md:py-14">
          <div className="mx-auto max-w-7xl px-4 md:px-8">
            <SectionHeading
              eyebrow="Warta & Kebijakan"
              title="Kabar Terbaru dari DPP PAKKI"
              description="Rilis resmi, sikap organisasi, dan perkembangan kebijakan kesehatan kerja nasional."
            />
            <div className="grid gap-4 md:grid-cols-3 md:gap-6">
              {news.map((item) => (
                <article
                  key={item.title}
                  className="flex flex-col border border-slate-300 border-t-4 border-t-brand-700 p-5 sm:p-6"
                >
                  <div className="flex items-center justify-between gap-2 text-xs">
                    <span className="font-bold uppercase tracking-wider text-brand-700">{item.category}</span>
                    <time className="text-slate-500">{item.date}</time>
                  </div>
                  <h3 className="mt-3 text-lg font-bold leading-snug text-slate-900">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.summary}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* 6. AGENDA & DIKLAT */}
        <section id="agenda" className="border-b border-slate-200 bg-slate-50 py-12 md:py-14">
          <div className="mx-auto max-w-7xl px-4 md:px-8">
            <SectionHeading
              eyebrow="Agenda & Diklat"
              title="Kegiatan P2KB Mendatang"
              description="Setiap kegiatan terakreditasi menghasilkan Satuan Kredit Profesi (SKP) untuk resertifikasi anggota."
            />
            <div className="grid gap-6 lg:grid-cols-12 lg:gap-8">
              <ol className="space-y-3 lg:col-span-8">
                {agenda.map((item) => (
                  <li key={item.title} className="flex gap-4 border border-slate-300 bg-white p-4 sm:gap-5 sm:p-5">
                    <div className="flex h-16 w-16 shrink-0 flex-col items-center justify-center bg-brand-900 text-white">
                      <span className="text-2xl font-black leading-none">{item.day}</span>
                      <span className="mt-0.5 text-xs font-semibold uppercase text-brand-200">{item.month}</span>
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-2 text-xs">
                        <span className="font-bold uppercase tracking-wider text-brand-700">{item.type}</span>
                        <span className="border border-amber-300 bg-amber-50 px-1.5 py-0.5 font-bold text-amber-800">
                          {item.skp}
                        </span>
                      </div>
                      <h3 className="mt-1 font-bold leading-snug text-slate-900">{item.title}</h3>
                      <p className="mt-1 flex items-center gap-1.5 text-sm text-slate-500">
                        <MapPin className="h-4 w-4 shrink-0" /> {item.place}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>

              <div className="border border-brand-200 border-l-4 border-l-brand-700 bg-brand-50 p-6 lg:col-span-4">
                <Award className="h-8 w-8 text-brand-700" />
                <h3 className="mt-3 text-lg font-bold text-brand-950">Tentang Program P2KB</h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-900/85">
                  Pengembangan Pendidikan Keprofesian Berkelanjutan (P2KB) menjaga kompetensi anggota tetap
                  mutakhir. Kumpulkan SKP dari seminar, pelatihan, publikasi ilmiah, dan pengabdian profesi.
                </p>
                <a
                  href={`mailto:${contact.email}?subject=${encodeURIComponent("Pertanyaan Program P2KB")}`}
                  className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-brand-700 hover:text-brand-900"
                >
                  Tanya petunjuk teknis SKP <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* 7. REGULASI */}
        <section id="regulasi" className="border-b border-slate-200 bg-white py-12 md:py-14">
          <div className="mx-auto max-w-7xl px-4 md:px-8">
            <SectionHeading
              eyebrow="Dokumen Hukum & Standar"
              title="Regulasi Pokok Kesehatan & Keselamatan Kerja"
              description="Rujukan regulasi nasional yang menjadi pedoman kerja seluruh anggota PAKKI."
            />

            {/* Mobile: kartu (tanpa geser tabel) */}
            <ul className="space-y-3 md:hidden">
              {regulations.map((reg) => (
                <li key={reg.number} className="border border-slate-300 p-4">
                  <div className="flex items-start justify-between gap-3">
                    <p className="font-bold text-slate-900">{reg.number}</p>
                    <span className="shrink-0 bg-slate-200 px-2 py-0.5 text-[11px] font-semibold text-slate-700">
                      {reg.issuer}
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-slate-600">{reg.about}</p>
                  <div className="mt-3">
                    <DocAction href={reg.href} />
                  </div>
                </li>
              ))}
            </ul>

            {/* Desktop: tabel */}
            <div className="hidden border border-slate-300 md:block">
              <table className="w-full text-left text-sm">
                <thead className="border-b border-slate-300 bg-slate-100 text-xs font-bold uppercase tracking-wider text-slate-700">
                  <tr>
                    <th scope="col" className="px-5 py-3">Nomor & Tahun</th>
                    <th scope="col" className="px-5 py-3">Tentang</th>
                    <th scope="col" className="px-5 py-3">Penerbit</th>
                    <th scope="col" className="px-5 py-3 text-right">Dokumen</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 text-slate-700">
                  {regulations.map((reg) => (
                    <tr key={reg.number} className="hover:bg-slate-50">
                      <th scope="row" className="whitespace-nowrap px-5 py-4 font-bold text-slate-900">
                        {reg.number}
                      </th>
                      <td className="px-5 py-4">{reg.about}</td>
                      <td className="px-5 py-4">
                        <span className="whitespace-nowrap bg-slate-200 px-2 py-0.5 text-xs font-semibold text-slate-700">
                          {reg.issuer}
                        </span>
                      </td>
                      <td className="whitespace-nowrap px-5 py-4 text-right">
                        <DocAction href={reg.href} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* 8. PROFIL (sumber: AD/ART Munas II 2022) */}
        <section id="profil" className="border-b border-slate-200 bg-slate-50 py-12 md:py-16">
          <div className="mx-auto grid max-w-7xl items-start gap-8 px-4 md:px-8 lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-7">
              <SectionHeading eyebrow="Identitas Organisasi" title="Tentang Perhimpunan Ahli Kesehatan Kerja Indonesia" />
              <div className="-mt-4 space-y-4 text-base leading-relaxed text-slate-700">
                <p>
                  <strong className="text-slate-900">Perhimpunan Ahli Kesehatan Kerja Indonesia (PAKKI)</strong>{" "}
                  adalah organisasi profesi kesehatan kerja yang menjadi wadah berhimpunnya ahli kesehatan kerja
                  secara nasional dan berperan mendorong perkembangan kesehatan kerja di Indonesia. PAKKI didirikan
                  pada tanggal {organization.founded}, berasaskan Pancasila dan Undang-Undang Dasar 1945.
                </p>
                <p>
                  PAKKI berfungsi sebagai pemersatu, pembina, serta pengembang keilmuan dan keterampilan ahli
                  kesehatan kerja melalui pendidikan, pelatihan, kegiatan ilmiah, kegiatan sosial, dan penguatan
                  kelembagaan. Organisasi ini berkedudukan di ibu kota negara dengan Dewan Pengurus Daerah di tingkat
                  provinsi dan Dewan Pengurus Cabang di tingkat kabupaten/kota.
                </p>
              </div>

              <dl className="mt-6 grid gap-4 border border-slate-300 bg-white p-5 sm:grid-cols-3">
                <div>
                  <dt className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wide text-slate-500">
                    <Calendar className="h-4 w-4 text-brand-700" /> Didirikan
                  </dt>
                  <dd className="mt-1 font-semibold text-slate-900">{organization.founded}</dd>
                </div>
                <div>
                  <dt className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wide text-slate-500">
                    <ShieldCheck className="h-4 w-4 text-brand-700" /> Landasan
                  </dt>
                  <dd className="mt-1 font-semibold text-slate-900">{organization.legalBasis}</dd>
                </div>
                <div>
                  <dt className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wide text-slate-500">
                    <Building2 className="h-4 w-4 text-brand-700" /> Sekretariat
                  </dt>
                  <dd className="mt-1 font-semibold text-slate-900">FKM Universitas Indonesia, Depok</dd>
                </div>
              </dl>

              {/* Makna lambang */}
              <div className="mt-6 border border-slate-300 bg-white p-5 sm:p-6">
                <div className="flex items-center gap-4">
                  <div className="relative h-16 w-16 shrink-0">
                    <Image src="/logo-pakki.png" alt="Lambang PAKKI" fill sizes="64px" className="object-contain" />
                  </div>
                  <h3 className="text-sm font-bold uppercase tracking-wider text-brand-700">Makna Lambang</h3>
                </div>
                <dl className="mt-4 grid gap-4 sm:grid-cols-2">
                  {emblemMeaning.map((item) => (
                    <div key={item.part}>
                      <dt className="font-bold text-slate-900">{item.part}</dt>
                      <dd className="mt-0.5 text-sm leading-relaxed text-slate-600">{item.meaning}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>

            <div className="space-y-6 border border-slate-300 bg-white p-6 sm:p-8 lg:col-span-5">
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider text-brand-700">Tujuan Organisasi</h3>
                <ol className="mt-4 space-y-3 text-sm text-slate-700">
                  {objectives.map((text, i) => (
                    <li key={text} className="flex items-start gap-3">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center bg-brand-700 text-xs font-bold text-white">
                        {i + 1}
                      </span>
                      <span className="leading-relaxed">{text}</span>
                    </li>
                  ))}
                </ol>
              </div>
              <div className="border-t border-slate-200 pt-6">
                <h3 className="text-sm font-bold uppercase tracking-wider text-brand-700">Nilai yang Dianut</h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {values.map((v) => (
                    <li
                      key={v}
                      className="flex items-center gap-1.5 border border-brand-200 bg-brand-50 px-3 py-1.5 text-sm font-semibold text-brand-900"
                    >
                      <CircleCheck className="h-4 w-4 text-brand-600" /> {v}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 9. SUSUNAN PENGURUS (sumber: SK No. 011/DPP.PAKKI/SK/K/X/2022) */}
        <section id="pengurus" className="border-b border-slate-200 bg-white py-12 md:py-16">
          <div className="mx-auto max-w-7xl px-4 md:px-8">
            <SectionHeading
              eyebrow={`Kepengurusan Periode ${leadership.period}`}
              title="Susunan Dewan Pengurus Pusat, Dewan Pakar, dan Dewan Pembina"
              description={`Ditetapkan melalui Keputusan DPP PAKKI Nomor ${leadership.skNumber} tanggal ${leadership.skDate}.`}
            />

            {/* Pengurus harian */}
            <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
              {leadership.executives.map((p, i) => (
                <li
                  key={p.role}
                  className={`border p-4 ${
                    i === 0 ? "border-brand-900 bg-brand-900 text-white sm:col-span-2 lg:col-span-1" : "border-slate-300 bg-white"
                  }`}
                >
                  <p
                    className={`text-[11px] font-bold uppercase tracking-wider ${
                      i === 0 ? "text-gold-400" : "text-brand-700"
                    }`}
                  >
                    {p.role}
                  </p>
                  <p className={`mt-1 font-bold leading-snug ${i === 0 ? "text-white" : "text-slate-900"}`}>{p.name}</p>
                </li>
              ))}
            </ul>

            {/* Bidang */}
            <h3 className="mt-10 text-sm font-bold uppercase tracking-wider text-slate-500">Ketua Bidang & Anggota</h3>
            <div className="mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {leadership.divisions.map((d) => (
                <article key={d.name} className="flex flex-col border border-slate-300 border-t-4 border-t-brand-700">
                  <div className="border-b border-slate-200 bg-slate-50 px-5 py-3">
                    <h4 className="font-bold leading-snug text-slate-900">Bidang {d.name}</h4>
                  </div>
                  <div className="px-5 py-4 text-sm">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-brand-700">Ketua</p>
                    <p className="font-semibold text-slate-900">{d.chair}</p>
                    <p className="mt-3 text-[11px] font-bold uppercase tracking-wider text-slate-500">Anggota</p>
                    <ul className="mt-1 space-y-1 text-slate-700">
                      {d.members.map((m) => (
                        <li key={m}>{m}</li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>

            {/* Dewan Pakar & Pembina */}
            <div className="mt-10 grid gap-4 md:grid-cols-2">
              {leadership.councils.map((c) => (
                <article key={c.name} className="border border-slate-300 bg-slate-50 p-5 sm:p-6">
                  <h3 className="flex items-center gap-2 font-bold uppercase tracking-wider text-brand-800">
                    <Award className="h-5 w-5" /> {c.name}
                  </h3>
                  <p className="mt-4 text-[11px] font-bold uppercase tracking-wider text-brand-700">Ketua</p>
                  <p className="font-semibold text-slate-900">{c.chair}</p>
                  <p className="mt-3 text-[11px] font-bold uppercase tracking-wider text-slate-500">Anggota</p>
                  <ul className="mt-1 space-y-1 text-sm text-slate-700">
                    {c.members.map((m) => (
                      <li key={m}>{m}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* 10. KEANGGOTAAN (sumber: ART Pasal 14–18, AD Pasal 20) */}
        <section id="keanggotaan" className="relative isolate overflow-hidden bg-brand-950 py-12 text-white md:py-16">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_bottom_left,var(--color-brand-800),transparent_60%)]" />
          <div className="mx-auto max-w-7xl px-4 md:px-8">
            <div className="max-w-2xl">
              <p className="text-xs font-bold uppercase tracking-wider text-brand-300">Layanan Anggota</p>
              <h2 className="mt-1 text-2xl font-black tracking-tight sm:text-3xl">Bergabung sebagai Anggota PAKKI</h2>
              <p className="mt-3 text-base leading-relaxed text-brand-100/85">
                Keanggotaan terbuka bagi individu dengan latar belakang pendidikan atau pekerjaan yang berkaitan
                dengan kesehatan kerja, lulusan dalam maupun luar negeri.
              </p>
            </div>

            {/* Jenis keanggotaan */}
            <ul className="mt-8 grid gap-3 md:grid-cols-3">
              {membershipTypes.map((t) => (
                <li key={t.name} className="border border-white/15 bg-white/5 p-5">
                  <h3 className="flex items-center gap-2 font-bold">
                    <UserCheck className="h-5 w-5 text-gold-400" /> {t.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-brand-100/80">{t.body}</p>
                </li>
              ))}
            </ul>

            <div className="mt-8 grid gap-6 lg:grid-cols-12">
              {/* Persyaratan + biaya */}
              <div className="border border-white/15 bg-brand-900/60 p-5 sm:p-6 lg:col-span-5">
                <h3 className="text-sm font-bold uppercase tracking-wider text-brand-300">Persyaratan Anggota Biasa</h3>
                <ul className="mt-4 space-y-2.5 text-sm text-brand-50">
                  {membershipRequirements.map((r) => (
                    <li key={r} className="flex items-start gap-2.5">
                      <CircleCheck className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" /> {r}
                    </li>
                  ))}
                </ul>
                <dl className="mt-6 grid grid-cols-2 gap-3 border-t border-white/15 pt-5">
                  {membershipFees.map((f) => (
                    <div key={f.label}>
                      <dt className="text-[11px] font-bold uppercase tracking-wider text-brand-300">{f.label}</dt>
                      <dd className="mt-0.5 text-lg font-black">{f.amount}</dd>
                    </div>
                  ))}
                </dl>
                <p className="mt-2 text-xs text-brand-100/60">Anggota Kehormatan dibebaskan dari iuran.</p>
              </div>

              {/* Alur */}
              <div className="lg:col-span-7">
                <h3 className="text-sm font-bold uppercase tracking-wider text-brand-300">Tata Cara Penerimaan</h3>
                <ol className="mt-4 grid gap-3 sm:grid-cols-2">
                  {membershipSteps.map((step, i) => (
                    <li key={step.title} className="border border-white/15 bg-white/5 p-5">
                      <span className="flex h-8 w-8 items-center justify-center bg-gold-500 text-sm font-black text-brand-950">
                        {i + 1}
                      </span>
                      <h4 className="mt-3 font-bold">{step.title}</h4>
                      <p className="mt-1 text-sm leading-relaxed text-brand-100/80">{step.body}</p>
                    </li>
                  ))}
                </ol>
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center justify-center gap-2 border border-white bg-white px-6 py-3 text-sm font-bold uppercase tracking-wider text-brand-950 transition-colors hover:bg-brand-50"
              >
                <Phone className="h-4 w-4 text-brand-700" /> Registrasi via WhatsApp
              </a>
              <a
                href={`mailto:${contact.email}?subject=${encodeURIComponent("Pendaftaran Anggota PAKKI")}`}
                className="inline-flex min-h-11 items-center justify-center gap-2 border border-brand-400/70 px-6 py-3 text-sm font-semibold uppercase tracking-wider transition-colors hover:bg-white/10"
              >
                <Mail className="h-4 w-4 text-brand-300" /> Minta Formulir via Email
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* 10. FOOTER */}
      <footer id="kontak" className="bg-slate-900 pb-8 pt-12 text-sm text-slate-300 md:pt-14">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="grid gap-10 border-b border-slate-800 pb-10 md:grid-cols-12">
            <div className="space-y-4 md:col-span-5">
              <div className="flex items-center gap-3">
                <div className="relative h-12 w-12 shrink-0 bg-white">
                  <Image src="/logo-pakki.png" alt="" fill sizes="48px" className="object-contain p-1" />
                </div>
                <div>
                  <p className="text-base font-extrabold tracking-wide text-white">DPP PAKKI</p>
                  <p className="text-xs text-slate-400">Perhimpunan Ahli Kesehatan Kerja Indonesia</p>
                </div>
              </div>
              <p className="max-w-md leading-relaxed text-slate-400">
                Organisasi profesi berbadan hukum yang menaungi para ahli dan praktisi kesehatan kerja di seluruh
                Indonesia.
              </p>
            </div>

            <div className="md:col-span-3">
              <h2 className="mb-3 text-xs font-bold uppercase tracking-wider text-white">Akses Cepat</h2>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#profil" className="inline-block py-0.5 hover:text-brand-300">Profil Organisasi</a></li>
                <li><a href="#regulasi" className="inline-block py-0.5 hover:text-brand-300">Regulasi K3 Nasional</a></li>
                <li><a href="#agenda" className="inline-block py-0.5 hover:text-brand-300">Program P2KB & SKP</a></li>
                <li><a href="#keanggotaan" className="inline-block py-0.5 hover:text-brand-300">Pendaftaran Anggota</a></li>
              </ul>
            </div>

            <div className="md:col-span-4">
              <h2 className="mb-3 text-xs font-bold uppercase tracking-wider text-white">Sekretariat</h2>
              <address className="space-y-3 not-italic leading-relaxed text-slate-400">
                <p className="flex items-start gap-2.5">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-400" />
                  <span>{contact.address}</span>
                </p>
                <p className="flex items-center gap-2.5">
                  <Mail className="h-4 w-4 shrink-0 text-brand-400" />
                  <a href={`mailto:${contact.email}`} className="hover:text-brand-300">{contact.email}</a>
                </p>
                <p className="flex items-center gap-2.5">
                  <Calendar className="h-4 w-4 shrink-0 text-brand-400" />
                  <span>{contact.hours}</span>
                </p>
              </address>
            </div>
          </div>

          <div className="flex flex-col items-center justify-between gap-2 pt-6 text-center text-xs text-slate-500 sm:flex-row sm:text-left">
            <p>© 2026 Perhimpunan Ahli Kesehatan Kerja Indonesia (PAKKI).</p>
            <a href="#beranda" className="hover:text-slate-300">Kembali ke atas ↑</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
