"use client";

import React, { useState } from 'react';
import './gym.css';

export default function GymTrackerDummy() {
  const [role, setRole] = useState<'LANDING' | 'LOGIN' | 'ADMIN' | 'INSTRUCTOR' | 'STUDENT'>('LANDING');
  const [adminTab, setAdminTab] = useState<'dashboard' | 'users' | 'settings'>('dashboard');
  const [instructorTab, setInstructorTab] = useState<'overview' | 'students' | 'workouts' | 'profile' | 'add_student' | 'view_student'>('overview');
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
              <a href="#pricing" className="gym-landing-link">Pricing</a>
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

        <section id="pricing" className="gym-landing-pricing">
          <div className="gym-landing-pricing-inner">
            <div className="gym-landing-pricing-header">
              <h2>Simple no-tricks pricing</h2>
              <p>Distinctio et nulla eum soluta et neque labore quibusdam. Saepe et quasi iusto modi velit ut non voluptas in. Explicabo id ut laborum.</p>
            </div>
            <div className="gym-landing-pricing-card">
              <div className="gym-landing-pricing-left">
                <h3>Gym Tracker Pro</h3>
                <p>Perfect for growing fitness centers and independent instructors looking to scale their operations.</p>
                <div className="gym-landing-pricing-included">
                  <h4>What's included</h4>
                  <div className="line"></div>
                </div>
                <ul className="gym-landing-pricing-features">
                  <li className="gym-landing-pricing-feature">
                    <svg viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                    </svg>
                    Infinite users & students
                  </li>
                  <li className="gym-landing-pricing-feature">
                    <svg viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                    </svg>
                    Advanced analytics
                  </li>
                  <li className="gym-landing-pricing-feature">
                    <svg viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                    </svg>
                    Custom workout plans
                  </li>
                  <li className="gym-landing-pricing-feature">
                    <svg viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                    </svg>
                    Priority email support
                  </li>
                </ul>
              </div>
              <div className="gym-landing-pricing-right">
                <div className="gym-landing-pricing-right-inner">
                  <p className="pay-once">Pay once, own it forever</p>
                  <p className="price">
                     <span className="value">$49</span>
                     <span className="currency">USD</span>
                  </p>
                  <a href="#" className="get-access" onClick={(e) => { e.preventDefault(); setRole('LOGIN'); }}>Get access</a>
                  <p className="notes">Invoices and receipts available for easy company reimbursement</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer className="gym-landing-footer">
          <div className="gym-landing-footer-inner">
             <div className="gym-landing-footer-grid">
                <div className="gym-landing-footer-brand">
                    <a href="/" className="gym-landing-logo">MAJAPAHIT<span>GYM</span></a>
                    <p>Making the world a better place through constructing elegant hierarchies and tracking your physical potential.</p>
                </div>
                <div className="gym-landing-footer-links">
                   <div className="gym-landing-footer-col">
                      <h3>Solutions</h3>
                      <ul>
                         <li><a href="#">Tracking</a></li>
                         <li><a href="#">Analytics</a></li>
                         <li><a href="#">Coaching</a></li>
                         <li><a href="#">Insights</a></li>
                      </ul>
                   </div>
                   <div className="gym-landing-footer-col">
                      <h3>Support</h3>
                      <ul>
                         <li><a href="#">Pricing</a></li>
                         <li><a href="#">Documentation</a></li>
                         <li><a href="#">Guides</a></li>
                         <li><a href="#">API Status</a></li>
                      </ul>
                   </div>
                </div>
             </div>
             <div className="gym-landing-footer-bottom">
                <p>© 2026 Majapahit Gym, Inc. All rights reserved.</p>
             </div>
          </div>
        </footer>
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
            <span onClick={() => setAdminTab('dashboard')} className={`gym-nav-item ${adminTab === 'dashboard' ? 'active' : ''}`}>Dashboard</span>
            <span onClick={() => setAdminTab('users')} className={`gym-nav-item ${adminTab === 'users' ? 'active' : ''}`}>Users</span>
            <span onClick={() => setAdminTab('settings')} className={`gym-nav-item ${adminTab === 'settings' ? 'active' : ''}`}>Profile</span>
            <button onClick={() => setRole('LOGIN')} className="gym-nav-signout">Sign Out</button>
          </nav>
          <div className="gym-sidebar-footer">
             <p>v0.2.1</p>
          </div>
        </aside>

        <main className="gym-main">
          <div className="gym-content-wrapper">
            {adminTab === 'dashboard' && (
              <>
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
          </>
        )}

        {adminTab === 'users' && (
          <>
            <div className="gym-page-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <h2>User Management</h2>
                <p>Manage instructors and students across the platform.</p>
              </div>
              <div style={{ display: 'flex', gap: '12px' }}>
                 <button className="gym-login-btn primary" style={{ margin: 0 }}>Add Student</button>
                 <button className="gym-login-btn secondary" style={{ margin: 0, backgroundColor: '#4f46e5', borderColor: '#4f46e5', color: '#fff' }}>Add Instructor</button>
              </div>
            </div>

            <div className="gym-card" style={{ marginBottom: '32px' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#818cf8', marginBottom: '16px' }}>Instructors (3)</h3>
              <div style={{ overflowX: 'auto', background: '#09090b', borderRadius: '8px', border: '1px solid #27272a' }}>
                <table style={{ width: '100%', textAlign: 'left', borderCollapse: 'collapse', fontSize: '0.875rem' }}>
                  <thead style={{ background: '#09090b', borderBottom: '1px solid #27272a', color: '#a1a1aa', textTransform: 'uppercase', fontSize: '0.75rem' }}>
                    <tr>
                      <th style={{ padding: '12px 24px', fontWeight: 600 }}>Name</th>
                      <th style={{ padding: '12px 24px', fontWeight: 600 }}>Email</th>
                      <th style={{ padding: '12px 24px', fontWeight: 600 }}>Assigned Students</th>
                      <th style={{ padding: '12px 24px', fontWeight: 600 }}>Added On</th>
                    </tr>
                  </thead>
                  <tbody>
                    {topInstructors.slice(0, 3).map((ins, i) => (
                      <tr key={i} style={{ borderBottom: '1px solid #27272a' }}>
                        <td style={{ padding: '16px 24px', color: '#fff', fontWeight: 500 }}>{ins.name}</td>
                        <td style={{ padding: '16px 24px', color: '#d4d4d8' }}>{ins.email}</td>
                        <td style={{ padding: '16px 24px', color: '#d4d4d8' }}>{ins.students}</td>
                        <td style={{ padding: '16px 24px', color: '#d4d4d8' }}>Oct {10 + i}, 2025</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="gym-card">
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#34d399', marginBottom: '16px' }}>Students (3)</h3>
              <div style={{ overflowX: 'auto', background: '#09090b', borderRadius: '8px', border: '1px solid #27272a' }}>
                <table style={{ width: '100%', textAlign: 'left', borderCollapse: 'collapse', fontSize: '0.875rem' }}>
                  <thead style={{ background: '#09090b', borderBottom: '1px solid #27272a', color: '#a1a1aa', textTransform: 'uppercase', fontSize: '0.75rem' }}>
                    <tr>
                      <th style={{ padding: '12px 24px', fontWeight: 600 }}>Name</th>
                      <th style={{ padding: '12px 24px', fontWeight: 600 }}>Email</th>
                      <th style={{ padding: '12px 24px', fontWeight: 600 }}>Assigned Coach</th>
                      <th style={{ padding: '12px 24px', fontWeight: 600 }}>Added On</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[{name: 'Alex Cooper', email: 'alex@example.com', coach: 'John Doe'},
                      {name: 'Sarah Lee', email: 'sarah@example.com', coach: 'Jane Smith'},
                      {name: 'Tom Hardy', email: 'tom@example.com', coach: 'Mike Johnson'}
                     ].map((stu, i) => (
                      <tr key={i} style={{ borderBottom: i !== 2 ? '1px solid #27272a' : 'none' }}>
                        <td style={{ padding: '16px 24px', color: '#fff', fontWeight: 500 }}>{stu.name}</td>
                        <td style={{ padding: '16px 24px', color: '#d4d4d8' }}>{stu.email}</td>
                        <td style={{ padding: '16px 24px', color: '#d4d4d8' }}>{stu.coach}</td>
                        <td style={{ padding: '16px 24px', color: '#d4d4d8' }}>Feb {10 + i * 5}, 2026</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </>
        )}

        {adminTab === 'settings' && (
          <>
            <div className="gym-page-header">
              <h2>Administrator Profile</h2>
              <p>Manage your personal settings and password.</p>
            </div>
            
            <div className="gym-card" style={{ maxWidth: '600px', marginBottom: '24px' }}>
              <p style={{ color: '#a1a1aa', fontSize: '0.875rem', marginBottom: '8px' }}>Name: <span style={{ color: '#fff', fontWeight: 500, fontSize: '1rem' }}>Admin Subbag</span></p>
              <p style={{ color: '#a1a1aa', fontSize: '0.875rem' }}>Email: <span style={{ color: '#fff', fontWeight: 500, fontSize: '1rem' }}>admin@majapahitgym.com</span></p>
            </div>

            <div className="gym-card" style={{ maxWidth: '600px' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#fff', marginBottom: '16px' }}>Change Password</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div>
                   <label style={{ display: 'block', fontSize: '0.875rem', color: '#a1a1aa', marginBottom: '8px' }}>Current Password</label>
                   <input type="password" style={{ width: '100%', background: '#09090b', border: '1px solid #3f3f46', borderRadius: '6px', padding: '10px 12px', color: '#fff', outline: 'none' }} placeholder="••••••••" />
                </div>
                <div>
                   <label style={{ display: 'block', fontSize: '0.875rem', color: '#a1a1aa', marginBottom: '8px' }}>New Password</label>
                   <input type="password" style={{ width: '100%', background: '#09090b', border: '1px solid #3f3f46', borderRadius: '6px', padding: '10px 12px', color: '#fff', outline: 'none' }} placeholder="••••••••" />
                </div>
                <div>
                   <label style={{ display: 'block', fontSize: '0.875rem', color: '#a1a1aa', marginBottom: '8px' }}>Confirm New Password</label>
                   <input type="password" style={{ width: '100%', background: '#09090b', border: '1px solid #3f3f46', borderRadius: '6px', padding: '10px 12px', color: '#fff', outline: 'none' }} placeholder="••••••••" />
                </div>
                <button className="gym-login-btn secondary" style={{ margin: '8px 0 0 0', width: 'auto', alignSelf: 'flex-start', background: '#4f46e5', borderColor: '#4f46e5', color: '#fff' }}>Update Password</button>
              </div>
            </div>
          </>
        )}
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
            <span onClick={() => setInstructorTab('overview')} className={`gym-nav-item ${instructorTab === 'overview' ? 'active' : ''}`}>Overview</span>
            <span onClick={() => setInstructorTab('students')} className={`gym-nav-item ${instructorTab === 'students' ? 'active' : ''}`}>Students</span>
            <span onClick={() => setInstructorTab('workouts')} className={`gym-nav-item ${instructorTab === 'workouts' ? 'active' : ''}`}>Workout Plans</span>
            <span onClick={() => setInstructorTab('profile')} className={`gym-nav-item ${instructorTab === 'profile' ? 'active' : ''}`}>Profile</span>
            <button onClick={() => setRole('LOGIN')} className="gym-nav-signout">Sign Out</button>
          </nav>
        </aside>

        <main className="gym-main">
          <div className="gym-content-wrapper" style={{ maxWidth: '800px' }}>
            {instructorTab === 'overview' && (
              <>
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
            </>
           )}

           {instructorTab === 'students' && (
              <>
                <div className="gym-page-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <h2>Students</h2>
                    <p>A list of all the students in your coaching program.</p>
                  </div>
                  <div>
                     <button onClick={() => setInstructorTab('add_student')} className="gym-login-btn secondary" style={{ margin: 0, backgroundColor: '#4f46e5', borderColor: '#4f46e5', color: '#fff' }}>Add student</button>
                  </div>
                </div>

                <div className="gym-card" style={{ padding: 0, overflow: 'hidden' }}>
                  <div style={{ overflowX: 'auto', background: '#09090b', borderRadius: '8px' }}>
                    <table style={{ width: '100%', textAlign: 'left', borderCollapse: 'collapse', fontSize: '0.875rem' }}>
                      <thead style={{ background: '#09090b', borderBottom: '1px solid #27272a', color: '#fff', fontSize: '0.875rem' }}>
                        <tr>
                          <th style={{ padding: '12px 24px', fontWeight: 600 }}>Name</th>
                          <th style={{ padding: '12px 24px', fontWeight: 600 }}>Email</th>
                          <th style={{ padding: '12px 24px', fontWeight: 600 }}>Role</th>
                          <th style={{ padding: '12px 24px', fontWeight: 600 }}></th>
                        </tr>
                      </thead>
                      <tbody style={{ background: 'rgba(24, 24, 27, 0.5)' }}>
                        {[{name: 'Sarah Jenkins', email: 'sarah.j@example.com', role: 'STUDENT'},
                          {name: 'David Miller', email: 'dmiller@example.com', role: 'STUDENT'},
                          {name: 'Tom Hardy', email: 'tom.h@example.com', role: 'STUDENT'},
                          {name: 'Lucy Liu', email: 'lucy.l@example.com', role: 'STUDENT'}
                         ].map((stu, i) => (
                          <tr key={i} style={{ borderBottom: i !== 3 ? '1px solid #27272a' : 'none', color: '#a1a1aa' }}>
                            <td style={{ padding: '16px 24px', color: '#fff', fontWeight: 500 }}>{stu.name}</td>
                            <td style={{ padding: '16px 24px' }}>{stu.email}</td>
                            <td style={{ padding: '16px 24px' }}>{stu.role}</td>
                            <td style={{ padding: '16px 24px', textAlign: 'right' }}>
                               <a href="#" onClick={(e) => { e.preventDefault(); setInstructorTab('view_student'); }} style={{ color: '#818cf8', textDecoration: 'none', fontWeight: 500 }}>View</a>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </>
            )}

            {instructorTab === 'add_student' && (
              <>
                <div style={{ maxWidth: '600px', margin: '0 auto' }}>
                  <div style={{ display: 'flex', alignItems: 'center', marginBottom: '24px', gap: '16px' }}>
                     <button onClick={() => setInstructorTab('students')} style={{ background: 'none', border: 'none', color: '#a1a1aa', cursor: 'pointer', fontSize: '1rem' }}>←</button>
                     <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#fff' }}>Add New Student</h2>
                  </div>
                  <div className="gym-card" style={{ padding: '24px' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                      <div>
                        <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 500, color: '#d4d4d8', marginBottom: '8px' }}>Full Name</label>
                        <input type="text" style={{ width: '100%', background: 'rgba(255,255,255,0.05)', border: 'none', borderRadius: '6px', padding: '10px 12px', color: '#fff', outline: '1px solid rgba(255,255,255,0.1)' }} />
                      </div>
                      <div>
                        <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 500, color: '#d4d4d8', marginBottom: '8px' }}>Email address</label>
                        <input type="email" style={{ width: '100%', background: 'rgba(255,255,255,0.05)', border: 'none', borderRadius: '6px', padding: '10px 12px', color: '#fff', outline: '1px solid rgba(255,255,255,0.1)' }} />
                      </div>
                      <div>
                        <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 500, color: '#d4d4d8', marginBottom: '8px' }}>Temp Password</label>
                        <input type="password" style={{ width: '100%', background: 'rgba(255,255,255,0.05)', border: 'none', borderRadius: '6px', padding: '10px 12px', color: '#fff', outline: '1px solid rgba(255,255,255,0.1)' }} />
                      </div>
                      <button className="gym-login-btn secondary" style={{ marginTop: '8px', background: '#4f46e5', borderColor: '#4f46e5', color: '#fff', width: '100%' }}>Create Student</button>
                    </div>
                  </div>
                </div>
              </>
            )}

            {instructorTab === 'view_student' && (
              <>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '32px', gap: '16px' }}>
                   <button onClick={() => setInstructorTab('students')} style={{ background: 'none', border: 'none', color: '#a1a1aa', cursor: 'pointer', fontSize: '1rem' }}>←</button>
                   <div>
                     <h1 style={{ fontSize: '1.875rem', fontWeight: 700, color: '#fff' }}>Sarah Jenkins's Profile</h1>
                     <p style={{ color: '#a1a1aa' }}>sarah.j@example.com</p>
                   </div>
                </div>

                <div className="gym-2col" style={{ margin: 0, marginBottom: '24px' }}>
                  <div className="gym-card">
                     <h2 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '16px', color: '#fff' }}>Assigned Plans</h2>
                     <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                        <li style={{ background: 'rgba(255,255,255,0.05)', padding: '12px', borderRadius: '4px', border: '1px solid #3f3f46' }}>
                           <div style={{ fontWeight: 500, color: '#818cf8' }}>Hypertrophy Phase 1</div>
                           <div style={{ fontSize: '0.875rem', color: '#a1a1aa' }}>Focus on muscle building and progressive overload.</div>
                        </li>
                     </ul>
                  </div>
                  <div className="gym-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                     <h2 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '16px', color: '#fff', textAlign: 'center' }}>Actions</h2>
                     <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                        <button className="gym-login-btn primary" style={{ margin: 0 }}>Send Attendance Reminder</button>
                        <button className="gym-login-btn secondary" style={{ margin: 0, background: '#4f46e5', borderColor: '#4f46e5', color: '#fff' }}>Assign New Plan</button>
                     </div>
                  </div>
                </div>

                <div className="gym-card">
                   <h2 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '24px', color: '#fff' }}>Workout History (Progress)</h2>
                   <div style={{ borderLeft: '2px solid #6366f1', paddingLeft: '16px', paddingBottom: '8px' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                         <div>
                            <h3 style={{ fontSize: '1.125rem', fontWeight: 700, color: '#fff' }}>Upper Body Crusher</h3>
                            <p style={{ fontSize: '0.75rem', color: '#a1a1aa' }}>3/4/2026 - 10:00:00 AM</p>
                         </div>
                         <span style={{ padding: '4px 8px', fontSize: '0.75rem', borderRadius: '9999px', background: 'rgba(34,197,94,0.2)', color: '#4ade80', border: '1px solid rgba(34,197,94,0.3)' }}>COMPLETED</span>
                      </div>
                      <div className="gym-2col" style={{ margin: 0, gap: '16px' }}>
                         <div style={{ background: '#09090b', padding: '12px', borderRadius: '4px', border: '1px solid #27272a' }}>
                            <div style={{ fontWeight: 600, fontSize: '0.875rem', color: '#a5b4fc', marginBottom: '8px' }}>Lat Pulldowns</div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: '#a1a1aa', marginBottom: '4px' }}>
                               <span>Set 1</span><span>45 kg x 12 reps <span style={{ color: '#71717a' }}>@ RPE 8</span></span>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: '#a1a1aa' }}>
                               <span>Set 2</span><span>50 kg x 10 reps <span style={{ color: '#71717a' }}>@ RPE 9</span></span>
                            </div>
                         </div>
                         <div style={{ background: '#09090b', padding: '12px', borderRadius: '4px', border: '1px solid #27272a' }}>
                            <div style={{ fontWeight: 600, fontSize: '0.875rem', color: '#a5b4fc', marginBottom: '8px' }}>Push Ups</div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: '#a1a1aa', marginBottom: '4px' }}>
                               <span>Set 1</span><span>0 kg x 20 reps <span style={{ color: '#71717a' }}>@ RPE 7</span></span>
                            </div>
                         </div>
                      </div>
                   </div>
                </div>
              </>
            )}
            
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
