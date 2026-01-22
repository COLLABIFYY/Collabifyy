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
                    <div className="meet-row brands-row">
                        <span className="meet-large-text">BRANDS</span>
                        <div className="collabi-chat-container">
                            <img src="/collabi_chat.jpg" alt="Collabi Interface" className="collabi-chat-img" />
                            <div className="collabi-chat-text">Hi, This is Collabi</div>
                        </div>
                    </div>
                    <div className="meet-row creator-row">
                        <span className="meet-large-text">CREATOR</span>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default MeetSection;
