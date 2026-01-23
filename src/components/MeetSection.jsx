import React from 'react';
import './MeetSection.css';
import useScrollObserver from '../hooks/useScrollObserver';

const MeetSection = () => {
    const [ref, isVisible] = useScrollObserver({ threshold: 0.2 });
    return (
        <section
            ref={ref}
            className={`meet-section fade-in-section ${isVisible ? 'is-visible' : ''}`}
        >
            <div className="meet-container">
                <h2 className="meet-subtitle">MEET COLLABIFYY</h2>

                <div className="meet-split-layout">
                    {/* Brands Row */}
                    <div className="meet-row brands-row">
                        <span className="meet-large-text">BRANDS</span>
                    </div>

                    {/* Connecting Arrows (SVG Overlay) */}
                    <svg className="connections-overlay" viewBox="0 0 100 100" preserveAspectRatio="none">
                        {/* Arrow from Brand (Top Left) to Center */}
                        <path d="M 25 30 Q 35 30, 45 45" className="connection-path" />

                        {/* Arrow from Center to Creator (Bottom Right) */}
                        <path d="M 55 55 Q 65 70, 75 70" className="connection-path" />
                    </svg>

                    {/* Central Collabifyy Node */}
                    <div className="meet-center-node">
                        COLLABIFYY
                    </div>

                    {/* Creator Row */}
                    <div className="meet-row creator-row">
                        <span className="meet-large-text">CREATOR</span>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default MeetSection;
