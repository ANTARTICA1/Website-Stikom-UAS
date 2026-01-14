===========================================================================
PROYEK   : MAKEOVER WEBSITE KAMPUS ITB STIKOM BALI
KONSEP   : "NEXT-GEN CAMPUS EXPERIENCE"
AUTHOR   : Anak Agung Ngurah Krisna Artha Wibawa (240040075)
===========================================================================

1. DESKRIPSI UMUM
---------------------------------------------------------------------------
Proyek ini bertujuan untuk merancang ulang antarmuka website ITB STIKOM Bali 
menjadi platform digital yang menarik dan mencerminkan identitas sebagai 
"Kampus IT Pertama di Bali".


2. FILOSOFI WARNA
---------------------------------------------------------------------------
A. Palet Warna (Brand Identity):
   - Primary: Deep Blue (#003366) -> Warna ini merepresentasikan Integritas. 
     Dalam psikologi warna, biru tua diasosiasikan dengan kepercayaan.
   - Golden Yellow (#FFCC00) -> Simbol dari Prestasi (Achievement). Warna ini 
     diambil dari unsur logo STIKOM Bali.
   - Cyan / Light Blue (#00D2FF) -> Simbol inovasi teknologi.
   - Background: White -> Memberikan ruang napas (whitespace).

B. Strategi Pemilihan Warna
   Dalam pengembangan antarmuka website berita ITB STIKOM Bali ini, diterapkan 
   Visual Hierarchy supaya tampilan yang dihasilkan nyaman di mata pengguna. 
   Meskipun logo institusi terdiri dari warna Biru, Kuning, dan Merah, namun 
   perancangan antarmuka membatasi penggunaan warna Merah dengan alasan berikut:

   1. Kenyamanan Visual: Penggunaan warna Merah dan Biru secara bersamaan 
      dalam porsi dominan dapat menimbulkan efek Chromostereopsis, yaitu 
      kelelahan mata akibat kesulitan lensa mata memfokuskan dua gelombang 
      warna yang berlawanan spektrumnya. Oleh karena itu warna Merah 
      diminimalisir hanya pada elemen logo untuk menjaga kenyamanan membaca 
      dalam durasi lama.

   2. Fokus dan Navigasi: Warna Kuning Emas dipilih sebagai warna aksen tunggal. 
      Hal ini bertujuan untuk mengarahkan fokus pengguna secara instan ke elemen 
      penting tanpa adanya distraksi atau kompetisi visual dari warna cerah 
      lainnya seperti merah.

   3. Identitas Teknologi: Dominasi gradasi warna Biru (Stikom Navy ke 
      Tech Cyan) diterapkan untuk memperkuat identitas institusi berbasis 
      teknologi. Warna biru secara global diasosiasikan dengan kepercayaan 
      (trust).

D. Tipografi
   Dalam pengembangan antarmuka website, digunakan kombinasi font yang 
   bertujuan untuk membedakan fungsi antar halaman. Implementasi tipografi 
   dibagi menjadi 2 segmen utama:

   1. Tipografi Utama: Pada halaman-halaman informasi padat seperti Beranda, 
      Berita, Kontak, Visi Misi, Sejarah, dan Prodi digunakan font "Inter". 
      Pemilihan Inter didasarkan pada karakteristiknya yang memiliki x-height 
      tinggi, sehingga sangat mudah dibaca pada berbagai ukuran layar, 
      memfasilitasi pengguna dalam menyerap informasi dengan cepat.

   2. Tipografi Halaman Profil Institusi: Khusus untuk halaman Profil, 
      diterapkan pendekatan desain yang lebih eksklusif untuk menonjolkan 
      citra institusi:
      - Headings & Dekorasi: Font "Playfair Display" (Serif) diterapkan pada 
        elemen Hero Title, Section Title, Quote Text, CTA Content, dan 
        Counter Wrapper. Jenis huruf ini memberikan nuansa elegan.

E. Prinsip UX:
   - User-Centric: Navigasi intuitif sehingga pengguna dapat mencari 
     informasi yang mereka inginkan dengan mudah.
   - Responsive: Adaptasi sempurna dari layar Desktop dan Mobile.
   - Accessible: Ramah bagi semua pengguna termasuk yang memiliki gangguan visual.


3. FITUR & HALAMAN
---------------------------------------------------------------------------

A. BERANDA (HOME)
   Konsep: "Immersive Digital Gateway"

   - Hero Video Background: Menampilkan video atmosfer kampus secara looping 
     layar penuh untuk memberikan kesan visual yang dinamis dan modern sejak 
     detik pertama.
   - Smart Announcement Panel: Papan pengumuman di sisi kanan menggunakan 
     sistem Modal Pop-up. Pengguna dapat membaca detail pengumuman secara 
     instan tanpa perlu berpindah halaman (Loading lebih cepat).
   - Interactive Program Cards: Kartu Program Studi dilengkapi efek animasi 
     hover (kartu terangkat saat disentuh kursor) untuk memberikan pengalaman 
     interaksi yang responsif.
   - Responsive Awards Banner: Menampilkan spanduk prestasi yang adaptif; 
     gambar akan otomatis berubah ukuran dan rasio menyesuaikan layar Desktop 
     atau Mobile agar tetap terbaca jelas.

A. BERITA 
   Konsep: "Cinematic Reading Experience"
   - Hero Section: Judul berita di tengah dengan latar gambar layar penuh.
   - Reading Progress Bar: Indikator garis di atas layar sesuai posisi scroll.
   - Komentar: Desain kolom komentar bergaya modern.

B. HALAMAN KONTAK
   - Full Screen Map: Peta Google Maps sebagai latar belakang (wallpaper).
   - Sidebar Form: Formulir kontak di pinggir (Desktop) atau panel bawah (Mobile).
   - Mobile Friendly: Pada tampilan handphone detail alamat dan nomor telepon 
     disembunyikan di balik tombol toggle. Keputusan ini bertujuan 
     untuk memaksimalkan area pandang (viewport).
   - Input Ikonik: Kolom isian dilengkapi ikon supaya lebih menarik.

C. PROFIL KAMPUS (Profil, Visi Misi, Sejarah)
   Konsep: "Interactive Storytelling"
   - Visi & Misi Cards: Tidak lagi berupa bullet points membosankan 
     melainkan ditampilkan dalam kartu grid yang rapi.
   - Sejarah Kronologis (Timeline): Tampilan sejarah dibuat dengan alur 
     "Vertical Timeline". Pengguna menggulir ke bawah untuk mengikuti 
     perjalanan kampus dari tahun ke tahun dengan garis penghubung.

D. ASISTEN VIRTUAL (Chatbot)
   - Quick Access: Menjawab pertanyaan umum (Jurusan, Biaya, Lokasi) instan.
   - Sticky Widget: Selalu tersedia di pojok kanan bawah layar.

E. AKSESIBILITAS (Accessibility Tools)
   Fitur untuk mendukung kenyamanan semua pengguna.
   - Text Resizer: Widget melayang yang memungkinkan pengguna memperbesar 
     atau memperkecil ukuran font (A+, A-, A) di seluruh halaman tanpa 
     merusak layout.

F. SCROLL-DRIVEN ANIMATION
   Elemen-elemen muncul perlahan (fade atau zoom) saat pengguna menggulir 
   ke bawah (menggunakan library Animate On Scroll).

G. NAVIGASI PINTAS (Instant Scroll-to-Top)
   Mengingat halaman yang cukup panjang maka diimplementasikan tombol navigasi 
   Back to Top. Tombol ini muncul secara otomatis ketika pengguna telah 
   menggulir halaman. Fitur ini dirancang untuk mengurangi scrolling friction, 
   memungkinkan pengguna kembali ke bagian atas halaman secara instan dengan 
   satu klik, tanpa harus menggulir ulang secara manual.


4. CATATAN PENGEMBANG
---------------------------------------------------------------------------
Seluruh desain mengutamakan prinsip "Mobile-First". Semua Fitur telah diuji
responsivitasnya agar tetap rapi dan fungsional di layar vertikal (smartphone).
===========================================================================
