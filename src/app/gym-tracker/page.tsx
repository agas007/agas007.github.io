"use client";

import React, { useState } from 'react';
import './gym.css';

export default function GymTrackerDummy() {
  const [role, setRole] = useState<'LANDING' | 'LOGIN' | 'ADMIN' | 'INSTRUCTOR' | 'STUDENT'>('LANDING');
  const [filter, setFilter] = useState('all');

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

  if (role === 'LANDING') {
    return (
      <div className="gym-landing-container">
        <nav className="gym-landing-nav">
          <div className="gym-landing-nav-inner">
            <a href="/" className="gym-landing-logo">MAJAPAHIT<span>GYM</span></a>
            <div className="gym-landing-menu">
              <a href="#features" className="gym-landing-link">Features</a>
              <button onClick={() => setRole('LOGIN')} className="gym-landing-btn">Sign in</button>
            </div>
          </div>
        </nav>

        <section className="gym-landing-hero">
          <div className="gym-landing-hero-bg"></div>
          <div className="gym-landing-hero-content">
            <h1>Track Your Workout.<br/><span>Achieve Your Goals.</span></h1>
            <p>The ultimate fitness tracking platform for gym owners, instructors, and students. Manage your progress seamlessly.</p>
            <div className="gym-landing-hero-actions">
              <button onClick={() => setRole('LOGIN')} className="gym-landing-btn" style={{ padding: '12px 24px', fontSize: '1rem' }}>Get Started</button>
              <a href="/" className="gym-landing-link" style={{ fontSize: '1rem' }}>Back to Portfolio →</a>
            </div>
          </div>
          <div className="gym-landing-mockup-wrapper">
             <div className="gym-landing-mockup">
                <span>Dashboard Preview</span>
             </div>
          </div>
        </section>

        <section id="features" className="gym-landing-features">
          <div className="gym-landing-features-header">
            <h2>Features</h2>
            <h3>Everything you need to succeed</h3>
            <p>Comprehensive tools designed for all user roles within a modern gym environment.</p>
          </div>
          <div className="gym-landing-features-grid">
             <div className="gym-landing-feature">
                <div className="gym-landing-feature-icon">👑</div>
                <h4>Admin Dashboard</h4>
                <p>Complete overview of your gym's performance. Manage users, instructors, and track platform-wide statistics effortlessly.</p>
             </div>
             <div className="gym-landing-feature">
                <div className="gym-landing-feature-icon">💪</div>
                <h4>Instructor Tools</h4>
                <p>Create and assign personalized workout plans. Monitor student progress, attendance, and provide targeted feedback.</p>
             </div>
             <div className="gym-landing-feature">
                <div className="gym-landing-feature-icon">🎯</div>
                <h4>Student App</h4>
                <p>Interactive mobile-first interface for students to follow training plans, log workouts, and track their fitness journey.</p>
             </div>
          </div>
        </section>
      </div>
    );
  }

  if (role === 'LOGIN') {
    return (
      <div className="gym-login-wrapper">
        <div className="gym-login-box">
          <div style={{ fontSize: '3rem', marginBottom: '16px' }}>🏋️</div>
          <h1 className="gym-login-title">Gym Tracker</h1>
          <p className="gym-login-subtitle">Interactive Portfolio Demo</p>
          <p style={{ fontSize: '0.875rem', color: '#71717a', marginBottom: '24px' }}>Please select a role to view the dashboard layout.</p>
          
          <button onClick={() => setRole('ADMIN')} className="gym-login-btn primary">Login as Admin</button>
          <button onClick={() => setRole('INSTRUCTOR')} className="gym-login-btn secondary">Login as Instructor</button>
          <button onClick={() => setRole('STUDENT')} className="gym-login-btn secondary">Login as Student</button>
          
          <a href="/" className="gym-login-back">← Back to Portfolio</a>
        </div>
      </div>
    );
  }

  if (role === 'ADMIN') {
    return (
      <div className="gym-container">
        <aside className="gym-sidebar">
          <div className="gym-sidebar-header">
            <h1>Admin Panel</h1>
          </div>
          <nav className="gym-nav">
            <span className="gym-nav-item active">Dashboard</span>
            <span className="gym-nav-item">Users</span>
            <span className="gym-nav-item">Settings</span>
            <button onClick={() => setRole('LOGIN')} className="gym-nav-signout">Sign Out</button>
          </nav>
          <div className="gym-sidebar-footer">
             <p>v0.2.1</p>
          </div>
        </aside>

        <main className="gym-main">
          <div className="gym-content-wrapper">
            <div className="gym-page-header">
              <h2>Welcome back, Admin!</h2>
              <p>Here is what is happening with your gym today (Static Demo)</p>
            </div>

            <div className="gym-card">
              <div className="gym-card-header">
                <h3>Platform Statistics</h3>
                <select className="gym-select" value={filter} onChange={(e) => setFilter(e.target.value)}>
                   <option value="all">All Time</option>
                   <option value="yearly">This Year</option>
                   <option value="monthly">This Month</option>
                   <option value="weekly">This Week</option>
                </select>
              </div>

              <div className="gym-stats-grid">
                 <div className="gym-stat-box">
                    <div className="gym-stat-icon">👥</div>
                    <div className="gym-stat-info">
                       <p className="label">Total Users</p>
                       <p className="value">{stats.totalUsers}</p>
                    </div>
                 </div>
                 <div className="gym-stat-box">
                    <div className="gym-stat-icon emerald">🎓</div>
                    <div className="gym-stat-info">
                       <p className="label">Total Students</p>
                       <p className="value">{stats.totalStudents}</p>
                    </div>
                 </div>
                 <div className="gym-stat-box">
                    <div className="gym-stat-icon orange">💼</div>
                    <div className="gym-stat-info">
                       <p className="label">Total Instructors</p>
                       <p className="value">{stats.totalInstructors}</p>
                    </div>
                 </div>
              </div>
            </div>

            <div className="gym-2col">
               <div className="gym-card">
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '8px' }}>Top Instructors</h3>
                  <p style={{ fontSize: '0.875rem', color: '#a1a1aa', marginBottom: '24px' }}>Instructors with most registered students</p>
                  <div>
                     {topInstructors.map((ins, i) => (
                        <div key={i} className="gym-list-item">
                           <div className="gym-list-item-left">
                              <div className="gym-list-rank">#{i+1}</div>
                              <div>
                                 <p className="gym-list-name">{ins.name}</p>
                                 <p className="gym-list-email">{ins.email}</p>
                              </div>
                           </div>
                           <div className="gym-list-badge">{ins.students} Students</div>
                        </div>
                     ))}
                  </div>
               </div>
               <div className="gym-card">
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '24px' }}>What's New</h3>
                  <div>
                     <div className="gym-news-item">
                        <p className="gym-news-date">MAR 04, 2026</p>
                        <p className="gym-news-title">v0.2.1 Released</p>
                        <p className="gym-news-desc">Automated cleanup for incomplete workout sessions and bilingual support added.</p>
                     </div>
                     <div className="gym-news-item gray">
                        <p className="gym-news-date gray">FEB 22, 2026</p>
                        <p className="gym-news-title">Admin Management Update</p>
                        <p className="gym-news-desc">Admins can now create and manage instructors directly from the dashboard.</p>
                     </div>
                  </div>
               </div>
            </div>
          </div>
        </main>
      </div>
    );
  }

  if (role === 'INSTRUCTOR') {
    return (
      <div className="gym-container">
        <aside className="gym-sidebar">
          <div className="gym-sidebar-header">
            <h1>Instructor Panel</h1>
          </div>
          <nav className="gym-nav">
            <span className="gym-nav-item active">Overview</span>
            <span className="gym-nav-item">Students</span>
            <span className="gym-nav-item">Workout Plans</span>
            <span className="gym-nav-item">Profile</span>
            <button onClick={() => setRole('LOGIN')} className="gym-nav-signout">Sign Out</button>
          </nav>
        </aside>

        <main className="gym-main">
          <div className="gym-content-wrapper" style={{ maxWidth: '800px' }}>
            <div className="gym-page-header">
              <h2>Instructor Overview</h2>
            </div>
            
            <div className="gym-2col" style={{ marginTop: 0, marginBottom: '32px' }}>
               <div className="gym-card">
                  <p style={{ fontSize: '0.875rem', fontWeight: 500, color: '#a1a1aa' }}>Assigned Students</p>
                  <p style={{ fontSize: '2.25rem', fontWeight: 700, margin: '8px 0' }}>124</p>
                  <p style={{ fontSize: '0.75rem', color: '#34d399' }}>+5 this month</p>
               </div>
               <div className="gym-card">
                  <p style={{ fontSize: '0.875rem', fontWeight: 500, color: '#a1a1aa' }}>Active Workout Plans</p>
                  <p style={{ fontSize: '2.25rem', fontWeight: 700, margin: '8px 0' }}>8</p>
                  <p style={{ fontSize: '0.75rem', color: '#71717a' }}>Across 3 categories</p>
               </div>
            </div>

            <div className="gym-card">
               <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '24px' }}>Recent Activity</h3>
               <div className="gym-list-item" style={{ flexDirection: 'column', alignItems: 'flex-start' }}>
                  <p style={{ fontSize: '0.875rem' }}><strong>Sarah Jenkins</strong> completed the "Upper Body Crusher" plan.</p>
                  <p style={{ fontSize: '0.75rem', color: '#71717a', marginTop: '4px' }}>2 hours ago</p>
               </div>
               <div className="gym-list-item" style={{ flexDirection: 'column', alignItems: 'flex-start' }}>
                  <p style={{ fontSize: '0.875rem' }}><strong>David Miller</strong> was assigned to you.</p>
                  <p style={{ fontSize: '0.75rem', color: '#71717a', marginTop: '4px' }}>Yesterday</p>
               </div>
               <div className="gym-list-item" style={{ flexDirection: 'column', alignItems: 'flex-start' }}>
                  <p style={{ fontSize: '0.875rem' }}><strong>Tom Hardy</strong> missed 3 consecutive workouts.</p>
                  <p style={{ fontSize: '0.75rem', color: '#f87171', marginTop: '4px' }}>2 days ago</p>
               </div>
            </div>
          </div>
        </main>
      </div>
    );
  }

  if (role === 'STUDENT') {
    return (
      <div className="gym-container">
         <main className="gym-main student">
            <div className="gym-student-wrapper">
               <div className="gym-student-header">
                  <h2>Hi, Student 👋</h2>
                  <p>Let's crush your goals today!</p>
               </div>
               
               <div className="gym-student-card">
                  <h3>Current Plan</h3>
                  <div className="plan-name">Hypertrophy Phase 1</div>
                  <div className="gym-student-card-foot">
                     <span>Day 3: Legs & Core</span>
                     <button>Start</button>
                  </div>
               </div>

               <div className="gym-student-section">Weekly Progress</div>
               <div className="gym-student-progress">
                  {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((day, i) => (
                     <div className="gym-day-item" key={i}>
                        <span className="gym-day-label">{day}</span>
                        <div className={`gym-day-circle ${i < 2 ? 'done' : i === 2 ? 'today' : ''}`}>{i < 2 ? '✓' : i === 2 ? '3' : ''}</div>
                     </div>
                  ))}
               </div>

               <div className="gym-student-section">Recent Workouts</div>
               <div className="gym-workout-item">
                  <div className="gym-workout-info">
                     <p className="gym-workout-name">Upper Body Focus</p>
                     <p className="gym-workout-meta">1 hr 15 mins • 12,000 kg lifted</p>
                  </div>
                  <div className="gym-workout-status">DONE</div>
               </div>
               <div className="gym-workout-item">
                  <div className="gym-workout-info">
                     <p className="gym-workout-name">Active Recovery</p>
                     <p className="gym-workout-meta">45 mins • Cardio</p>
                  </div>
                  <div className="gym-workout-status">DONE</div>
               </div>

               <div className="gym-student-footer">
                  <p>v0.2.1</p>
                  <button onClick={() => setRole('LOGIN')} style={{ background: 'none', border: 'none', color: '#f87171', fontSize: '0.875rem', fontWeight: 500, cursor: 'pointer' }}>Sign Out</button>
               </div>
            </div>
         </main>
         
         <nav className="gym-bottom-nav">
            <button className="gym-bnav-item active">
               <span className="gym-bnav-icon">🏠</span>
               <span className="gym-bnav-label">Home</span>
            </button>
            <button className="gym-bnav-item">
               <span className="gym-bnav-icon">📋</span>
               <span className="gym-bnav-label">Plans</span>
            </button>
            <button className="gym-bnav-item">
               <span className="gym-bnav-icon">👤</span>
               <span className="gym-bnav-label">Profile</span>
            </button>
         </nav>
      </div>
    );
  }

  return null;
}
