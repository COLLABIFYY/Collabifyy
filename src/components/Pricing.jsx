import React from 'react';
import './Pricing.css';
import useScrollObserver from '../hooks/useScrollObserver';

const Pricing = () => {
    const [ref, isVisible] = useScrollObserver({ threshold: 0.1 });

    return (
        <section id="pricing" ref={ref} className={`pricing-section fade-in-section ${isVisible ? 'is-visible' : ''}`}>
            <div className="pricing-container">
                <div className="pricing-header">
                    <h2 className="pricing-title">Pricing</h2>
                    <div className="coming-soon-container">
                        <h1 className="coming-soon-text">COMING SOON</h1>
                        <p className="pricing-subtitle">We are crafting the perfect plans for you.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Pricing;
