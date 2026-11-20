const DRAFT_KEY = "uat_sis_draft_v1";
const RECORDS_KEY = "uat_sis_records_v1";

const form = document.getElementById("uat-form");
const statusMsg = document.getElementById("status-msg");
const rekapList = document.getElementById("rekap-list");

function showStatus(msg) {
  statusMsg.textContent = msg;
  setTimeout(() => {
    if (statusMsg.textContent === msg) {
      statusMsg.textContent = "";
    }
  }, 3500);
}

function getFormData() {
  const data = {};
  const elements = form.querySelectorAll("input, select, textarea");

  elements.forEach((el) => {
    if (!el.name) return;
    if (el.type === "radio") {
      if (el.checked) {
        data[el.name] = el.value;
      } else if (!(el.name in data)) {
        data[el.name] = "";
      }
    } else {
      data[el.name] = el.value;
    }
  });

  return data;
}

function fillFormData(data) {
  if (!data) return;
  const elements = form.querySelectorAll("input, select, textarea");

  elements.forEach((el) => {
    if (!el.name) return;
    if (el.type === "radio") {
      el.checked = data[el.name] === el.value;
    } else {
      el.value = data[el.name] ?? "";
    }
  });
}

function saveDraft() {
  localStorage.setItem(DRAFT_KEY, JSON.stringify(getFormData()));
}

function loadDraft() {
  const raw = localStorage.getItem(DRAFT_KEY);
  if (!raw) return;
  try {
    fillFormData(JSON.parse(raw));
  } catch (e) {
    console.error("Gagal memuat draft:", e);
  }
}

function getRecords() {
  const raw = localStorage.getItem(RECORDS_KEY);
  if (!raw) return [];
  try {
    return JSON.parse(raw);
  } catch (e) {
    return [];
  }
}

function saveRecords(records) {
  localStorage.setItem(RECORDS_KEY, JSON.stringify(records));
}

function renderRecords() {
  const records = getRecords();
  if (records.length === 0) {
    rekapList.innerHTML = '<p class="subtitle">Belum ada data wawancara tersimpan.</p>';
    return;
  }

  rekapList.innerHTML = records
    .map((rec, idx) => {
      const d = rec.data;
      const keputusan = d.keputusanUat || "Belum dipilih";
      const badgeClass =
        keputusan === "Diterima"
          ? "diterima"
          : keputusan === "Ditolak"
          ? "ditolak"
          : "";

      return `
        <div class="rekap-item">
          <div>
            <strong>${escapeHtml(d.namaResponden || "Tanpa Nama")}</strong>
            <span class="subtitle">(${escapeHtml(d.peranResponden || "Tanpa Peran")})</span><br />
            <span class="subtitle">Skenario: ${escapeHtml(d.skenarioUat || "-")} • Tanggal: ${escapeHtml(d.tanggalWawancara || "-")}</span><br />
            <span class="badge ${badgeClass}">${escapeHtml(keputusan)}</span>
          </div>
          <div class="rekap-actions">
            <button type="button" class="btn-secondary btn-sm" onclick="loadRecord(${idx})">Muat</button>
            <button type="button" class="btn-danger btn-sm" onclick="deleteRecord(${idx})">Hapus</button>
          </div>
        </div>
      `;
    })
    .join("");
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

window.loadRecord = function (index) {
  const records = getRecords();
  if (!records[index]) return;
  fillFormData(records[index].data);
  saveDraft();
  showStatus("Data rekapan dimuat ke formulir.");
  window.scrollTo({ top: 0, behavior: "smooth" });
};

window.deleteRecord = function (index) {
  const records = getRecords();
  records.splice(index, 1);
  saveRecords(records);
  renderRecords();
  showStatus("Data rekapan dihapus.");
};

document.getElementById("btn-simpan").addEventListener("click", () => {
  const currentData = getFormData();
  saveDraft();

  const records = getRecords();
  records.unshift({
    savedAt: new Date().toISOString(),
    data: currentData,
  });
  saveRecords(records);
  renderRecords();
  showStatus("Data berhasil disimpan ke localStorage.");
});

document.getElementById("btn-cetak").addEventListener("click", () => {
  saveDraft();
  window.print();
});

document.getElementById("btn-reset").addEventListener("click", () => {
  form.reset();
  localStorage.removeItem(DRAFT_KEY);
  showStatus("Formulir telah direset.");
});

form.addEventListener("input", saveDraft);
form.addEventListener("change", saveDraft);

loadDraft();
renderRecords();