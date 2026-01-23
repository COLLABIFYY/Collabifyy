import React from 'react';
import './Features.css'; // Reuse styles
import useScrollObserver from '../hooks/useScrollObserver';
import { Search, MessageCircle, User, Sparkles, TrendingUp, BarChart3, ArrowUpRight, CheckCircle, Clock, FileText, Shield, PenTool, Cpu, Zap, Share2, Rocket, Plus, Image, Video } from 'lucide-react';

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
                        <div className="ai-chat-interface creator-mode">
                            <div className="chat-messages centered-content">
                                <div className="chat-message ai invite-message">
                                    <p className="invite-title">🎉 Collab Invite Received</p>
                                    <p className="invite-text"><strong>Collabifyy</strong> wants to collaborate!</p>
                                    <div className="invite-actions">
                                        <button className="action-btn accept">Accept</button>
                                        <button className="action-btn negotiate">Negotiate</button>
                                        <button className="action-btn decline">Decline</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card-content">
                            <span className="card-badge">VISIBILITY</span>
                            <h3>Get Discovered</h3>
                        </div>
                    </div>

                    {/* Item 2: Secure Earning (Wide - Span 1) */}
                    <div className="feature-card feature-wide card-payments">
                        <div className="tracking-interface">
                            <div className="tracking-header">
                                <span className="tracking-title">Payment Status</span>
                                <span className="tracking-status">Processed</span>
                            </div>
                            <div className="progress-section">
                                <div className="progress-info">
                                    <span>Payout Processing</span>
                                    <span>100%</span>
                                </div>
                                <div className="progress-bar-track">
                                    <div className="progress-bar-fill" style={{ width: '100%' }}></div>
                                </div>
                            </div>
                            <div className="tracking-list">
                                <div className="tracking-item completed">
                                    <CheckCircle size={16} className="track-icon" />
                                    <div className="track-details">
                                        <span className="track-name">₹75k Received</span>
                                        <span className="track-time">Today</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card-content">
                            <h3>Secure Earning</h3>
                        </div>
                    </div>

                    {/* Item 3: Digital Contract (Tall - Span 1, Row 2-3) */}
                    <div className="feature-card feature-tall card-creators">
                        <div className="contract-interface">
                            <div className="contract-doc">
                                <div className="contract-header">
                                    <FileText size={16} />
                                    <span>Collab Agreement</span>
                                </div>
                                <div className="contract-body">
                                    <div className="line long"></div>
                                    <div className="line long"></div>
                                    <div className="line short"></div>
                                    <div className="line long"></div>
                                    <div className="line medium"></div>
                                </div>
                                <div className="contract-footer">
                                    <div className="signature-area">
                                        <div className="signature">Signed</div>
                                        <span>Brand Signature</span>
                                    </div>
                                    <Shield size={16} className="secure-icon" />
                                </div>
                            </div>
                            <div className="contract-status">
                                <PenTool size={14} />
                                <span>Secured</span>
                            </div>
                        </div>
                        <div className="card-content">
                            <h3>Digital Contract</h3>
                        </div>
                    </div>

                    {/* Item 4: Discover Live Campaigns (Big - Span 2, Row 2) */}
                    <div className="feature-card feature-big card-analytics">
                        <div className="analytics-interface">
                            <div className="stat-card main-stat">
                                <div className="stat-header">
                                    <span className="stat-label" style={{ color: '#ff1a75' }}>Active Campaigns</span>
                                    <TrendingUp size={14} className="trend-icon" />
                                </div>
                                <div className="stat-value">124</div>
                                <div className="stat-growth">
                                    <ArrowUpRight size={12} />
                                    <span>New</span>
                                </div>
                            </div>
                            <div className="chart-container">
                                <div className="chart-bar" style={{ height: '60%' }}></div>
                                <div className="chart-bar" style={{ height: '45%' }}></div>
                                <div className="chart-bar active" style={{ height: '90%' }}></div>
                                <div className="chart-bar" style={{ height: '75%' }}></div>
                            </div>
                        </div>
                        <div className="card-content">
                            <span className="card-badge">OPPORTUNITIES</span>
                            <h3>Discover Live Campaigns</h3>
                        </div>
                    </div>

                    {/* Item 5: Creator Tools (Big - Span 2, Row 3) */}
                    <div className="feature-card feature-big card-free-campaigns">
                        <div className="creator-tools-interface">
                            <div className="tool-item">
                                <div className="tool-icon">
                                    <FileText size={20} />
                                </div>
                                <span className="tool-label">Script Writer</span>
                            </div>
                            <div className="tool-item">
                                <div className="tool-icon">
                                    <Image size={20} />
                                </div>
                                <span className="tool-label">Image Generator</span>
                            </div>
                            <div className="tool-item">
                                <div className="tool-icon">
                                    <Video size={20} />
                                </div>
                                <span className="tool-label">Video Generator</span>
                            </div>
                            <div className="tool-item">
                                <div className="tool-icon">
                                    <Search size={20} />
                                </div>
                                <span className="tool-label">SEO Tools</span>
                            </div>
                        </div>
                        <div className="card-content">
                            <span className="card-badge">COMING SOON</span>
                            <h3>Creator Tools</h3>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CreatorFeatures;
