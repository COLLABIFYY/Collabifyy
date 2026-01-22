import React from 'react';
import './Features.css';
import useScrollObserver from '../hooks/useScrollObserver';

const Features = () => {
    const [ref, isVisible] = useScrollObserver({ threshold: 0.1 });

    return (
        <section
            id="features"
            ref={ref}
            className={`features-section fade-in-section ${isVisible ? 'is-visible' : ''}`}
        >
            <div className="features-container">
                <div className="features-header">
                    <span className="features-label">FEATURES FOR BRANDS</span>
                    <h2 className="features-headline">Everything You Need.<br />To Scale Your Influence.</h2>
                    <p className="features-description">
                        Powerful tools designed to streamline collaborations and maximize impact.
                    </p>
                </div>

                <div className="features-grid">
                    {/* Item 1: Smart Discovery (Large - Span 2) */}
                    <div className="feature-card feature-large card-ai">
                        <div className="card-content">
                            <span className="card-badge">AI POWERED</span>
                            <h3>Smart Discovery</h3>
                        </div>
                    </div>

                    {/* Item 2: Analytics Dashboard (Wide - Span 1) */}
                    <div className="feature-card feature-wide card-analytics">
                        <div className="card-content">
                            <h3>Analytics Dashboard</h3>
                        </div>
                    </div>

                    {/* Item 3: Digital Contract (Tall - Span 1, Row 2-3) - Replaces Verified Creators */}
                    <div className="feature-card feature-tall card-creators">
                        <div className="card-content">
                            <h3>Digital Contract</h3>
                        </div>
                    </div>

                    {/* Item 4: Live Campaign Tracking (Big - Span 2, Row 2) - Replaces Instant Payments */}
                    <div className="feature-card feature-big card-payments">
                        <div className="card-content">
                            <span className="card-badge">LIVE TRACKING</span>
                            <h3>Campaign Tracking</h3>
                        </div>
                    </div>

                    {/* Item 5: Agentic System (Wide - Span 1) - Resized */}
                    <div className="feature-card feature-wide card-agentic">
                        <div className="card-content">
                            <span className="card-badge">COMING SOON</span>
                            <h3>Agentic System</h3>
                        </div>
                    </div>

                    {/* Item 6: Launch Free Campaigns (Wide - Span 1) - NEW */}
                    <div className="feature-card feature-wide card-free-campaigns">
                        <div className="card-content">
                            <h3>Launch Free Campaigns</h3>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;
