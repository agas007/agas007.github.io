"use client";

import React from 'react';
import './tat.css';

export default function TatWebpageDummy() {
  const clients = [
    { name: "Askrindo", src: "/projects/tat/images/clients/Askrindo.png" },
    { name: "PLN Enjiniring", src: "/projects/tat/images/clients/PLN-Enjiniring.png" },
    { name: "Saratoga", src: "/projects/tat/images/clients/Saratoga.png" },
    { name: "Afitour", src: "/projects/tat/images/clients/afitour.webp" },
    { name: "Cuangroup", src: "/projects/tat/images/clients/cuangroup.webp" },
    { name: "Energas", src: "/projects/tat/images/clients/energas.png" },
    { name: "Pertamina", src: "/projects/tat/images/clients/pertamina.png" },
    { name: "Raharja Energi Cepu", src: "/projects/tat/images/clients/raharja-energi-cepu.png" },
    { name: "Rukun Raharja", src: "/projects/tat/images/clients/rukun-raharja.png" },
    { name: "Sangil Indonesia", src: "/projects/tat/images/clients/sangil-indonesia.png" },
    { name: "Trinusa Resources", src: "/projects/tat/images/clients/trinusa-resources.png" },
  ];

  const services = [
    { 
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="2" width="16" height="20" rx="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01"/><path d="M16 6h.01"/><path d="M8 10h.01"/><path d="M16 10h.01"/><path d="M8 14h.01"/><path d="M16 14h.01"/></svg>
      ), 
      title: "Tax Compliance", 
      desc: "Pengelolaan kepatuhan pajak bulanan dan tahunan secara akurat sesuai regulasi terkini." 
    },
    { 
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
      ), 
      title: "Tax Audit & Litigation", 
      desc: "Pendampingan profesional dalam proses pemeriksaan, keberatan, hingga banding di Pengadilan Pajak." 
    },
    { 
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18h6"/><path d="M10 22h4"/><path d="M12 2a7 7 0 0 0-7 7c0 2.38 1.19 4.47 3 5.74V17a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-2.26c1.81-1.27 3-3.36 3-5.74a7 7 0 0 0-7-7z"/></svg>
      ), 
      title: "Tax Advisory", 
      desc: "Konsultasi strategis untuk optimasi perencanaan pajak yang legal dan efisien bagi bisnis Anda." 
    },
    { 
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5"/></svg>
      ), 
      title: "TATax Academy", 
      desc: "Program pendidikan dan pelatihan perpajakan untuk pengembangan kapasitas sumber daya manusia." 
    },
    { 
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="8" y="2" width="8" height="4" rx="1" ry="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/></svg>
      ), 
      title: "Tax Administration", 
      desc: "Layanan pengurusan administrasi perpajakan mulai dari NPWP hingga pencabutan status PKP." 
    },
    { 
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
      ), 
      title: "International Tax", 
      desc: "Solusi perpajakan lintas batas negara, transfer pricing, dan kepatuhan perjanjian pajak internasional." 
    }
  ];

  const partners = [
    {
      name: "Tri Agung Tofiq",
      title: "S.E., S.H., M.Ak., M.H., BKP",
      role: "Managing Partner",
      image: "/projects/tat/images/partner_1_portrait_1773559480325.png"
    },
    {
      name: "Wahyu Nurul Hidayati",
      title: "S.E, Ak, CA, M.Ak, Ph.D (C)",
      role: "Operational Director",
      image: "/projects/tat/images/partner_2_portrait_1773559495600.png"
    },
    {
      name: "Ari Susanto",
      title: "S.E., M.Ak., BKP",
      role: "Partner",
      image: "/projects/tat/images/partner_ari_1773562219775.png"
    },
    {
      name: "Devid Januardi",
      title: "S.Kom, M.Ak, BKP",
      role: "Partner",
      image: "/projects/tat/images/partner_devid_1773562236023.png"
    },
    {
      name: "Agung Suprianto",
      title: "SE, Ak, CPA, M.Ak, BKP",
      role: "Partner",
      image: "/projects/tat/images/partner_agung_1773562258262.png"
    }
  ];

  const academyPrograms = [
    {
      title: "Brevet Pajak A & B",
      type: "Flexible / Hybrid",
      desc: "Program pelatihan komprehensif bagi calon praktisi pajak untuk mendapatkan sertifikasi Brevet A dan B."
    },
    {
      title: "In-House Training",
      type: "Corporate",
      desc: "Pelatihan khusus perpajakan yang disesuaikan dengan kebutuhan spesifik perusahaan Anda."
    },
    {
      title: "Tax Talkshows & Seminar",
      type: "Event",
      desc: "Diskusi interaktif dan seminar rutin membahas regulasi terbaru dan isu-isu perpajakan terkini."
    }
  ];

  const duplicatedClients = [...clients, ...clients];

  return (
    <div className="tat-container">
      {/* Navigation */}
      <nav className="tat-nav">
        <a href="/" className="tat-logo">
          <div className="tat-logo-icon">TAT</div>
          <span>TAT & PARTNERS</span>
        </a>
        <div className="tat-nav-links">
          <a href="#hero">Beranda</a>
          <a href="#layanan">Layanan</a>
          <a href="#klien">Klien</a>
          <a href="#tim">Tim</a>
          <a href="#academy">Academy</a>
          <a href="#konsultasi">Kontak</a>
        </div>
        <div>
             <button className="tat-btn tat-btn-primary" style={{ padding: '10px 24px', fontSize: '0.875rem' }}>Login Portal</button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="tat-hero">
        <div className="tat-hero-content">
          <span className="tat-hero-badge">Konsultan Pajak Terdaftar & Terpercaya</span>
          <h1>Solusi Pajak yang <span>Tepat & Terukur</span> untuk Bisnis Anda</h1>
          <p>Membantu perusahaan navigasi kompleksitas perpajakan Indonesia dengan keahlian mendalam dan integritas tinggi.</p>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <a href="#konsultasi" className="tat-btn tat-btn-primary">Hubungi Kami</a>
            <a href="#layanan" className="tat-btn tat-btn-outline">Pelajari Layanan</a>
          </div>
        </div>
      </section>

      {/* Trust & Client Slider */}
      <section id="klien" className="tat-trust">
        <p className="tat-trust-title">Telah Dipercaya Oleh Berbagai Perusahaan Terkemuka</p>
        <div className="tat-marquee-container">
          <div className="tat-marquee">
            {duplicatedClients.map((client, idx) => (
              <img 
                key={idx} 
                src={client.src} 
                alt={client.name} 
                className="tat-client-logo"
                title={client.name}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="layanan" style={{ padding: '100px 40px' }}>
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 60px' }}>
          <span style={{ color: 'var(--tat-blue)', fontWeight: 700, textTransform: 'uppercase', fontSize: '0.875rem', marginBottom: '12px', display: 'block' }}>Layanan Kami</span>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--tat-blue-dark)' }}>Keahlian Menyeluruh di Bidang Perpajakan</h2>
        </div>
        
        <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
            gap: '24px', 
            maxWidth: '1200px', 
            margin: '0 auto' 
        }}>
          {services.map((service, idx) => (
            <div key={idx} style={{ 
                background: '#fff', 
                border: '1px solid #f1f5f9', 
                padding: '40px', 
                borderRadius: '20px',
                transition: 'all 0.3s'
            }}>
                <div style={{ 
                    width: '60px', 
                    height: '60px', 
                    background: 'var(--tat-silver)', 
                    borderRadius: '12px', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    marginBottom: '24px', 
                    color: 'var(--tat-blue)' 
                }}>{service.icon}</div>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '16px', fontWeight: 700 }}>{service.title}</h3>
                <p style={{ color: '#64748b', lineHeight: '1.6' }}>{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Leadership / Partners Section */}
      <section id="tim" style={{ padding: '100px 40px', background: '#fff' }}>
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 60px' }}>
          <span style={{ color: 'var(--tat-blue)', fontWeight: 700, textTransform: 'uppercase', fontSize: '0.875rem', marginBottom: '12px', display: 'block' }}>Kepemimpinan</span>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--tat-blue-dark)' }}>Partner Kami</h2>
        </div>
        
        {/* Top 2 Partners */}
        <div className="tat-partners-grid" style={{ marginBottom: '48px' }}>
          {partners.slice(0, 2).map((partner, idx) => (
            <div key={idx} className="tat-partner-card">
              <div className="tat-partner-image-wrapper">
                <img 
                  src={partner.image} 
                  alt={partner.name} 
                  className="tat-partner-image"
                  onError={(e) => {
                    e.currentTarget.src = "https://ui-avatars.com/api/?name=" + partner.name + "&background=004d99&color=fff&size=512";
                  }}
                />
              </div>
              <h3>{partner.name}</h3>
              <p>{partner.title}</p>
              <span className="tat-partner-role">{partner.role}</span>
            </div>
          ))}
        </div>

        {/* Other Partners */}
        <div className="tat-partners-grid">
          {partners.slice(2).map((partner, idx) => (
            <div key={idx} className="tat-partner-card">
              <div className="tat-partner-image-wrapper">
                <img 
                  src={partner.image} 
                  alt={partner.name} 
                  className="tat-partner-image"
                  onError={(e) => {
                    e.currentTarget.src = "https://ui-avatars.com/api/?name=" + partner.name + "&background=004d99&color=fff&size=512";
                  }}
                />
              </div>
              <h3>{partner.name}</h3>
              <p>{partner.title}</p>
              <span className="tat-partner-role">{partner.role}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Academy Section */}
      <section id="academy" className="tat-academy">
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 60px', position: 'relative', zIndex: 10 }}>
          <span className="tat-academy-type" style={{ color: '#60a5fa' }}>Pendidikan & Pelatihan</span>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#fff' }}>TATax Academy</h2>
          <p style={{ color: '#94a3b8', fontSize: '1.1rem', marginTop: '16px' }}>Dedikasi kami pada pengembangan sumber daya manusia melalui edukasi perpajakan berkualitas.</p>
        </div>
        <div className="tat-academy-grid">
          {academyPrograms.map((prog, idx) => (
            <div key={idx} className="tat-academy-card">
              <span className="tat-academy-type">{prog.type}</span>
              <h3>{prog.title}</h3>
              <p>{prog.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Consultation Form Section */}
      <section id="konsultasi" className="tat-contact-section">
        <div className="tat-contact-container">
          <div className="tat-contact-info">
            <h2>Mari Berkolaborasi Bersama Kami</h2>
            <p style={{ lineHeight: '1.6', color: '#cbd5e1' }}>
              Untuk mengetahui informasi tentang topik tertentu atau tentang layanan TAT & Partners, Anda dapat mengirimkan pesan dengan mengisi formulir ini.
            </p>
          </div>
          <div className="tat-contact-form">
            <div className="tat-form-group" style={{ display: 'flex', gap: '16px' }}>
                <input type="email" placeholder="Email Anda" className="tat-form-input" style={{ flex: 1 }} />
                <input type="tel" placeholder="Nomor Ponsel" className="tat-form-input" style={{ flex: 1 }} />
            </div>
            <div className="tat-form-group">
                <select className="tat-form-input">
                    <option disabled selected>Alasan untuk menghubungi</option>
                    <option>Konsultasi Layanan</option>
                    <option>Informasi TATax Academy</option>
                    <option>Lainnya</option>
                </select>
            </div>
            <div className="tat-form-group">
                <textarea rows={4} placeholder="Bagaimana kami dapat membantu Anda?" className="tat-form-input" style={{ resize: 'none' }}></textarea>
            </div>
            <button className="tat-form-btn">Kirim Formulir</button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="tat-footer">
        <div className="tat-footer-grid">
          {/* Brand Col */}
          <div className="tat-footer-col">
            <div className="tat-logo" style={{ color: '#fff', marginBottom: '24px' }}>
              <div className="tat-logo-icon">TAT</div>
              <span style={{ fontSize: '1.25rem' }}>& Partners</span>
            </div>
            <p style={{ maxWidth: '300px' }}>
              Mensederhanakan kerumitan demi solusi yang jelas. Konsultan pajak terdaftar dan mitra finansial terpercaya Anda.
            </p>
            <p style={{ marginTop: '20px', color: 'var(--tat-blue-light)', fontStyle: 'italic' }}>
              "Tax Solutions, Prosperity Solutions"
            </p>
          </div>

          {/* Locations Col */}
          <div className="tat-footer-col">
            <h4>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '8px' }}><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              Head Office
            </h4>
            <p>
              Menara Sentraya, 12th Floor<br />
              Jl. Iskandarsyah Raya 1A - Blok M<br />
              Jakarta Selatan 12160
            </p>
            <h4 style={{ marginTop: '30px' }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '8px' }}><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              Branch Office
            </h4>
            <p>
              UH-Town Building, Blok UH/B-01<br />
              Jl. Boulevard UPJ Bintaro Sawah Baru<br />
              Tangerang Selatan 15413
            </p>
          </div>

          {/* Contact Col */}
          <div className="tat-footer-col">
            <h4 style={{ display: 'flex', alignItems: 'center' }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '8px' }}><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              Hubungi Kami
            </h4>
            <a href="mailto:taxconsultingtat@gmail.com" style={{ display: 'flex', alignItems: 'center', marginBottom: '12px' }}>
               <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '8px' }}><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
               taxconsultingtat@gmail.com
            </a>
            <a href="tel:082112991209" style={{ display: 'flex', alignItems: 'center' }}>
               <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '8px' }}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
               0821-1299-1209
            </a>
            <a href="tel:02174790554" style={{ display: 'flex', alignItems: 'center', marginTop: '4px' }}>
               <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '8px' }}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
               021-74790554
            </a>

            <div className="tat-footer-socials">
              <a href="https://www.instagram.com/tatax.solution" target="_blank" className="tat-social-icon" title="Instagram">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="https://twitter.com/tataxsolution" target="_blank" className="tat-social-icon" title="Twitter">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
              </a>
              <a href="https://www.facebook.com/tataxsolution" target="_blank" className="tat-social-icon" title="Facebook">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
            </div>
          </div>
        </div>

        <div className="tat-footer-copyright">
          <p>© 2026 PT Tatax Konsultan Indonesia. Hak cipta dilindungi Undang-undang.</p>
          <a href="/" className="back-link">← Kembali ke Portfolio Agas</a>
        </div>
      </footer>
    </div>
  );
}
