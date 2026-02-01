import React, { useEffect, useState } from 'react';
// import { supabase } from '../config/supabase';
import CreatorOnboarding from '../onboarding/CreatorOnboarding';
import BrandOnboarding from '../onboarding/BrandOnboarding';
import CreatorDashboard from '../creator/CreatorDashboard';
import BrandDashboard from '../brand/BrandDashboard';
import MainLayout from './MainLayout';

// DESIGN MODE: Set to true to bypass authentication
// DESIGN MODE: Set to false to verify auth flow
const DESIGN_MODE = true;
const DEFAULT_ROLE = 'brand';

const DashboardLayout = () => {
    const [role, setRole] = useState(null);
    const [hasProfile, setHasProfile] = useState(false);
    const [loading, setLoading] = useState(true);
    const [activeTab, setActiveTab] = useState('discover'); // Default to discover as per request

    useEffect(() => {
        if (DESIGN_MODE) {
            // In design mode, set default values immediately
            setRole(DEFAULT_ROLE);
            setHasProfile(false); // Force onboarding for testing
            setLoading(false);
        } else {
            checkProfile();
        }
    }, []);

    const checkProfile = async () => {
        try {
            // Simulated profile check
            const savedRole = localStorage.getItem('userRole');

            // If we have a stored role (brand/creator), use it
            if (savedRole) {
                setRole(savedRole);
                setHasProfile(true);
            }
            // If no role but authenticated (just logged in), we start onboarding
            // We'll default to brand onboarding for now if no choice was made
            else {
                // If we want to force user to choose role, we'd need a role selection step.
                // For now, let's assume they pick 'brand' by default or we show them both buttons?
                // The current layout shows onboarding if role is null? 
                // Ah, the code says: if (!role) return Loading...

                // So we MUST set a role to show anything other than loading.
                // Let's check if we have a way to pick role.

                // If no role is saved, we can default to 'brand' and show onboarding?
                // Or we can set role = 'brand' and hasProfile = false -> Shows BrandOnboarding

                setRole('brand');
                setHasProfile(false);
            }

            setLoading(false);
        } catch (error) {
            console.error("Error checking profile:", error);
            setLoading(false);
        }
    };

    const handleLogout = async () => {
        // await supabase.auth.signOut();
        localStorage.removeItem('userRole');
        localStorage.removeItem('isAuthenticated');
        window.location.href = '/';
    };

    if (loading) {
        return (
            <div style={{ padding: '50px', textAlign: 'center', color: '#fff', background: '#0d0d0d', minHeight: '100vh' }}>
                <h2>Loading...</h2>
                <p>Please wait while we load your dashboard.</p>
            </div>
        );
    }

    if (!role) {
        return (
            <div style={{ padding: '50px', textAlign: 'center', color: '#fff', background: '#0d0d0d', minHeight: '100vh' }}>
                <h2>One moment...</h2>
                <p>Loading your dashboard.</p>
                <div style={{ marginTop: '20px' }}>
                    <button onClick={handleLogout} style={{ padding: '10px 20px', cursor: 'pointer' }}>Cancel / Logout</button>
                </div>
            </div>
        );
    }



    // If role has completed onboarding, show respective dashboard
    if (hasProfile) {
        return (
            <MainLayout role={role} activeTab={activeTab} onTabChange={setActiveTab} onLogout={handleLogout}>
                {role === 'creator'
                    ? <CreatorDashboard activeTab={activeTab} />
                    : <BrandDashboard activeTab={activeTab} />
                }
            </MainLayout>
        );
    }

    // Otherwise show onboarding
    return (
        <div style={{
            height: '100vh',
            overflowY: 'auto',
            background: '#000',
            backgroundImage: 'url(/onboarding-bg.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundAttachment: 'fixed',
            color: '#fff'
        }}>
            <nav style={{ padding: '20px', borderBottom: '1px solid rgba(255,255,255,0.1)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'rgba(0, 0, 0, 0.2)', backdropFilter: 'blur(10px)' }}>
                <div style={{ fontWeight: 'bold', fontSize: '20px' }}>COLLABIFYY <span style={{ fontSize: '12px', color: '#666', marginLeft: '10px' }}>{role.toUpperCase()} ONBOARDING</span></div>
                <button onClick={handleLogout} style={{ background: 'transparent', border: '1px solid #444', color: '#ccc', padding: '8px 16px', borderRadius: '4px', cursor: 'pointer' }}>
                    Sign Out
                </button>
            </nav>

            <main style={{ padding: '20px' }}>
                {role === 'creator' ? <CreatorOnboarding onComplete={checkProfile} /> : <BrandOnboarding onComplete={checkProfile} />}
            </main>
        </div>
    );
};

export default DashboardLayout;
