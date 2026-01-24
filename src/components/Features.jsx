import { Search, MessageCircle, User, Sparkles, TrendingUp, BarChart3, ArrowUpRight, CheckCircle, Clock, FileText, Shield, PenTool, Cpu, Zap, Share2, Rocket, Plus } from 'lucide-react';
import React from 'react';
import './Features.css';
import useScrollObserver from '../hooks/useScrollObserver';

const SmartDiscoveryCard = ({ className = '', ...props }) => (
    <div className={`feature-card feature-large card-ai ${className}`} {...props}>
        <div className="ai-chat-interface">
            <div className="chat-header">
                <div className="chat-avatar-ai">
                    <Sparkles size={16} />
                </div>
                <div className="chat-info">
                    <span className="chat-name">Collabi</span>
                    <span className="chat-status">Online</span>
                </div>
            </div>
            <div className="chat-messages">
                <div className="chat-message user">
                    <p>Find me creators of beauty niche from India</p>
                </div>
            </div>
            {/* Input moved to card-content */}
        </div>
        <div className="card-content with-input">
            <div className="text-content">
                <span className="card-badge">AI POWERED</span>
                <h3>Smart Discovery</h3>
            </div>
            <div className="chat-input-area">
                <div className="input-placeholder">Your AI-assistant , Collabi</div>
            </div>
        </div>
    </div>
);

const AnalyticsCard = ({ className = '', ...props }) => (
    <div className={`feature-card feature-wide card-analytics ${className}`} {...props}>
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
);

const DigitalContractCard = ({ className = '', ...props }) => (
    <div className={`feature-card feature-tall card-creators ${className}`} {...props}>
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
);

const CampaignTrackingCard = ({ className = '', ...props }) => (
    <div className={`feature-card feature-big card-payments ${className}`} {...props}>
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
);

const AgenticSystemCard = ({ className = '', ...props }) => (
    <div className={`feature-card feature-wide card-agentic ${className}`} {...props}>
        <div className="agentic-interface">
            <div className="agentic-network">
                <div className="connection-lines">
                    <div className="line-1"></div>
                    <div className="line-2"></div>
                    <div className="line-3"></div>
                </div>
                <div className="node core-node"><Cpu size={24} /></div>
                <div className="node sub-node node-1"><Search size={14} /></div>
                <div className="node sub-node node-2"><MessageCircle size={14} /></div>
                <div className="node sub-node node-3"><Share2 size={14} /></div>
            </div>
        </div>
        <div className="card-content">
            <span className="card-badge">COMING SOON</span>
            <h3>Agentic System</h3>
        </div>
    </div>
);

const LaunchFreeCampaignsCard = ({ className = '', ...props }) => (
    <div className={`feature-card feature-wide card-free-campaigns ${className}`} {...props}>
        <div className="campaign-interface">
            <div className="launch-circle">
                <Rocket size={24} className="rocket-icon" />
            </div>
            <div className="floating-plus plus-1"><Plus size={12} /></div>
            <div className="floating-plus plus-2"><Plus size={16} /></div>
            <div className="floating-plus plus-3"><Plus size={10} /></div>
        </div>
        <div className="card-content">
            <span className="card-badge">COMING SOON</span>
            <h3>Launch Free Campaigns</h3>
        </div>
    </div>
);

const Features = () => {
    const [ref, isVisible] = useScrollObserver({ threshold: 0.1 });
    const scrollContainerRef = React.useRef(null);
    const [activeIndex, setActiveIndex] = React.useState(0);
    const [isMobile, setIsMobile] = React.useState(false);

    // Original list
    const originalCardList = [
        SmartDiscoveryCard,
        AnalyticsCard,
        DigitalContractCard,
        CampaignTrackingCard,
        AgenticSystemCard,
        LaunchFreeCampaignsCard
    ];

    // Conditionally triple the list only for mobile infinite scroll
    const cardList = isMobile
        ? [...originalCardList, ...originalCardList, ...originalCardList]
        : originalCardList;

    React.useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        // Initial check
        checkMobile();

        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    React.useEffect(() => {
        const container = scrollContainerRef.current;
        if (!container) return;

        const handleScroll = () => {
            if (!container || !isMobile) return;

            const scrollLeft = container.scrollLeft;
            const scrollWidth = container.scrollWidth;
            const clientWidth = container.offsetWidth;

            // Total width of one set of cards (approximate is fine, but precise is better)
            // Since we possess 3 identical sets, one set is 1/3 of total scrollable width
            const singleSetWidth = scrollWidth / 3;

            // If we've scrolled into the third set (Set C), jump back to Set B
            if (scrollLeft >= singleSetWidth * 2) {
                container.style.scrollBehavior = 'auto'; // Disable smooth scroll for instant jump
                container.scrollLeft = scrollLeft - singleSetWidth;
                container.style.scrollBehavior = 'smooth'; // Re-enable
            }
            // If we've scrolled into the first set (Set A), jump forward to Set B
            else if (scrollLeft <= 50) { // Using a small buffer instead of 0
                container.style.scrollBehavior = 'auto';
                container.scrollLeft = scrollLeft + singleSetWidth;
                container.style.scrollBehavior = 'smooth';
            }
        };

        // Initialize scroll position to the start of the middle set (Set B)
        const initScroll = () => {
            if (!isMobile) return;
            const scrollWidth = container.scrollWidth;
            const singleSetWidth = scrollWidth / 3;
            container.scrollLeft = singleSetWidth;
        };

        // Run initialization
        // We use requestAnimationFrame to wait for layout to settle
        requestAnimationFrame(() => {
            initScroll();
            // Add listener after initial positioning
            if (isMobile) {
                container.addEventListener('scroll', handleScroll);
            }
        });

        // Observer for Active Dot and Scaling Effect
        const activeObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-active-card');
                    // Calculate "real" index based on dataset or modulo
                    // Each card will have data-real-index
                    const index = Number(entry.target.dataset.realIndex);
                    if (!isNaN(index)) {
                        setActiveIndex(index);
                    }
                } else {
                    entry.target.classList.remove('is-active-card');
                }
            });
        }, { root: container, threshold: 0.6 });

        const cards = container.querySelectorAll('.feature-card');
        cards.forEach(card => activeObserver.observe(card));

        return () => {
            container.removeEventListener('scroll', handleScroll);
            activeObserver.disconnect();
        };
    }, [isMobile]);

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

                {/* Triple List Structure for Infinite Scroll */}
                <div className="features-grid" ref={scrollContainerRef}>
                    {cardList.map((Component, i) => {
                        // Calculate the "real" index (0-5) regardless of clone set
                        const realIndex = i % originalCardList.length;
                        return (
                            <div key={`card-${i}`} className="real-card-wrapper" style={{ display: 'contents' }}>
                                <Component className="feature-card" data-real-index={realIndex} />
                            </div>
                        );
                    })}
                </div>

                {/* Pagination Dots (Mobile Only) */}
                <div className="mobile-dots">
                    {originalCardList.map((_, i) => (
                        <div
                            key={i}
                            className={`dot ${i === activeIndex ? 'active' : ''}`}
                        />
                    ))}
                </div>
            </div>
        </section >
    );
};

export default Features;
