import React, { useState } from 'react';
import './Hero.css';
import SignInModal from './SignInModal';

const Hero = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <section className="hero">
            <div className="hero-background">
                <div className="overlay"></div>

            </div>

            <div className="hero-content">
                <div className="tags">
                    <span>[ CREATORS ]</span>
                    <span>[ BRANDS ]</span>
                    <span>[ CONNECT ]</span>
                    <span>[ SCALE ]</span>
                </div>

                <h1 className="hero-title">
                    Scale Fast.<br />
                    Collab Smarter.
                </h1>

                <p className="hero-desc">
                    Connecting visionary brands with content creators.<br />
                    The platform making collab easier.
                </p>

                <div className="hero-cta-wrapper">
                    <button
                        className="btn btn-primary hero-btn"
                        onClick={() => setIsModalOpen(true)}
                    >
                        FIND YOUR FIT
                        <svg className="arrow-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </button>
                </div>
            </div>

            <SignInModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </section>
    );
};

export default Hero;
