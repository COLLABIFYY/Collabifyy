import React, { useState } from 'react';
import './Hero.css';
import RoleSelectionModal from './RoleSelectionModal';

const Hero = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <section id="home" className="hero-section">
            <div className="hero-background">
                <div className="overlay"></div>

            </div>

            <div className="hero-content">
                <h1 className="hero-title">
                    Scale Fast.<br />
                    Collab Smarter.
                </h1>

                <p className="hero-subtitle">
                    Connecting visionary brands with content creators.<br />
                    The platform making collab easier.
                </p>

                <div className="hero-cta-wrapper">
                    <button
                        className="hero-cta"
                        onClick={() => setIsModalOpen(true)}
                    >
                        FIND YOUR FIT
                        <svg className="arrow-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ marginLeft: '10px', verticalAlign: 'middle' }}>
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </button>
                </div>
            </div>

            <RoleSelectionModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </section>
    );
};

export default Hero;
