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

function ubahPertanyaan() {
    const skenario = document.getElementById("skenario").value;
    const pertanyaan = daftarPertanyaan[skenario] || defaultPertanyaan;

    for (let i = 1; i <= 5; i++) {
        const elemen = document.getElementById(`q${i}-text`);
        if (elemen) {
            elemen.textContent = pertanyaan[i - 1];
        }
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
    const formData = new FormData(form);
    const data = {};

    for (const [key, value] of formData.entries()) {
        data[key] = value.trim();
    }

    const pesan = document.getElementById("pesan");

    if (!data.namaResponden || !data.skenario || !data.keputusan) {
        pesan.textContent = "Harap isi Nama Responden, Skenario UAT, dan Keputusan UAT terlebih dahulu.";
        pesan.style.color = "#dc2626";
        return;
    }

    data.id = Date.now();
    const daftar = ambilDaftarRekap();
    daftar.push(data);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(daftar));

    pesan.textContent = "Data berhasil disimpan dan ditampilkan di tabel bawah.";
    pesan.style.color = "#15803d";

    renderRekap();
}

function renderRekap() {
    const daftar = ambilDaftarRekap();
    const tbody = document.getElementById("tabelRekapBody");

    const total = daftar.length;
    const diterima = daftar.filter(item => item.keputusan === "Diterima").length;
    const ditolak = daftar.filter(item => item.keputusan === "Ditolak").length;

    const persenDiterima = total > 0 ? ((diterima / total) * 100).toFixed(1) : "0";
    const persenDitolak = total > 0 ? ((ditolak / total) * 100).toFixed(1) : "0";

    document.getElementById("totalData").textContent = total;
    document.getElementById("jumlahDiterima").textContent = `${diterima} (${persenDiterima}%)`;
    document.getElementById("jumlahDitolak").textContent = `${ditolak} (${persenDitolak}%)`;

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
                <td>
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
        document.getElementById("formUAT").reset();
        ubahPertanyaan();
        const pesan = document.getElementById("pesan");
        pesan.textContent = "Formulir telah dikosongkan.";
        pesan.style.color = "#475569";
    }
}

window.addEventListener("DOMContentLoaded", () => {
    ubahPertanyaan();
    renderRekap();
});
