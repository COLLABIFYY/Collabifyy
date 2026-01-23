import { Bot, Zap, Target, Network, TrendingUp, DollarSign } from 'lucide-react';
import React from 'react';
import './WhyCollabifyy.css';
import useScrollObserver from '../hooks/useScrollObserver';

const WhyCollabifyy = () => {
    const [ref, isVisible] = useScrollObserver({ threshold: 0.1 });

    const values = [
        {
            title: 'AI-First Matchmaking',
            desc: 'Intelligent pairing based on brand fit, audience alignment, and content quality not manual searches',
            icon: <Bot size={40} />
        },
        {
            title: 'Speed & Efficiency',
            desc: 'Faster discovery, streamlined outreach, and rapid deal closure save weeks of back-and-forth',
            icon: <Zap size={40} />
        },
        {
            title: 'Quality Over Quantity',
            desc: 'Relevance and authentic engagement beat massive but irrelevant creator databases',
            icon: <Target size={40} />
        },
        {
            title: 'End-to-End Workflow',
            desc: 'Discovery, communication, collaboration, and secure payment all in one seamless platform',
            icon: <Network size={40} />
        },
        {
            title: 'Outcome-Focused',
            desc: 'We prioritize reach and ROI metrics that actually matter, not vanity numbers',
            icon: <TrendingUp size={40} />
        },
        {
            title: 'Cost-Efficient Value',
            desc: 'Premium features without premium pricing accessible to brands of all sizes',
            icon: <DollarSign size={40} />
        }
    ];

    return (
        <section id="why-collabifyy" ref={ref} className={`why-section fade-in-section ${isVisible ? 'is-visible' : ''}`}>
            <div className="why-container">
                <div className="why-header">
                    <span className="why-label">why choose us</span>
                    <h2 className="why-title">Empowering the <br />Creator Economy</h2>
                </div>

                <div className="why-grid">
                    {values.map((item, index) => (
                        <div key={index} className="why-card" style={{ transitionDelay: `${index * 100}ms` }}>
                            <span className="why-icon">{item.icon}</span>
                            <h3>{item.title}</h3>
                            <p>{item.desc}</p>
                        </div>
                    ))}
                </div>


            </div>
        </section>
    );
};

export default WhyCollabifyy;
