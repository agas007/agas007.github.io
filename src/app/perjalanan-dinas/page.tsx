"use client";

import React, { useState } from 'react';
import './perjalanan.css';

export default function PerjalananDinasDummy() {
  const [activeTab, setActiveTab] = useState('requests');
  const [selectedRequest, setSelectedRequest] = useState<any>(null);

  const requests = [
    { id: 'PD-2026-001', name: 'Budi Santoso', destination: 'Jakarta', date: '10 Mar 2026', status: 'Approved' },
    { id: 'PD-2026-002', name: 'Siti Aminah', destination: 'Surabaya', date: '12 Mar 2026', status: 'Pending' },
    { id: 'PD-2026-003', name: 'Agus Pratama', destination: 'Bandung', date: '15 Mar 2026', status: 'Rejected' },
    { id: 'PD-2026-004', name: 'Dewi Lestari', destination: 'Yogyakarta', date: '18 Mar 2026', status: 'Pending' },
  ];

  const filteredRequests = requests.filter(req => {
    if (activeTab === 'pending') return req.status === 'Pending';
    if (activeTab === 'approved') return req.status === 'Approved';
    return true;
  });

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
          {!selectedRequest ? (
            <>
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
                       {filteredRequests.map((req, i) => (
                          <tr key={i}>
                             <td className="brand" style={{ cursor: 'pointer', color: '#2563eb', textDecoration: 'underline' }} onClick={() => setSelectedRequest(req)}>{req.id}</td>
                             <td className="strong">{req.name}</td>
                             <td>{req.destination}</td>
                             <td>{req.date}</td>
                             <td>
                                 <span className={`pd-badge ${req.status.toLowerCase()}`}>
                                     {req.status}
                                 </span>
                             </td>
                             <td style={{ textAlign: 'right' }}>
                                 <button className="pd-action-btn" onClick={() => setSelectedRequest(req)}>Detail</button>
                             </td>
                          </tr>
                       ))}
                    </tbody>
                 </table>
              </div>
           </div>
          </>
          ) : (
            <div className="pd-detail-view" style={{ animation: 'slide-up 0.4s ease-out' }}>
               <div style={{ marginBottom: '24px' }}>
                  <button onClick={() => setSelectedRequest(null)} style={{ background: 'none', border: 'none', color: '#2563eb', cursor: 'pointer', fontSize: '0.875rem', fontWeight: 600, display: 'flex', gap: '8px', alignItems: 'center' }}>
                     ← Kembali ke Dashboard
                  </button>
                  <h1 style={{ fontSize: '1.875rem', fontWeight: 700, color: '#0f172a', marginTop: '12px' }}>Detail Perjalanan Dinas</h1>
               </div>

               <div style={{ background: '#fff', borderRadius: '24px', border: '1px solid #f1f5f9', boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)', overflow: 'hidden', marginBottom: '32px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '20px', borderBottom: '1px solid #f8fafc', padding: '32px' }}>
                     <div style={{ width: '64px', height: '64px', background: '#eff6ff', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#2563eb', fontSize: '24px', boxShadow: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)' }}>
                        ✈️
                     </div>
                     <div>
                        <h2 style={{ fontSize: '1.5rem', fontWeight: 900, color: '#0f172a', marginBottom: '8px' }}>{selectedRequest.destination}, Indonesia</h2>
                        <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                           <span style={{ fontSize: '10px', fontWeight: 900, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.1em' }}>STATUS:</span>
                           <span className={`pd-badge ${selectedRequest.status.toLowerCase()}`}>{selectedRequest.status}</span>
                        </div>
                     </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '32px', padding: '32px' }}>
                     <div>
                         <label style={{ display: 'block', fontSize: '11px', fontWeight: 900, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '16px' }}>Kegiatan</label>
                         <p style={{ color: '#334155', fontWeight: 600, fontSize: '1.125rem' }}>Rapat Koordinasi Nasional 2026</p>
                     </div>
                     <div>
                         <label style={{ display: 'block', fontSize: '11px', fontWeight: 900, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '16px' }}>Waktu Pelaksanaan</label>
                         <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                            <div>
                               <span style={{ fontSize: '10px', fontWeight: 700, color: '#94a3b8', textTransform: 'uppercase' }}>Berangkat</span>
                               <div style={{ color: '#0f172a', fontWeight: 900, fontSize: '1.25rem' }}>{selectedRequest.date}</div>
                            </div>
                            <div>
                               <span style={{ fontSize: '10px', fontWeight: 700, color: '#94a3b8', textTransform: 'uppercase' }}>Pulang</span>
                               <div style={{ color: '#0f172a', fontWeight: 900, fontSize: '1.25rem' }}>20 Mar 2026</div>
                            </div>
                         </div>
                     </div>
                     <div>
                         <label style={{ display: 'block', fontSize: '11px', fontWeight: 900, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '16px' }}>Locus & Anggaran</label>
                         <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                            <div>
                               <span style={{ fontSize: '10px', fontWeight: 700, color: '#94a3b8', textTransform: 'uppercase', display: 'block', marginBottom: '4px' }}>Locus</span>
                               <div style={{ color: '#0f172a', fontWeight: 600 }}>Kantor Pusat {selectedRequest.destination}</div>
                            </div>
                            <div>
                               <span style={{ fontSize: '10px', fontWeight: 700, color: '#94a3b8', textTransform: 'uppercase', display: 'block', marginBottom: '4px' }}>Anggaran</span>
                               <div style={{ color: '#0f172a', fontWeight: 600 }}>DIPA 2026</div>
                            </div>
                         </div>
                     </div>
                  </div>
                  
                  <div style={{ background: 'rgba(248, 250, 252, 0.5)', borderTop: '1px solid #f1f5f9', padding: '32px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                     <div style={{ display: 'flex', gap: '48px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                           <div style={{ width: '48px', height: '48px', borderRadius: '16px', background: '#fff', border: '1px solid #f1f5f9', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#2563eb', fontWeight: 900, boxShadow: '0 1px 2px rgba(0,0,0,0.05)' }}>
                              {selectedRequest.name.charAt(0)}
                           </div>
                           <div>
                              <span style={{ display: 'block', fontSize: '10px', fontWeight: 900, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Pemohon</span>
                              <div style={{ fontSize: '14px', fontWeight: 700, color: '#0f172a' }}>{selectedRequest.name}</div>
                              <div style={{ fontSize: '10px', fontWeight: 600, color: '#94a3b8' }}>NIP: 198001012010011001</div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
