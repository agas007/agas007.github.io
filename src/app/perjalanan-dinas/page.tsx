"use client";

import React, { useState } from 'react';
import './perjalanan.css';

export default function PerjalananDinasDummy() {
  const [activeTab, setActiveTab] = useState('requests');

  const requests = [
    { id: 'PD-2026-001', name: 'Budi Santoso', destination: 'Jakarta', date: '10 Mar 2026', status: 'Approved' },
    { id: 'PD-2026-002', name: 'Siti Aminah', destination: 'Surabaya', date: '12 Mar 2026', status: 'Pending' },
    { id: 'PD-2026-003', name: 'Agus Pratama', destination: 'Bandung', date: '15 Mar 2026', status: 'Rejected' },
    { id: 'PD-2026-004', name: 'Dewi Lestari', destination: 'Yogyakarta', date: '18 Mar 2026', status: 'Pending' },
  ];

  return (
    <div className="pd-container">
      {/* Sidebar */}
      <aside className="pd-sidebar">
        <div className="pd-sidebar-header">
           <span className="icon">✈️</span>
           <span>Pedal</span>
        </div>
        <nav className="pd-nav">
            <a href="#" className="pd-nav-item active">
                <span className="icon">📊</span> Dashboard
            </a>
            <a href="#" className="pd-nav-item">
                <span className="icon">📝</span> Pengajuan
            </a>
             <a href="#" className="pd-nav-item">
                <span className="icon">✓</span> Approval
            </a>
            <a href="#" className="pd-nav-item">
                <span className="icon">📄</span> Report
            </a>
        </nav>
        <div className="pd-sidebar-footer">
           <a href="/" className="pd-user-profile">
              <span className="icon mr-2">←</span> Back to Portfolio
           </a>
        </div>
      </aside>

      {/* Main Content */}
      <main className="pd-main">
        {/* Navbar Header */}
        <header className="pd-header">
            <div className="pd-header-actions">
                <span className="icon">🔔</span>
                <div className="pd-header-user">
                   <span style={{ fontSize: '0.875rem', fontWeight: 500 }}>Admin Subbag</span>
                   <div className="pd-header-user-avatar">AD</div>
                </div>
            </div>
        </header>

        <div className="pd-content">
          <div className="pd-page-header">
            <h1>Dashboard</h1>
            <p>Ringkasan aktivitas dan permohonan terkini (Demo Portofolio)</p>
          </div>

          <div className="pd-stats-grid">
             <div className="pd-stat-card">
                 <h3>Total Permohonan</h3>
                 <p className="value">124</p>
                 <span className="trend"><span className="text-green mr-2">↑ 12%</span> <span className="text-gray">dari bulan lalu</span></span>
             </div>
             <div className="pd-stat-card">
                 <h3>Menunggu Persetujuan</h3>
                 <p className="value text-yellow">15</p>
                 <span className="trend"><span className="text-gray">Membutuhkan tindakan Anda</span></span>
             </div>
             <div className="pd-stat-card">
                 <h3>Disetujui Bulan Ini</h3>
                 <p className="value text-green">42</p>
                 <span className="trend"><span className="text-gray">Sesuai anggaran</span></span>
             </div>
          </div>

          <div className="pd-table-card">
             <div className="pd-table-header">
                <h3>10 Permohonan Terbaru</h3>
                <div className="pd-tabs">
                   <button onClick={() => setActiveTab('requests')} className={`pd-tab ${activeTab === 'requests' ? 'active' : ''}`}>Semua</button>
                   <button onClick={() => setActiveTab('pending')} className={`pd-tab ${activeTab === 'pending' ? 'active pending' : ''}`}>Menunggu</button>
                   <button onClick={() => setActiveTab('approved')} className={`pd-tab ${activeTab === 'approved' ? 'active approved' : ''}`}>Disetujui</button>
                </div>
             </div>

             <div style={{ overflowX: 'auto' }}>
                 <table className="pd-table">
                    <thead>
                       <tr>
                          <th>ID Permohonan</th>
                          <th>Nama Pegawai</th>
                          <th>Tujuan</th>
                          <th>Tanggal</th>
                          <th>Status</th>
                          <th style={{ textAlign: 'right' }}>Aksi</th>
                       </tr>
                    </thead>
                    <tbody>
                       {requests.map((req, i) => (
                          <tr key={i}>
                             <td className="brand">{req.id}</td>
                             <td className="strong">{req.name}</td>
                             <td>{req.destination}</td>
                             <td>{req.date}</td>
                             <td>
                                 <span className={`pd-badge ${req.status.toLowerCase()}`}>
                                     {req.status}
                                 </span>
                             </td>
                             <td style={{ textAlign: 'right' }}>
                                 <button className="pd-action-btn">Detail</button>
                             </td>
                          </tr>
                       ))}
                    </tbody>
                 </table>
             </div>
          </div>
        </div>
      </main>
    </div>
  );
}
