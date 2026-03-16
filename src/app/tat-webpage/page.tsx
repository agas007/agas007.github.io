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
    { icon: "🏛️", title: "Tax Compliance", desc: "Pengelolaan kepatuhan pajak bulanan dan tahunan secara akurat sesuai regulasi terkini." },
    { icon: "🛡️", title: "Tax Audit & Litigation", desc: "Pendampingan profesional dalam proses pemeriksaan, keberatan, hingga banding di Pengadilan Pajak." },
    { icon: "💡", title: "Tax Advisory", desc: "Konsultasi strategis untuk optimasi perencanaan pajak yang legal dan efisien bagi bisnis Anda." },
    { icon: "🎓", title: "TATax Academy", desc: "Program pendidikan dan pelatihan perpajakan untuk pengembangan kapasitas sumber daya manusia." },
    { icon: "📋", title: "Tax Administration", desc: "Layanan pengurusan administrasi perpajakan mulai dari NPWP hingga pencabutan status PKP." },
    { icon: "🗺️", title: "International Tax", desc: "Solusi perpajakan lintas batas negara, transfer pricing, dan kepatuhan perjanjian pajak internasional." }
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
                    fontSize: '1.5rem', 
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
        <div className="tat-logo" style={{ color: '#fff', marginBottom: '32px', justifyContent: 'center' }}>
          <div className="tat-logo-icon">TAT</div>
          <span style={{ fontSize: '1.5rem' }}>TAT & PARTNERS</span>
        </div>
        <p style={{ color: '#94a3b8', maxWidth: '500px', margin: '0 auto 40px' }}>
          Gedung TATax, Lantai 4. Jl. Kebagusan Raya No. 123, Jakarta Selatan, Indonesia.
        </p>
        <div className="tat-footer-copyright">
          <p>© 2026 PT Tatax Konsultan Indonesia. All rights reserved.</p>
          <a href="/" className="back-link">← Kembali ke Portfolio Agas</a>
        </div>
      </footer>
    </div>
  );
}
