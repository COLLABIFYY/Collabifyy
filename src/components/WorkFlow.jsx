import React from 'react';
import './WorkFlow.css';

import useScrollObserver from '../hooks/useScrollObserver';

const WorkFlow = () => {
    const [ref, isVisible] = useScrollObserver({ threshold: 0.1 });

    return (
        <section
            id="work-flow"
            ref={ref}
            className={`workflow-section fade-in-section ${isVisible ? 'is-visible' : ''}`}
        >
            <div className="workflow-container">
                <h2 className="workflow-title">WORK FLOW</h2>
                <div className="workflow-split">
                    <div className="workflow-column">
                        <h3 className="column-title">FOR BRANDS</h3>
                        <ul className="workflow-list">
                            <li>DISCOVER CREATOR</li>
                            <li>SELECT CREATORS</li>
                            <li>CAMPAIGN BRIEF</li>
                            <li>COLLAB INVITE</li>
                            <li>DIGITAL AGREEMENT</li>
                            <li>LIVE TRACKING (after creator executes)</li>
                        </ul>
                    </div>

                    <div className="workflow-divider"></div>

                    <div className="workflow-column">
                        <h3 className="column-title">FOR CREATORS</h3>
                        <ul className="workflow-list">
                            <li>RECEIVE INVITE</li>
                            <li>ACCEPT / NEGOTIATE / DECLINE</li>
                            <li>CONFIRM COLLAB</li>
                            <li>DIGITAL AGREEMENT</li>
                            <li>EXECUTION</li>
                            <li>PAYOUT</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WorkFlow;
