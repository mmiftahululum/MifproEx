/**
 * Mifpro Digital Solution - Multi-Language (i18n) Support
 * Languages: Indonesian (id), English (en)
 */
(function () {
    'use strict';

    var translations = {
        id: {
            // Meta & General
            page_title: "MIFPRO - IT & Digital Solution Services | Teknologi Tepat, Bisnis Lebih Cepat",
            page_desc: "MIFPRO menyediakan layanan IT & Digital Solution profesional: Website Development, Mobile Application, Custom Software, ERP Development, API Integration, AI Automation, IT Consulting, dan System Analysis.",
            btn_back: "← Kembali ke Portal",

            // Navbar
            nav_home: "Beranda",
            nav_services: "Layanan",
            nav_why: "Keunggulan",
            nav_details: "Detail",
            nav_process: "Alur Kerja",
            nav_tech: "Teknologi",
            nav_work: "Portofolio",
            nav_faq: "FAQ",
            nav_contact: "Kontak",

            // Hero Section
            hero_badge: "IT SERVICES & DIGITAL SOLUTIONS",
            hero_title: "Transform Your Business with the Right Technology Solutions",
            hero_subtitle: "MIFPRO membantu bisnis dan perusahaan mengembangkan solusi teknologi melalui layanan pengembangan aplikasi, integrasi sistem, ERP, hingga otomatisasi berbasis AI. Kami menggabungkan pengalaman teknis dan pemahaman proses bisnis untuk menghadirkan solusi digital yang tepat, efisien, dan sesuai kebutuhan.",
            hero_btn_wa: "Konsultasi Gratis via WhatsApp",
            hero_btn_services: "Lihat Layanan Kami",

            // Services Overview Section
            serv_overview_badge: "SOLUSI TEKNOLOGI TERPADU",
            serv_overview_title: "Our Services",
            serv_overview_desc: "Solusi teknologi untuk membantu bisnis berkembang, meningkatkan produktivitas, dan mengoptimalkan proses operasional.",
            btn_learn_service: "Pelajari Layanan",

            // 8 Core Service Cards
            s1_card_title: "Website Development",
            s1_card_tagline: "Build Your Digital Presence",
            s1_card_target: "UMKM & Perusahaan",
            s1_card_desc: "Pembuatan website profesional untuk membangun identitas digital, menjangkau pelanggan, dan meningkatkan kredibilitas perusahaan.",
            s1_sc1: "Company Profile & Landing Page",
            s1_sc2: "Business & E-Commerce Website",
            s1_sc3: "Web Application & Maintenance",

            s2_card_title: "Mobile Application",
            s2_card_tagline: "Mobile Apps for Your Business",
            s2_card_target: "Bisnis & Startup",
            s2_card_desc: "Pengembangan aplikasi mobile Android & iOS yang memudahkan akses layanan, mempercepat operasional, dan memperluas pasar.",
            s2_sc1: "Android & iOS Application",
            s2_sc2: "Flutter Cross-Platform",
            s2_sc3: "Sales & Field Operations App",

            s3_card_title: "Custom Software",
            s3_card_tagline: "Software Built Around Your Business",
            s3_card_target: "Perusahaan",
            s3_card_desc: "Pengembangan perangkat lunak kustom yang dirancang dari nol sesuai kebutuhan unik dan alur kerja operasional perusahaan Anda.",
            s3_sc1: "Business Management System",
            s3_sc2: "Inventory & Sales Management",
            s3_sc3: "Purchasing & HR Management",

            s4_card_title: "ERP Development",
            s4_card_tagline: "Integrated Enterprise Solutions",
            s4_card_target: "Distribusi & Manufaktur",
            s4_card_desc: "Pengembangan dan penyesuaian sistem ERP untuk menyatukan seluruh proses bisnis perusahaan dalam satu platform terpusat.",
            s4_sc1: "ERP Implementation & Customization",
            s4_sc2: "Warehouse & Supply Chain",
            s4_sc3: "Manufacturing & Finance System",

            s5_card_title: "API Integration",
            s5_card_tagline: "Connect Your Business Systems",
            s5_card_target: "Developer & Perusahaan",
            s5_card_desc: "Menghubungkan berbagai sistem dan aplikasi agar dapat bertukar data otomatis, konsisten, aman, dan tanpa input ganda.",
            s5_sc1: "REST API & Web Services",
            s5_sc2: "Payment Gateway Integration",
            s5_sc3: "ERP & Mobile Data Sync",

            s6_card_title: "AI Automation",
            s6_card_tagline: "Automate Your Business with AI",
            s6_card_target: "Bisnis & Profesional",
            s6_card_desc: "Solusi otomatisasi cerdas berbasis Artificial Intelligence untuk memangkas tugas repetitif dan meningkatkan produktivitas tim.",
            s6_sc1: "AI Chatbot & Customer Support",
            s6_sc2: "Business Process Automation",
            s6_sc3: "Document & Workflow Processing",

            s7_card_title: "IT Consulting",
            s7_card_tagline: "Technology Strategy for Growth",
            s7_card_target: "Perusahaan",
            s7_card_desc: "Konsultasi strategi teknologi informasi untuk membantu perusahaan merancang transformasi digital dan memilih solusi yang tepat.",
            s7_sc1: "IT Strategy & Digital Roadmap",
            s7_sc2: "Technology Assessment",
            s7_sc3: "Software Architecture Advisory",

            s8_card_title: "System Analysis",
            s8_card_tagline: "Understand Business First",
            s8_card_target: "Perusahaan Digitalisasi",
            s8_card_desc: "Menganalisis proses bisnis dan menyusun spesifikasi kebutuhan sistem (SRS) secara matang sebelum pengembangan teknologi dimulai.",
            s8_sc1: "Business Process Analysis",
            s8_sc2: "Software Requirement Spec (SRS)",
            s8_sc3: "System Blueprint & Modeling",

            // Why Choose MIFPRO
            why_badge: "NILAI UNGGUL MIFPRO",
            why_title: "Why Choose MIFPRO?",
            why_desc: "Kami memahami bahwa setiap bisnis memiliki kebutuhan teknologi yang berbeda. Karena itu, MIFPRO mengutamakan pemahaman proses bisnis sebelum menentukan solusi teknologi.",
            why_p1_title: "10+ Years Experience",
            why_p1_desc: "Pengalaman lebih dari 10 tahun dalam pengembangan, analisis sistem, dan implementasi teknologi informasi.",
            why_p2_title: "Business-Oriented Solutions",
            why_p2_desc: "Solusi dirancang berdasarkan alur kerja dan kebutuhan riil bisnis, bukan sekadar penulisan kode teknologi.",
            why_p3_title: "Flexible Development",
            why_p3_desc: "Pendekatan pengembangan modular dan fleksibel yang dapat disesuaikan dengan skala dan anggaran bisnis.",
            why_p4_title: "End-to-End IT Solutions",
            why_p4_desc: "Dukungan komprehensif mulai dari analisis kebutuhan, perancangan, koding, integrasi, hingga maintenance.",
            why_approach_title: "Pendekatan Berbasis Solusi",
            why_approach_p1: "MIFPRO tidak hanya bertindak sebagai vendor software, tetapi sebagai mitra teknologi strategis untuk pertumbuhan jangka panjang bisnis Anda.",
            why_approach_p2: "Kami menggabungkan riset mendalam, rekayasa teknologi berkualitas tinggi, dan orientasi pada hasil nyata yang terukur.",
            acc_1_title: "Expert Research & Analysis",
            acc_1_desc: "Kami memiliki tim riset yang ahli dan berpengalaman dalam menganalisis pasar, tren industri, dan kebutuhan pengguna untuk memberikan solusi tepat guna bagi bisnis Anda.",
            acc_2_title: "Hi-Tech Engineering",
            acc_2_desc: "Tim teknis kami berpengalaman mengembangkan arsitektur perangkat lunak scalable dan aman dengan standar code quality yang tinggi.",
            acc_3_title: "Outstanding Results",
            acc_3_desc: "Berdedikasi untuk memberikan hasil luar biasa, tepat waktu, dan siap mendukung akselerasi target bisnis Anda.",

            // Service Details Section
            details_badge: "EKSPLORASI DETAIL LAYANAN",
            details_title: "Service Details",
            details_desc: "Pelajari lebih mendalam bagaimana setiap layanan MIFPRO menjawab tantangan spesifik bisnis Anda.",
            lbl_problem: "Permasalahan",
            lbl_solution: "Solusi MIFPRO",
            lbl_benefit: "Manfaat Bisnis",

            // SD1: Website Development
            sd1_title: "Website Development",
            sd1_tagline: "Build Your Digital Presence",
            sd1_p1: "Bisnis belum memiliki kredibilitas online yang meyakinkan calon klien.",
            sd1_p2: "Website lama lambat, tidak mobile-friendly, dan sulit diperbarui.",
            sd1_p3: "Rendahnya konversi pengunjung menjadi prospek penjualan.",
            sd1_s1: "Pembuatan website profesional, responsive, dan SEO-friendly.",
            sd1_s2: "UI/UX modern yang dirancang untuk meningkatkan konversi prospek.",
            sd1_s3: "Integrasi CMS dan sistem analitik pengunjung terstruktur.",
            sd1_b1: "Kredibilitas perusahaan meningkat drastis di mata pelanggan.",
            sd1_b2: "Katalog produk dan informasi bisnis dapat diakses 24 jam nonstop.",
            sd1_b3: "Mempermudah lead generation langsung via WhatsApp & formulir.",
            sd1_footer_txt: "Cakupan: Company Profile, Landing Page, E-Commerce, Web App.",
            btn_consult_s1: "Konsultasikan Kebutuhan Website Anda",

            // SD2: Mobile Application
            sd2_title: "Mobile Application",
            sd2_tagline: "Mobile Apps for Your Business",
            sd2_p1: "Pelanggan mayoritas menggunakan smartphone namun bisnis belum memiliki platform mobile.",
            sd2_p2: "Proses operasional lapangan masih manual dan rawan keterlambatan data.",
            sd2_p3: "Sulit menjaga retensi pengguna tanpa channel komunikasi langsung.",
            sd2_s1: "Pengembangan aplikasi mobile Android & iOS (Flutter / Native).",
            sd2_s2: "Aplikasi operasional tim sales, kurir, dan staf lapangan.",
            sd2_s3: "Integrasi backend API berkecepatan tinggi dan push notification.",
            sd2_b1: "Layanan bisnis hadir langsung di saku pelanggan kapan saja.",
            sd2_b2: "Pelaporan data lapangan menjadi instan, presisi, dan real-time.",
            sd2_b3: "Meningkatkan repeat order dan keterikatan pengguna secara signifikan.",
            sd2_footer_txt: "Cakupan: Android, iOS, Flutter, Sales & Distribution App, API Sync.",
            btn_consult_s2: "Konsultasikan Kebutuhan Mobile App Anda",

            // SD3: Custom Software
            sd3_title: "Custom Software Development",
            sd3_tagline: "Software Built Around Your Business",
            sd3_p1: "Software pasaran tidak cocok dengan alur operasional internal.",
            sd3_p2: "Biaya langganan SaaS membengkak seiring bertambahnya karyawan.",
            sd3_p3: "Data perusahaan tersebar di banyak spreadsheet yang rentan hilang.",
            sd3_s1: "Pembangunan software kustom sesuai alur bisnis 100%.",
            sd3_s2: "Kepemilikan sistem penuh tanpa biaya lisensi per-user.",
            sd3_s3: "Database terpusat dengan kontrol hak akses bertingkat.",
            sd3_b1: "Efisiensi kerja melonjak karena software mengikuti alur tim.",
            sd3_b2: "Penghematan biaya software jangka panjang bagi perusahaan.",
            sd3_b3: "Keamanan data terjamin dan dapat dikembangkan fleksibel.",
            sd3_footer_txt: "Cakupan: Business Management, Inventory, Sales, Purchasing, HR System.",
            btn_consult_s3: "Konsultasikan Kebutuhan Custom Software Anda",

            // SD4: ERP Development
            sd4_title: "ERP Development & Implementation",
            sd4_tagline: "Integrated Enterprise Solutions",
            sd4_p1: "Data antarbagian (gudang, sales, keuangan, produksi) belum terhubung.",
            sd4_p2: "Stok barang sering selisih dan pelacakan transaksi rumit.",
            sd4_p3: "Penyusunan laporan bulanan memakan waktu hingga berminggu-minggu.",
            sd4_s1: "Implementasi & kustomisasi ERP (iDempiere / Laravel Enterprise).",
            sd4_s2: "Integrasi modul gudang, pengadaan, penjualan, dan akuntansi.",
            sd4_s3: "Automated reporting dan audit trail transaksi terpadu.",
            sd4_b1: "Seluruh data bisnis sinkron secara real-time antar cabang & divisi.",
            sd4_b2: "Pengambilan keputusan bisnis menjadi lebih cepat dan berbasis data akurat.",
            sd4_b3: "Meminimalisir kebocoran stok dan kesalahan pembukuan operasional.",
            sd4_footer_txt: "Cakupan: iDempiere ERP, Custom Module, Warehouse, Manufacturing, Supply Chain.",
            btn_consult_s4: "Konsultasikan Kebutuhan ERP Anda",

            // SD5: API Integration
            sd5_title: "API Integration & Web Services",
            sd5_tagline: "Connect Your Business Systems",
            sd5_p1: "Aplikasi berjalan terisolasi sehingga staf harus melakukan input data ganda.",
            sd5_p2: "Kesulitan menghubungkan sistem ke Payment Gateway atau ekspedisi.",
            sd5_p3: "Tidak ada audit trail saat pertukaran data API mengalami kegagalan.",
            sd5_s1: "Pembangunan REST API berstandar keamanan tinggi dan cepat.",
            sd5_s2: "Integrasi pihak ketiga (Bank, Payment Gateway, Kurir, ERP).",
            sd5_s3: "Sistem sinkronisasi data otomatis dengan logging & error monitoring.",
            sd5_b1: "Menghemat ratusan jam kerja tim dari tugas input data berulang.",
            sd5_b2: "Pelanggan dapat melakukan transaksi pembayaran otomatis instan.",
            sd5_b3: "Ekosistem aplikasi perusahaan saling terhubung harmonis.",
            sd5_footer_txt: "Cakupan: REST API, JSON/XML, Payment Gateway, Ekspedisi, Database Sync.",
            btn_consult_s5: "Konsultasikan Kebutuhan Integrasi API",

            // SD6: AI Automation
            sd6_title: "AI Automation Solutions",
            sd6_tagline: "Automate Your Business with AI",
            sd6_p1: "Customer care kewalahan membalas ribuan pertanyaan repetitif klien.",
            sd6_p2: "Proses ekstraksi data dokumen dan faktur manual sangat lambat.",
            sd6_p3: "Kurangnya otomatisasi alur kerja membuat respon ke pelanggan lambat.",
            sd6_s1: "AI Chatbot pintar terlatih dengan data produk perusahaan.",
            sd6_s2: "Automasi pemrosesan dokumen PDF, invoice, dan data transaksi.",
            sd6_s3: "Integrasi OpenAI / LLM API ke alur kerja operasional harian.",
            sd6_b1: "Layanan pelanggan beroperasi aktif 24/7 tanpa jeda istirahat.",
            sd6_b2: "Kecepatan pemrosesan data operasional meningkat hingga 80%.",
            sd6_b3: "Tim dapat berfokus pada pekerjaan bernilai strategis tinggi.",
            sd6_footer_txt: "Cakupan: AI Chatbot, LLM API, Document OCR, Process Automation, Webhooks.",
            btn_consult_s6: "Konsultasikan Solusi AI Automation",

            // SD7: IT Consulting
            sd7_title: "IT Consulting & Strategy",
            sd7_tagline: "Technology Strategy for Business Growth",
            sd7_p1: "Investasi teknologi sebelumnya gagal memberikan return of investment (ROI).",
            sd7_p2: "Bingung menentukan stack teknologi dan arsitektur yang tahan masa depan.",
            sd7_p3: "Infrastruktur server sering down saat lonjakan trafik pengguna.",
            sd7_s1: "Audit sistem komprehensif dan evaluasi infrastruktur server.",
            sd7_s2: "Penyusunan blueprint roadmap transformasi digital yang realistis.",
            sd7_s3: "Pendampingan pemilihan vendor dan arsitektur cloud scalable.",
            sd7_b1: "Menghindarkan perusahaan dari kerugian salah beli teknologi.",
            sd7_b2: "Infrastruktur IT siap menampung pertumbuhan bisnis hingga tahun-tahun mendatang.",
            sd7_b3: "Efisiensi anggaran belanja teknologi dengan prioritas yang tepat.",
            sd7_footer_txt: "Cakupan: Digital Roadmap, Tech Assessment, Infrastructure Planning, Cloud Architecture.",
            btn_consult_s7: "Konsultasikan Strategi IT Anda",

            // SD8: System Analysis
            sd8_title: "System & Business Analysis",
            sd8_tagline: "Understand Your Business Before Building Technology",
            sd8_p1: "Proyek software molor karena kebutuhan fitur tidak jelas di awal.",
            sd8_p2: "Developer salah menginterpretasikan alur kerja sebenarnya di lapangan.",
            sd8_p3: "Tidak ada dokumentasi fungsional baku sebagai acuan pengerjaan.",
            sd8_s1: "Wawancara mendalam dan pemetaan diagram alur proses bisnis (BPMN).",
            sd8_s2: "Penyusunan dokumen Software Requirement Specification (SRS) lengkap.",
            sd8_s3: "Perancangan blueprint arsitektur sistem dan database terstruktur.",
            sd8_b1: "Pengerjaan software menjadi terarah, tepat waktu, dan sesuai budget.",
            sd8_b2: "Mencegah bongkar pasang fitur mahal di tengah proses coding.",
            sd8_b3: "Memiliki dokumentasi sistem aset berharga jangka panjang bagi perusahaan.",
            sd8_footer_txt: "Cakupan: Business Process Analysis, SRS, System Blueprint, Data Modeling, Documentation.",
            btn_consult_s8: "Konsultasikan Analisis Sistem Anda",

            // How We Work (Process)
            process_badge: "ALUR PENGERJAAN PROYEK",
            process_title: "How We Work",
            process_desc: "Setiap proyek dimulai dengan memahami kebutuhan bisnis, kemudian dilanjutkan dengan perencanaan dan pengembangan solusi teknologi yang tepat.",
            proc_step1_title: "Consultation",
            proc_step1_desc: "Diskusi awal untuk memahami kebutuhan, permasalahan operasional, dan tujuan strategis pelanggan.",
            proc_step2_title: "Analysis & Planning",
            proc_step2_desc: "Analisis kebutuhan sistem, pemetaan proses bisnis, penentuan ruang lingkup, dan perancangan blueprint solusi.",
            proc_step3_title: "Development & Implementation",
            proc_step3_desc: "Proses pengembangan software, konfigurasi, integrasi antar-sistem, dan implementasi fitur secara terstruktur.",
            proc_step4_title: "Testing & Support",
            proc_step4_desc: "Pengujian kualitas (QA), pelatihan pengguna, deployment ke server live, dokumentasi sistem, dan dukungan teknis berkelanjutan.",

            // Technology Stack
            tech_badge: "KEAHLIAN & PERANGKAT",
            tech_title: "Technologies We Work With",
            tech_desc: "Kami memanfaatkan berbagai teknologi modern untuk membangun solusi digital yang fleksibel, scalable, dan teruji di industri.",
            tech_g_backend: "Backend",
            tech_g_frontend: "Frontend",
            tech_g_mobile: "Mobile Development",
            tech_g_db: "Database",
            tech_g_erp: "ERP Systems",
            tech_g_api: "API & Integration",
            tech_g_ai: "AI & Automation",
            tech_g_tools: "Tools & DevOps",

            // Portfolio Section
            portfolio_badge: "BUKTI HASIL KARYA",
            work_title: "Portfolio",
            work_desc: "Beberapa portofolio dan proyek pilihan yang telah kami selesaikan dengan standar keunggulan tinggi.",
            work_popup_close: "Tutup",

            // FAQ Section
            faq_badge: "TANYA JAWAB UMUM",
            faq_title: "Frequently Asked Questions",
            faq_desc: "Jawaban atas pertanyaan yang sering diajukan oleh calon pelanggan mengenai kerja sama layanan teknologi MIFPRO.",
            faq_q1: "1. Apakah MIFPRO menerima proyek dari UMKM?",
            faq_a1: "Ya. MIFPRO melayani kebutuhan teknologi untuk UMKM, startup, profesional, maupun perusahaan korporat dengan pendekatan skala yang fleksibel.",
            faq_q2: "2. Apakah bisa membuat aplikasi sesuai kebutuhan bisnis?",
            faq_a2: "Ya. MIFPRO menyediakan layanan pengembangan aplikasi custom berdasarkan kebutuhan dan proses bisnis spesifik pelanggan, bukan sekadar template pasaran.",
            faq_q3: "3. Apakah bisa melakukan integrasi dengan sistem yang sudah ada?",
            faq_a3: "Ya. Kami menyediakan layanan API Integration untuk menghubungkan aplikasi lama, database terpisah, sistem pembayaran, dan software pihak ketiga agar tersinkronisasi otomatis.",
            faq_q4: "4. Apakah MIFPRO menyediakan konsultasi sebelum pengerjaan proyek?",
            faq_a4: "Ya. Calon pelanggan dapat melakukan sesi konsultasi awal gratis via WhatsApp atau meeting online untuk mendiskusikan kebutuhan teknis dan menentukan solusi yang paling efisien.",
            faq_q5: "5. Berapa biaya pembuatan aplikasi atau sistem?",
            faq_a5: "Biaya investasi menyesuaikan jenis aplikasi, tingkat kompleksitas fitur, kebutuhan integrasi, dan ruang lingkup pekerjaan. Kami memberikan penawaran transparan setelah sesi analisis kebutuhan awal.",
            faq_q6: "6. Apakah MIFPRO menyediakan layanan maintenance?",
            faq_a6: "Ya. Dukungan pemeliharaan sistem, bug fixing, update keamanan, serta monitoring server tersedia sesuai perjanjian tingkat layanan (SLA) yang disepakati.",
            faq_q7: "7. Apakah source code aplikasi diberikan kepada pelanggan?",
            faq_a7: "Kepemilikan source code dan dokumentasi disepakati berdasarkan ruang lingkup kerja sama. Untuk proyek custom software, penyerahan full source code merupakan bagian dari kesepakatan final proyek.",

            // CTA Section
            cta_title: "Ready to Transform Your Business with Technology?",
            cta_desc: "Punya ide aplikasi, ingin mengembangkan sistem bisnis, atau membutuhkan solusi teknologi untuk perusahaan? Diskusikan kebutuhan Anda bersama MIFPRO. Kami siap membantu menemukan solusi yang tepat untuk bisnis Anda.",
            cta_btn: "Konsultasi Gratis via WhatsApp",

            // Contact Section
            contact_badge: "HUBUNGI KAMI",
            contact_title: "Siap Memulai Proyek Anda?",
            contact_author: "Muhammad Miftahul Ulum",
            contact_role: "Principal Consultant & Developer",
            contact_bio: "Saya adalah seorang Software Developer, System Analyst, dan ERP Specialist yang sudah mempunyai pengalaman lebih dari 10 tahun di bidang teknologi informasi dan transformasi digital.",

            // Footer
            footer_home: "Beranda",
            footer_about: "Tentang Kami",
            footer_portfolio: "Portofolio",
            footer_contact: "Kontak",
            footer_newsletter: "Langganan Newsletter",
            footer_privacy: "Kebijakan Privasi",
            footer_terms: "Syarat & Ketentuan",
            footer_powered: "Mifpro Digital Solution. All rights reserved."
        },

        en: {
            // Meta & General
            page_title: "MIFPRO - IT & Digital Solution Services | Right Tech, Faster Business",
            page_desc: "MIFPRO provides professional IT & Digital Solutions: Website Development, Mobile Application, Custom Software, ERP Development, API Integration, AI Automation, IT Consulting, and System Analysis.",
            btn_back: "← Back to Portal",

            // Navbar
            nav_home: "Home",
            nav_services: "Services",
            nav_why: "Why Us",
            nav_details: "Details",
            nav_process: "Work Process",
            nav_tech: "Technologies",
            nav_work: "Portfolio",
            nav_faq: "FAQ",
            nav_contact: "Contact",

            // Hero Section
            hero_badge: "IT SERVICES & DIGITAL SOLUTIONS",
            hero_title: "Transform Your Business with the Right Technology Solutions",
            hero_subtitle: "MIFPRO empowers businesses and enterprises to scale through tailored application development, enterprise ERP, seamless system integration, and AI-driven automation. We bridge deep technical engineering with sharp business acumen to deliver precise, robust, and cost-effective digital solutions.",
            hero_btn_wa: "Free Consultation via WhatsApp",
            hero_btn_services: "Explore Our Services",

            // Services Overview Section
            serv_overview_badge: "INTEGRATED TECHNOLOGY SOLUTIONS",
            serv_overview_title: "Our Services",
            serv_overview_desc: "High-impact technology solutions designed to accelerate growth, enhance workforce productivity, and streamline mission-critical operations.",
            btn_learn_service: "Learn More",

            // 8 Core Service Cards
            s1_card_title: "Website Development",
            s1_card_tagline: "Build Your Digital Presence",
            s1_card_target: "SMEs & Enterprises",
            s1_card_desc: "Professional web development engineered to establish high-converting digital identity, engage customers, and elevate corporate credibility.",
            s1_sc1: "Company Profile & Landing Pages",
            s1_sc2: "Business & E-Commerce Websites",
            s1_sc3: "Web Applications & Maintenance",

            s2_card_title: "Mobile Application",
            s2_card_tagline: "Mobile Apps for Your Business",
            s2_card_target: "Businesses & Startups",
            s2_card_desc: "Intuitive Android & iOS mobile applications that bring your services directly to users, streamline field operations, and expand market share.",
            s2_sc1: "Android & iOS Applications",
            s2_sc2: "Cross-Platform Flutter Development",
            s2_sc3: "Sales & Field Operations Apps",

            s3_card_title: "Custom Software",
            s3_card_tagline: "Software Built Around Your Business",
            s3_card_target: "Enterprises",
            s3_card_desc: "Bespoke software solutions engineered from scratch to match the exact workflows, business logic, and operational demands of your company.",
            s3_sc1: "Business Management Systems",
            s3_sc2: "Inventory & Sales Management",
            s3_sc3: "Procurement & HR Systems",

            s4_card_title: "ERP Development",
            s4_card_tagline: "Integrated Enterprise Solutions",
            s4_card_target: "Distribution & Manufacturing",
            s4_card_desc: "Comprehensive ERP implementation and customization to unify inventory, finance, procurement, and operations into one centralized platform.",
            s4_sc1: "ERP Implementation & Customization",
            s4_sc2: "Warehouse & Supply Chain",
            s4_sc3: "Manufacturing & Financial Systems",

            s5_card_title: "API Integration",
            s5_card_tagline: "Connect Your Business Systems",
            s5_card_target: "Developers & Enterprises",
            s5_card_desc: "Unifying disparate applications and software to enable automated, bidirectional data exchange securely without redundant manual entry.",
            s5_sc1: "REST APIs & Web Services",
            s5_sc2: "Payment Gateway Integration",
            s5_sc3: "ERP & Mobile Data Synchronization",

            s6_card_title: "AI Automation",
            s6_card_tagline: "Automate Your Business with AI",
            s6_card_target: "Businesses & Professionals",
            s6_card_desc: "Intelligent automation powered by Artificial Intelligence to eliminate repetitive chores, boost staff efficiency, and accelerate turnaround times.",
            s6_sc1: "AI Chatbots & Customer Support",
            s6_sc2: "Business Process Automation (BPA)",
            s6_sc3: "Document & Workflow Processing",

            s7_card_title: "IT Consulting",
            s7_card_tagline: "Technology Strategy for Growth",
            s7_card_target: "Enterprises",
            s7_card_desc: "Strategic IT advisory to help enterprises chart pragmatic digital transformation roadmaps, evaluate system viability, and select scalable tech stacks.",
            s7_sc1: "IT Strategy & Digital Roadmap",
            s7_sc2: "Technology & Infrastructure Assessment",
            s7_sc3: "Software Architecture Advisory",

            s8_card_title: "System Analysis",
            s8_card_tagline: "Understand Business First",
            s8_card_target: "Digitalizing Enterprises",
            s8_card_desc: "Thorough business process discovery, requirements gathering, and Software Requirement Specification (SRS) formulation before writing any code.",
            s8_sc1: "Business Process Analysis (BPMN)",
            s8_sc2: "Software Requirement Specs (SRS)",
            s8_sc3: "System Blueprint & Data Modeling",

            // Why Choose MIFPRO
            why_badge: "WHY MIFPRO",
            why_title: "Why Choose MIFPRO?",
            why_desc: "We believe that every organization has distinct operational dynamics. That is why MIFPRO always prioritizes understanding your core business processes before architecting technology solutions.",
            why_p1_title: "10+ Years of Experience",
            why_p1_desc: "Over a decade of hands-on expertise across software engineering, system analysis, enterprise architectures, and technology rollouts.",
            why_p2_title: "Business-Oriented Solutions",
            why_p2_desc: "Systems engineered around real business workflows and tangible ROI, not merely compiling lines of code.",
            why_p3_title: "Flexible Development",
            why_p3_desc: "Agile, modular development practices that easily adapt to your organizational scale, evolving requirements, and budget constraints.",
            why_p4_title: "End-to-End IT Solutions",
            why_p4_desc: "Comprehensive lifecycle support spanning requirements discovery, UX design, coding, integration, QA, and long-term maintenance.",
            why_approach_title: "Solution-Driven Methodology",
            why_approach_p1: "MIFPRO operates not merely as a software vendor, but as an invested technology partner dedicated to the sustained growth of your enterprise.",
            why_approach_p2: "We unite rigorous research, high-caliber engineering, and a sharp focus on measurable business outcomes.",
            acc_1_title: "Expert Research & Analysis",
            acc_1_desc: "Our seasoned research team excels in dissecting market patterns, enterprise workflows, and customer behavior to design accurate, sustainable technological answers.",
            acc_2_title: "Hi-Tech Engineering",
            acc_2_desc: "Our engineering team constructs robust, high-performance, and secure software architectures adhered to international code quality standards.",
            acc_3_title: "Outstanding Results",
            acc_3_desc: "Dedicated to delivering exceptional deliverables on schedule, empowering your organization to accelerate business milestones with confidence.",

            // Service Details Section
            details_badge: "DEEP DIVE INTO SERVICES",
            details_title: "Service Details",
            details_desc: "Discover in depth how each MIFPRO service directly tackles your operational bottlenecks and empowers your business.",
            lbl_problem: "Common Challenges",
            lbl_solution: "MIFPRO Solution",
            lbl_benefit: "Business Value",

            // SD1: Website Development
            sd1_title: "Website Development",
            sd1_tagline: "Build Your Digital Presence",
            sd1_p1: "Your business lacks convincing online credibility to attract corporate clients.",
            sd1_p2: "Existing website is sluggish, unoptimized for mobile, and cumbersome to update.",
            sd1_p3: "Low conversion rates with few visitors turning into viable commercial inquiries.",
            sd1_s1: "Professional, lightning-fast, mobile-first, and SEO-optimized website engineering.",
            sd1_s2: "Modern, intuitive UI/UX specifically designed for high lead conversion.",
            sd1_s3: "Flexible CMS integration combined with structured visitor analytics.",
            sd1_b1: "Instant surge in brand trust and credibility among prospective clients.",
            sd1_b2: "Product catalogs and corporate offerings available globally 24/7.",
            sd1_b3: "Accelerated inbound lead generation directly via WhatsApp and forms.",
            sd1_footer_txt: "Scope: Company Profile, High-Converting Landing Page, E-Commerce, Web App.",
            btn_consult_s1: "Consult Your Website Needs",

            // SD2: Mobile Application
            sd2_title: "Mobile Application",
            sd2_tagline: "Mobile Apps for Your Business",
            sd2_p1: "The majority of your target audience uses smartphones, but your business lacks a mobile app.",
            sd2_p2: "Field operations and sales visits remain paper-heavy and prone to communication lag.",
            sd2_p3: "Struggling to sustain customer retention without a dedicated engagement channel.",
            sd2_s1: "Cross-platform mobile apps for Android and iOS using modern Flutter / Native stacks.",
            sd2_s2: "Dedicated mobile toolkits for field sales reps, dispatchers, and remote teams.",
            sd2_s3: "High-speed backend API integration and targeted push notification infrastructure.",
            sd2_b1: "Your services are accessible right in your customer's pocket at any time.",
            sd2_b2: "Instant, transparent, and accurate real-time reporting from the field.",
            sd2_b3: "Substantial increase in customer retention, repeat orders, and loyalty.",
            sd2_footer_txt: "Scope: Android, iOS, Flutter, Sales & Distribution Apps, API Sync.",
            btn_consult_s2: "Consult Your Mobile App Needs",

            // SD3: Custom Software
            sd3_title: "Custom Software Development",
            sd3_tagline: "Software Built Around Your Business",
            sd3_p1: "Off-the-shelf software packages fail to accommodate unique operational procedures.",
            sd3_p2: "Recurring SaaS subscription costs spiral out of control as your team grows.",
            sd3_p3: "Critical corporate data is scattered across fragile, vulnerable spreadsheets.",
            sd3_s1: "100% custom-built software tailored strictly to your company's proprietary workflows.",
            sd3_s2: "Full system ownership without recurring per-seat software licensing fees.",
            sd3_s3: "Centralized database architecture with granular role-based access security.",
            sd3_b1: "Drastic productivity gains because the software adapts to your team, not vice-versa.",
            sd3_b2: "Significant long-term cost savings compared to compounding SaaS licenses.",
            sd3_b3: "Absolute data sovereignty, robust enterprise security, and infinite scalability.",
            sd3_footer_txt: "Scope: Business Management, Inventory, Sales, Purchasing, HR System.",
            btn_consult_s3: "Consult Your Custom Software Needs",

            // SD4: ERP Development
            sd4_title: "ERP Development & Implementation",
            sd4_tagline: "Integrated Enterprise Solutions",
            sd4_p1: "Disjointed operations between warehouse, sales, finance, and manufacturing.",
            sd4_p2: "Frequent stock discrepancies and tedious, error-prone transaction tracing.",
            sd4_p3: "Monthly financial and operational reporting takes weeks to compile manually.",
            sd4_s1: "ERP implementation and bespoke customization (iDempiere / Laravel Enterprise).",
            sd4_s2: "Seamless orchestration across warehouse, procurement, sales, and accounting modules.",
            sd4_s3: "Automated consolidated reporting with full transaction audit trails.",
            sd4_b1: "All company branches and divisions share one live, unified source of truth.",
            sd4_b2: "Strategic executive decisions made faster using reliable, real-time metrics.",
            sd4_b3: "Eliminates inventory leakage, double entries, and operational accounting errors.",
            sd4_footer_txt: "Scope: iDempiere ERP, Custom Modules, Warehouse, Manufacturing, Supply Chain.",
            btn_consult_s4: "Consult Your ERP Needs",

            // SD5: API Integration
            sd5_title: "API Integration & Web Services",
            sd5_tagline: "Connect Your Business Systems",
            sd5_p1: "Applications operate in silos, forcing staff into tedious duplicate data entry.",
            sd5_p2: "Difficulties connecting legacy systems to modern Payment Gateways and shipping carriers.",
            sd5_p3: "No diagnostic audit logs when background data exchanges between systems fail.",
            sd5_s1: "High-speed, enterprise-grade RESTful API development with modern token security.",
            sd5_s2: "Turnkey third-party integrations (Banks, Payment Gateways, Couriers, ERPs).",
            sd5_s3: "Automated scheduled synchronization with persistent error logging and fallback queues.",
            sd5_b1: "Saves hundreds of employee hours every month by automating repetitive data entry.",
            sd5_b2: "Enables instant, automated payment verification and frictionless customer checkout.",
            sd5_b3: "Transforms isolated corporate applications into a unified, harmonious ecosystem.",
            sd5_footer_txt: "Scope: REST API, JSON/XML, Payment Gateways, Couriers, Database Synchronization.",
            btn_consult_s5: "Consult Your API Integration Needs",

            // SD6: AI Automation
            sd6_title: "AI Automation Solutions",
            sd6_tagline: "Automate Your Business with AI",
            sd6_p1: "Customer support team is overwhelmed responding to thousands of repetitive inquiries.",
            sd6_p2: "Manual extraction of information from PDF invoices and paper forms is slow and error-prone.",
            sd6_p3: "Absence of automated business workflows leads to delayed client responsiveness.",
            sd6_s1: "Intelligent AI Chatbots trained on your company's knowledge base and product catalog.",
            sd6_s2: "Automated document OCR processing for invoices, receipts, and tabular data.",
            sd6_s3: "OpenAI / LLM API integration integrated directly into your daily operational workflows.",
            sd6_b1: "24/7/365 active customer assistance with zero downtime and instant answers.",
            sd6_b2: "Operational data processing velocity surges by up to 80%.",
            sd6_b3: "Frees up your personnel to focus on high-leverage strategic and creative work.",
            sd6_footer_txt: "Scope: AI Chatbots, LLM APIs, Document OCR, Process Automation, Webhooks.",
            btn_consult_s6: "Consult AI Automation Solutions",

            // SD7: IT Consulting
            sd7_title: "IT Consulting & Strategy",
            sd7_tagline: "Technology Strategy for Business Growth",
            sd7_p1: "Past technology investments failed to produce the anticipated Return on Investment (ROI).",
            sd7_p2: "Uncertainty regarding which technology stack and cloud architecture is future-proof.",
            sd7_p3: "Server infrastructure crashes or throttles under unexpected traffic surges.",
            sd7_s1: "Comprehensive architectural system audits and infrastructure performance reviews.",
            sd7_s2: "Pragmatic, milestone-based digital transformation roadmap formulation.",
            sd7_s3: "Advisory on technology vendor selection and cloud-native scalable infrastructure.",
            sd7_b1: "Shields your company from costly missteps and unsuitable technology purchases.",
            sd7_b2: "Ensures your IT infrastructure effortlessly handles rapid business expansion.",
            sd7_b3: "Maximizes tech budget efficiency through clear, ROI-driven technology prioritization.",
            sd7_footer_txt: "Scope: Digital Roadmap, Tech Assessment, Infrastructure Planning, Cloud Architecture.",
            btn_consult_s7: "Consult Your IT Strategy",

            // SD8: System Analysis
            sd8_title: "System & Business Analysis",
            sd8_tagline: "Understand Your Business Before Building Technology",
            sd8_p1: "Software development projects stall because requirements were vague at the outset.",
            sd8_p2: "Engineering teams misinterpret actual day-to-day operational field practices.",
            sd8_p3: "Total lack of standardized technical specifications to govern development.",
            sd8_s1: "In-depth stakeholder interviews and Business Process Model and Notation (BPMN) mapping.",
            sd8_s2: "Exhaustive Software Requirement Specification (SRS) documentation authoring.",
            sd8_s3: "System architectural blueprints, Entity Relationship Diagrams (ERD), and data modeling.",
            sd8_b1: "Software projects stay strictly on track, on schedule, and within allocated budget.",
            sd8_b2: "Prevents expensive code refactoring and feature rework midway through development.",
            sd8_b3: "Produces permanent, high-value technical documentation assets for your enterprise.",
            sd8_footer_txt: "Scope: Business Process Analysis, SRS, System Blueprint, Data Modeling, Documentation.",
            btn_consult_s8: "Consult Your System Analysis Needs",

            // How We Work (Process)
            process_badge: "OUR METHODOLOGY",
            process_title: "How We Work",
            process_desc: "Every project begins with a deep discovery of business objectives, followed by methodical planning and precise technological execution.",
            proc_step1_title: "Consultation",
            proc_step1_desc: "Introductory discovery session to understand your operational roadblocks, business objectives, and project vision.",
            proc_step2_title: "Analysis & Planning",
            proc_step2_desc: "Detailed system analysis, workflow mapping, scope definition, and architectural blueprinting.",
            proc_step3_title: "Development & Implementation",
            proc_step3_desc: "Iterative software development, module configuration, multi-system integration, and rigorous testing.",
            proc_step4_title: "Testing & Support",
            proc_step4_desc: "Quality assurance (QA), user training, live server deployment, documentation handover, and ongoing technical support.",

            // Technology Stack
            tech_badge: "SKILLS & TOOLS",
            tech_title: "Technologies We Work With",
            tech_desc: "We leverage proven, modern technologies to build flexible, high-performance, and industry-tested digital solutions.",
            tech_g_backend: "Backend",
            tech_g_frontend: "Frontend",
            tech_g_mobile: "Mobile Development",
            tech_g_db: "Database",
            tech_g_erp: "ERP Systems",
            tech_g_api: "API & Integration",
            tech_g_ai: "AI & Automation",
            tech_g_tools: "Tools & DevOps",

            // Portfolio Section
            portfolio_badge: "PROVEN TRACK RECORD",
            work_title: "Portfolio",
            work_desc: "A selection of successful client projects and production systems delivered to the highest engineering standards.",
            work_popup_close: "Close",

            // FAQ Section
            faq_badge: "FREQUENTLY ASKED QUESTIONS",
            faq_title: "Frequently Asked Questions",
            faq_desc: "Answers to common questions about partnering with MIFPRO for your IT and digital solution needs.",
            faq_q1: "1. Does MIFPRO handle projects for small and medium businesses (SMEs)?",
            faq_a1: "Yes. MIFPRO caters to SMEs, growing startups, independent professionals, and enterprise corporations with agile, scalable engagement models.",
            faq_q2: "2. Can applications be built entirely according to specific business needs?",
            faq_a2: "Yes. We engineer fully custom software tailored to your specific business logic and operational workflows, avoiding generic, restrictive templates.",
            faq_q3: "3. Can you integrate with our existing legacy systems?",
            faq_a3: "Yes. We specialize in API Integration to connect legacy systems, databases, external payment gateways, and third-party SaaS tools into a synchronized workflow.",
            faq_q4: "4. Does MIFPRO provide consultation before project kickoff?",
            faq_a4: "Yes. Prospective clients can book a complimentary initial consultation via WhatsApp or online conference to assess technical viability and determine optimal solutions.",
            faq_q5: "5. How much does it cost to develop an application or system?",
            faq_a5: "Investment costs depend on application type, feature complexity, integrations, and project scope. We deliver transparent, itemized proposals following initial requirements analysis.",
            faq_q6: "6. Does MIFPRO provide post-launch maintenance and support?",
            faq_a6: "Yes. Ongoing technical support, system maintenance, security updates, and performance monitoring are available under flexible Service Level Agreements (SLAs).",
            faq_q7: "7. Does the client receive the full application source code?",
            faq_a7: "Source code ownership and intellectual property rights are clearly defined in our contract. For custom software projects, delivery of complete source code is part of the final handover.",

            // CTA Section
            cta_title: "Ready to Transform Your Business with Technology?",
            cta_desc: "Have an application idea, planning to modernize your business operations, or need expert IT solutions? Discuss your vision with MIFPRO. We are ready to help you engineer the right technological foundation.",
            cta_btn: "Free Consultation via WhatsApp",

            // Contact Section
            contact_badge: "GET IN TOUCH",
            contact_title: "Ready to Start Your Project?",
            contact_author: "Muhammad Miftahul Ulum",
            contact_role: "Principal Consultant & Developer",
            contact_bio: "I am a Software Developer, System Analyst, and ERP Specialist with more than 10 years of professional experience in enterprise information technology and digital transformation.",

            // Footer
            footer_home: "Home",
            footer_about: "About Us",
            footer_portfolio: "Portfolio",
            footer_contact: "Contact",
            footer_newsletter: "Newsletter Subscription",
            footer_privacy: "Privacy Policy",
            footer_terms: "Terms & Conditions",
            footer_powered: "Mifpro Digital Solution. All rights reserved."
        }
    };

    function applyLanguage(lang) {
        if (!translations[lang]) {
            lang = 'id';
        }

        // Set HTML lang attribute
        document.documentElement.lang = lang;

        // Update elements with data-i18n
        var elements = document.querySelectorAll('[data-i18n]');
        for (var i = 0; i < elements.length; i++) {
            var el = elements[i];
            var key = el.getAttribute('data-i18n');
            if (translations[lang] && translations[lang][key] !== undefined) {
                var value = translations[lang][key];
                if (value.indexOf('<') !== -1) {
                    el.innerHTML = value;
                } else {
                    el.textContent = value;
                }
            }
        }

        // Update document title if marked
        var titleEl = document.querySelector('[data-i18n-title]');
        if (titleEl) {
            var titleKey = titleEl.getAttribute('data-i18n-title');
            if (translations[lang] && translations[lang][titleKey]) {
                document.title = translations[lang][titleKey];
            }
        } else if (translations[lang].page_title) {
            document.title = translations[lang].page_title;
        }

        // Update active class on language toggle buttons
        var langButtons = document.querySelectorAll('.lang-btn, [data-lang-btn], [data-lang]');
        for (var j = 0; j < langButtons.length; j++) {
            var btn = langButtons[j];
            var btnLang = btn.getAttribute('data-lang-btn') || btn.getAttribute('data-lang');
            if (btnLang === lang) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        }

        // Persist preference
        try {
            localStorage.setItem('mifpro_ds_lang', lang);
        } catch (e) {}

        // Trigger resize so layout & masonry can recalculate
        if (typeof window.jQuery !== 'undefined') {
            window.jQuery(window).trigger('resize');
        }
    }

    // Expose to window
    window.setMifproLanguage = applyLanguage;

    function init() {
        // Read URL query parameter ?lang=
        var urlParams = new URLSearchParams(window.location.search);
        var initialLang = urlParams.get('lang');

        if (!initialLang || !translations[initialLang]) {
            try {
                initialLang = localStorage.getItem('mifpro_ds_lang');
            } catch (e) {}
        }

        if (!initialLang || !translations[initialLang]) {
            initialLang = 'id'; // Default to Indonesian
        }

        applyLanguage(initialLang);

        // Bind click events on buttons
        var buttons = document.querySelectorAll('.lang-btn, [data-lang-btn], [data-lang]');
        for (var i = 0; i < buttons.length; i++) {
            buttons[i].addEventListener('click', function (e) {
                e.preventDefault();
                var targetLang = this.getAttribute('data-lang-btn') || this.getAttribute('data-lang');
                if (targetLang) {
                    applyLanguage(targetLang);
                }
            });
        }
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();