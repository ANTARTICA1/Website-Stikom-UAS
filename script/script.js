const hamburger = document.getElementById("hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

const reveals = document.querySelectorAll(".reveal");
function revealOnScroll() {
  reveals.forEach((el) => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      el.classList.add("active");
    }
  });
}
window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

const chatCircle = document.getElementById("chat-circle");
const chatBox = document.querySelector(".chat-box");
const chatClose = document.querySelector(".chat-box-toggle");
const chatInput = document.getElementById("chat-input-field");
const chatSubmitBtn = document.getElementById("chat-submit-btn");
const chatLogs = document.getElementById("chat-logs");

// Buka Chat
chatCircle.addEventListener("click", () => {
  chatBox.style.display = "flex";
  chatCircle.style.display = "none";
});

// Tutup Chat
chatClose.addEventListener("click", () => {
  chatBox.style.display = "none";
  chatCircle.style.display = "block";
});

// Fungsi kirim pesan
function sendMessage() {
  const text = chatInput.value.trim();
  if (text === "") return;

  // Tampilkan pesan user
  appendMessage(text, "user");
  chatInput.value = "";

  // Respon bot (delay 1 detik agar terasa natural)
  setTimeout(() => {
    const response = getBotResponse(text);
    appendMessage(response, "bot");
  }, 1000);
}

// Tampilkan pesan ke layar
function appendMessage(text, type) {
  const msgDiv = document.createElement("div");
  msgDiv.classList.add("chat-msg", type);
  msgDiv.innerHTML = text;
  chatLogs.appendChild(msgDiv);

  // Auto scroll ke bawah
  chatLogs.parentElement.scrollTop = chatLogs.parentElement.scrollHeight;
}

// Logika jawaban bot
function getBotResponse(input) {
  const val = input.toLowerCase();

  if (val.includes("jurusan") || val.includes("prodi") || val.includes("kuliah")) {
    return "ITB STIKOM Bali memiliki berbagai program unggulan seperti: <br>1. Sistem Komputer<br>2. Sistem Informasi<br>3. Teknologi Informasi<br>4. Bisnis Digital<br>5. Manajemen Informatika<br>6. International Dual Degree";
  } else if (val.includes("alamat") || val.includes("lokasi") || val.includes("dimana")) {
    return "Kampus Pusat kami berada di <b>Jl. Raya Puputan No. 86 Renon, Denpasar</b>. Kami juga memiliki kampus di Jimbaran.";
  } else if (val.includes("daftar") || val.includes("pendaftaran") || val.includes("pmb")) {
    return "Pendaftaran mahasiswa baru bisa dilakukan melalui website " + "<a href='https://siap.stikom-bali.ac.id/' target='_blank'>https://siap.stikom-bali.ac.id/</a>";
  } else if (val.includes("biaya") || val.includes("harga") || val.includes("spp")) {
    return "Untuk rincian biaya kuliah, Anda bisa menghubungi bagian administrasi atau mengecek Brosur Digital di situs resmi kami " + "<a href='https://siap.stikom-bali.ac.id/' target='_blank'>https://siap.stikom-bali.ac.id/</a>";
  } else if (val.includes("halo") || val.includes("hai")) {
    return "Halo! Ada yang bisa saya bantu terkait informasi kampus ITB STIKOM Bali?";
  } else {
    return "Maaf, saya belum memahami pertanyaan itu. Silakan hubungi Call Center kami di (0361) 244445 untuk informasi lebih lanjut.";
  }
}

// Event listener klik tombol
chatSubmitBtn.addEventListener("click", sendMessage);

// Event listener tekan Enter
chatInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    sendMessage();
  }
});

// AKSESIBILITAS
let fontSize = 100;

function toggleAccess() {
  document.getElementById("accessMenu").classList.toggle("show");
}

function zoomIn() {
  if (fontSize < 150) {
    fontSize += 10;
    document.documentElement.style.setProperty("--page-font-size", fontSize + "%");
  }
}

function zoomOut() {
  if (fontSize > 80) {
    fontSize -= 10;
    document.documentElement.style.setProperty("--page-font-size", fontSize + "%");
  }
}

function resetZoom() {
  fontSize = 100;
  document.documentElement.style.setProperty("--page-font-size", "100%");
}

// BACKTOTOP
const btnTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  try {
    if (typeof reveal === "function") {
      reveal();
    }
  } catch (e) {
    console.log("Reveal error:", e);
  }

  // 2. Jalankan BackToTop
  if (btnTop) {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
      btnTop.style.display = "block";
    } else {
      btnTop.style.display = "none";
    }
  }
});

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
