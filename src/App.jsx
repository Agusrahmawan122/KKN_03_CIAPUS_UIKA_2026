import React, { useState, useEffect } from 'react';
import { siteConfig } from './data/siteConfig';

/* =====================================================
   HELPER ASSET
   File di dalam folder public dipanggil tanpa "public/"
   Contoh:
   public/logo/logo.png       -> /logo/logo.png
   public/location/ciapus.jpg -> /location/ciapus.jpg
===================================================== */

const asset = (path) => {
  if (!path) return '';

  // Jika URL eksternal, gunakan langsung
  if (/^(https?:|data:|blob:)/i.test(path)) {
    return path;
  }

  // Untuk file lokal di public
  return `${import.meta.env.BASE_URL}${String(path).replace(/^\/+/, '')}`;
};


export default function App() {

  const [loading, setLoading] = useState(true);
  const [activeModalImg, setActiveModalImg] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("Semua");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);


  /* =====================================================
     LOADING & SCROLL
  ===================================================== */

  useEffect(() => {

    const timer = setTimeout(() => {
      setLoading(false);
    }, 1600);

    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };

  }, []);


  /* =====================================================
     FILTER GALLERY
  ===================================================== */

  const filteredGallery =
    selectedCategory === "Semua"
      ? siteConfig.gallery
      : siteConfig.gallery.filter(
          item => item.category === selectedCategory
        );


  /* =====================================================
     LOADING SCREEN
  ===================================================== */

  if (loading) {

    return (
      <div className="fixed inset-0 bg-[#FDFBF7] flex flex-col items-center justify-center z-50 transition-opacity duration-500">

        <img
          src={asset('/logo/logo.png')}
          alt="Logo KKN 03 Ciapus"
          className="w-24 h-24 animate-bounce mb-4"
        />

        <h1 className="text-xl font-bold text-[#4A2E2B] tracking-wider">
          KKN 03 CIAPUS
        </h1>

        <p className="text-xs text-[#7A2628] font-medium mt-1">
          UIKA BOGOR 2026
        </p>

      </div>
    );

  }


  return (

    <div className="min-h-screen bg-[#FDFBF7] text-[#2B2B2B] relative selection:bg-[#7A2628] selection:text-white">

      {/* =====================================================
          NAVBAR
      ===================================================== */}

      <nav className="sticky top-0 z-40 bg-[#FDFBF7]/90 backdrop-blur-md border-b border-[#4A2E2B]/10 px-6 py-3.5 flex justify-between items-center transition-all">

        <div className="flex items-center space-x-3">

          <img
            src={asset('/logo/logo.png')}
            alt="Logo KKN 03 Ciapus"
            className="w-9 h-9 object-contain"
          />

          <div className="flex flex-col">

            <span className="font-bold text-[#4A2E2B] text-sm leading-none">
              KKN 03 CIAPUS
            </span>

            <span className="text-[10px] text-[#3A5F43] font-semibold mt-0.5">
              UIKA BOGOR 2026
            </span>

          </div>

        </div>


        {/* Desktop Links */}

        <div className="hidden md:flex items-center space-x-6 text-sm font-medium text-[#4A2E2B]">

          <a
            href="#beranda"
            className="hover:text-[#7A2628] transition"
          >
            Beranda
          </a>

          <a
            href="#cerita"
            className="hover:text-[#7A2628] transition"
          >
            Cerita
          </a>

          <a
            href="#anggota"
            className="hover:text-[#7A2628] transition"
          >
            Anggota
          </a>

          <a
            href="#galeri"
            className="hover:text-[#7A2628] transition"
          >
            Galeri
          </a>

          <a
            href="#film"
            className="hover:text-[#7A2628] transition"
          >
            Film
          </a>

          <a
            href="#jejak"
            className="hover:text-[#7A2628] transition"
          >
            Dokumentasi
          </a>

        </div>


        <div className="hidden md:block">

          <a
            href="#galeri"
            className="bg-[#4A2E2B] text-white px-5 py-2 rounded-full text-xs font-medium hover:bg-[#7A2628] transition shadow-sm"
          >
            Kenang Kembali
          </a>

        </div>


        {/* Hamburger Mobile */}

        <button
          className="md:hidden text-[#4A2E2B] p-1 focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >

          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >

            {mobileMenuOpen ? (

              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />

            ) : (

              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />

            )}

          </svg>

        </button>

      </nav>


      {/* =====================================================
          MOBILE DRAWER
      ===================================================== */}

      {mobileMenuOpen && (

        <div className="md:hidden fixed inset-x-0 top-[57px] bg-[#FDFBF7] border-b border-[#4A2E2B]/10 p-6 flex flex-col space-y-4 shadow-lg z-30">

          <a
            href="#beranda"
            onClick={() => setMobileMenuOpen(false)}
            className="text-[#4A2E2B] font-medium text-sm"
          >
            Beranda
          </a>

          <a
            href="#cerita"
            onClick={() => setMobileMenuOpen(false)}
            className="text-[#4A2E2B] font-medium text-sm"
          >
            Cerita
          </a>

          <a
            href="#anggota"
            onClick={() => setMobileMenuOpen(false)}
            className="text-[#4A2E2B] font-medium text-sm"
          >
            Anggota
          </a>

          <a
            href="#galeri"
            onClick={() => setMobileMenuOpen(false)}
            className="text-[#4A2E2B] font-medium text-sm"
          >
            Galeri
          </a>

          <a
            href="#film"
            onClick={() => setMobileMenuOpen(false)}
            className="text-[#4A2E2B] font-medium text-sm"
          >
            Film
          </a>

          <a
            href="#jejak"
            onClick={() => setMobileMenuOpen(false)}
            className="text-[#4A2E2B] font-medium text-sm"
          >
            Dokumentasi
          </a>

        </div>

      )}


      {/* =====================================================
          HERO
      ===================================================== */}

      <section
        id="beranda"
        className="relative w-full min-h-[90vh] flex flex-col items-center justify-center text-center px-6 pt-20 pb-28 overflow-hidden"
      >

        {/* Background Ciapus */}

        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0 transform scale-105 transition-transform duration-1000"
          style={{
            backgroundImage: `url("${asset('/location/ciapus.jpg')}")`
          }}
        >

          <div className="absolute inset-0 bg-gradient-to-b from-[#FDFBF7]/90 via-[#FDFBF7]/75 to-[#FDFBF7]/95"></div>

        </div>


        {/* Hero Content */}

        <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">

          <img
            src={asset('/logo/logo.png')}
            alt="Logo KKN 03 Ciapus"
            className="w-28 h-28 md:w-36 md:h-36 mb-5 drop-shadow-md transition-transform duration-300 hover:scale-105"
          />

          <span className="text-xs font-bold tracking-[0.2em] text-[#3A5F43] uppercase mb-2 block bg-[#3A5F43]/10 px-3 py-1 rounded-full border border-[#3A5F43]/20">
            UIKA BOGOR 2026
          </span>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#4A2E2B] font-bold mb-4 leading-tight drop-shadow-sm">
            "Sebuah Perjalanan yang Akan Selalu Kami Ingat."
          </h1>

          <p className="text-sm md:text-base text-[#2B2B2B]/85 max-w-xl mx-auto mb-8 leading-relaxed font-normal">
            Cerita, tawa, kebersamaan, dan momen-momen kecil yang menjadi bagian dari perjalanan KKN 03 Ciapus 2026.
          </p>


          {/* Tombol */}

          <div className="flex flex-col sm:flex-row justify-center items-center gap-3 w-full sm:w-auto">

            <a
              href="#cerita"
              className="w-full sm:w-auto bg-[#4A2E2B] text-white px-7 py-3 rounded-full text-xs md:text-sm font-medium hover:bg-[#7A2628] transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2"
            >
              Mulai Mengenang
              <span>→</span>
            </a>

            <a
              href="#galeri"
              className="w-full sm:w-auto border border-[#4A2E2B]/40 bg-white/50 backdrop-blur-sm text-[#4A2E2B] px-7 py-3 rounded-full text-xs md:text-sm font-medium hover:bg-[#4A2E2B] hover:text-white transition-all duration-300 shadow-sm flex items-center justify-center gap-2"
            >
              Lihat Galeri 🖼️
            </a>

          </div>

        </div>


        {/* Paper Tear */}

        <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none z-10">

          <svg
            className="relative block w-full h-8 md:h-12 text-[#F5F0E6]"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            fill="currentColor"
          >

            <path d="M0,0 C150,90 350,-40 500,65 C650,170 900,10 1200,40 L1200,120 L0,120 Z"></path>

          </svg>

        </div>

      </section>


      {/* =====================================================
          CERITA
      ===================================================== */}

      <section
        id="cerita"
        className="relative px-6 py-20 bg-[#F5F0E6] border-y border-[#4A2E2B]/10 overflow-hidden"
      >

        <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(#4A2E2B_1px,transparent_1px)] [background-size:16px_16px]"></div>

        <div className="max-w-5xl mx-auto relative z-10">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

            {/* Teks */}

            <div className="lg:col-span-7 space-y-4 text-left">

              <div className="inline-flex items-center gap-2 bg-[#3A5F43]/10 text-[#3A5F43] px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase border border-[#3A5F43]/20">
                <span>🌿</span>
                TENTANG PERJALANAN KAMI
              </div>

              <h2 className="text-3xl md:text-4xl font-serif text-[#4A2E2B] font-bold leading-tight">
                Sebuah Cerita, Banyak Kenangan
              </h2>

              <div className="space-y-3 text-sm md:text-base text-[#2B2B2B]/85 leading-relaxed font-normal">

                <p>
                  Berawal dari sekumpulan mahasiswa yang mungkin belum saling mengenal sepenuhnya, kemudian dipertemukan dalam satu perjalanan bernama KKN.
                </p>

                <p>
                  Dari hari-hari sederhana, kegiatan bersama, lelah, tawa, sampai momen yang tidak akan mudah dilupakan.
                </p>

              </div>

              <div className="pt-2">

                <p className="text-sm font-serif italic text-[#7A2628] font-bold border-l-2 border-[#7A2628] pl-3 py-0.5">
                  "KKN selesai, tapi ceritanya tetap tinggal."
                </p>

              </div>


              {/* Stats */}

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-4">

                <div className="p-3 bg-white/80 backdrop-blur-sm rounded-xl border border-[#4A2E2B]/10 text-center shadow-sm">
                  <span className="block text-lg font-serif font-bold text-[#7A2628]">
                    2026
                  </span>
                  <span className="text-[10px] text-[#2B2B2B]/70 block font-medium">
                    Tahun Bersama
                  </span>
                </div>

                <div className="p-3 bg-white/80 backdrop-blur-sm rounded-xl border border-[#4A2E2B]/10 text-center shadow-sm">
                  <span className="block text-lg font-serif font-bold text-[#3A5F43]">
                    Ciapus
                  </span>
                  <span className="text-[10px] text-[#2B2B2B]/70 block font-medium">
                    Lokasi KKN
                  </span>
                </div>

                <div className="p-3 bg-white/80 backdrop-blur-sm rounded-xl border border-[#4A2E2B]/10 text-center shadow-sm">
                  <span className="block text-lg font-serif font-bold text-[#4A2E2B]">
                    1
                  </span>
                  <span className="text-[10px] text-[#2B2B2B]/70 block font-medium">
                    Perjalanan
                  </span>
                </div>

                <div className="p-3 bg-white/80 backdrop-blur-sm rounded-xl border border-[#4A2E2B]/10 text-center shadow-sm">
                  <span className="block text-lg font-serif font-bold text-[#7A2628]">
                    ∞
                  </span>
                  <span className="text-[10px] text-[#2B2B2B]/70 block font-medium">
                    Kenangan
                  </span>
                </div>

              </div>

            </div>


            {/* Foto Ciapus */}

            <div className="lg:col-span-5 relative flex justify-center">

              <div className="relative p-3 pb-8 bg-white rounded-sm shadow-xl border border-[#4A2E2B]/15 transform hover:rotate-0 rotate-2 transition-all duration-500 max-w-md w-full group">

                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-28 h-7 bg-amber-100/70 backdrop-blur-xs border border-amber-200/50 rotate-[-2deg] shadow-xs z-20 pointer-events-none"></div>

                <div className="overflow-hidden rounded-xs aspect-4/3 bg-[#FDFBF7]">

                  <img
                    src={asset('/location/ciapus.jpg')}
                    onError={(e) => {
                      e.currentTarget.src = asset('/logo/logo.png');
                    }}
                    alt="Pemandangan Desa Ciapus"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />

                </div>

                <div className="mt-4 text-center">

                  <p className="font-serif italic text-xs text-[#4A2E2B] font-semibold">
                    Sudut Hangat Desa Ciapus ⛰️
                  </p>

                  <p className="text-[10px] text-[#2B2B2B]/50 font-mono mt-0.5">
                    Kecamatan Ciomas, Kabupaten Bogor
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          ANGGOTA
      ===================================================== */}

      <section
        id="anggota"
        className="relative px-6 py-20 bg-[#FDFBF7] overflow-hidden"
      >

        <div className="max-w-6xl mx-auto">

          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">

            <div>

              <div className="inline-flex items-center gap-2 bg-[#7A2628]/10 text-[#7A2628] px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase border border-[#7A2628]/20 mb-2">
                <span>📇</span>
                ANGGOTA KELOMPOK
              </div>

              <h2 className="text-3xl md:text-4xl font-serif text-[#4A2E2B] font-bold">
                Orang-Orang di Balik Cerita Ini
              </h2>

              <p className="text-xs md:text-sm text-[#2B2B2B]/70 mt-1">
                Klik pada ID Card untuk melihat dalam ukuran penuh
              </p>

            </div>


            <div className="hidden md:flex items-center gap-2 text-xs font-medium text-[#4A2E2B]/60 bg-[#F5F0E6] px-4 py-2 rounded-full border border-[#4A2E2B]/10">

              <span>🔍</span>

              <span>
                Perbesar gambar dengan mengklik kartu
              </span>

            </div>

          </div>


          {/* Member Grid */}

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-5">

            {siteConfig.members.map((member) => (

              <div
                key={member.id}
                className="group relative cursor-pointer bg-white p-2 md:p-2.5 rounded-2xl border border-[#4A2E2B]/15 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1.5"
                onClick={() => setActiveModalImg(asset(member.image))}
              >

                <div className="relative w-full overflow-hidden rounded-xl bg-[#F5F0E6] aspect-[3/4]">

                  <img
                    src={asset(member.image)}
                    alt={member.name}
                    onError={(e) => {
                      e.currentTarget.src = asset('/logo/logo.png');
                    }}
                    className="w-full h-full object-contain md:object-cover group-hover:scale-105 transition-transform duration-500"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#4A2E2B]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-3">

                    <span className="text-[11px] font-medium text-white bg-[#7A2628] px-3 py-1 rounded-full shadow-md flex items-center gap-1">
                      🔍 Perbesar
                    </span>

                  </div>

                </div>

              </div>

            ))}

          </div>


          <div className="mt-8 text-center">

            <p className="text-xs text-[#2B2B2B]/50 italic font-serif">
              "Tersimpan rapi dalam ingatan, diabadikan dalam satu identitas."
            </p>

          </div>

        </div>

      </section>


      {/* =====================================================
          GALERI
      ===================================================== */}

      <section
        id="galeri"
        className="relative px-6 py-20 bg-[#F5F0E6] border-t border-[#4A2E2B]/10 overflow-hidden"
      >

        <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#4A2E2B_1px,transparent_1px)] [background-size:20px_20px]"></div>

        <div className="max-w-6xl mx-auto relative z-10">

          <div className="text-center max-w-2xl mx-auto mb-10">

            <div className="inline-flex items-center gap-2 bg-[#3A5F43]/10 text-[#3A5F43] px-3.5 py-1 rounded-full text-xs font-semibold tracking-wider uppercase border border-[#3A5F43]/20 mb-3">
              <span>📸</span>
              ALBUM KENANGAN
            </div>

            <h2 className="text-3xl md:text-4xl font-serif text-[#4A2E2B] font-bold mb-3">
              Momen yang Tidak Mau Kami Lupakan
            </h2>

            <p className="text-xs md:text-sm text-[#2B2B2B]/70">
              Kumpulan rekam jejak, cerita hangat, dan setiap sudut tawa selama KKN 03 Ciapus.
            </p>

          </div>


          {/* Filter */}

          <div className="flex flex-wrap justify-center gap-2 mb-10">

            {[
              "Semua",
              "Kegiatan",
              "Kebersamaan",
              "Foto Bersama"
            ].map((cat) => (

              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-medium transition-all duration-300 shadow-2xs ${
                  selectedCategory === cat
                    ? "bg-[#4A2E2B] text-white shadow-md scale-105"
                    : "bg-white/80 backdrop-blur-xs text-[#4A2E2B] border border-[#4A2E2B]/15 hover:bg-[#4A2E2B] hover:text-white"
                }`}
              >
                {cat}
              </button>

            ))}

          </div>


          {/* Gallery */}

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">

            {filteredGallery.map((item, index) => {

              const rotationClass =
                index % 3 === 0
                  ? "rotate-1"
                  : index % 3 === 1
                    ? "-rotate-1"
                    : "rotate-0";


              return (

                <div
                  key={item.id}
                  className={`group relative bg-white p-2.5 pb-5 rounded-xs shadow-md border border-[#4A2E2B]/10 cursor-pointer hover:shadow-2xl hover:z-20 transition-all duration-300 transform hover:scale-105 ${rotationClass}`}
                  onClick={() => setActiveModalImg(asset(item.image))}
                >

                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-12 h-4 bg-amber-100/80 border border-amber-200/60 shadow-2xs rotate-[-1deg] z-10 pointer-events-none"></div>


                  <div className="relative overflow-hidden aspect-4/3 bg-[#FDFBF7] rounded-2xs mb-3">

                    <img
                      src={asset(item.image)}
                      onError={(e) => {
                        e.currentTarget.src = asset('/logo/logo.png');
                      }}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />


                    <span className="absolute top-2 left-2 text-[9px] font-semibold tracking-wide uppercase text-white bg-[#4A2E2B]/80 backdrop-blur-xs px-2 py-0.5 rounded-full">
                      {item.category}
                    </span>

                  </div>


                  <div className="px-1 text-center">

                    <p className="text-xs font-serif font-bold text-[#4A2E2B] truncate group-hover:text-[#7A2628] transition-colors">
                      {item.title}
                    </p>

                    <span className="text-[10px] text-[#2B2B2B]/50 font-mono block mt-0.5">
                      Klik untuk memperbesar 🔍
                    </span>

                  </div>

                </div>

              );

            })}

          </div>


          <div className="mt-12 text-center">

            <p className="text-xs text-[#2B2B2B]/60 italic font-serif">
              "Foto mungkin terdiam, namun ingatan di dalamnya selalu berbicara."
            </p>

          </div>

        </div>

      </section>


      {/* =====================================================
          FILM
      ===================================================== */}

      <section
        id="film"
        className="relative px-6 py-20 bg-[#FDFBF7]"
      >

        <div className="max-w-4xl mx-auto">

          <div className="text-center mb-10">

            <div className="inline-flex items-center gap-2 bg-[#7A2628]/10 text-[#7A2628] px-3.5 py-1 rounded-full text-xs font-semibold tracking-wider uppercase border border-[#7A2628]/20 mb-3">
              <span>🎬</span>
              DOKUMENTER KKN
            </div>

            <h2 className="text-3xl md:text-4xl font-serif text-[#4A2E2B] font-bold mb-3">
              Film Perjalanan Kami
            </h2>

            <p className="text-xs md:text-sm text-[#2B2B2B]/75 max-w-lg mx-auto">
              Saksikan kembali kenangan, tawa, dan kilas balik sinematik petualangan KKN 03 Ciapus.
            </p>

          </div>


          <div className="relative bg-white p-3 md:p-4 rounded-3xl border border-[#4A2E2B]/15 shadow-xl overflow-hidden">

            <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-black shadow-inner">

              {(() => {

                const videoUrl =
                  siteConfig?.film ||
                  "https://youtu.be/5CG-6ph_dzc?si=OblYEc7aZQ7KvV2p";

                const regExp =
                  /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;

                const match = videoUrl.match(regExp);

                const videoId =
                  match && match[2].length === 11
                    ? match[2]
                    : "5CG-6ph_dzc";


                return (

                  <iframe
                    src={`https://www.youtube.com/embed/${videoId}?rel=0`}
                    className="w-full h-full rounded-2xl border-0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    title="Film Dokumenter KKN 03 Ciapus"
                  ></iframe>

                );

              })()}

            </div>


            <div className="mt-4 flex flex-col sm:flex-row items-center justify-between gap-3 px-2">

              <div className="text-left">

                <h3 className="text-sm font-serif font-bold text-[#4A2E2B]">
                  "KAMI PAMIT" — Dokumenter Resmi KKN 03 Ciapus 2026
                </h3>

                <p className="text-[11px] text-[#2B2B2B]/60 font-mono mt-0.5">
                  Klik ikon layar penuh (fullscreen) di sudut kanan bawah video untuk pengalaman menonton terbaik.
                </p>

              </div>


              <a
                href={
                  siteConfig?.film ||
                  "https://youtu.be/5CG-6ph_dzc?si=OblYEc7aZQ7KvV2p"
                }
                target="_blank"
                rel="noreferrer"
                className="shrink-0 bg-[#7A2628]/10 hover:bg-[#7A2628] text-[#7A2628] hover:text-white px-4 py-2 rounded-full text-xs font-semibold transition-all duration-300 flex items-center gap-1.5"
              >

                <span>Tonton di YouTube</span>
                <span>↗</span>

              </a>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          JEJAK DIGITAL & LOKASI
      ===================================================== */}

      <section
        id="jejak"
        className="relative px-6 py-20 bg-[#F5F0E6] border-t border-[#4A2E2B]/10 overflow-hidden"
      >

        <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#4A2E2B_1px,transparent_1px)] [background-size:18px_18px]"></div>


        <div className="max-w-5xl mx-auto relative z-10">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">


            {/* Social */}

            <div className="lg:col-span-5 flex flex-col justify-between space-y-4">

              <div>

                <div className="inline-flex items-center gap-2 bg-[#3A5F43]/10 text-[#3A5F43] px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase border border-[#3A5F43]/20 mb-3">
                  <span>🌐</span>
                  JEJAK DIGITAL
                </div>

                <h3 className="text-2xl md:text-3xl font-serif text-[#4A2E2B] font-bold mb-2">
                  Tetap Terhubung
                </h3>

                <p className="text-xs text-[#2B2B2B]/70 mb-5">
                  Ikuti perjalanan, arsip foto, dan momen keseharian kami di media sosial resmi KKN 03 Ciapus.
                </p>

              </div>


              <div className="space-y-3">

                {/* Instagram */}

                <a
                  href={siteConfig.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="group p-4 rounded-2xl bg-white border border-[#4A2E2B]/10 shadow-xs hover:shadow-md hover:border-[#7A2628] transition-all duration-300 flex items-center justify-between"
                >

                  <div className="flex items-center gap-3.5">

                    <div className="w-10 h-10 rounded-xl bg-[#7A2628]/10 text-[#7A2628] flex items-center justify-center font-bold text-lg group-hover:bg-[#7A2628] group-hover:text-white transition-colors duration-300">
                      📷
                    </div>

                    <div>

                      <h4 className="text-xs font-bold text-[#4A2E2B] group-hover:text-[#7A2628] transition-colors">
                        Instagram Official
                      </h4>

                      <p className="text-[11px] text-[#2B2B2B]/60 font-mono">
                        @kkn03_ciapus
                      </p>

                    </div>

                  </div>

                  <span className="text-xs text-[#7A2628] font-bold group-hover:translate-x-1 transition-transform">
                    Buka ↗
                  </span>

                </a>


                {/* TikTok */}

                <a
                  href={siteConfig.tiktok}
                  target="_blank"
                  rel="noreferrer"
                  className="group p-4 rounded-2xl bg-white border border-[#4A2E2B]/10 shadow-xs hover:shadow-md hover:border-[#4A2E2B] transition-all duration-300 flex items-center justify-between"
                >

                  <div className="flex items-center gap-3.5">

                    <div className="w-10 h-10 rounded-xl bg-[#4A2E2B]/10 text-[#4A2E2B] flex items-center justify-center font-bold text-lg group-hover:bg-[#4A2E2B] group-hover:text-white transition-colors duration-300">
                      🎵
                    </div>

                    <div>

                      <h4 className="text-xs font-bold text-[#4A2E2B] group-hover:text-[#4A2E2B] transition-colors">
                        TikTok Official
                      </h4>

                      <p className="text-[11px] text-[#2B2B2B]/60 font-mono">
                        @kkn03.ciapus
                      </p>

                    </div>

                  </div>

                  <span className="text-xs text-[#4A2E2B] font-bold group-hover:translate-x-1 transition-transform">
                    Buka ↗
                  </span>

                </a>


                {/* Google Drive */}

                <a
                  href={siteConfig.googleDrive}
                  target="_blank"
                  rel="noreferrer"
                  className="group p-4 rounded-2xl bg-white border border-[#4A2E2B]/10 shadow-xs hover:shadow-md hover:border-[#3A5F43] transition-all duration-300 flex items-center justify-between"
                >

                  <div className="flex items-center gap-3.5">

                    <div className="w-10 h-10 rounded-xl bg-[#3A5F43]/10 text-[#3A5F43] flex items-center justify-center font-bold text-lg group-hover:bg-[#3A5F43] group-hover:text-white transition-colors duration-300">
                      📁
                    </div>

                    <div>

                      <h4 className="text-xs font-bold text-[#4A2E2B] group-hover:text-[#3A5F43] transition-colors">
                        Google Drive Folder
                      </h4>

                      <p className="text-[11px] text-[#2B2B2B]/60 font-mono">
                        Arsip Foto & Video Original
                      </p>

                    </div>

                  </div>

                  <span className="text-xs text-[#3A5F43] font-bold group-hover:translate-x-1 transition-transform">
                    Buka ↗
                  </span>

                </a>

              </div>

            </div>


            {/* Google Maps */}

            <div className="lg:col-span-7 flex flex-col justify-between bg-white p-3 md:p-4 rounded-3xl border border-[#4A2E2B]/15 shadow-xl">

              <div className="relative w-full h-64 md:h-72 rounded-2xl overflow-hidden bg-[#E5E3DF] border border-[#4A2E2B]/10">

                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15852.128795551342!2d106.7622!3d-6.6428!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69cf2454b8a2e1%3A0x500c69108601d30!2sCiapus%2C%20Ciomas%2C%20Bogor%20Regency%2C%20West%20Java!5e0!3m2!1sen!2sid!4v1700000000000!5m2!1sen!2sid"
                  className="w-full h-full border-0"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Peta Lokasi KKN 03 Desa Ciapus"
                ></iframe>

              </div>


              <div className="mt-4 p-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3">

                <div>

                  <div className="flex items-center gap-1.5 mb-0.5">

                    <span className="text-xs">📍</span>

                    <h4 className="text-sm font-serif font-bold text-[#4A2E2B]">
                      Desa Ciapus
                    </h4>

                  </div>

                  <p className="text-xs text-[#2B2B2B]/75">
                    Kecamatan Ciomas, Kabupaten Bogor, Jawa Barat
                  </p>

                  <p className="text-[10px] text-[#2B2B2B]/50 font-mono mt-0.5">
                    Kode Plus: CP2X+5PM Ciapus
                  </p>

                </div>


                <a
                  href={
                    siteConfig.googleMaps ===
                    "MASUKKAN_LINK_GOOGLE_MAPS_DI_SINI"
                      ? "https://maps.google.com/?q=Ciapus+Ciomas+Bogor"
                      : siteConfig.googleMaps
                  }
                  target="_blank"
                  rel="noreferrer"
                  className="shrink-0 bg-[#3A5F43] text-white px-5 py-2.5 rounded-full text-xs font-medium hover:bg-[#4A2E2B] transition-all duration-300 shadow-sm text-center flex items-center justify-center gap-1.5"
                >

                  <span>Buka Google Maps</span>
                  <span>📍</span>

                </a>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          LIGHTBOX
      ===================================================== */}

      {activeModalImg && (

        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 md:p-8 backdrop-blur-md transition-all duration-300 animate-fadeIn"
          onClick={() => setActiveModalImg(null)}
        >

          <div
            className="relative max-w-4xl w-full bg-white/5 p-2 md:p-4 rounded-3xl border border-white/10 shadow-2xl flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >

            <button
              className="absolute -top-4 -right-4 md:-top-3 md:-right-3 text-white bg-[#7A2628] hover:bg-[#4A2E2B] w-10 h-10 rounded-full text-sm font-bold shadow-lg transition-transform duration-300 hover:scale-110 flex items-center justify-center border-2 border-white/20 z-10"
              onClick={() => setActiveModalImg(null)}
              aria-label="Tutup Pratinjau"
            >
              ✕
            </button>


            <div className="relative w-full max-h-[80vh] flex items-center justify-center overflow-hidden rounded-2xl bg-black/40">

              <img
                src={activeModalImg}
                onError={(e) => {
                  e.currentTarget.src = asset('/logo/logo.png');
                }}
                alt="Preview Detail"
                className="w-auto h-auto max-w-full max-h-[80vh] object-contain rounded-xl shadow-md"
              />

            </div>


            <p className="text-[11px] text-white/50 font-mono mt-3 text-center">
              Klik di mana saja di luar gambar atau tekan tombol ✕ untuk menutup
            </p>

          </div>

        </div>

      )}


      {/* =====================================================
          BACK TO TOP
      ===================================================== */}

      {showBackToTop && (

        <a
          href="#beranda"
          className="fixed bottom-6 right-6 bg-[#4A2E2B] hover:bg-[#7A2628] text-white w-12 h-12 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 flex items-center justify-center z-40 border border-white/20 group"
          aria-label="Kembali ke atas"
        >

          <svg
            className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >

            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.5"
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />

          </svg>

        </a>

      )}


      {/* =====================================================
          FOOTER
      ===================================================== */}

      <footer className="relative px-6 py-16 bg-[#4A2E2B] text-white text-center border-t border-white/10 overflow-hidden">

        <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]"></div>

        <div className="max-w-2xl mx-auto relative z-10 space-y-5">

          {/* Logo Footer */}

          <img
            src={asset('/logo/logo.png')}
            alt="Logo KKN 03 Ciapus"
            className="w-16 h-16 mx-auto opacity-90 drop-shadow-md hover:scale-105 transition-transform duration-300"
          />

          <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#FDFBF7] tracking-tight">
            Terima Kasih, Ciapus.
          </h2>

          <p className="text-xs md:text-sm text-white/75 max-w-md mx-auto leading-relaxed font-normal">
            Untuk semua cerita, pertemuan hangat, tawa, lelah, dan kenangan yang pernah menjadi bagian tak terpisahkan dari perjalanan kami.
          </p>


          <div className="flex items-center justify-center gap-3 pt-2">

            <div className="w-12 h-[1px] bg-white/20"></div>

            <span className="text-xs text-[#3A5F43] bg-white/10 px-3 py-1 rounded-full border border-white/10 font-serif italic">
              "Ceritanya Tetap Tinggal"
            </span>

            <div className="w-12 h-[1px] bg-white/20"></div>

          </div>


          <div className="pt-4">

            <p className="text-[11px] text-white/50 uppercase tracking-[0.2em] font-medium">
              KKN 03 CIAPUS — UIKA BOGOR 2026
            </p>

            <p className="text-[10px] text-white/30 font-mono mt-1">
              Dibuat dengan penuh kenangan untuk seluruh anggota & warga Desa Ciapus
            </p>

          </div>

        </div>

      </footer>

    </div>

  );

}
