"use client";

import React, { useState } from 'react';

export default function PerjalananDinasDummy() {
  const [activeTab, setActiveTab] = useState('requests');

  const requests = [
    { id: 'PD-2026-001', name: 'Budi Santoso', destination: 'Jakarta', date: '10 Mar 2026', status: 'Approved' },
    { id: 'PD-2026-002', name: 'Siti Aminah', destination: 'Surabaya', date: '12 Mar 2026', status: 'Pending' },
    { id: 'PD-2026-003', name: 'Agus Pratama', destination: 'Bandung', date: '15 Mar 2026', status: 'Rejected' },
    { id: 'PD-2026-004', name: 'Dewi Lestari', destination: 'Yogyakarta', date: '18 Mar 2026', status: 'Pending' },
  ];

  return (
    <div className="min-h-screen bg-gray-100 font-sans text-gray-900 flex">
      {/* Sidebar */}
      <aside className="fixed inset-y-0 left-0 w-64 bg-indigo-900 text-white flex flex-col z-20">
        <div className="h-16 flex items-center px-4 md:px-6 mb-4">
           <span className="text-xl font-bold">✈️ Pedal App</span>
        </div>
        <div className="flex-1 overflow-y-auto w-full px-3 py-4 space-y-1">
            <a href="#" className="flex items-center px-3 py-2 text-sm font-medium rounded-md bg-indigo-800 text-white">
                <span className="mr-3">📊</span> Dashboard
            </a>
            <a href="#" className="flex items-center px-3 py-2 text-sm font-medium rounded-md text-indigo-100 hover:bg-indigo-800 hover:text-white transition-colors">
                <span className="mr-3">📝</span> Permohonan
            </a>
            <a href="#" className="flex items-center px-3 py-2 text-sm font-medium rounded-md text-indigo-100 hover:bg-indigo-800 hover:text-white transition-colors">
                <span className="mr-3">📄</span> Laporan
            </a>
        </div>
        <div className="p-4 border-t border-indigo-800">
           <a href="/" className="flex items-center text-sm font-medium text-indigo-200 hover:text-white transition-colors">
              <span className="mr-3">←</span> Back to Portfolio
           </a>
        </div>
      </aside>

      {/* Main Content */}
      <main className="ml-64 flex-1 flex flex-col min-h-screen transition-all duration-300 ease-in-out">
        
        {/* Navbar Header Component in UI */}
        <header className="bg-white shadow">
            <div className="px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
                <div></div>
                <div className="flex items-center gap-4">
                    <button className="text-gray-400 hover:text-gray-500">
                       <span className="text-xl">🔔</span>
                    </button>
                    <div className="flex items-center gap-2 border-l pl-4 h-8 border-gray-200">
                       <span className="text-sm font-medium text-gray-700">Admin</span>
                       <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center font-bold text-indigo-700">A</div>
                    </div>
                </div>
            </div>
        </header>

        <div className="p-6">
          <div className="mb-6">
            <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
            <p className="mt-1 flex items-center text-sm text-gray-500">Ringkasan aktivitas dan permohonan terkini (Demo Portofolio)</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
             <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                 <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-2">Total Permohonan</h3>
                 <p className="text-3xl font-bold text-gray-900">124</p>
                 <p className="mt-2 flex items-center text-sm text-green-600">
                     <span>↑ 12%</span>
                     <span className="ml-2 text-gray-500">dari bulan lalu</span>
                 </p>
             </div>
             <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                 <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-2">Menunggu Persetujuan</h3>
                 <p className="text-3xl font-bold text-yellow-600">15</p>
                 <p className="mt-2 flex items-center text-sm">
                     <span className="text-gray-500">Membutuhkan tindakan Anda</span>
                 </p>
             </div>
             <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                 <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-2">Disetujui Bulan Ini</h3>
                 <p className="text-3xl font-bold text-green-600">42</p>
                 <p className="mt-2 flex items-center text-sm">
                     <span className="text-gray-500">Sesuai anggaran</span>
                 </p>
             </div>
          </div>

          <div className="bg-white shadow border border-gray-200 sm:rounded-lg overflow-hidden">
             <div className="px-4 py-5 border-b border-gray-200 sm:px-6 flex justify-between items-center">
                <h3 className="text-lg leading-6 font-medium text-gray-900">10 Permohonan Terbaru</h3>
                <div className="flex space-x-2">
                   <button onClick={() => setActiveTab('requests')} className={`px-3 py-1 text-sm rounded-md ${activeTab === 'requests' ? 'bg-indigo-50 text-indigo-700 font-medium border border-indigo-200' : 'text-gray-500 hover:text-gray-700'}`}>Semua</button>
                   <button onClick={() => setActiveTab('pending')} className={`px-3 py-1 text-sm rounded-md ${activeTab === 'pending' ? 'bg-yellow-50 text-yellow-700 font-medium border border-yellow-200' : 'text-gray-500 hover:text-gray-700'}`}>Menunggu</button>
                   <button onClick={() => setActiveTab('approved')} className={`px-3 py-1 text-sm rounded-md ${activeTab === 'approved' ? 'bg-green-50 text-green-700 font-medium border border-green-200' : 'text-gray-500 hover:text-gray-700'}`}>Disetujui</button>
                </div>
             </div>

             <div className="overflow-x-auto">
                 <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                       <tr>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID Permohonan</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nama Pegawai</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tujuan</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tanggal</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                          <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Aksi</th>
                       </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                       {requests.map((req, i) => (
                          <tr key={i} className="hover:bg-gray-50">
                             <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-indigo-600">{req.id}</td>
                             <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{req.name}</td>
                             <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{req.destination}</td>
                             <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{req.date}</td>
                             <td className="px-6 py-4 whitespace-nowrap">
                                 <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full 
                                    ${req.status === 'Approved' ? 'bg-green-100 text-green-800' : ''}
                                    ${req.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' : ''}
                                    ${req.status === 'Rejected' ? 'bg-red-100 text-red-800' : ''}
                                 `}>
                                     {req.status}
                                 </span>
                             </td>
                             <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                 <button className="text-indigo-600 hover:text-indigo-900 border border-indigo-200 px-3 py-1 rounded-md bg-white hover:bg-indigo-50 transition-colors">Detail</button>
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
