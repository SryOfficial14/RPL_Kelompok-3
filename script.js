const form = document.getElementById("formUAT");
const pesan = document.getElementById("pesan");

const STORAGE_KEY = "formUATSIFIN";

// Memulihkan data saat halaman dibuka
document.addEventListener("DOMContentLoaded", function () {
    const dataTersimpan = localStorage.getItem(STORAGE_KEY);

    if (dataTersimpan) {
        const data = JSON.parse(dataTersimpan);

        Object.keys(data).forEach(function (nama) {
            const elemen = form.elements[nama];

            if (!elemen) return;

            if (elemen.length && elemen[0].type === "radio") {
                elemen.forEach(function (radio) {
                    radio.checked = radio.value === data[nama];
                });
            } else {
                elemen.value = data[nama];
            }
        });
    }
});

// Fungsi menyimpan data
function simpanData() {
    const data = {};

    const formData = new FormData(form);

    formData.forEach(function (value, key) {
        data[key] = value;
    });

    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));

    pesan.textContent = "Data formulir berhasil disimpan!";
}

// Fungsi mencetak formulir
function cetakForm() {
    window.print();
}

// Fungsi reset formulir
function resetForm() {
    const konfirmasi = confirm(
        "Apakah kamu yakin ingin menghapus seluruh data formulir?"
    );

    if (konfirmasi) {
        form.reset();

        localStorage.removeItem(STORAGE_KEY);

        pesan.textContent = "Formulir berhasil direset!";
    }
}