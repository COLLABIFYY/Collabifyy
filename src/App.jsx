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

  useEffect(() => {
    // Check active session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    // Listen for auth changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

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
