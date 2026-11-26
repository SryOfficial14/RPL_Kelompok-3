// =========================================================================
// KONFIGURASI EMAILJS LANGSUNG TERTAUT
// =========================================================================
const EMAILJS_SERVICE_ID  = "service_s9xp9y6";
const EMAILJS_TEMPLATE_ID = "template_dy5nseq";
const EMAILJS_PUBLIC_KEY  = "pykwTa_QqgXczTxFr";

emailjs.init({ publicKey: EMAILJS_PUBLIC_KEY });

// =========================================================================
// 10 PERTANYAAN KHUSUS MASING-MASING PERAN (ADMIN, PETUGAS, PEMIMPIN)
// =========================================================================
const PERTANYAAN_PER_PERAN = {
    Admin: [
        { q: "1. Apakah halaman Login mudah diakses dan autentikasi akun Admin berjalan lancar?", ket: "Aspek: Kemudahan Akses & Autentikasi" },
        { q: "2. Apakah sistem mengarahkan ke Dashboard Admin serta membatasi hak akses menu sesuai peran pengguna?", ket: "Aspek: Kontrol Hak Akses (Role)" },
        { q: "3. Apakah pengelolaan Data Barang (tambah, ubah, hapus, cari) dan pengaturan stok minimum berjalan akurat?", ket: "Aspek: Master Data Barang" },
        { q: "4. Apakah pengelolaan Data Kategori berjalan lancar dan menjaga integritas data saat kategori masih dipakai barang?", ket: "Aspek: Master Kategori & Integritas DB" },
        { q: "5. Apakah pengelolaan Data Supplier berjalan lancar dan langsung terhubung dengan transaksi barang masuk?", ket: "Aspek: Master Supplier & Integrasi" },
        { q: "6. Apakah notifikasi Flasher tampil jelas setiap kali Admin menyimpan, mengubah, atau menolak data?", ket: "Aspek: Notifikasi & Umpan Balik" },
        { q: "7. Apakah tampilan menu, formulir, dan tabel data master pada halaman Admin mudah dipahami?", ket: "Aspek: Kemudahan Tampilan" },
        { q: "8. Apakah fungsi Logout mengakhiri sesi Admin dengan aman sehingga halaman tidak bisa diakses tanpa login?", ket: "Aspek: Keamanan Sesi" },
        { q: "9. Apakah kecepatan respons sistem saat memproses data master dan perpindahan halaman sudah memadai?", ket: "Aspek: Kecukupan Performa" },
        { q: "10. Secara keseluruhan, apakah fitur dan sistem SIFIN/SIVIN sudah layak digunakan oleh Admin?", ket: "Aspek: Kelayakan Sistem" }
    ],

    Petugas: [
        { q: "1. Apakah menu pencatatan Transaksi Barang Masuk mudah diakses dan digunakan Petugas?", ket: "Aspek: Transaksi Barang Masuk" },
        { q: "2. Apakah stok barang otomatis bertambah dan tercatat pada riwayat stok_mutasi saat Barang Masuk disimpan?", ket: "Aspek: Mutasi Stok Barang Masuk" },
        { q: "3. Apakah menu Transaksi Barang Keluar mudah ditemukan dan mengurangkan stok secara akurat?", ket: "Aspek: Transaksi Barang Keluar" },
        { q: "4. Apakah sistem menolak transaksi Barang Keluar atau Peminjaman apabila jumlah melebihi stok tersedia?", ket: "Aspek: Validasi Stok Kurang" },
        { q: "5. Apakah pencatatan Transaksi Peminjaman barang berjalan lancar dan memperbarui status serta stok dengan tepat?", ket: "Aspek: Transaksi Peminjaman" },
        { q: "6. Apakah pencatatan Transaksi Pengembalian memulihkan stok saat kondisi 'baik' dan mencatat riwayat mutasi?", ket: "Aspek: Transaksi Pengembalian" },
        { q: "7. Apakah validasi input kuantitas (menolak angka nol atau negatif) berfungsi dengan baik pada form transaksi?", ket: "Aspek: Validasi Input Kuantitas" },
        { q: "8. Apakah tampilan formulir transaksi, sisa stok, dan pesan notifikasi mudah dipahami Petugas?", ket: "Aspek: Kemudahan Tampilan" },
        { q: "9. Apakah proses penyimpanan transaksi dan pembaruan stok pada antarmuka web berjalan cepat?", ket: "Aspek: Kecukupan Performa" },
        { q: "10. Secara keseluruhan, apakah sistem SIFIN/SIVIN sudah layak digunakan untuk operasional harian Petugas?", ket: "Aspek: Kelayakan Sistem" }
    ],

    Pemimpin: [
        { q: "1. Apakah Pemimpin dapat mengakses halaman Login dan masuk ke tampilan monitoring dengan mudah?", ket: "Aspek: Kemudahan Akses" },
        { q: "2. Apakah halaman Dashboard menyajikan ringkasan data inventaris dan transaksi secara jelas dan akurat?", ket: "Aspek: Ringkasan Dashboard" },
        { q: "3. Apakah informasi stok barang dan peringatan stok minimum membantu Pemimpin memantau ketersediaan aset?", ket: "Aspek: Pemantauan Stok" },
        { q: "4. Apakah menu Riwayat Mutasi Stok menampilkan stok awal, masuk, keluar, dan stok akhir secara konsisten?", ket: "Aspek: Riwayat Mutasi Stok" },
        { q: "5. Apakah fitur pencarian dan filter riwayat transaksi memudahkan Pemimpin menelusuri data?", ket: "Aspek: Filter & Penelusuran Data" },
        { q: "6. Apakah pembatasan hak akses untuk peran Pemimpin sudah sesuai wewenang monitoring dan pelaporan?", ket: "Aspek: Pembatasan Hak Akses" },
        { q: "7. Apakah tata letak tabel, grafik/kartu ringkasan, dan istilah pada sistem mudah dipahami Pemimpin?", ket: "Aspek: Kemudahan Tampilan" },
        { q: "8. Apakah data yang tampil pada Dashboard dan laporan mutasi sesuai dengan kebutuhan evaluasi Pemimpin?", ket: "Aspek: Kesesuaian Kebutuhan" },
        { q: "9. Apakah pemuatan halaman Dashboard dan penyaringan riwayat mutasi berjalan cepat tanpa kendala?", ket: "Aspek: Kecukupan Performa" },
        { q: "10. Secara keseluruhan, apakah sistem SIFIN/SIVIN sudah layak membantu Pemimpin dalam pengambilan keputusan?", ket: "Aspek: Kelayakan Sistem" }
    ]
};

const roleSelect = document.getElementById("roleSelect");
const questionsContainer = document.getElementById("questionsContainer");
const questionBoxTitle = document.getElementById("questionBoxTitle");
const statusMsg = document.getElementById("statusMsg");

// Set tanggal hari ini otomatis
document.getElementById("testDate").valueAsDate = new Date();

// Render 10 pertanyaan sesuai peran yang dipilih
function loadQuestions() {
    const role = roleSelect.value;
    const list = PERTANYAAN_PER_PERAN[role];

    questionBoxTitle.textContent = `B. Pertanyaan Evaluasi — ${role} (10 Pertanyaan)`;
    questionsContainer.innerHTML = "";

    list.forEach((item, i) => {
        const no = i + 1;
        const div = document.createElement("div");
        div.className = "q-item";
        div.innerHTML = `
            <div class="q-label">${item.q} <span class="req">*</span></div>
            <div class="q-hint">${item.ket}</div>
            <div class="radio-group">
                <label class="radio-option"><input type="radio" name="q${no}" value="Ya" required> Ya</label>
                <label class="radio-option"><input type="radio" name="q${no}" value="Sebagian"> Sebagian</label>
                <label class="radio-option"><input type="radio" name="q${no}" value="Tidak"> Tidak</label>
            </div>
            <input type="text" class="note-field" id="catatan${no}" placeholder="Catatan untuk pertanyaan ${no} (opsional)...">
        `;
        questionsContainer.appendChild(div);
    });
}

roleSelect.addEventListener("change", loadQuestions);

// Kirim langsung ke EmailJS
document.getElementById("uatForm").addEventListener("submit", async (e) => {
    e.preventDefault();

    const role = roleSelect.value;
    const list = PERTANYAAN_PER_PERAN[role];
    const qaName = document.getElementById("qaName").value.trim();
    const testDate = document.getElementById("testDate").value;
    const respondentName = document.getElementById("respondentName").value.trim();
    const keputusanAkhir = document.querySelector('input[name="decision"]:checked').value;
    const saranPerbaikan = document.getElementById("suggestions").value.trim() || "-";

    let rincian = [];
    const qAnswers = {};
    for (let i = 1; i <= 10; i++) {
        const checkedInput = document.querySelector(`input[name="q${i}"]:checked`);
        const jwb = checkedInput ? checkedInput.value : "-";
        const cat = document.getElementById(`catatan${i}`).value.trim();
        qAnswers[`q${i}_answer`] = jwb;
        rincian.push(
            `${list[i - 1].q}\n` +
            `   (${list[i - 1].ket})\n` +
            `   Jawaban: ${jwb}${cat ? " | Catatan: " + cat : ""}`
        );
    }

    const detailPertanyaanText = rincian.join("\n\n");
    const ringkasanLaporan = [
        `Nama Penguji (QA): ${qaName}`,
        `Tanggal Pengujian: ${testDate}`,
        `Nama Responden: ${respondentName}`,
        `Peran Responden: ${role}`,
        `----------------------------------------`,
        detailPertanyaanText,
        `----------------------------------------`,
        `Keputusan Kelayakan Sistem: ${keputusanAkhir}`,
        `Saran Perbaikan: ${saranPerbaikan}`
    ].join("\n");

    const templateParams = {
        qa_name: qaName,
        test_date: testDate,
        respondent_name: respondentName,
        respondent_role: role,
        ...qAnswers,
        detail_pertanyaan: detailPertanyaanText,
        keputusan_akhir: keputusanAkhir,
        saran_perbaikan: saranPerbaikan,
        ringkasan_laporan: ringkasanLaporan
    };

    const btn = document.getElementById("submitBtn");
    btn.disabled = true;
    btn.textContent = "Mengirim ke Email...";
    statusMsg.style.display = "none";

    try {
        await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams);
        statusMsg.className = "status-msg ok";
        statusMsg.textContent = "✅ Berhasil! Jawaban formulir kepuasan pengguna sudah terkirim ke email Anda.";
        document.getElementById("uatForm").reset();
        document.getElementById("testDate").valueAsDate = new Date();
        roleSelect.value = role;
        loadQuestions();
    } catch (error) {
        console.error("EmailJS Error:", error);
        statusMsg.className = "status-msg err";
        statusMsg.textContent = "❌ Gagal mengirim ke EmailJS. Pastikan koneksi internet aktif atau periksa template EmailJS Anda.";
    } finally {
        statusMsg.style.display = "block";
        btn.disabled = false;
        btn.textContent = "Kirim Formulir ke Email";
    }
});

loadQuestions();
