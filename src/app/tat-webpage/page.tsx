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

  // Duplicate for seamless loop
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
          <a href="#">Beranda</a>
          <a href="#">Layanan</a>
          <a href="#">Klien</a>
          <a href="#">Tim</a>
          <a href="#">Kontak</a>
        </div>
        <div style={{ display: 'flex', gap: '12px' }}>
             <button className="tat-btn tat-btn-primary" style={{ padding: '10px 24px', fontSize: '0.875rem' }}>Login Portal</button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="tat-hero">
        <div className="tat-hero-content">
          <span className="tat-hero-badge">Konsultan Pajak Terdaftar & Terpercaya</span>
          <h1>Solusi Pajak yang <span>Tepat & Terukur</span> untuk Bisnis Anda</h1>
          <p>Membantu perusahaan navigasi kompleksitas perpajakan Indonesia dengan keahlian mendalam dan integritas tinggi.</p>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <a href="#" className="tat-btn tat-btn-primary">Hubungi Kami</a>
            <a href="#" className="tat-btn tat-btn-outline">Pelajari Layanan</a>
          </div>
        </div>
      </section>

      {/* Trust & Client Slider */}
      <section className="tat-trust">
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
      <section className="tat-section">
        <div className="tat-section-header">
          <span className="tat-section-subtitle">Layanan Kami</span>
          <h2 className="tat-section-title">Keahlian Menyeluruh di Bidang Perpajakan</h2>
        </div>
        
        <div className="tat-services-grid">
          <div className="tat-service-card">
            <div className="tat-service-icon">🏛️</div>
            <h3>Tax Compliance</h3>
            <p>Pengelolaan kepatuhan pajak bulanan dan tahunan secara akurat sesuai regulasi terkini.</p>
          </div>
          <div className="tat-service-card">
            <div className="tat-service-icon">🛡️</div>
            <h3>Tax Audit & Litigation</h3>
            <p>Pendampingan profesional dalam proses pemeriksaan, keberatan, hingga banding di Pengadilan Pajak.</p>
          </div>
          <div className="tat-service-card">
            <div className="tat-service-icon">💡</div>
            <h3>Tax Advisory</h3>
            <p>Konsultasi strategis untuk optimasi perencanaan pajak yang legal dan efisien bagi bisnis Anda.</p>
          </div>
          <div className="tat-service-card">
            <div className="tat-service-icon">🎓</div>
            <h3>TATax Academy</h3>
            <p>Program pendidikan dan pelatihan perpajakan untuk pengembangan kapasitas sumber daya manusia.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="tat-footer">
        <div className="tat-logo" style={{ color: '#fff', marginBottom: '32px' }}>
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
