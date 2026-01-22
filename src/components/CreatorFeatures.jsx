import React from 'react';
import './Features.css'; // Reuse styles
import useScrollObserver from '../hooks/useScrollObserver';

const CreatorFeatures = () => {
    const [ref, isVisible] = useScrollObserver({ threshold: 0.1 });

    return (
        <section
            id="creator-features"
            ref={ref}
            className={`features-section fade-in-section ${isVisible ? 'is-visible' : ''}`}
            style={{
                backgroundImage: "url('/creator_bg.jpg')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }}
        >
            <div className="features-container">
                <div className="features-header">
                    <span className="features-label">FEATURES FOR CREATORS</span>
                    <h2 className="features-headline">Unleash Your Creativity.<br />Monetize Your Passion.</h2>
                    <p className="features-description">
                        Everything you need to grow your career and collaborate with top brands.
                    </p>
                </div>

                <div className="features-grid">
                    {/* Item 1: Get Discovered (Large - Span 2) */}
                    <div className="feature-card feature-large card-ai">
                        <div className="card-content">
                            <span className="card-badge">VISIBILITY</span>
                            <h3>Get Discovered</h3>
                        </div>
                    </div>

                    {/* Item 2: Secure Earning (Wide - Span 1) */}
                    <div className="feature-card feature-wide card-payments">
                        <div className="card-content">
                            <h3>Secure Earning</h3>
                        </div>
                    </div>

                    {/* Item 3: Digital Contract (Tall - Span 1, Row 2-3) */}
                    <div className="feature-card feature-tall card-creators">
                        <div className="card-content">
                            <h3>Digital Contract</h3>
                        </div>
                    </div>

                    {/* Item 4: Discover Live Campaigns (Big - Span 2, Row 2) */}
                    <div className="feature-card feature-big card-analytics">
                        <div className="card-content">
                            <span className="card-badge">OPPORTUNITIES</span>
                            <h3>Discover Live Campaigns</h3>
                        </div>
                    </div>

                    {/* Item 5: Creator Tools (Big - Span 2, Row 3) */}
                    <div className="feature-card feature-big card-free-campaigns">
                        <div className="card-content">
                            <h3>Creator Tools</h3>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CreatorFeatures;
