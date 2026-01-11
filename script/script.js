/* ===============================
   MOBILE MENU
================================ */
const hamburger = document.getElementById("hamburger");
const navLinks = document.querySelector(".nav-links");
const menuItems = document.querySelectorAll(".menu-item");

if (hamburger && navLinks) {
  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    hamburger.classList.toggle("active");
  });
}

menuItems.forEach((item) => {
  item.addEventListener("click", () => {
    if (window.innerWidth <= 968) {
      item.classList.toggle("active");
    }
  });
});

/* ===============================
   SCROLL REVEAL
================================ */
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

/* ===============================
   CHATBOT (AMAN)
================================ */
const chatCircle = document.getElementById("chat-circle");
const chatBox = document.querySelector(".chat-box");
const chatClose = document.querySelector(".chat-box-toggle");
const chatInput = document.getElementById("chat-input-field");
const chatSubmitBtn = document.getElementById("chat-submit-btn");
const chatLogs = document.getElementById("chat-logs");

// Buka chat
if (chatCircle && chatBox) {
  chatCircle.addEventListener("click", () => {
    chatBox.style.display = "flex";
    chatCircle.style.display = "none";
  });
}

// Tutup chat
if (chatClose && chatBox && chatCircle) {
  chatClose.addEventListener("click", () => {
    chatBox.style.display = "none";
    chatCircle.style.display = "block";
  });
}

// Kirim pesan
function sendMessage() {
  if (!chatInput || !chatLogs) return;

  const text = chatInput.value.trim();
  if (text === "") return;

  appendMessage(text, "user");
  chatInput.value = "";

  setTimeout(() => {
    appendMessage(getBotResponse(text), "bot");
  }, 1000);
}

// Tambah pesan ke chat
function appendMessage(text, type) {
  if (!chatLogs) return;

  const msgDiv = document.createElement("div");
  msgDiv.classList.add("chat-msg", type);
  msgDiv.innerHTML = text;
  chatLogs.appendChild(msgDiv);

  chatLogs.parentElement.scrollTop = chatLogs.parentElement.scrollHeight;
}

// Respon bot
function getBotResponse(input) {
  const val = input.toLowerCase();

  if (val.includes("jurusan") || val.includes("prodi") || val.includes("kuliah")) {
    return `ITB STIKOM Bali memiliki program:
    <br>1. Sistem Komputer
    <br>2. Sistem Informasi
    <br>3. Teknologi Informasi
    <br>4. Bisnis Digital
    <br>5. Manajemen Informatika
    <br>6. International Dual Degree`;
  }

  if (val.includes("alamat") || val.includes("lokasi")) {
    return "Kampus Pusat: <b>Jl. Raya Puputan No. 86 Renon, Denpasar</b>.";
  }

  if (val.includes("daftar") || val.includes("pmb")) {
    return "Pendaftaran: <a href='https://siap.stikom-bali.ac.id/' target='_blank'>SIAP STIKOM</a>";
  }

  if (val.includes("biaya") || val.includes("spp")) {
    return "Info biaya tersedia di <a href='https://siap.stikom-bali.ac.id/' target='_blank'>website resmi</a>.";
  }

  if (val.includes("halo") || val.includes("hai")) {
    return "Halo 👋 Ada yang bisa saya bantu?";
  }

  return "Maaf, pertanyaan belum saya pahami. Silakan hubungi (0361) 244445.";
}

// Event chatbot
if (chatSubmitBtn) {
  chatSubmitBtn.addEventListener("click", sendMessage);
}

if (chatInput) {
  chatInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") sendMessage();
  });
}

/* ===============================
   AKSESIBILITAS (AMAN)
================================ */
let fontSize = 100;

function toggleAccess() {
  const menu = document.getElementById("accessMenu");
  if (menu) menu.classList.toggle("show");
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

/* ===============================
   BACK TO TOP (AMAN)
================================ */
const btnTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  if (!btnTop) return;

  if (document.documentElement.scrollTop > 200) {
    btnTop.style.display = "block";
  } else {
    btnTop.style.display = "none";
  }
});

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
