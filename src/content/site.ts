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
  { href: "#berita", label: "Berita" },
  { href: "#agenda", label: "Agenda & Diklat" },
  { href: "#regulasi", label: "Regulasi" },
  { href: "#profil", label: "Profil" },
  { href: "#pengurus", label: "Pengurus" },
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
    summary: "Seluruh Anggota Biasa dan Anggota Khusus diimbau melakukan validasi Nomor Anggota (NA).",
    meta: "Batas akhir: Kuartal I",
    href: "#keanggotaan",
  },
  {
    category: "Kemitraan Lembaga",
    tone: "amber",
    title: "Audiensi DPP PAKKI bersama Kementerian Ketenagakerjaan & Kemenkes RI",
    summary: "Harmonisasi pengawasan keselamatan kerja dan kurikulum uji kompetensi ahli K3 nasional.",
    meta: "Berita Sekretariat",
    href: "#berita",
  },
] as const;

// CONTOH KONTEN: berita & agenda di bawah hanya ilustrasi tata letak, ganti dengan data asli.
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

// ---------------------------------------------------------------------------
// Data resmi organisasi. Sumber: AD/ART PAKKI hasil Munas II (Bogor, 2022) dan
// SK DPP PAKKI No. 011/DPP.PAKKI/SK/K/X/2022 tentang Susunan Personalia 2022–2027.
// ---------------------------------------------------------------------------

export const organization = {
  founded: "3 November 2015", // AD Pasal 3
  legalBasis: "AD/ART Munas II PAKKI, Bogor 2022",
};

// AD Pasal 8
export const objectives = [
  "Menghimpun, membina, mengembangkan, dan mengamalkan ilmu pengetahuan dan teknologi di bidang kesehatan kerja untuk mencapai kesehatan kerja yang optimal dan produktivitas kerja yang tinggi.",
  "Meningkatkan pelayanan ahli kesehatan kerja dalam upaya meningkatkan derajat kesehatan kerja.",
  "Mengembangkan karier dan prestasi kerja tenaga ahli kesehatan kerja sejalan dengan peningkatan kesejahteraan tenaga ahli kesehatan kerja.",
];

// AD Pasal 7
export const values = ["Kejujuran", "Berkeadilan", "Altruistik", "Akuntabel", "Transparansi", "Kebersamaan"];

// ART Pasal 3
export const emblemMeaning = [
  {
    part: "Buku hijau",
    meaning:
      "Profesi berkompetensi tinggi yang senantiasa mengikuti perkembangan keilmuan, teknologi, dan regulasi kesehatan kerja.",
  },
  {
    part: "Tanda plus putih",
    meaning:
      "Pelayanan kesehatan kerja yang ikhlas demi derajat kesehatan pekerja setinggi-tingginya di semua sektor.",
  },
  {
    part: "Dua orang berpegangan",
    meaning: "Semangat kolaborasi dan kebersamaan yang konstruktif dengan para pemangku kepentingan.",
  },
  {
    part: "Tulisan melingkar",
    meaning: "Wadah berhimpun seluruh ahli kesehatan kerja yang terus berinovasi secara berkesinambungan.",
  },
];

// ART Pasal 14–17
export const membershipTypes = [
  {
    name: "Anggota Biasa",
    body: "Warga Negara Indonesia berlatar belakang pendidikan tinggi kesehatan dan keselamatan kerja.",
  },
  {
    name: "Anggota Khusus",
    body: "Ahli kesehatan dan keselamatan kerja warga negara asing yang bekerja di Indonesia dan teregistrasi di negara asal.",
  },
  {
    name: "Anggota Kehormatan",
    body: "Warga Negara Indonesia yang berjasa terhadap perkembangan kesehatan dan keselamatan kerja atau organisasi PAKKI.",
  },
];

// ART Pasal 15 (Anggota Biasa)
export const membershipRequirements = [
  "Warga Negara Indonesia",
  "Ijazah pendidikan tinggi kesehatan dan keselamatan kerja yang diakui Pemerintah",
  "Sertifikat Kompetensi/Profesi sejak diberlakukannya uji kompetensi",
  "Bersedia menaati AD/ART PAKKI dan Kode Etik Ahli Kesehatan Kerja Indonesia",
  "Bersedia aktif mengikuti kegiatan organisasi",
];

// AD Pasal 20
export const membershipFees = [
  { label: "Uang pangkal", amount: "Rp100.000" },
  { label: "Iuran wajib", amount: "Rp240.000 / tahun" },
];

// ART Pasal 18
export const membershipSteps = [
  {
    title: "Daftar & isi formulir",
    body: "Hubungi sekretariat untuk memperoleh formulir pendaftaran anggota. Pendaftaran daring melalui web segera tersedia.",
  },
  {
    title: "Pernyataan kesediaan",
    body: "Menyatakan kesediaan mematuhi AD/ART, Kode Etik Ahli Kesehatan Kerja Indonesia, dan Peraturan Organisasi PAKKI.",
  },
  {
    title: "Verifikasi DPP",
    body: "Dewan Pengurus Pusat memverifikasi kesesuaian data dan persyaratan calon anggota.",
  },
  {
    title: "Nomor & Kartu Anggota",
    body: "Calon anggota yang memenuhi syarat menerima Nomor Anggota (NA) dan Kartu Anggota dari DPP PAKKI.",
  },
];

// SK No. 011/DPP.PAKKI/SK/K/X/2022 — nama sesuai lampiran SK; tanda baca gelar dirapikan
export const leadership = {
  period: "2022–2027",
  skNumber: "011/DPP.PAKKI/SK/K/X/2022",
  skDate: "25 Oktober 2022",
  executives: [
    { role: "Ketua Umum", name: "Dr. Hendra, S.K.M., M.K.K.K." },
    { role: "Sekretaris Jenderal", name: "Katherina Welong, S.K.M., MARS" },
    { role: "Wakil Sekretaris Jenderal", name: "Melisa Rahmadani, S.K.M., M.K.K.K." },
    { role: "Bendahara Umum", name: "Imelda Husdiani, S.T., M.Kes." },
    { role: "Wakil Bendahara Umum", name: "Dewi Ratna Sari, S.K.M., M.Si." },
  ],
  divisions: [
    {
      name: "Organisasi, Pembinaan, dan Kaderisasi",
      chair: "Imarsan, S.T.",
      members: [
        "Tasripin, S.K.M., M.K.M.",
        "Wahyu Hartono, Apt., M.K.K.K.",
        "Amin Mubarok, S.K.M., M.K.K.K.",
        "Taufik Herdiansyah, S.K.M., MMRS",
      ],
    },
    {
      name: "Hukum dan Regulasi",
      chair: "drg. Dyah Erti Mustika, M.P.H.",
      members: [
        "Estri Esrawaty, S.K.M.",
        "Rr. Winda Kusuma Ningrum, S.Si., M.K.K.K.",
        "Netty Elfrida, S.K.M.",
        "Aziz Yusuf, S.K.M.",
      ],
    },
    {
      name: "Hubungan Antar Lembaga, Informasi, dan Komunikasi",
      chair: "Fetrina Lestari, S.K.M., M.K.K.K.",
      members: [
        "Jimmy Tiarlina, S.K.M., M.K.M.",
        "Lina Sari, S.K.M., MARS",
        "Martha Uli Siregar, S.K.M., MM",
        "Safira Cahyandari, S.K.M.",
      ],
    },
    {
      name: "Pendidikan, Pelatihan, dan Pengembangan Profesi",
      chair: "Kurniawan Arif Mufadlil, S.K.M., MMRS",
      members: [
        "Dr. Yuliani Setyaningsih, S.K.M., M.Kes.",
        "Ali Syahrul C, S.K.M., M.K.K.K.",
        "Ns. Nina Hernawati, S.Kep., M.K.K.K.",
        "Ilham A. Rifai, S.K.M., M.Kes.",
      ],
    },
    {
      name: "Pelayanan dan Kesejahteraan",
      chair: "Dr. Selamat Riyadi, S.K.M., M.K.K.K.",
      members: [
        "Dr. Iting Shofwati, S.T., M.K.K.K.",
        "Ika Ratnawati, S.K.M., M.K.K.K.",
        "Chatarina Herlina Supraptini, S.K.M., M.K.M.",
        "Eli Sutiawati, S.K.M.",
      ],
    },
  ],
  councils: [
    {
      name: "Dewan Pakar",
      chair: "Dr. Robiana Modjo, S.K.M., M.Kes., MARS",
      members: [
        "Hanifa Maher Denny, S.K.M., M.P.H., Ph.D.",
        "Prof. Yahya Thamrin, S.K.M., MOHS, Ph.D.",
        "Dr. dr. Iqbal Mochtar, M.P.H., M.K.K.K.",
      ],
    },
    {
      name: "Dewan Pembina",
      chair: "Prof. dra. Fatma Lestari, M.Si., Ph.D.",
      members: [
        "drg. Kartini Rustandi, M.Kes.",
        "Jelsi Natalia Marampa, S.K.M., M.K.K.K.",
        "Agung Surya Irawan, S.K.M., M.K.K.K.",
      ],
    },
  ],
};
