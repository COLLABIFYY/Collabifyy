import { Search, MessageCircle, User, Sparkles, TrendingUp, BarChart3, ArrowUpRight, CheckCircle, Clock, FileText, Shield, PenTool, Cpu, Zap, Share2, Rocket, Plus } from 'lucide-react';
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
                        <div className="ai-chat-interface">
                            <div className="chat-header">
                                <div className="chat-avatar-ai">
                                    <Sparkles size={16} />
                                </div>
                                <div className="chat-info">
                                    <span className="chat-name">Collabifyy AI</span>
                                    <span className="chat-status">Online</span>
                                </div>
                            </div>

                            <div className="chat-messages">
                                <div className="chat-message user">
                                    <p>Find me creators of beauty niche from India</p>
                                </div>


                            </div>

                            <div className="chat-input-area">
                                <div className="input-placeholder">Type a message...</div>
                                <div className="send-btn">
                                    <Search size={14} />
                                </div>
                            </div>
                        </div>

                        <div className="card-content">
                            <span className="card-badge">AI POWERED</span>
                            <h3>Smart Discovery</h3>
                        </div>
                    </div>

                    {/* Item 2: Analytics Dashboard (Wide - Span 1) */}
                    <div className="feature-card feature-wide card-analytics">
                        <div className="analytics-interface">
                            <div className="stat-card main-stat">
                                <div className="stat-header">
                                    <span className="stat-label" style={{ color: '#ff1a75' }}>Total Reach</span>
                                    <TrendingUp size={14} className="trend-icon" />
                                </div>
                                <div className="stat-value">2.4M</div>
                                <div className="stat-growth">
                                    <ArrowUpRight size={12} />
                                    <span>+24.5%</span>
                                </div>
                            </div>

                            <div className="chart-container">
                                <div className="chart-bar" style={{ height: '40%' }}></div>
                                <div className="chart-bar" style={{ height: '65%' }}></div>
                                <div className="chart-bar" style={{ height: '50%' }}></div>
                                <div className="chart-bar" style={{ height: '85%' }}></div>
                                <div className="chart-bar active" style={{ height: '100%' }}></div>
                            </div>
                        </div>
                        <div className="card-content">
                            <h3>Analytics Dashboard</h3>
                        </div>
                    </div>

                    {/* Item 3: Digital Contract (Tall - Span 1, Row 2-3) - Replaces Verified Creators */}
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
                                        <span>Creator Signature</span>
                                    </div>
                                    <Shield size={16} className="secure-icon" />
                                </div>
                            </div>
                            <div className="contract-status">
                                <PenTool size={14} />
                                <span>Legally Binding</span>
                            </div>
                        </div>
                        <div className="card-content">
                            <h3>Digital Contract</h3>
                        </div>
                    </div>

                    {/* Item 4: Live Campaign Tracking (Big - Span 2, Row 2) - Replaces Instant Payments */}
                    <div className="feature-card feature-big card-payments">
                        <div className="tracking-interface">
                            <div className="tracking-header">
                                <span className="tracking-title">Collabifyy Marketing Campaign</span>
                                <span className="tracking-status">Active</span>
                            </div>

                            <div className="progress-section">
                                <div className="progress-info">
                                    <span>Campaign Progress</span>
                                    <span>75%</span>
                                </div>
                                <div className="progress-bar-track">
                                    <div className="progress-bar-fill" style={{ width: '75%' }}></div>
                                </div>
                            </div>

                            <div className="tracking-list">
                                <div className="tracking-item completed">
                                    <CheckCircle size={16} className="track-icon" />
                                    <div className="track-details">
                                        <span className="track-name">Brief Approved</span>
                                        <span className="track-time">2 days ago</span>
                                    </div>
                                </div>
                                <div className="tracking-item completed">
                                    <CheckCircle size={16} className="track-icon" />
                                    <div className="track-details">
                                        <span className="track-name">5 Creators Joined</span>
                                        <span className="track-time">Yesterday</span>
                                    </div>
                                </div>
                                <div className="tracking-item active">
                                    <Clock size={16} className="track-icon" />
                                    <div className="track-details">
                                        <span className="track-name">Content Review</span>
                                        <span className="track-time">In Progress</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="card-content">
                            <span className="card-badge">LIVE TRACKING</span>
                            <h3>Campaign Tracking</h3>
                        </div>
                    </div>

                    {/* Item 5: Agentic System (Wide - Span 1) - Resized */}
                    <div className="feature-card feature-wide card-agentic">
                        <div className="agentic-interface">
                            <div className="agentic-network">
                                <div className="connection-lines">
                                    <div className="line-1"></div>
                                    <div className="line-2"></div>
                                    <div className="line-3"></div>
                                </div>
                                <div className="node core-node">
                                    <Cpu size={24} />
                                </div>
                                <div className="node sub-node node-1">
                                    <Search size={14} />
                                </div>
                                <div className="node sub-node node-2">
                                    <MessageCircle size={14} />
                                </div>
                                <div className="node sub-node node-3">
                                    <Share2 size={14} />
                                </div>
                            </div>
                        </div>

                        <div className="card-content">
                            <span className="card-badge">COMING SOON</span>
                            <h3>Agentic System</h3>
                        </div>
                    </div>

                    {/* Item 6: Launch Free Campaigns (Wide - Span 1) - NEW */}
                    <div className="feature-card feature-wide card-free-campaigns">
                        <div className="campaign-interface">
                            <div className="launch-circle">
                                <Rocket size={24} className="rocket-icon" />
                            </div>
                            <div className="floating-plus plus-1">
                                <Plus size={12} />
                            </div>
                            <div className="floating-plus plus-2">
                                <Plus size={16} />
                            </div>
                            <div className="floating-plus plus-3">
                                <Plus size={10} />
                            </div>
                        </div>
                        <div className="card-content">
                            <span className="card-badge">COMING SOON</span>
                            <h3>Launch Free Campaigns</h3>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;
