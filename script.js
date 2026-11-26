const EMAILJS_PUBLIC_KEY = "pykwTa_QqgXczTxFr";
const EMAILJS_SERVICE_ID = "service_s9xp9y6";
const EMAILJS_TEMPLATE_ID = "template_dy5nseq";
const PENERIMA_EMAIL_UAT = "ridaputriaulia5@gmail.com";

const daftarPertanyaan = {
    "Login": [
        "1. Apakah halaman Login dan tombol Logout pada SIFIN/SIVIN mudah ditemukan dan diakses?",
        "2. Apakah proses autentikasi (masuk ke Dashboard, pembatasan menu sesuai peran Admin/Petugas/Peminjam, serta Logout) sudah akurat sesuai kebutuhan?",
        "3. Apakah tampilan form login dan pesan notifikasi kesalahan mudah dipahami?",
        "4. Apakah kecepatan verifikasi login hingga masuk ke Dashboard berjalan lancar tanpa kendala?",
        "5. Secara keseluruhan, apakah fitur Login & Kontrol Hak Akses sudah layak digunakan?"
    ],
    "Mengelola Data Barang": [
        "1. Apakah menu Data Barang beserta tombol tambah, ubah, hapus, dan pencarian barang mudah ditemukan?",
        "2. Apakah penyimpanan data barang (stok, stok minimum, kategori, lokasi) serta notifikasi Flasher sudah akurat sesuai kebutuhan?",
        "3. Apakah tata letak tabel daftar barang dan formulir inputnya mudah dipahami?",
        "4. Apakah kecepatan pencarian dan penyimpanan pada modul Data Barang berjalan lancar tanpa error?",
        "5. Secara keseluruhan, apakah fitur Mengelola Data Barang sudah layak digunakan?"
    ],
    "Mengelola Data Kategori": [
        "1. Apakah menu Data Kategori mudah diakses untuk menambah, mengubah, atau mencari kategori?",
        "2. Apakah perubahan kategori tersimpan akurat, memunculkan notifikasi Flasher, dan menolak penghapusan kategori yang masih dipakai barang?",
        "3. Apakah tampilan daftar kategori dan formulir pengelolaannya mudah dipahami?",
        "4. Apakah proses CRUD pada modul Data Kategori berjalan cepat dan stabil?",
        "5. Secara keseluruhan, apakah fitur Mengelola Data Kategori sudah layak digunakan?"
    ],
    "Mengelola Data Supplier": [
        "1. Apakah menu Data Supplier mudah diakses untuk mengelola data pemasok?",
        "2. Apakah data supplier tersimpan akurat dengan notifikasi Flasher dan dapat dipilih pada transaksi Barang Masuk?",
        "3. Apakah tampilan tabel dan formulir Data Supplier mudah dipahami?",
        "4. Apakah pengelolaan data pada modul Data Supplier berjalan lancar tanpa kendala?",
        "5. Secara keseluruhan, apakah fitur Mengelola Data Supplier sudah layak digunakan?"
    ],
    "Barang Masuk": [
        "1. Apakah menu transaksi Barang Masuk dan pemilihan barang serta supplier mudah diakses?",
        "2. Apakah transaksi Barang Masuk otomatis menambah stok barang dan mencatat riwayat mutasi stok (stok_mutasi) secara akurat?",
        "3. Apakah tampilan formulir transaksi Barang Masuk dan notifikasi keberhasilannya mudah dipahami?",
        "4. Apakah pencatatan transaksi Barang Masuk berjalan cepat tanpa error?",
        "5. Secara keseluruhan, apakah fitur Barang Masuk sudah layak digunakan untuk operasional harian?"
    ],
    "Barang Keluar": [
        "1. Apakah menu transaksi Barang Keluar mudah ditemukan dan diakses?",
        "2. Apakah transaksi Barang Keluar mengurangi stok secara akurat, mencatat mutasi stok, dan menolak transaksi jika jumlah melebihi stok?",
        "3. Apakah tampilan formulir Barang Keluar dan pesan validasi stok kurang mudah dipahami?",
        "4. Apakah penyimpanan transaksi Barang Keluar berjalan lancar dan stabil?",
        "5. Secara keseluruhan, apakah fitur Barang Keluar sudah layak digunakan?"
    ],
    "Peminjaman": [
        "1. Apakah menu Peminjaman mudah diakses untuk mencatat transaksi peminjaman barang?",
        "2. Apakah pencatatan peminjaman otomatis mengurangi stok, menolak jika stok kurang, dan tercatat di riwayat mutasi stok?",
        "3. Apakah tampilan daftar peminjaman dan formulir inputnya mudah dipahami?",
        "4. Apakah proses penyimpanan transaksi Peminjaman berjalan cepat tanpa kendala?",
        "5. Secara keseluruhan, apakah fitur Peminjaman sudah layak digunakan?"
    ],
    "Pengembalian": [
        "1. Apakah menu Pengembalian mudah diakses untuk memproses barang yang dikembalikan?",
        "2. Apakah proses pengembalian (termasuk kondisi barang) berhasil mengembalikan stok secara akurat dan tercatat di mutasi stok?",
        "3. Apakah tampilan formulir dan status transaksi pada halaman Pengembalian mudah dipahami?",
        "4. Apakah proses konfirmasi Pengembalian berjalan cepat dan stabil tanpa error?",
        "5. Secara keseluruhan, apakah fitur Pengembalian sudah layak digunakan?"
    ],
    "Dashboard": [
        "1. Apakah halaman Dashboard dan menu Riwayat Mutasi Stok mudah diakses?",
        "2. Apakah ringkasan data inventaris dan filter riwayat mutasi stok menampilkan data yang akurat sesuai transaksi?",
        "3. Apakah tata letak ringkasan informasi dan tabel riwayat pada Dashboard mudah dipahami?",
        "4. Apakah halaman Dashboard dan filter riwayat mutasi dimuat dengan cepat tanpa lag?",
        "5. Secara keseluruhan, apakah fitur Dashboard & Riwayat Mutasi Stok sudah layak digunakan?"
    ]
};

const defaultPertanyaan = [
    "1. Apakah menu dan alur navigasi pada fitur yang diuji mudah ditemukan dan diakses?",
    "2. Apakah proses input data dan hasil tampilannya sudah akurat sesuai kebutuhan operasional?",
    "3. Apakah tata letak tabel, formulir input, label kolom, dan pesan notifikasi pada halaman mudah dipahami?",
    "4. Apakah kecepatan muat halaman dan proses penyimpanan data berjalan lancar tanpa kendala (lag/error)?",
    "5. Secara keseluruhan, apakah fitur pada skenario ini sudah layak diterapkan untuk operasional pengelolaan inventaris sehari-hari?"
];

const STORAGE_KEY = "rekapUAT_SIVIN";

function initEmailJS() {
    if (typeof emailjs !== "undefined") {
        emailjs.init({ publicKey: EMAILJS_PUBLIC_KEY });
    }
}

function susunRingkasanEmail(data) {
    return [
        "=== HASIL PENGISIAN FORMULIR UAT SIFIN/SIVIN ===",
        "Tanggal Wawancara : " + (data.tanggal || "-"),
        "Nama Penguji      : " + (data.namaPenguji || "-"),
        "Nama Responden    : " + (data.namaResponden || "-"),
        "Peran Responden   : " + (data.peran || "-"),
        "Skenario UAT      : " + (data.skenario || "-"),
        "",
        "--- JAWABAN & CATATAN ---",
        "Q1: " + (data.q1 || "-") + " | Catatan: " + (data.catatan1 || "-"),
        "Q2: " + (data.q2 || "-") + " | Catatan: " + (data.catatan2 || "-"),
        "Q3: " + (data.q3 || "-") + " | Catatan: " + (data.catatan3 || "-"),
        "Q4: " + (data.q4 || "-") + " | Catatan: " + (data.catatan4 || "-"),
        "Q5: " + (data.q5 || "-") + " | Catatan: " + (data.catatan5 || "-"),
        "",
        "--- KEPUTUSAN & SARAN ---",
        "Keputusan UAT     : " + (data.keputusan || "-"),
        "Saran Perbaikan   : " + (data.saran || "-")
    ].join("\n");
}

function kirimDataKeEmail(data) {
    if (typeof emailjs === "undefined") {
        return Promise.reject(new Error("Library EmailJS belum termuat."));
    }

    const templateParams = {
        name: data.namaResponden || "Responden UAT",
        email: PENERIMA_EMAIL_UAT,
        message: susunRingkasanEmail(data)
    };

    return emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams);
}

function setText(id, text) {
    const el = document.getElementById(id);
    if (el) el.textContent = text;
}

function setWidth(id, width) {
    const el = document.getElementById(id);
    if (el) el.style.width = width;
}

function bukaMenu(menu) {
    const menuForm = document.getElementById("menuForm");
    const menuPersen = document.getElementById("menuPersen");
    const tabForm = document.getElementById("tabForm");
    const tabPersen = document.getElementById("tabPersen");

    if (!menuForm || !menuPersen) return;

    if (menu === "persen") {
        menuForm.classList.add("hidden");
        menuPersen.classList.remove("hidden");
        if (tabForm) tabForm.classList.remove("active");
        if (tabPersen) tabPersen.classList.add("active");
        renderRekap();
    } else {
        menuPersen.classList.add("hidden");
        menuForm.classList.remove("hidden");
        if (tabPersen) tabPersen.classList.remove("active");
        if (tabForm) tabForm.classList.add("active");
    }
}

function ubahPertanyaan() {
    const select = document.getElementById("skenario");
    if (!select) return;

    const skenario = select.value;
    const pertanyaan = daftarPertanyaan[skenario] || defaultPertanyaan;

    for (let i = 1; i <= 5; i++) {
        setText(`q${i}-text`, pertanyaan[i - 1]);
    }
}

function ambilDaftarRekap() {
    try {
        const saved = localStorage.getItem(STORAGE_KEY);
        return saved ? JSON.parse(saved) : [];
    } catch (e) {
        return [];
    }
}

function simpanData() {
    const form = document.getElementById("formUAT");
    if (!form) return;

    const formData = new FormData(form);
    const data = {};

    for (const [key, value] of formData.entries()) {
        data[key] = value.trim();
    }

    const pesan = document.getElementById("pesan");
    const btnSimpan = document.getElementById("btnSimpan");

    if (!data.namaResponden || !data.skenario || !data.keputusan) {
        if (pesan) {
            pesan.textContent = "Harap isi Nama Responden, Skenario UAT, dan Keputusan UAT terlebih dahulu.";
            pesan.style.color = "#dc2626";
        }
        return;
    }

    data.id = Date.now();
    const daftar = ambilDaftarRekap();
    daftar.push(data);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(daftar));
    renderRekap();

    if (btnSimpan) btnSimpan.disabled = true;
    if (pesan) {
        pesan.textContent = "Data tersimpan, sedang mengirim ke email...";
        pesan.style.color = "#1d4ed8";
    }

    kirimDataKeEmail(data)
        .then(() => {
            if (pesan) {
                pesan.textContent = "Data berhasil disimpan dan terkirim ke email!";
                pesan.style.color = "#15803d";
            }
        })
        .catch((err) => {
            console.error("Gagal mengirim email ke EmailJS:", err);
            if (pesan) {
                pesan.textContent = "Data tersimpan di browser, tetapi gagal terkirim ke email. Cek Console/EmailJS.";
                pesan.style.color = "#dc2626";
            }
        })
        .finally(() => {
            if (btnSimpan) btnSimpan.disabled = false;
        });
}

function renderRekap() {
    const daftar = ambilDaftarRekap();
    const tbody = document.getElementById("tabelRekapBody");

    const total = daftar.length;
    const diterima = daftar.filter(item => item.keputusan === "Diterima").length;
    const ditolak = daftar.filter(item => item.keputusan === "Ditolak").length;

    const persenDiterima = total > 0 ? ((diterima / total) * 100).toFixed(1) : "0";
    const persenDitolak = total > 0 ? ((ditolak / total) * 100).toFixed(1) : "0";

    setText("menuBadgeDiterima", `Menerima: ${persenDiterima}%`);
    setText("menuBadgeDitolak", `Menolak: ${persenDitolak}%`);
    setText("totalData", total);
    setText("jumlahDiterima", `${persenDiterima}% (${diterima})`);
    setText("jumlahDitolak", `${persenDitolak}% (${ditolak})`);
    setText("labelPersenDiterima", `${persenDiterima}% (${diterima} responden)`);
    setText("labelPersenDitolak", `${persenDitolak}% (${ditolak} responden)`);
    setWidth("barDiterima", `${persenDiterima}%`);
    setWidth("barDitolak", `${persenDitolak}%`);

    if (!tbody) return;

    if (total === 0) {
        tbody.innerHTML = `<tr><td colspan="9" class="empty-row">Belum ada data UAT yang disimpan.</td></tr>`;
        return;
    }

    tbody.innerHTML = daftar.map((item, index) => {
        const jawaban = [
            `Q1: ${item.q1 || "-"}`,
            `Q2: ${item.q2 || "-"}`,
            `Q3: ${item.q3 || "-"}`,
            `Q4: ${item.q4 || "-"}`,
            `Q5: ${item.q5 || "-"}`
        ].join("<br>");

        const badgeClass = item.keputusan === "Diterima" ? "badge-diterima" : "badge-ditolak";

        return `
            <tr>
                <td>${index + 1}</td>
                <td>${item.tanggal || "-"}</td>
                <td>${item.skenario}</td>
                <td>${item.namaResponden}<br><small>(${item.peran || "-"})</small></td>
                <td>${item.namaPenguji || "-"}</td>
                <td><small>${jawaban}</small></td>
                <td><span class="badge ${badgeClass}">${item.keputusan}</span></td>
                <td>${item.saran || "-"}</td>
                <td class="col-aksi">
                    <button type="button" class="btn-danger-sm" onclick="hapusSatuData(${item.id})">
                        Hapus
                    </button>
                </td>
            </tr>
        `;
    }).join("");
}

function hapusSatuData(id) {
    if (!confirm("Hapus data ini?")) return;
    const daftar = ambilDaftarRekap().filter(item => item.id !== id);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(daftar));
    renderRekap();
}

function hapusSemuaData() {
    if (!confirm("Yakin ingin menghapus semua data UAT?")) return;
    localStorage.removeItem(STORAGE_KEY);
    renderRekap();
}

function cetakForm() {
    window.print();
}

function resetForm() {
    if (confirm("Kosongkan isian formulir saat ini?")) {
        const form = document.getElementById("formUAT");
        if (form) form.reset();
        ubahPertanyaan();
        const pesan = document.getElementById("pesan");
        if (pesan) {
            pesan.textContent = "Formulir telah dikosongkan.";
            pesan.style.color = "#475569";
        }
    }
}

window.addEventListener("DOMContentLoaded", () => {
    initEmailJS();
    ubahPertanyaan();
    renderRekap();

    const tabForm = document.getElementById("tabForm");
    const tabPersen = document.getElementById("tabPersen");
    const skenario = document.getElementById("skenario");
    const btnSimpan = document.getElementById("btnSimpan");
    const btnCetak = document.getElementById("btnCetak");
    const btnReset = document.getElementById("btnReset");
    const btnHapusSemua = document.getElementById("btnHapusSemua");
    const formUAT = document.getElementById("formUAT");

    if (tabForm) tabForm.addEventListener("click", () => bukaMenu("form"));
    if (tabPersen) tabPersen.addEventListener("click", () => bukaMenu("persen"));
    if (skenario) skenario.addEventListener("change", ubahPertanyaan);
    if (btnSimpan) btnSimpan.addEventListener("click", simpanData);
    if (btnCetak) btnCetak.addEventListener("click", cetakForm);
    if (btnReset) btnReset.addEventListener("click", resetForm);
    if (btnHapusSemua) btnHapusSemua.addEventListener("click", hapusSemuaData);
    if (formUAT) {
        formUAT.addEventListener("submit", (e) => {
            e.preventDefault();
            simpanData();
        });
    }
});
```[cite: 2, 6, 9, 13, 14]

---

### 2. Kode Lengkap untuk `index.html`

Di bagian bawah `index.html`, `<script>` besar yang tadinya inline diganti menjadi pemanggilan **SDK EmailJS** lalu **`script.js`** (dan `* {` sudah diperbaiki dari `- {` di CSS-nya).

```html
<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Formulir UAT - SIFIN/SIVIN</title>
    <style>
        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }

        body {
            background-color: #f3f6fb;
            color: #1e293b;
            line-height: 1.5;
            padding: 24px 16px;
        }

        .container {
            max-width: 920px;
            margin: 0 auto;
        }

        .hidden {
            display: none !important;
        }

        /* Header */
        .header {
            background: linear-gradient(135deg, #1d4ed8, #2563eb);
            color: #ffffff;
            padding: 20px 24px;
            border-radius: 12px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            flex-wrap: wrap;
            gap: 14px;
            margin-bottom: 16px;
            box-shadow: 0 4px 14px rgba(37, 99, 235, 0.2);
        }

        .header-left {
            display: flex;
            align-items: center;
            gap: 14px;
        }

        .logo {
            background: #ffffff;
            color: #1d4ed8;
            font-weight: 800;
            font-size: 0.95rem;
            padding: 10px 14px;
            border-radius: 8px;
        }

        .header h1 { font-size: 1.35rem; }
        .header p { font-size: 0.9rem; opacity: 0.9; }

        .header-label {
            background: rgba(255, 255, 255, 0.18);
            border: 1px solid rgba(255, 255, 255, 0.35);
            padding: 6px 12px;
            border-radius: 20px;
            font-size: 0.78rem;
            font-weight: 600;
        }

        /* Menu Navigasi */
        .nav-menu {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 12px;
            margin-bottom: 18px;
        }

        .nav-btn {
            padding: 14px 16px;
            border: 2px solid #cbd5e1;
            background: #ffffff;
            color: #1e293b;
            border-radius: 12px;
            cursor: pointer;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            gap: 6px;
            text-align: left;
            transition: all 0.2s;
        }

        .nav-btn:hover {
            border-color: #60a5fa;
            background: #f8fafc;
        }

        .nav-btn.active {
            border-color: #2563eb;
            background: #eff6ff;
            box-shadow: 0 3px 10px rgba(37, 99, 235, 0.15);
        }

        .nav-title {
            font-size: 0.98rem;
            font-weight: 700;
            color: #1e3a8a;
        }

        .nav-sub {
            font-size: 0.82rem;
            color: #64748b;
        }

        .nav-badges {
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
        }

        .nav-badge {
            font-size: 0.78rem;
            font-weight: 700;
            padding: 3px 9px;
            border-radius: 999px;
        }

        .nav-badge.diterima { background: #d1fae5; color: #065f46; }
        .nav-badge.ditolak { background: #fee2e2; color: #991b1b; }

        /* Card Section */
        .form-section {
            background: #ffffff;
            border: 1px solid #dbe4f0;
            border-radius: 12px;
            padding: 22px 24px;
            margin-bottom: 20px;
            box-shadow: 0 2px 6px rgba(15, 23, 42, 0.04);
        }

        .form-section h2 {
            font-size: 1.1rem;
            color: #1e3a8a;
            padding-bottom: 10px;
            margin-bottom: 18px;
            border-bottom: 2px solid #3b82f6;
        }

        .form-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 16px;
        }

        .form-group {
            display: flex;
            flex-direction: column;
            gap: 6px;
        }

        .form-group.full { grid-column: 1 / -1; }

        .form-group label,
        .note-label {
            font-size: 0.88rem;
            font-weight: 600;
            color: #334155;
        }

        input[type="text"],
        input[type="date"],
        select,
        textarea {
            width: 100%;
            padding: 10px 12px;
            border: 1px solid #cbd5e1;
            border-radius: 8px;
            font-size: 0.92rem;
            color: #0f172a;
            background: #ffffff;
        }

        input:focus,
        select:focus,
        textarea:focus {
            outline: none;
            border-color: #2563eb;
            box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.15);
        }

        textarea { resize: vertical; min-height: 70px; }

        /* Pertanyaan */
        .question {
            padding: 16px 0;
            border-bottom: 1px dashed #cbd5e1;
        }

        .question:last-of-type { border-bottom: none; }

        .question-text {
            font-weight: 600;
            color: #0f172a;
            margin-bottom: 10px;
            font-size: 0.95rem;
        }

        .radio-group {
            display: flex;
            gap: 20px;
            flex-wrap: wrap;
            margin-bottom: 12px;
        }

        .radio-group label {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            cursor: pointer;
            font-size: 0.92rem;
        }

        .note-label { display: block; margin-bottom: 6px; }
        .suggestion { margin-top: 16px; }

        /* Tombol */
        .button-group {
            display: flex;
            gap: 12px;
            flex-wrap: wrap;
            margin-bottom: 12px;
        }

        .btn {
            padding: 10px 18px;
            border: none;
            border-radius: 8px;
            font-size: 0.92rem;
            font-weight: 600;
            cursor: pointer;
        }

        .btn:disabled {
            opacity: 0.65;
            cursor: not-allowed;
        }

        .btn-save { background: #2563eb; color: #fff; }
        .btn-print { background: #0f766e; color: #fff; }
        .btn-reset { background: #64748b; color: #fff; }

        #pesan {
            font-size: 0.9rem;
            font-weight: 600;
            min-height: 22px;
            margin-bottom: 14px;
        }

        /* Rekap & Statistik */
        .rekap-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-wrap: wrap;
            gap: 10px;
            border-bottom: 2px solid #3b82f6;
            padding-bottom: 10px;
            margin-bottom: 18px;
        }

        .rekap-header h2 { border-bottom: none; padding-bottom: 0; margin-bottom: 0; }

        .stats-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 12px;
            margin-bottom: 18px;
        }

        .stat-card {
            padding: 14px 16px;
            border-radius: 10px;
            border: 1px solid #cbd5e1;
            background: #f8fafc;
            display: flex;
            flex-direction: column;
            gap: 4px;
        }

        .stat-card span { font-size: 0.84rem; color: #475569; font-weight: 600; }
        .stat-card strong { font-size: 1.3rem; }
        .stat-diterima { background: #ecfdf5; border-color: #a7f3d0; color: #065f46; }
        .stat-ditolak { background: #fef2f2; border-color: #fecaca; color: #991b1b; }

        .progress-box {
            display: flex;
            flex-direction: column;
            gap: 14px;
            margin-bottom: 22px;
            padding: 16px;
            background: #f8fafc;
            border: 1px solid #e2e8f0;
            border-radius: 10px;
        }

        .progress-label {
            display: flex;
            justify-content: space-between;
            font-size: 0.9rem;
            margin-bottom: 6px;
        }

        .progress-track {
            width: 100%;
            height: 14px;
            background: #e2e8f0;
            border-radius: 999px;
            overflow: hidden;
        }

        .progress-fill { height: 100%; transition: width 0.35s ease; }
        .fill-diterima { background: #10b981; }
        .fill-ditolak { background: #ef4444; }

        .table-wrapper { overflow-x: auto; }

        .rekap-table {
            width: 100%;
            border-collapse: collapse;
            font-size: 0.86rem;
        }

        .rekap-table th,
        .rekap-table td {
            border: 1px solid #cbd5e1;
            padding: 8px 10px;
            text-align: left;
            vertical-align: top;
        }

        .rekap-table th { background: #f1f5f9; }
        .empty-row { text-align: center !important; color: #64748b; padding: 16px !important; }

        .badge {
            display: inline-block;
            padding: 3px 9px;
            border-radius: 12px;
            font-size: 0.78rem;
            font-weight: 600;
        }

        .badge-diterima { background: #d1fae5; color: #065f46; }
        .badge-ditolak { background: #fee2e2; color: #991b1b; }

        .btn-danger-sm {
            background: #dc2626;
            color: #ffffff;
            border: none;
            padding: 6px 10px;
            border-radius: 6px;
            cursor: pointer;
            font-size: 0.8rem;
            font-weight: 600;
        }

        .btn-danger-sm:hover { background: #b91c1c; }

        footer {
            text-align: center;
            color: #64748b;
            font-size: 0.85rem;
            margin-top: 10px;
        }

        @media (max-width: 640px) {
            .nav-menu, .form-grid, .stats-grid { grid-template-columns: 1fr; }
        }

        @media print {
            .nav-menu, .button-group, #pesan, .btn-danger-sm, .col-aksi { display: none !important; }
        }
    </style>
</head>
<body>

<div class="container">
    <header class="header">
        <div class="header-left">
            <div class="logo">SIFIN/SIVIN</div>
            <div>
                <h1>Formulir Wawancara UAT</h1>
                <p>Sistem Informasi Inventory (SIFIN/SIVIN)</p>
            </div>
        </div>
        <span class="header-label">USER ACCEPTANCE TESTING</span>
    </header>

    <!-- Menu Navigasi dengan Persentase Langsung -->
    <nav class="nav-menu">
        <button type="button" class="nav-btn active" id="tabForm">
            <span class="nav-title">Formulir Wawancara</span>
            <span class="nav-sub">Isi data pengujian baru</span>
        </button>

        <button type="button" class="nav-btn" id="tabPersen">
            <span class="nav-title">Persentase &amp; Rekapitulasi</span>
            <span class="nav-badges">
                <span class="nav-badge diterima" id="menuBadgeDiterima">Menerima: 0%</span>
                <span class="nav-badge ditolak" id="menuBadgeDitolak">Menolak: 0%</span>
            </span>
        </button>
    </nav>

    <!-- MENU 1: FORMULIR WAWANCARA -->
    <div id="menuForm">
        <form id="formUAT">
            <section class="form-section">
                <h2>Identitas Penguji &amp; Responden</h2>

                <div class="form-grid">
                    <div class="form-group">
                        <label for="namaPenguji">Nama Penguji</label>
                        <input type="text" id="namaPenguji" name="namaPenguji" placeholder="Nama lengkap penguji (QA)">
                    </div>

                    <div class="form-group">
                        <label for="tanggal">Tanggal Wawancara</label>
                        <input type="date" id="tanggal" name="tanggal">
                    </div>

                    <div class="form-group">
                        <label for="namaResponden">Nama Responden</label>
                        <input type="text" id="namaResponden" name="namaResponden" placeholder="Nama pengguna akhir">
                    </div>

                    <div class="form-group">
                        <label for="peran">Peran Responden</label>
                        <select id="peran" name="peran">
                            <option value="">— Pilih peran —</option>
                            <option value="Admin">Admin</option>
                            <option value="Petugas">Petugas</option>
                            <option value="Peminjam">Peminjam</option>
                        </select>
                    </div>

                    <div class="form-group full">
                        <label for="skenario">Skenario UAT</label>
                        <select id="skenario" name="skenario">
                            <option value="">— Pilih skenario —</option>
                            <option value="Login">Login</option>
                            <option value="Mengelola Data Barang">Mengelola Data Barang</option>
                            <option value="Mengelola Data Kategori">Mengelola Data Kategori</option>
                            <option value="Mengelola Data Supplier">Mengelola Data Supplier</option>
                            <option value="Barang Masuk">Barang Masuk</option>
                            <option value="Barang Keluar">Barang Keluar</option>
                            <option value="Peminjaman">Peminjaman</option>
                            <option value="Pengembalian">Pengembalian</option>
                            <option value="Dashboard">Dashboard</option>
                        </select>
                    </div>
                </div>
            </section>

            <section class="form-section">
                <h2>Pertanyaan Wawancara</h2>

                <div class="question">
                    <p id="q1-text" class="question-text">1. Apakah menu dan alur navigasi pada fitur yang diuji mudah ditemukan dan diakses?</p>
                    <div class="radio-group">
                        <label><input type="radio" name="q1" value="Mudah"> Mudah</label>
                        <label><input type="radio" name="q1" value="Cukup Mudah"> Cukup Mudah</label>
                        <label><input type="radio" name="q1" value="Sulit"> Sulit</label>
                    </div>
                    <label class="note-label">Catatan Q1</label>
                    <textarea name="catatan1" placeholder="Catatan responden..."></textarea>
                </div>

                <div class="question">
                    <p id="q2-text" class="question-text">2. Apakah proses input data dan hasil tampilannya sudah akurat sesuai kebutuhan operasional?</p>
                    <div class="radio-group">
                        <label><input type="radio" name="q2" value="Sesuai Sepenuhnya"> Sesuai Sepenuhnya</label>
                        <label><input type="radio" name="q2" value="Sebagian Sesuai"> Sebagian Sesuai</label>
                        <label><input type="radio" name="q2" value="Tidak Sesuai"> Tidak Sesuai</label>
                    </div>
                    <label class="note-label">Catatan Q2</label>
                    <textarea name="catatan2" placeholder="Catatan responden..."></textarea>
                </div>

                <div class="question">
                    <p id="q3-text" class="question-text">3. Apakah tata letak tabel, formulir input, label kolom, dan pesan notifikasi pada halaman mudah dipahami?</p>
                    <div class="radio-group">
                        <label><input type="radio" name="q3" value="Sangat Jelas"> Sangat Jelas</label>
                        <label><input type="radio" name="q3" value="Cukup Jelas"> Cukup Jelas</label>
                        <label><input type="radio" name="q3" value="Kurang Jelas"> Kurang Jelas</label>
                    </div>
                    <label class="note-label">Catatan Q3</label>
                    <textarea name="catatan3" placeholder="Catatan responden..."></textarea>
                </div>

                <div class="question">
                    <p id="q4-text" class="question-text">4. Apakah kecepatan muat halaman dan proses penyimpanan data berjalan lancar tanpa kendala (lag/error)?</p>
                    <div class="radio-group">
                        <label><input type="radio" name="q4" value="Cepat & Stabil"> Cepat &amp; Stabil</label>
                        <label><input type="radio" name="q4" value="Cukup Memadai"> Cukup Memadai</label>
                        <label><input type="radio" name="q4" value="Lambat / Bermasalah"> Lambat / Bermasalah</label>
                    </div>
                    <label class="note-label">Catatan Q4</label>
                    <textarea name="catatan4" placeholder="Catatan responden..."></textarea>
                </div>

                <div class="question">
                    <p id="q5-text" class="question-text">5. Secara keseluruhan, apakah fitur pada skenario ini sudah layak diterapkan untuk operasional pengelolaan inventaris sehari-hari?</p>
                    <div class="radio-group">
                        <label><input type="radio" name="q5" value="Layak Digunakan"> Layak Digunakan</label>
                        <label><input type="radio" name="q5" value="Layak dengan Catatan"> Layak dengan Catatan</label>
                        <label><input type="radio" name="q5" value="Belum Layak"> Belum Layak</label>
                    </div>
                    <label class="note-label">Catatan Q5</label>
                    <textarea name="catatan5" placeholder="Catatan responden..."></textarea>
                </div>
            </section>

            <section class="form-section">
                <h2>Keputusan UAT</h2>

                <div class="form-group">
                    <label for="keputusan">Keputusan UAT</label>
                    <select id="keputusan" name="keputusan">
                        <option value="">— Pilih keputusan —</option>
                        <option value="Diterima">Diterima</option>
                        <option value="Ditolak">Ditolak</option>
                    </select>
                </div>

                <div class="form-group suggestion">
                    <label for="saran">Saran Perbaikan</label>
                    <textarea id="saran" name="saran" placeholder="Saran dari responden..."></textarea>
                </div>
            </section>

            <div class="button-group">
                <button type="button" class="btn btn-save" id="btnSimpan">Simpan Data</button>
                <button type="button" class="btn btn-print" id="btnCetak">Cetak Formulir Ini</button>
                <button type="button" class="btn btn-reset" id="btnReset">Reset Form</button>
            </div>

            <p id="pesan"></p>
        </form>
    </div>

    <!-- MENU 2: PERSENTASE & REKAPITULASI -->
    <div id="menuPersen" class="hidden">
        <section class="form-section">
            <div class="rekap-header">
                <h2>Persentase Penerimaan &amp; Penolakan UAT</h2>
                <button type="button" class="btn-danger-sm" id="btnHapusSemua">Hapus Semua Data</button>
            </div>

            <div class="stats-grid">
                <div class="stat-card">
                    <span>Total Responden</span>
                    <strong id="totalData">0</strong>
                </div>
                <div class="stat-card stat-diterima">
                    <span>Menerima (Diterima)</span>
                    <strong id="jumlahDiterima">0% (0)</strong>
                </div>
                <div class="stat-card stat-ditolak">
                    <span>Menolak (Ditolak)</span>
                    <strong id="jumlahDitolak">0% (0)</strong>
                </div>
            </div>

            <div class="progress-box">
                <div class="progress-item">
                    <div class="progress-label">
                        <span>Menerima (Diterima)</span>
                        <strong id="labelPersenDiterima">0% (0 responden)</strong>
                    </div>
                    <div class="progress-track">
                        <div class="progress-fill fill-diterima" id="barDiterima" style="width: 0%;"></div>
                    </div>
                </div>

                <div class="progress-item">
                    <div class="progress-label">
                        <span>Menolak (Ditolak)</span>
                        <strong id="labelPersenDitolak">0% (0 responden)</strong>
                    </div>
                    <div class="progress-track">
                        <div class="progress-fill fill-ditolak" id="barDitolak" style="width: 0%;"></div>
                    </div>
                </div>
            </div>

            <div class="table-wrapper">
                <table class="rekap-table">
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Tanggal</th>
                            <th>Skenario</th>
                            <th>Responden (Peran)</th>
                            <th>Penguji</th>
                            <th>Jawaban (Q1–Q5)</th>
                            <th>Keputusan</th>
                            <th>Saran</th>
                            <th class="col-aksi">Aksi</th>
                        </tr>
                    </thead>
                    <tbody id="tabelRekapBody">
                        <tr>
                            <td colspan="9" class="empty-row">Belum ada data UAT yang disimpan.</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
    </div>

    <footer>
        <p>© 2026 SIFIN/SIVIN - Sistem Informasi Inventory</p>
    </footer>
</div>

<script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js"></script>
<script src="script.js"></script>
</body>
</html>
