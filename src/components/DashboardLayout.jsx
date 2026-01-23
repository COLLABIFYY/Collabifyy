
import React, { useEffect, useState } from 'react';
import { supabase } from '../config/supabase';
import CreatorOnboarding from './CreatorOnboarding';
import BrandOnboarding from './BrandOnboarding';
import CreatorDashboard from './CreatorDashboard';
import BrandDashboard from './BrandDashboard';

const DashboardLayout = () => {
    const [role, setRole] = useState(null);
    const [hasProfile, setHasProfile] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        checkProfile();
    }, []);

    const checkProfile = async () => {
        try {
            const savedRole = localStorage.getItem('userRole');
            setRole(savedRole);

            if (!savedRole) {
                setLoading(false);
                return;
            }

            // Check if user has completed onboarding
            const { data: { user } } = await supabase.auth.getUser();
            if (!user) {
                setLoading(false);
                return;
            }

            const tableName = savedRole === 'creator' ? 'creators' : 'brands';
            const { data, error } = await supabase
                .from(tableName)
                .select('id')
                .eq('user_id', user.id)
                .single();

            if (data && !error) {
                setHasProfile(true);
            }

            setLoading(false);
        } catch (error) {
            console.error("Error checking profile:", error);
            setLoading(false);
        }
    };

    const handleLogout = async () => {
        await supabase.auth.signOut();
        localStorage.removeItem('userRole');
        window.location.reload();
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
        return role === 'creator' ? <CreatorDashboard /> : <BrandDashboard />;
    }

    // Otherwise show onboarding
    return (
        <div style={{
            minHeight: '100vh',
            background: '#000',
            backgroundImage: 'url(/dashboard-bg.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundAttachment: 'fixed',
            color: '#fff'
        }}>
            <nav style={{ padding: '20px', borderBottom: '1px solid #333', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'rgba(0, 0, 0, 0.7)', backdropFilter: 'blur(10px)' }}>
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
