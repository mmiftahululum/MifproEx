# 🚀 Mifpro Project Portal Ecosystem

Selamat datang di repositori **Mifpro Project Portal**. Proyek ini merupakan ekosistem web portal terpadu milik **Muhammad Miftahul Ulum** yang mengintegrasikan berbagai aplikasi web, portofolio interaktif, landing page agensi digital, serta direktori game browser.

---

## 📑 Daftar Isi

- [Arsitektur & Struktur Proyek](#-arsitektur--struktur-proyek)
- [Kebutuhan Sistem (Prerequisites)](#-kebutuhan-sistem-prerequisites)
- [Cara Menjalankan Semua Program](#-cara-menjalankan-semua-program)
  - [Opsi 1: Klik Ganda `start-server.bat` (1-Click Launch Paling Praktis ⚡)](#opsi-1-klik-ganda-start-serverbat-1-click-launch-paling-praktis-)
  - [Opsi 2: PHP Built-in Server + Router (Manual Terminal ⭐)](#opsi-2-php-built-in-server--router-manual-terminal-)
  - [Opsi 3: PHP Built-in Server Standar](#opsi-3-php-built-in-server-standar)
  - [Opsi 4: XAMPP / Laragon / WAMP (Apache)](#opsi-4-xampp--laragon--wamp-apache)
  - [Opsi 5: VS Code Extension "Live Server"](#opsi-5-vs-code-extension-live-server)
  - [Opsi 6: Python HTTP Server](#opsi-6-python-http-server)
- [Daftar URL Akses Lokal](#-daftar-url-akses-lokal)
- [Detail Setiap Modul](#-detail-setiap-modul)
- [Troubleshooting & Tips](#-troubleshooting--tips)

---

## 📁 Arsitektur & Struktur Proyek

```plaintext
private_mifproEx/
│
├── index.html                      # 🏠 Portal Utama (Landing page penghubung semua modul)
├── mifpro-project-portal-favicon.ico # Favicon portal
├── router.php                      # ⚙️ Router lokal (Menangani prefix /portal/ & static files)
├── README.md                       # 📖 Panduan dokumentasi proyek ini
│
├── Apps/                           # 📱 Mifpro Application Hub
│   ├── index.html                  # Direktori katalog aplikasi dengan filter & search
│   ├── kertas-kerja.html           # 📄 Landing page aplikasi Kertas Kerja (Task Management)
│   ├── log-api.html                # 📄 Landing page aplikasi Log API (Request-Response Inspector)
│   ├── styles.css                  # Desain tema (Light / Dark mode support)
│   ├── script.js                   # Logika filter kategori, pencarian, dan theme switcher
│   └── ico-app.ico                 # Favicon modul Apps
│
├── Cv/                             # 👤 Interactive Curriculum Vitae & Portfolio
│   ├── index.html                  # Halaman utama CV profesional
│   ├── portfolio-details.html      # Detail showcase proyek
│   ├── service-details.html        # Detail layanan
│   ├── starter-page.html           # Template halaman kosong
│   ├── forms/                      # Backend form kontak
│   │   └── contact.php             # Handler pengiriman email form kontak
│   └── assets/                     # Vendor (Bootstrap, AOS, Swiper, GLightbox, dll.)
│
├── Games/                          # 🎮 Mifpro Game Hub
│   ├── index.html                  # Halaman portal game browser
│   ├── favicon.png                 # Favicon modul Games
│   └── hitungcepat/                # Mini-game matematika interaktif (PWA Ready)
│       ├── index.html              # Halaman game Hitung Cepat
│       ├── manifest.json           # Konfigurasi Progressive Web App
│       └── sw.js                   # Service Worker untuk mode offline/PWA
│
└── Mifpro-Digital-Solution/        # 💼 Landing Page Agensi Digital & Solusi IT
    ├── index.html                  # Halaman layanan IT, web development, & ERP
    ├── css/                        # Stylesheet utama & animasi
    ├── js/                         # Script interaktif & layouting
    ├── sass/                       # Source SCSS/SASS
    └── vendor/                     # Vendor library (Bootstrap, jQuery, Swiper, dll.)
```

---

## 💻 Kebutuhan Sistem (Prerequisites)

Untuk menjalankan semua modul secara optimal (termasuk skrip PHP di modul CV):

1. **PHP**: Versi **7.4+** atau **8.x** (Di komputer Anda sudah terpasang **PHP 8.3**).
2. **Web Browser**: Browser modern seperti Google Chrome, Microsoft Edge, Mozilla Firefox, atau Safari.
3. *(Opsional)*: **VS Code Live Server**, **XAMPP / Laragon**, atau **Python 3.x**.

---

## ⚡ Cara Menjalankan Semua Program

Pilih salah satu metode di bawah ini sesuai kenyamanan Anda:

### Opsi 1: PHP Built-in Server + Router (Paling Direkomendasikan ⭐)

Di portal utama (`index.html`), navigasi menggunakan path `/portal/...` sesuai rute production `mifpro.com/portal/`. Telah disediakan file [`router.php`](file:///c:/Users/MiftahulUlum/Development/WebPhp5/private_mifproEx/router.php) agar Anda dapat menjalankan server lokal dan semua tautan dapat diklik tanpa error 404.

1. Buka terminal (PowerShell / Command Prompt / Terminal VS Code) di folder proyek ini:
   ```powershell
   cd c:\Users\MiftahulUlum\Development\WebPhp5\private_mifproEx
   ```

2. Jalankan server PHP dengan router:
   ```powershell
   php -S localhost:8000 router.php
   ```

3. Buka browser dan kunjungi:
   👉 **[http://localhost:8000](http://localhost:8000)**

> [!TIP]
> Dengan metode ini, semua link di kartu portal (`/portal/Cv/`, `/portal/Apps/`, `/portal/Games/`, `/portal/Mifpro-Digital-Solution/`) otomatis dipetakan ke direktori lokal dan skrip formulir `contact.php` dapat berjalan normal.

---

### Opsi 2: PHP Built-in Server Standar

Jika ingin menjalankan PHP built-in server standar tanpa router:

1. Jalankan perintah:
   ```powershell
   php -S localhost:8000
   ```
2. Buka browser pada URL:
   - Portal Utama: **[http://localhost:8000/index.html](http://localhost:8000/index.html)**
   - Apps Hub: **[http://localhost:8000/Apps/](http://localhost:8000/Apps/)**
   - CV & Portfolio: **[http://localhost:8000/Cv/](http://localhost:8000/Cv/)**
   - Games: **[http://localhost:8000/Games/](http://localhost:8000/Games/)**
   - Digital Solution: **[http://localhost:8000/Mifpro-Digital-Solution/](http://localhost:8000/Mifpro-Digital-Solution/)**

---

### Opsi 3: XAMPP / Laragon / WAMP (Apache)

Jika Anda terbiasa menggunakan web server Apache (seperti XAMPP atau Laragon):

1. **Metode Simbolik Link (Tanpa Pindah Folder)**:
   Buka Command Prompt sebagai Administrator, lalu jalankan:
   ```cmd
   mklink /D "C:\xampp\htdocs\portal" "c:\Users\MiftahulUlum\Development\WebPhp5\private_mifproEx"
   ```
   *(Sesuaikan path `htdocs` jika menggunakan Laragon, misal `C:\laragon\www\portal`)*.

2. **Metode Copy/Move**:
   Salin atau pindahkan folder proyek ke `htdocs/portal` atau `www/portal`.

3. Start Apache dari Control Panel XAMPP/Laragon.

4. Buka di browser:
   👉 **[http://localhost/portal/](http://localhost/portal/)**

---

### Opsi 4: VS Code Extension "Live Server"

Jika Anda menggunakan Visual Studio Code:

1. Install ekstensi **Live Server** (oleh Ritwick Dey) jika belum terpasang.
2. Buka file `index.html` yang ingin Anda jalankan (misal `index.html` root, `Apps/index.html`, atau `Cv/index.html`).
3. Klik kanan di dalam editor lalu pilih **"Open with Live Server"** (atau klik tombol **Go Live** di status bar bawah VS Code).
4. Browser akan otomatis terbuka dengan live preview dan hot-reload saat file diedit.

> [!NOTE]
> Live Server hanya melayani file statis (HTML/CSS/JS). Jika ingin menguji form kirim pesan `contact.php`, gunakan Opsi 1 atau Opsi 3.

---

### Opsi 5: Python HTTP Server

Bagi Anda yang ingin melihat antarmuka statis secara instan menggunakan Python (Python 3.13 sudah terpasang):

```powershell
python -m http.server 8000
```
Buka browser di: **[http://localhost:8000](http://localhost:8000)**

---

## 🌐 Daftar URL Akses Lokal

Saat server berjalan di port `8000` (menggunakan Opsi 1 dengan `router.php`), Anda dapat mengakses setiap modul melalui URL berikut:

| Modul | URL Lokal | Deskripsi |
|---|---|---|
| **Mifpro Portal (Home)** | `http://localhost:8000/` | Halaman gerbang utama penghubung seluruh proyek |
| **Mifpro Apps Directory** | `http://localhost:8000/portal/Apps/` atau `/Apps/` | Direktori aplikasi web, showcase utilitas & filter kategori |
| **Landing Page Kertas Kerja** | `http://localhost:8000/Apps/kertas-kerja.html` | Penjelasan mendalam aplikasi Task Management & Kolaborasi |
| **Landing Page Log API** | `http://localhost:8000/Apps/log-api.html` | Penjelasan mendalam aplikasi API Monitoring & Inspector |
| **Curriculum Vitae (CV)** | `http://localhost:8000/portal/Cv/` atau `/Cv/` | Portofolio profesional interaktif & form kontak |
| **Mifpro Games** | `http://localhost:8000/portal/Games/` atau `/Games/` | Katalog portal game browser |
| **Game Hitung Cepat** | `http://localhost:8000/Games/hitungcepat/` | Permainan asah otak hitung matematika (PWA) |
| **Mifpro Digital Solution**| `http://localhost:8000/portal/Mifpro-Digital-Solution/` | Landing page layanan IT, web development & ERP |

---

## 🔍 Detail Setiap Modul

### 1. Mifpro Portal Utama (`/index.html`)
- Gerbang sentral navigasi yang menghubungkan seluruh proyek Mifpro.
- Dilengkapi dengan *pastel ambient glow effect*, kartu interaktif dengan efek melayang (*hover state*), dan transisi *staggered animation*.
- Menghubungkan ke Blog resmi, CV, Solusi Digital, Game, dan Application Hub.

### 2. Application Hub (`/Apps/`)
- Katalog aplikasi web produktivitas dan utilitas buatan Muhammad Miftahul Ulum.
- **Fitur Pencarian Real-time**: Mengetik kata kunci langsung menyaring judul, deskripsi, atau tag teknologi.
- **Filter Kategori**: Menyaring berdasarkan *Semua*, *Produktivitas*, *Game*, *Portofolio*, atau *Utilitas*.
- **Dark / Light Theme Toggle**: Mode tema gelap dan terang dengan penyimpanan preferensi di `localStorage`.
- **Landing Page Kertas Kerja (`Apps/kertas-kerja.html`)**: Halaman presentasi detail aplikasi task management, mencakup perbandingan alur kerja lama vs baru, fitur audit trail, simulasi mockup papan tugas, dan integrasi live app `kertaskerja.mifpro.com`.
- **Landing Page Log API (`Apps/log-api.html`)**: Halaman presentasi detail aplikasi monitoring request-response API, mencakup simulasi visual inspector payload JSON, latency monitor, 1-click cURL export, dan integrasi live app `log.mifpro.com`.

### 3. Curriculum Vitae & Portfolio (`/Cv/`)
- Menampilkan profil lengkap, ringkasan keahlian teknis (*Skill Bars*), linimasa riwayat kerja & pendidikan, layanan, portofolio masonry, dan kontak.
- Dilengkapi AJAX contact form pada `forms/contact.php` untuk menerima pesan dari pengunjung.
- Didukung oleh Bootstrap 5, Swiper JS, GLightbox, Isotope layout, dan Animate on Scroll (AOS).

### 4. Game Hub & Hitung Cepat (`/Games/`)
- Menu permainan online berbasis browser tanpa perlu download.
- Mini game **Hitung Cepat** (`/Games/hitungcepat/`) dilengkapi Service Worker (`sw.js`) dan Manifest (`manifest.json`), memungkinkan game diinstal sebagai PWA (Progressive Web App) dan dimainkan secara offline.

### 5. Mifpro Digital Solution (`/Mifpro-Digital-Solution/`)
- Showcase layanan agensi teknologi informasi, jasa pembuatan website kustom, integrasi API, dan sistem ERP.
- Menggunakan Bootstrap responsive grid, jQuery animations, pricing package table, dan Google Fonts yang elegan.

---

## 🛠️ Troubleshooting & Tips

- **Port 8000 sudah terpakai**:
  Jika port `8000` sedang dipakai oleh aplikasi lain, gunakan port lain saat menjalankan PHP server, contoh:
  ```powershell
  php -S localhost:8080 router.php
  ```
  Lalu buka `http://localhost:8080`.

- **Menghentikan Server**:
  Tekan tombol kombinasi `Ctrl + C` di jendela terminal tempat server dijalankan.

- **Kustomisasi Email Penerima Form Kontak**:
  Buka file [`Cv/forms/contact.php`](file:///c:/Users/MiftahulUlum/Development/WebPhp5/private_mifproEx/Cv/forms/contact.php#L5), lalu ubah variabel `$receiving_email_address` dengan alamat email tujuan Anda.

---

*Dibuat & Dikelola oleh Muhammad Miftahul Ulum (Mifpro)*

