"use client";

import React, { useState } from 'react';
import './perjalanan.css';

export default function PerjalananDinasDummy() {
  const [activeTab, setActiveTab] = useState('requests');
  const [selectedRequest, setSelectedRequest] = useState<any>(null);
  const [showNotifications, setShowNotifications] = useState(false);
  const [currentView, setCurrentView] = useState('dashboard');

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
            <a href="#" onClick={(e) => { e.preventDefault(); setCurrentView('dashboard'); setSelectedRequest(null); }} className={`pd-nav-item ${currentView === 'dashboard' ? 'active' : ''}`}>
                <span className="icon">📊</span> Dashboard
            </a>
            <a href="#" onClick={(e) => { e.preventDefault(); setCurrentView('pengajuan'); setSelectedRequest(null); }} className={`pd-nav-item ${currentView === 'pengajuan' ? 'active' : ''}`}>
                <span className="icon">📝</span> Pengajuan
            </a>
             <a href="#" onClick={(e) => { e.preventDefault(); setCurrentView('approval'); setSelectedRequest(null); }} className={`pd-nav-item ${currentView === 'approval' ? 'active' : ''}`}>
                <span className="icon">✓</span> Approval
            </a>
            <a href="#" onClick={(e) => e.preventDefault()} className="pd-nav-item">
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
                <div style={{ position: 'relative' }}>
                  <button onClick={() => setShowNotifications(!showNotifications)} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style={{ width: '24px', height: '24px', color: '#64748b' }}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
                    </svg>
                    <span style={{ position: 'absolute', top: '8px', right: '8px', width: '8px', height: '8px', backgroundColor: '#ef4444', borderRadius: '50%' }}></span>
                  </button>

                  {showNotifications && (
                    <div style={{ position: 'absolute', top: '100%', right: '0', marginTop: '8px', width: '320px', background: '#fff', borderRadius: '12px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)', border: '1px solid #e2e8f0', zIndex: 50 }}>
                      <div style={{ padding: '16px', borderBottom: '1px solid #f1f5f9' }}>
                        <h3 style={{ fontSize: '1rem', fontWeight: 600, color: '#0f172a', margin: 0, textAlign: 'left' }}>Notifikasi</h3>
                      </div>
                      <div style={{ maxHeight: '300px', overflowY: 'auto', textAlign: 'left' }}>
                        <div style={{ padding: '16px', borderBottom: '1px solid #f1f5f9', background: '#f8fafc', cursor: 'pointer' }}>
                           <p style={{ fontSize: '0.875rem', color: '#334155', margin: '0 0 4px 0' }}>Permohonan <span style={{ fontWeight: 600 }}>PD-2026-004</span> menunggu persetujuan Anda.</p>
                           <span style={{ fontSize: '0.75rem', color: '#94a3b8' }}>10 menit yang lalu</span>
                        </div>
                        <div style={{ padding: '16px', borderBottom: '1px solid #f1f5f9', cursor: 'pointer' }}>
                           <p style={{ fontSize: '0.875rem', color: '#334155', margin: '0 0 4px 0' }}>Permohonan <span style={{ fontWeight: 600 }}>PD-2026-001</span> telah disetujui.</p>
                           <span style={{ fontSize: '0.75rem', color: '#94a3b8' }}>2 jam yang lalu</span>
                        </div>
                        <div style={{ padding: '16px', cursor: 'pointer' }}>
                           <p style={{ fontSize: '0.875rem', color: '#334155', margin: '0 0 4px 0' }}>Laporan SPJ permohonan <span style={{ fontWeight: 600 }}>PD-2026-003</span> perlu direvisi.</p>
                           <span style={{ fontSize: '0.75rem', color: '#94a3b8' }}>Kemarin</span>
                        </div>
                      </div>
                      <div style={{ padding: '12px', borderTop: '1px solid #f1f5f9', textAlign: 'center' }}>
                        <a href="#" style={{ fontSize: '0.875rem', color: '#2563eb', textDecoration: 'none', fontWeight: 500 }}>Tandai semua dibaca</a>
                      </div>
                    </div>
                  )}
                </div>
                <div className="pd-header-user">
                   <span style={{ fontSize: '0.875rem', fontWeight: 500 }}>Admin Subbag</span>
                   <div className="pd-header-user-avatar">AD</div>
                </div>
            </div>
        </header>

        <div className="pd-content">
          {currentView === 'dashboard' && (
            !selectedRequest ? (
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
           )
          )}

          {currentView === 'pengajuan' && (
            <div style={{ animation: 'slide-up 0.4s ease-out', maxWidth: '800px', margin: '0 auto' }}>
              <div style={{ marginBottom: '24px' }}>
                <a href="#" onClick={(e) => { e.preventDefault(); setCurrentView('dashboard'); }} style={{ color: '#2563eb', textDecoration: 'none', fontSize: '0.875rem', fontWeight: 600, display: 'flex', gap: '8px', alignItems: 'center', marginBottom: '8px' }}>
                  ← Kembali ke Daftar
                </a>
                <h1 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#0f172a' }}>Buat Perjalanan Dinas Baru</h1>
              </div>

              <div style={{ background: '#fff', padding: '32px', borderRadius: '16px', boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)' }}>
                <form action="#" onSubmit={(e) => e.preventDefault()} style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
                  
                  {/* Destinasi */}
                  <div>
                    <h2 style={{ fontSize: '1.125rem', fontWeight: 600, color: '#0f172a', borderBottom: '1px solid #e2e8f0', paddingBottom: '8px', marginBottom: '16px' }}>Destinasi</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        <label style={{ fontSize: '0.875rem', fontWeight: 500, color: '#334155' }}>Provinsi</label>
                        <select style={{ width: '100%', padding: '8px 12px', border: '1px solid #cbd5e1', borderRadius: '6px', outline: 'none', background: '#fff', color: '#0f172a' }}>
                          <option value="">Pilih Provinsi</option>
                          <option value="1">DKI Jakarta</option>
                          <option value="2">Jawa Barat</option>
                          <option value="3">Jawa Timur</option>
                        </select>
                      </div>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        <label style={{ fontSize: '0.875rem', fontWeight: 500, color: '#334155' }}>Kab./Kota</label>
                        <select style={{ width: '100%', padding: '8px 12px', border: '1px solid #cbd5e1', borderRadius: '6px', outline: 'none', background: '#fff', color: '#0f172a' }}>
                          <option value="">Pilih Kab./Kota</option>
                          <option value="1">Jakarta Pusat</option>
                          <option value="2">Bandung</option>
                          <option value="3">Surabaya</option>
                        </select>
                      </div>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        <label style={{ fontSize: '0.875rem', fontWeight: 500, color: '#334155' }}>Lokus / Tempat Tujuan</label>
                        <input type="text" placeholder="Contoh: BKN" style={{ width: '100%', padding: '8px 12px', border: '1px solid #cbd5e1', borderRadius: '6px', outline: 'none', color: '#0f172a' }} />
                      </div>
                    </div>
                  </div>

                  {/* Purpose, Anggaran & PPK */}
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      <label style={{ fontSize: '0.875rem', fontWeight: 500, color: '#334155' }}>Nama Kegiatan</label>
                      <input type="text" placeholder="Contoh: Studi Banding" style={{ width: '100%', padding: '8px 12px', border: '1px solid #cbd5e1', borderRadius: '6px', outline: 'none', color: '#0f172a' }} />
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      <label style={{ fontSize: '0.875rem', fontWeight: 500, color: '#334155' }}>Asal Anggaran</label>
                      <select style={{ width: '100%', padding: '8px 12px', border: '1px solid #cbd5e1', borderRadius: '6px', outline: 'none', background: '#fff', color: '#0f172a' }}>
                        <option value="">Pilih Asal Anggaran</option>
                        <option value="1">DIPA 2026</option>
                      </select>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      <label style={{ fontSize: '0.875rem', fontWeight: 500, color: '#334155' }}>PPK</label>
                      <select style={{ width: '100%', padding: '8px 12px', border: '1px solid #cbd5e1', borderRadius: '6px', outline: 'none', background: '#fff', color: '#0f172a' }}>
                        <option value="">Pilih PPK</option>
                        <option value="1">Joko Susilo</option>
                      </select>
                    </div>
                  </div>

                  {/* Waktu Pelaksanaan */}
                  <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '24px' }}>
                     <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
                        <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: '#dbeafe', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#2563eb' }}>📅</div>
                        <h3 style={{ fontSize: '1rem', fontWeight: 600, color: '#0f172a', margin: 0 }}>Waktu Pelaksanaan</h3>
                     </div>
                     <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                          <label style={{ fontSize: '0.875rem', fontWeight: 500, color: '#334155' }}>Tanggal Berangkat</label>
                          <input type="date" style={{ width: '100%', padding: '8px 12px', border: '1px solid #cbd5e1', borderRadius: '6px', outline: 'none', color: '#0f172a', background: '#fff' }} />
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                          <label style={{ fontSize: '0.875rem', fontWeight: 500, color: '#334155' }}>Tanggal Pulang</label>
                          <input type="date" style={{ width: '100%', padding: '8px 12px', border: '1px solid #cbd5e1', borderRadius: '6px', outline: 'none', color: '#0f172a', background: '#fff' }} />
                        </div>
                     </div>
                  </div>

                  {/* Actions */}
                  <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '12px', borderTop: '1px solid #e2e8f0', paddingTop: '24px' }}>
                    <button type="button" onClick={() => setCurrentView('dashboard')} style={{ padding: '8px 16px', borderRadius: '6px', border: '1px solid #cbd5e1', background: '#fff', color: '#334155', fontWeight: 500, cursor: 'pointer' }}>Batal</button>
                    <button type="button" onClick={() => setCurrentView('dashboard')} style={{ padding: '8px 16px', borderRadius: '6px', border: 'none', background: '#2563eb', color: '#fff', fontWeight: 500, cursor: 'pointer' }}>Kirim Pengajuan</button>
                  </div>
                </form>
              </div>
            </div>
          )}

          {currentView === 'approval' && (
            <div style={{ animation: 'slide-up 0.4s ease-out' }}>
              <div style={{ marginBottom: '24px' }}>
                <h1 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#0f172a' }}>Approval Perjalanan Dinas</h1>
                <p style={{ color: '#64748b', fontSize: '0.875rem' }}>Kelola persetujuan pengajuan perjalanan dinas</p>
              </div>

              <div style={{ background: '#fff', borderRadius: '16px', boxShadow: '0 1px 3px 0 rgba(0,0,0,0.1), 0 1px 2px 0 rgba(0,0,0,0.06)', overflow: 'hidden' }}>
                <div style={{ overflowX: 'auto' }}>
                  <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                    <thead style={{ background: '#f8fafc' }}>
                      <tr>
                        <th style={{ padding: '12px 24px', fontSize: '11px', fontWeight: 700, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Tujuan</th>
                        <th style={{ padding: '12px 24px', fontSize: '11px', fontWeight: 700, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Anggaran</th>
                        <th style={{ padding: '12px 24px', fontSize: '11px', fontWeight: 700, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Kegiatan</th>
                        <th style={{ padding: '12px 24px', fontSize: '11px', fontWeight: 700, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Pemohon</th>
                        <th style={{ padding: '12px 24px', fontSize: '11px', fontWeight: 700, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Tanggal</th>
                        <th style={{ padding: '12px 24px', fontSize: '11px', fontWeight: 700, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.1em', textAlign: 'center' }}>Status</th>
                        <th style={{ padding: '12px 24px', fontSize: '11px', fontWeight: 700, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.1em', textAlign: 'right' }}>Aksi</th>
                      </tr>
                    </thead>
                    <tbody style={{ borderTop: '1px solid #f1f5f9' }}>
                       {requests.filter(req => req.status === 'Pending').map((req, i) => (
                          <tr key={i} style={{ borderBottom: '1px solid #f1f5f9' }}>
                             <td style={{ padding: '16px 24px' }}>
                                <div style={{ fontSize: '14px', fontWeight: 700, color: '#0f172a' }}>{req.destination}</div>
                                <div style={{ fontSize: '12px', color: '#94a3b8' }}>Indonesia</div>
                             </td>
                             <td style={{ padding: '16px 24px' }}>
                                <span style={{ padding: '4px 8px', borderRadius: '4px', background: '#f1f5f9', fontSize: '10px', fontWeight: 700, color: '#475569', textTransform: 'uppercase' }}>DIPA 2026</span>
                             </td>
                             <td style={{ padding: '16px 24px' }}>
                                <div style={{ fontSize: '14px', color: '#0f172a' }}>Rapat Koordinasi Nasional</div>
                             </td>
                             <td style={{ padding: '16px 24px' }}>
                                <span style={{ padding: '2px 8px', borderRadius: '4px', fontSize: '10px', fontWeight: 700, background: '#dbeafe', color: '#1d4ed8', whiteSpace: 'nowrap' }}>{req.name}</span>
                             </td>
                             <td style={{ padding: '16px 24px', whiteSpace: 'nowrap' }}>
                                <div style={{ fontSize: '14px', color: '#64748b' }}>{req.date}</div>
                             </td>
                             <td style={{ padding: '16px 24px', textAlign: 'center' }}>
                                <span className={`pd-badge ${req.status.toLowerCase()}`}>{req.status}</span>
                             </td>
                             <td style={{ padding: '16px 24px', textAlign: 'right' }}>
                                <div style={{ display: 'flex', gap: '8px', justifyContent: 'flex-end' }}>
                                   <button style={{ background: '#2563eb', color: '#fff', border: 'none', padding: '6px 12px', borderRadius: '6px', fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', cursor: 'pointer' }}>Setujui</button>
                                   <button onClick={() => { setSelectedRequest(req); setCurrentView('dashboard'); }} style={{ background: '#f1f5f9', color: '#475569', border: 'none', padding: '6px 12px', borderRadius: '6px', fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', cursor: 'pointer' }}>Detail</button>
                                </div>
                             </td>
                          </tr>
                       ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
