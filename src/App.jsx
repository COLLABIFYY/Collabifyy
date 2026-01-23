import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import MeetSection from './components/MeetSection'
import Features from './components/Features'
import CreatorFeatures from './components/CreatorFeatures'
import SakuraPetals from './components/SakuraPetals'
import WhyCollabifyy from './components/WhyCollabifyy'
import Pricing from './components/Pricing'
import Footer from './components/Footer'
import DashboardLayout from './components/DashboardLayout'
import { supabase } from './config/supabase'

function App() {
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Handle OAuth callback and initialize session
    const initializeAuth = async () => {
      try {
        // Check for active session (handles OAuth callback automatically)
        const { data: { session }, error } = await supabase.auth.getSession();

        if (error) {
          console.error('Error getting session:', error);
        } else {
          setSession(session);

          // Log successful OAuth callback
          if (session && window.location.hash) {
            console.log('OAuth callback processed successfully via PKCE flow');
            // Clean URL after successful auth
            window.history.replaceState({}, document.title, window.location.pathname);
          }
        }
      } catch (error) {
        console.error('Auth initialization error:', error);
      } finally {
        setLoading(false);
      }
    };

    initializeAuth();

    // Listen for auth changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      console.log('Auth state changed:', event);
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  // Show loading during auth initialization
  if (loading) {
    return (
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        background: 'linear-gradient(135deg, #1a1a1a 0%, #2a1a2a 100%)',
        color: '#fff'
      }}>
        <div>Loading...</div>
      </div>
    );
  }

  if (session) {
    return <DashboardLayout />;
  }

  return (
    <>
      <SakuraPetals />
      <Header />
      <Hero />
      <MeetSection />
      <Features />
      <CreatorFeatures />
      <WhyCollabifyy />
      <Pricing />
      <Footer />
    </>
  )
}

export default App
