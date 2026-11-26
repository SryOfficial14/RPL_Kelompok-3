# SIVIN — Sistem Informasi Inventori

## 1. Tentang Proyek
**SIVIN (Sistem Informasi Inventori)** merupakan aplikasi berbasis web yang dibuat untuk membantu proses pengelolaan dan pencatatan persediaan barang. Aplikasi ini dikembangkan sebagai proyek kelompok pada mata kuliah **Rekayasa Perangkat Lunak (RPL)**.

Sistem ini dirancang untuk mempermudah pengguna dalam mengelola data barang, mencatat barang masuk dan barang keluar, mengelola data pemasok (*supplier*), lokasi penyimpanan, peminjaman barang, serta memantau laporan stok secara terstruktur dan efisien.

---

## 2. Anggota Kelompok 3
- **Arib Alfakhri** (2501141001)
- **Rida Putri Aulia** (2501142001)
- **Nurma Riska Alivia** (2501142003)
- **Surya Adi Pratama Sianturi** (2501143006)

---

## 3. Struktur & Fitur Utama
- **Manajemen Pengguna & Autentikasi**: Fitur login dan pembatasan hak akses pengguna (Admin, Petugas, Peminjam).
- **Data Master**: Pengelolaan data barang, kategori barang, lokasi penyimpanan, dan data *supplier*.
- **Transaksi Inventori**: Pencatatan barang masuk, barang keluar, peminjaman, pengembalian barang, serta riwayat mutasi stok.
- **Laporan & Dokumentasi**: Rekapitulasi stok barang, dashboard ringkasan, dan dokumentasi pengujian perangkat lunak.

---

## 4. Teknologi yang Digunakan
* **Bahasa Pemrograman:** PHP Native (Pola MVC)
* **Basis Data:** MySQL / MariaDB
* **Antarmuka (UI):** HTML5, CSS3, JavaScript, AdminLTE 3 / Bootstrap
* **Lingkungan Server:** Apache (Laragon / XAMPP)

## 5. Tautan Form & Dokumentasi
- **Formulir Wawancara UAT (GitHub Pages)**: [Buka Formulir UAT](https://sryofficial14.github.io/RPL_Kelompok-3/)
- **Laporan Pengujian Perangkat Lunak**: [laporan rpl_kel3.pdf](./laporan%20rpl_kel3.pdf)
- **Persentasi Materi Kelompok Kami**: [ppt_rpl kel 3.pptx](./ppt_rpl%20kel%203.pptx)
- **Repositori GitHub**: [RPL_Kelompok-3](https://github.com/SryOfficial14/RPL_Kelompok-3)

---

## 6. Arsitektur & Struktur Basis Data

Basis data dirancang menggunakan DBMS **MySQL / MariaDB** dengan *storage engine* **InnoDB** untuk menjamin integritas referensial melalui relasi *Foreign Key*, *Cascading*, dan penerapan kaidah normalisasi data.

* **Nama Database:** `db_sivin`
* **Karakter Set:** `utf8mb4`
* **Collation:** `utf8mb4_unicode_ci`

### Pengelompokan Tabel Basis Data

#### A. Tabel Master Data
1. **`users` / `pengguna`**: Menyimpan identitas pengelola, kredensial login (username & password hash), status akun, serta hak akses (`admin`, `petugas`, `peminjam`).
2. **`kategori`**: Klasifikasi jenis barang atau aset inventaris (contoh: Peralatan Elektronik, ATK, Perkakas, Mebel).
3. **`lokasi` / `ruangan`**: Data penempatan fisik aset (contoh: Lab Komputer, Ruang Dosen, Gudang Utama).
4. **`supplier` / `pemasok`**: Informasi profil penyedia atau distributor pengadaan aset barang.
5. **`barang`**: Data induk inventaris yang mencakup kode barang, nama, relasi kategori, lokasi, batas stok minimum, dan stok yang tersedia.

#### B. Tabel Transaksi (Pola Header-Detail)
6. **`barang_masuk` (Header)**: Mencatat nomor faktur/surat jalan pengadaan, tanggal penerimaan, supplier rekanan, dan petugas pencatat.
7. **`barang_masuk_detail` (Detail)**: Rincian item barang beserta kuantitas dan harga satuan yang masuk pada satu nota pengadaan.
8. **`peminjaman` (Header)**: Mencatat kode transaksi peminjaman, identitas peminjam, tanggal pinjam, batas waktu kembali, dan status nota.
9. **`peminjaman_detail` (Detail)**: Rincian item barang yang dipinjam dalam satu transaksi peminjaman.
10. **`pengembalian` & `pengembalian_detail`**: Pencatatan fisik barang saat kembali, verifikasi kondisi aset (baik, rusak, hilang), serta pembaruan status peminjaman.

#### C. Tabel Mutasi Stok (Ledger / Audit Trail)
11. **`stok_mutasi`**: Buku besar mutasi inventaris yang mencatat riwayat pergerakan stok per barang secara otomatis saat terjadi barang masuk, peminjaman, atau pengembalian.
    * Rumus integritas saldo: `stok_akhir = stok_awal + jumlah_masuk - jumlah_keluar`
