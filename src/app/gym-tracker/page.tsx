"use client";

import React, { useState } from 'react';

export default function GymTrackerDummy() {
  const [role, setRole] = useState<'LOGIN' | 'ADMIN' | 'INSTRUCTOR' | 'STUDENT'>('LOGIN');
  const [filter, setFilter] = useState('all');

  // --- STATS DATA ---
  const stats = {
    totalUsers: filter === 'all' ? 1284 : filter === 'monthly' ? 45 : 12,
    totalStudents: filter === 'all' ? 1150 : filter === 'monthly' ? 40 : 10,
    totalInstructors: filter === 'all' ? 134 : filter === 'monthly' ? 5 : 2,
  };

  const topInstructors = [
    { id: 1, name: 'John Doe', email: 'john@example.com', students: 450 },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', students: 382 },
    { id: 3, name: 'Mike Johnson', email: 'mike@example.com', students: 215 },
    { id: 4, name: 'Emily Davis', email: 'emily@example.com', students: 189 },
    { id: 5, name: 'Chris Wilson', email: 'chris@example.com', students: 120 },
  ];

  if (role === 'LOGIN') {
    return (
      <div className="flex min-h-screen items-center justify-center bg-zinc-950 text-white font-sans">
        <div className="w-full max-w-sm space-y-6 rounded-xl border border-zinc-800 bg-zinc-900 p-8 shadow-2xl">
          <div className="text-center">
            <div className="text-4xl mb-4">🏋️</div>
            <h1 className="text-2xl font-bold tracking-tight">Gym Tracker</h1>
            <p className="mt-2 text-sm text-zinc-400">Interactive Portfolio Demo</p>
          </div>
          <p className="text-center text-sm text-zinc-500 mb-4">Please select a role to view the respective dashboard layout.</p>
          <div className="flex flex-col space-y-3">
            <button onClick={() => setRole('ADMIN')} className="w-full rounded-md bg-zinc-100 px-4 py-3 text-sm font-medium text-zinc-900 hover:bg-zinc-200 transition-colors">
              Login as Admin
            </button>
            <button onClick={() => setRole('INSTRUCTOR')} className="w-full rounded-md bg-zinc-800 border border-zinc-700 px-4 py-3 text-sm font-medium text-zinc-100 hover:bg-zinc-700 transition-colors">
              Login as Instructor
            </button>
            <button onClick={() => setRole('STUDENT')} className="w-full rounded-md bg-zinc-800 border border-zinc-700 px-4 py-3 text-sm font-medium text-zinc-100 hover:bg-zinc-700 transition-colors">
              Login as Student
            </button>
          </div>
          <div className="text-center mt-6">
            <a href="/" className="text-indigo-400 hover:text-indigo-300 text-sm">← Back to Portfolio</a>
          </div>
        </div>
      </div>
    );
  }

  if (role === 'ADMIN') {
    return (
      <div className="flex h-screen bg-zinc-950 text-white font-sans">
        {/* Admin Sidebar */}
        <div className="w-64 bg-zinc-900 border-r border-zinc-800 p-4 flex flex-col h-full">
            <div className="flex-1">
                <h1 className="text-xl font-bold text-white mb-8">Admin Panel</h1>
                <nav className="space-y-4">
                <a href="#" className="block text-white">Dashboard</a>
                <a href="#" className="block text-zinc-400 hover:text-white transition-colors">Users</a>
                <a href="#" className="block text-zinc-400 hover:text-white transition-colors">Profile</a>
                <button onClick={() => setRole('LOGIN')} className="block text-red-400 mt-8 w-full text-left hover:text-red-300 transition-colors">Sign Out</button>
                </nav>
            </div>
            <div className="space-y-4 text-xs text-zinc-500">
                <p>Language: EN</p>
                <p>v0.2.1</p>
            </div>
        </div>

        {/* Admin Content */}
        <div className="flex-1 overflow-auto p-8">
            <div className="space-y-8 max-w-6xl mx-auto">
                <div>
                <h2 className="text-2xl font-bold mb-2">Welcome back, Admin!</h2>
                <p className="text-zinc-400">Here is what is happening with your gym today (Static Demo)</p>
                </div>

                <div className="bg-zinc-900 rounded-lg p-6 border border-zinc-800 shadow-sm relative">
                <div className="flex justify-between items-center mb-6">
                    <h3 className="text-xl font-bold">Platform Statistics</h3>
                    <select value={filter} onChange={(e) => setFilter(e.target.value)} className="bg-zinc-950 text-white border border-zinc-700 px-3 py-1.5 rounded-md text-sm outline-none">
                    <option value="all">All Time</option>
                    <option value="yearly">This Year</option>
                    <option value="monthly">This Month</option>
                    <option value="weekly">This Week</option>
                    </select>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-zinc-950 p-5 rounded-lg border border-zinc-800 flex items-center space-x-4">
                        <div className="bg-indigo-500/10 p-3 rounded-md text-indigo-400 text-2xl">👥</div>
                        <div>
                        <p className="text-sm text-zinc-400 font-medium">Total Users</p>
                        <p className="text-3xl font-bold text-white mt-1">{stats.totalUsers}</p>
                        </div>
                    </div>
                    
                    <div className="bg-zinc-950 p-5 rounded-lg border border-zinc-800 flex items-center space-x-4">
                        <div className="bg-emerald-500/10 p-3 rounded-md text-emerald-400 text-2xl">🎓</div>
                        <div>
                        <p className="text-sm text-zinc-400 font-medium">Total Students</p>
                        <p className="text-3xl font-bold text-white mt-1">{stats.totalStudents}</p>
                        </div>
                    </div>

                    <div className="bg-zinc-950 p-5 rounded-lg border border-zinc-800 flex items-center space-x-4">
                        <div className="bg-orange-500/10 p-3 rounded-md text-orange-400 text-2xl">💼</div>
                        <div>
                        <p className="text-sm text-zinc-400 font-medium">Total Instructors</p>
                        <p className="text-3xl font-bold text-white mt-1">{stats.totalInstructors}</p>
                        </div>
                    </div>
                </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-zinc-900 rounded-lg p-6 border border-zinc-800 shadow-sm">
                    <h3 className="text-xl font-bold mb-1">Top Instructors</h3>
                    <p className="text-sm text-zinc-400 mb-6">Instructors with the most registered students</p>
                    
                    <div className="space-y-4">
                        {topInstructors.map((instructor, idx) => (
                        <div key={instructor.id} className="flex items-center justify-between p-3 bg-zinc-950 rounded-md border border-zinc-800/50">
                            <div className="flex items-center space-x-4">
                            <div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center text-xs font-bold text-zinc-400">
                                #{idx + 1}
                            </div>
                            <div>
                                <p className="font-medium text-white">{instructor.name}</p>
                                <p className="text-xs text-zinc-400">{instructor.email}</p>
                            </div>
                            </div>
                            <div className="bg-indigo-500/10 px-3 py-1 rounded-full border border-indigo-500/20 text-indigo-300 text-sm font-semibold text-center whitespace-nowrap">
                            {instructor.students} Students
                            </div>
                        </div>
                        ))}
                    </div>
                </div>

                <div className="bg-zinc-900 rounded-lg p-6 border border-zinc-800 shadow-sm">
                    <h3 className="text-xl font-bold mb-4">What's New</h3>
                    <div className="space-y-6">
                        <div className="relative pl-6 border-l border-zinc-800">
                            <div className="absolute w-3 h-3 bg-indigo-500 rounded-full -left-[6.5px] top-1"></div>
                            <span className="text-xs text-indigo-400 font-semibold tracking-wider">MAR 04, 2026</span>
                            <h4 className="text-md font-bold text-white mt-1">v0.2.1 Released</h4>
                            <p className="text-sm text-zinc-400 mt-2">Automated cleanup for incomplete workout sessions and bilingual support added.</p>
                        </div>
                        <div className="relative pl-6 border-l border-zinc-800">
                            <div className="absolute w-3 h-3 bg-zinc-700 rounded-full -left-[6.5px] top-1"></div>
                            <span className="text-xs text-zinc-500 font-semibold tracking-wider">FEB 22, 2026</span>
                            <h4 className="text-md font-bold text-white mt-1">Admin Management Update</h4>
                            <p className="text-sm text-zinc-400 mt-2">Admins can now create and manage instructors directly from the dashboard.</p>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
      </div>
    );
  }

  if (role === 'INSTRUCTOR') {
    return (
      <div className="flex h-screen bg-zinc-950 text-white font-sans">
        {/* Instructor Sidebar */}
        <div className="w-64 bg-zinc-900 border-r border-zinc-800 p-4 flex flex-col h-full">
             <div className="flex-1">
                <h1 className="text-xl font-bold text-white mb-8">Instructor Panel</h1>
                <nav className="space-y-4">
                <a href="#" className="block text-white">Overview</a>
                <a href="#" className="block text-zinc-400 hover:text-white transition-colors">Students</a>
                <a href="#" className="block text-zinc-400 hover:text-white transition-colors">Workout Plans</a>
                <a href="#" className="block text-zinc-400 hover:text-white transition-colors">Profile</a>
                <button onClick={() => setRole('LOGIN')} className="block text-red-400 mt-8 w-full text-left hover:text-red-300 transition-colors">Sign Out</button>
                </nav>
            </div>
            <div className="space-y-4 text-xs text-zinc-500">
                <p>v0.2.1</p>
            </div>
        </div>

        {/* Instructor Content */}
        <div className="flex-1 overflow-auto p-8">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-2xl font-bold mb-6">Instructor Overview</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-lg shadow-md">
                        <p className="text-sm font-medium text-zinc-400">Assigned Students</p>
                        <p className="text-4xl font-bold mt-2">124</p>
                        <p className="text-xs text-emerald-400 mt-2">+5 this month</p>
                    </div>
                    <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-lg shadow-md">
                        <p className="text-sm font-medium text-zinc-400">Active Workout Plans</p>
                        <p className="text-4xl font-bold mt-2">8</p>
                        <p className="text-xs text-zinc-500 mt-2">Across 3 categories</p>
                    </div>
                </div>
                <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6">
                    <h3 className="text-lg font-bold mb-4">Recent Activity</h3>
                    <div className="space-y-4">
                        <div className="p-4 bg-zinc-950 border border-zinc-800/50 rounded-md">
                            <p className="text-sm"><span className="font-semibold text-white">Sarah Jenkins</span> completed the "Upper Body Crusher" plan.</p>
                            <p className="text-xs text-zinc-500 mt-1">2 hours ago</p>
                        </div>
                        <div className="p-4 bg-zinc-950 border border-zinc-800/50 rounded-md">
                            <p className="text-sm"><span className="font-semibold text-white">David Miller</span> was assigned to you.</p>
                            <p className="text-xs text-zinc-500 mt-1">Yesterday</p>
                        </div>
                        <div className="p-4 bg-zinc-950 border border-zinc-800/50 rounded-md">
                            <p className="text-sm"><span className="font-semibold text-white">Tom Hardy</span> missed 3 consecutive workouts.</p>
                            <p className="text-xs text-red-400 mt-1">2 days ago</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    );
  }

  if (role === 'STUDENT') {
    return (
      <div className="flex flex-col h-screen bg-zinc-950 text-white font-sans overflow-hidden">
        {/* Student Content */}
        <div className="flex-1 overflow-auto p-4 pb-24 flex flex-col max-w-lg mx-auto w-full">
            <h2 className="text-2xl font-bold mb-1 mt-4">Hi, Student 👋</h2>
            <p className="text-zinc-400 text-sm mb-6">Let's crush your goals today!</p>

            <div className="bg-gradient-to-r from-indigo-900 to-indigo-600 rounded-2xl p-6 shadow-xl mb-6 border border-indigo-400/20">
                <h3 className="text-indigo-100 font-medium text-sm mb-1">Current Plan</h3>
                <p className="text-2xl font-bold text-white mb-2">Hypertrophy Phase 1</p>
                <div className="flex items-center justify-between mt-4">
                    <span className="text-sm font-medium">Day 3: Legs & Core</span>
                    <button className="bg-white text-indigo-600 px-4 py-1.5 rounded-full text-sm font-bold shadow-sm hover:bg-zinc-100 transition-colors">Start</button>
                </div>
            </div>

            <h3 className="font-bold text-lg mb-3">Weekly Progress</h3>
            <div className="flex justify-between items-center bg-zinc-900 p-4 rounded-xl border border-zinc-800 mb-6">
                {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((day, i) => (
                    <div key={i} className="flex flex-col items-center">
                        <span className="text-xs text-zinc-500 mb-2">{day}</span>
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${i < 2 ? 'bg-emerald-500 text-white' : i === 2 ? 'bg-indigo-500 text-white ring-2 ring-indigo-500/50 ring-offset-2 ring-offset-zinc-950' : 'bg-zinc-800 text-zinc-600'}`}>
                            {i < 2 ? '✓' : i === 2 ? '3' : ''}
                        </div>
                    </div>
                ))}
            </div>

            <h3 className="font-bold text-lg mb-3">Recent Workouts</h3>
            <div className="space-y-3">
                <div className="bg-zinc-900 p-4 rounded-xl border border-zinc-800 flex justify-between items-center">
                    <div>
                        <p className="font-bold text-md">Upper Body Focus</p>
                        <p className="text-xs text-zinc-400 mt-1">1 hr 15 mins • 12,000 kg lifted</p>
                    </div>
                    <div className="text-emerald-400 font-bold text-sm">DONE</div>
                </div>
                <div className="bg-zinc-900 p-4 rounded-xl border border-zinc-800 flex justify-between items-center">
                    <div>
                        <p className="font-bold text-md">Active Recovery</p>
                        <p className="text-xs text-zinc-400 mt-1">45 mins • Cardio</p>
                    </div>
                    <div className="text-emerald-400 font-bold text-sm">DONE</div>
                </div>
            </div>
            
            <div className="mt-8 text-center pb-8 border-t border-zinc-900 pt-4">
               <p className="text-xs text-zinc-600 mb-2">v0.2.1</p>
               <button onClick={() => setRole('LOGIN')} className="text-sm font-medium text-red-400 hover:text-red-300">Sign Out</button>
            </div>
        </div>

        {/* Student Bottom Nav */}
        <div className="fixed bottom-0 left-0 right-0 bg-zinc-900 border-t border-zinc-800 flex justify-around p-3 z-50 px-6 pb-6">
            <button className="flex flex-col items-center focus:outline-none w-16">
                <span className="text-2xl mb-1 text-indigo-500">🏠</span>
                <span className="text-[10px] font-medium text-indigo-500">Home</span>
            </button>
            <button className="flex flex-col items-center focus:outline-none w-16 opacity-50 hover:opacity-100 transition-opacity">
                <span className="text-2xl mb-1 text-zinc-400">📋</span>
                <span className="text-[10px] font-medium text-zinc-400">Plans</span>
            </button>
            <button className="flex flex-col items-center focus:outline-none w-16 opacity-50 hover:opacity-100 transition-opacity">
                <span className="text-2xl mb-1 text-zinc-400">👤</span>
                <span className="text-[10px] font-medium text-zinc-400">Profile</span>
            </button>
        </div>
      </div>
    );
  }

  return null;
}
