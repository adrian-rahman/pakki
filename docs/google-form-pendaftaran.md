# Google Form — Pendaftaran Anggota PAKKI

Rancangan formulir pendaftaran anggota tahap awal, mengikuti **ART PAKKI Pasal 14–18** (Munas II, 2022).
Setelah formulir dibuat, salin tautannya ke `registrationFormUrl` di `src/content/site.ts`. Tombol
"Isi Formulir Pendaftaran" di website akan muncul otomatis.

> ⚠️ Hal yang perlu dikonfirmasi ke pengurus sebelum formulir dibuka ditandai **[KONFIRMASI]**.

---

## Pengaturan formulir (Settings)

| Pengaturan | Nilai | Alasan |
|---|---|---|
| Judul | Formulir Pendaftaran Anggota PAKKI | |
| Collect email addresses | **Verified** | Wajib untuk fitur unggah file; sekaligus kontak pendaftar |
| Limit to 1 response | Mati | Pendaftar boleh memperbaiki dengan mengirim ulang |
| Allow response editing | Hidup | Pendaftar bisa melengkapi berkas yang kurang |
| Tujuan jawaban | Google Sheets baru: "Pendaftar Anggota PAKKI" | Tempat DPP memverifikasi |
| Akses Sheets & folder Drive unggahan | **Hanya pengurus yang ditunjuk** (bukan "anyone with the link") | Data pribadi (UU No. 27/2022) |
| Akun pemilik formulir | Akun Google resmi organisasi, bukan akun pribadi | Agar tidak hilang saat pengurus berganti |

Catatan: pertanyaan unggah file mengharuskan pendaftar **login akun Google**. Batasi ukuran tiap file maks. 10 MB, jenis PDF/gambar.

---

## Bagian 1 — Pengantar & Persetujuan Data Pribadi

**Deskripsi bagian:**
> Terima kasih atas minat Anda bergabung dengan Perhimpunan Ahli Kesehatan Kerja Indonesia (PAKKI).
> Data yang Anda berikan hanya digunakan oleh Dewan Pengurus Pusat PAKKI untuk keperluan verifikasi
> keanggotaan, penerbitan Nomor Anggota (NA) dan Kartu Anggota, serta komunikasi organisasi. Data tidak
> akan dibagikan kepada pihak lain tanpa persetujuan Anda, sesuai UU No. 27 Tahun 2022 tentang
> Pelindungan Data Pribadi.

1. **Persetujuan penggunaan data pribadi** — *Kotak centang, wajib*
   - ☐ Saya menyetujui pengumpulan dan penggunaan data pribadi saya untuk keperluan di atas.

---

## Bagian 2 — Data Diri

2. Nama lengkap beserta gelar — *Jawaban singkat, wajib* (contoh: "Budi Santoso, S.K.M., M.K.K.K.")
3. Jenis kelamin — *Pilihan ganda, wajib*: Laki-laki / Perempuan
4. Tempat lahir — *Jawaban singkat, wajib*
5. Tanggal lahir — *Tanggal, wajib*
6. Kewarganegaraan — *Pilihan ganda, wajib*: WNI / WNA
   - → **WNI** lanjut ke Bagian 3; **WNA** lanjut ke Bagian 3 lalu Bagian 6 (pakai "Go to section based on answer" di bagian akhir).
7. Nomor HP / WhatsApp aktif — *Jawaban singkat, wajib* (validasi: angka)
8. Provinsi domisili — *Dropdown, wajib* (38 provinsi; berguna untuk DPD PAKKI)
9. Kabupaten/Kota domisili — *Jawaban singkat, wajib* (berguna untuk DPC PAKKI)
10. Alamat lengkap — *Paragraf, wajib*
11. Pas foto berwarna (latar polos) — *Unggah file, wajib*, 1 file gambar
12. **[KONFIRMASI]** NIK — *Jawaban singkat*. Hanya tambahkan jika DPP benar-benar membutuhkannya
    (prinsip data minimal). Jika ditambahkan: validasi 16 digit angka.

---

## Bagian 3 — Keanggotaan

13. Jenis keanggotaan yang diajukan — *Pilihan ganda, wajib*
    - Anggota Biasa (WNI)
    - Anggota Khusus (WNA yang bekerja di Indonesia)
    - *(Anggota Kehormatan tidak dibuka di formulir karena ditetapkan oleh organisasi — ART Pasal 17.)*
14. Apakah Anda pernah terdaftar sebagai anggota PAKKI sebelumnya? — *Pilihan ganda, wajib*: Ya / Tidak
15. Jika ya, Nomor Anggota (NA) lama — *Jawaban singkat, opsional*
    - Membantu menghimpun kembali anggota lama dan memutakhirkan basis data.

---

## Bagian 4 — Pendidikan & Kompetensi

16. Jenjang pendidikan terakhir di bidang K3 / kesehatan kerja — *Dropdown, wajib*: D3 / D4 / S1 / S2 / S3 / Profesi
17. Program studi — *Jawaban singkat, wajib*
18. Perguruan tinggi — *Jawaban singkat, wajib*
19. Tahun lulus — *Jawaban singkat, wajib* (validasi: angka 4 digit)
20. Unggah ijazah — *Unggah file, wajib*, PDF/gambar
21. Apakah Anda memiliki Sertifikat Kompetensi/Profesi? — *Pilihan ganda, wajib*: Ya / Belum
22. Nomor sertifikat kompetensi — *Jawaban singkat, opsional*
23. Unggah sertifikat kompetensi — *Unggah file, opsional*

> ART Pasal 15 ayat 3 mensyaratkan sertifikat kompetensi "sejak diberlakukannya uji kompetensi".
> **[KONFIRMASI]** apakah lulusan sebelum uji kompetensi tetap diterima tanpa sertifikat.

---

## Bagian 5 — Pekerjaan

24. Status pekerjaan — *Pilihan ganda, wajib*: Bekerja / Wiraswasta/Konsultan / Akademisi/Peneliti / Belum bekerja / Lainnya
25. Nama instansi/perusahaan — *Jawaban singkat, opsional*
26. Jabatan — *Jawaban singkat, opsional*
27. Sektor — *Dropdown, opsional*: Fasilitas pelayanan kesehatan / Migas & pertambangan / Manufaktur / Konstruksi / Perkantoran & jasa / Pemerintahan / Pendidikan / Lainnya

---

## Bagian 6 — Khusus Pendaftar WNA (Anggota Khusus)

*(Hanya tampil untuk jawaban "WNA" di pertanyaan 6.)* — sesuai ART Pasal 16

28. Negara asal — *Jawaban singkat, wajib*
29. Nomor registrasi profesi di negara asal — *Jawaban singkat, wajib*
30. Unggah surat keterangan perilaku etik dari organisasi profesi negara asal — *Unggah file, wajib*
31. Unggah dokumen izin kerja di Indonesia — *Unggah file, wajib*

---

## Bagian 7 — Pernyataan & Pembayaran

32. Pernyataan — *Kotak centang, wajib semua*
    - ☐ Saya bersedia mematuhi Anggaran Dasar dan Anggaran Rumah Tangga PAKKI.
    - ☐ Saya bersedia mematuhi Kode Etik Ahli Kesehatan Kerja Indonesia dan Peraturan Organisasi PAKKI.
    - ☐ Saya bersedia aktif mengikuti kegiatan organisasi yang dilaksanakan PAKKI.
    - ☐ Data dan dokumen yang saya kirimkan adalah benar.
33. **[KONFIRMASI]** Bukti transfer uang pangkal (Rp100.000) — *Unggah file*.
    Hanya tambahkan bila rekening resmi organisasi dan alurnya sudah disetujui DPP.
    Alternatif: pembayaran diminta setelah berkas lolos verifikasi.

**Pesan konfirmasi setelah kirim:**
> Terima kasih. Pendaftaran Anda telah kami terima dan akan diverifikasi oleh Dewan Pengurus Pusat PAKKI.
> Informasi selanjutnya akan dikirimkan melalui email atau WhatsApp yang Anda cantumkan.

---

## Pertanyaan untuk pengurus sebelum formulir dibuka

1. Siapa yang memverifikasi pendaftar, dan berapa lama targetnya?
2. Format Nomor Anggota (NA)?
3. Apakah NIK diperlukan?
4. Alur dan rekening resmi untuk uang pangkal & iuran (Rp240.000/tahun)?
5. Akun Google mana yang menjadi pemilik formulir dan Sheets?
