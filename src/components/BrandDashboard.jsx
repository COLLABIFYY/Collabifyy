import React, { useState } from 'react';
import './CreatorDashboard.css';
import { supabase } from '../config/supabase';

const BrandDashboard = () => {
    const [activeTab, setActiveTab] = useState('discover');
    const [petals] = useState(() => {
        const petalCount = 15;
        return Array.from({ length: petalCount }).map((_, i) => ({
            id: i,
            left: Math.random() * 100 + '%',
            animationDuration: Math.random() * 10 + 10 + 's',
            animationDelay: Math.random() * 5 + 's',
            width: Math.random() * 10 + 10 + 'px',
            height: Math.random() * 10 + 10 + 'px',
        }));
    });

    const handleSignOut = async () => {
        if (window.confirm('Are you sure you want to sign out?')) {
            await supabase.auth.signOut();
            localStorage.removeItem('userRole');
            window.location.href = '/';
        }
    };

    const menuItems = [
        {
            id: 'discover',
            label: 'Discover Creators',
            icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
            )
        },
        {
            id: 'dm',
            label: 'DM System',
            icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
            )
        },
        {
            id: 'collab',
            label: 'CollabZone',
            icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                </svg>
            )
        },
        {
            id: 'launch',
            label: 'Launch Campaign',
            icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="12" y1="5" x2="12" y2="19" />
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <circle cx="12" cy="12" r="10" />
                </svg>
            )
        },
        {
            id: 'profile',
            label: 'Profile',
            icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                </svg>
            )
        }
    ];

    return (
        <div className="creator-dashboard">
            {/* Sakura Petals Animation */}
            <div className="dashboard-sakura-container">
                {petals.map((petal) => (
                    <div
                        key={petal.id}
                        className="dashboard-sakura-petal"
                        style={{
                            left: petal.left,
                            animationDuration: petal.animationDuration,
                            animationDelay: petal.animationDelay,
                            width: petal.width,
                            height: petal.height,
                        }}
                    />
                ))}
            </div>

            {/* Left Sidebar - 280px */}
            <aside className="dashboard-sidebar">
                <div className="sidebar-header">
                    <h2 className="sidebar-logo">COLLABIFYY</h2>
                    <span className="sidebar-badge">BRAND</span>
                </div>

                <nav className="sidebar-nav">
                    {menuItems.map(item => (
                        <button
                            key={item.id}
                            className={`nav-item ${activeTab === item.id ? 'active' : ''}`}
                            onClick={() => setActiveTab(item.id)}
                        >
                            <span className="nav-icon">{item.icon}</span>
                            <span className="nav-label">{item.label}</span>
                        </button>
                    ))}
                </nav>

                <div className="sidebar-footer">
                    <button className="logout-btn" onClick={handleSignOut}>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                            <polyline points="16 17 21 12 16 7" />
                            <line x1="21" y1="12" x2="9" y2="12" />
                        </svg>
                        Sign Out
                    </button>
                </div>
            </aside>

            {/* Right Content */}
            <main className="dashboard-content">
                <div className="dashboard-status-container">
                    <div className="dashboard-status-card">
                        <h1 className="coming-soon-title">Coming Soon</h1>
                        <p className="coming-soon-subtitle">
                            We're building something amazing for you!
                        </p>
                        <div className="coming-soon-icon">🚀</div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default BrandDashboard;
