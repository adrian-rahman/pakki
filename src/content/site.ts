// Isi website dipusatkan di sini agar mudah diperbarui tanpa menyentuh tata letak.
// TODO sebelum go-live: ganti semua nilai bertanda "PLACEHOLDER" dengan data resmi.

export const contact = {
  email: "sekretariat@pakki.or.id",
  // PLACEHOLDER: nomor WhatsApp sekretariat yang asli
  whatsapp: "628111111111",
  address:
    "Gedung C Lantai 3, Fakultas Kesehatan Masyarakat, Universitas Indonesia, Kampus Baru UI Depok 16424",
  hours: "Senin – Jumat, 09.00 – 16.00 WIB",
};

export const legal = {
  // PLACEHOLDER: isi nomor SK Kemenkumham, mis. "AHU-0000000.AH.01.07.TAHUN"
  skNumber: null as string | null,
};

export const navItems = [
  { href: "#beranda", label: "Beranda" },
  { href: "#warta", label: "Warta" },
  { href: "#agenda", label: "Agenda & Diklat" },
  { href: "#regulasi", label: "Regulasi" },
  { href: "#profil", label: "Profil" },
  { href: "#keanggotaan", label: "Keanggotaan" },
  { href: "#kontak", label: "Kontak" },
];

export const announcements = [
  {
    category: "Program P2KB / SKP",
    tone: "brand",
    title: "Sosialisasi Sistem Informasi Portofolio SKP Online (SIPORLIN) untuk Anggota Aktif",
    summary: "Panduan pengisian berkas portofolio pengabdian profesi dan persyaratan resertifikasi.",
    meta: "Daring via Zoom",
    href: "#agenda",
  },
  {
    category: "Administrasi Organisasi",
    tone: "blue",
    title: "Pembaruan Basis Data Anggota (KTA Digital) Periode Kepengurusan Baru",
    summary: "Seluruh anggota biasa dan luar biasa diimbau melakukan validasi nomor registrasi profesi.",
    meta: "Batas akhir: Kuartal I",
    href: "#keanggotaan",
  },
  {
    category: "Kemitraan Lembaga",
    tone: "amber",
    title: "Audiensi DPP PAKKI bersama Kementerian Ketenagakerjaan & Kemenkes RI",
    summary: "Harmonisasi pengawasan keselamatan kerja dan kurikulum uji kompetensi ahli K3 nasional.",
    meta: "Warta Sekretariat",
    href: "#warta",
  },
] as const;

// CONTOH KONTEN: warta & agenda di bawah hanya ilustrasi tata letak, ganti dengan data asli.
export const news = [
  {
    category: "Kebijakan",
    date: "November 2026",
    title: "Masukan PAKKI terhadap Rancangan Pedoman Surveilans Kesehatan Pekerja",
    summary:
      "DPP menyampaikan rekomendasi teknis terkait frekuensi pemeriksaan berkala dan pelaporan Penyakit Akibat Kerja.",
  },
  {
    category: "Keprofesian",
    date: "Oktober 2026",
    title: "Pembaruan Kode Etik Profesi Ahli Kesehatan Kerja",
    summary:
      "Revisi kode etik menegaskan independensi ahli dalam penilaian risiko dan kerahasiaan data medis pekerja.",
  },
  {
    category: "Cabang",
    date: "September 2026",
    title: "Konsolidasi Pengurus Cabang Wilayah Sumatera dan Kalimantan",
    summary:
      "Penguatan jejaring cabang untuk memperluas jangkauan program P2KB di sektor perkebunan dan pertambangan.",
  },
];

export const agenda = [
  {
    day: "12",
    month: "Des",
    type: "Webinar P2KB",
    title: "Penilaian Pajanan Kebisingan & Program Konservasi Pendengaran",
    place: "Daring (Zoom)",
    skp: "2 SKP",
  },
  {
    day: "18",
    month: "Jan",
    type: "Pelatihan",
    title: "Ergonomi Partisipatif untuk Industri Manufaktur",
    place: "Jakarta",
    skp: "4 SKP",
  },
  {
    day: "07",
    month: "Feb",
    type: "Seminar Ilmiah",
    title: "Kesehatan Mental Pekerja dan Faktor Psikososial di Tempat Kerja",
    place: "Hybrid – FKM UI Depok",
    skp: "3 SKP",
  },
];

export const regulations = [
  {
    number: "UU No. 1 Tahun 1970",
    about: "Keselamatan Kerja di segala tempat kerja di darat, laut, dan udara",
    issuer: "Undang-Undang",
    // Isi dengan URL PDF resmi (mis. dari JDIH) bila sudah tersedia
    href: null as string | null,
  },
  {
    number: "PP No. 88 Tahun 2019",
    about: "Kesehatan Kerja: pencegahan Penyakit Akibat Kerja dan peningkatan derajat kesehatan pekerja",
    issuer: "Pemerintah RI",
    href: null as string | null,
  },
  {
    number: "Permenaker No. 5 Tahun 2018",
    about: "K3 Lingkungan Kerja: faktor fisika, kimia, biologi, ergonomi, dan psikologi",
    issuer: "Kemenaker RI",
    href: null as string | null,
  },
  {
    number: "Permenkes No. 48 Tahun 2016",
    about: "Standar Keselamatan dan Kesehatan Kerja Perkantoran",
    issuer: "Kemenkes RI",
    href: null as string | null,
  },
];

export const membershipSteps = [
  {
    title: "Siapkan berkas",
    body: "Ijazah terakhir bidang kesehatan kerja/K3, KTP, pas foto, dan sertifikat kompetensi (bila ada).",
  },
  {
    title: "Hubungi sekretariat",
    body: "Kirim berkas melalui email atau WhatsApp registrasi untuk mendapatkan formulir pendaftaran.",
  },
  {
    title: "Verifikasi DPP",
    body: "Sekretariat memverifikasi kelengkapan dan kesesuaian latar belakang keahlian pendaftar.",
  },
  {
    title: "Terbit KTA",
    body: "Anggota menerima nomor registrasi dan KTA digital, serta dapat mengikuti program P2KB.",
  },
];
