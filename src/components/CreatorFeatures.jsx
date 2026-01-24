import React from 'react';
import './Features.css'; // Reuse styles
import useScrollObserver from '../hooks/useScrollObserver';
import { Search, MessageCircle, User, Sparkles, TrendingUp, BarChart3, ArrowUpRight, CheckCircle, Clock, FileText, Shield, PenTool, Cpu, Zap, Share2, Rocket, Plus, Image, Video } from 'lucide-react';

const GetDiscoveredCard = ({ className = '', ...props }) => (
    <div className={`feature-card feature-large card-ai ${className}`} {...props}>
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
);

const SecureEarningCard = ({ className = '', ...props }) => (
    <div className={`feature-card feature-wide card-payments ${className}`} {...props}>
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
);

const DiscoverLiveCampaignsCard = ({ className = '', ...props }) => (
    <div className={`feature-card feature-big card-analytics ${className}`} {...props}>
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
);

const CreatorToolsCard = ({ className = '', ...props }) => (
    <div className={`feature-card feature-big card-free-campaigns ${className}`} {...props}>
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
);

const CreatorFeatures = () => {
    const [ref, isVisible] = useScrollObserver({ threshold: 0.1 });
    const scrollContainerRef = React.useRef(null);
    const [activeIndex, setActiveIndex] = React.useState(0);
    const [isMobile, setIsMobile] = React.useState(false);

    const originalCardList = [
        GetDiscoveredCard,
        SecureEarningCard,
        DigitalContractCard,
        DiscoverLiveCampaignsCard,
        CreatorToolsCard
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

    const tickingRef = React.useRef(false);

    React.useEffect(() => {
        const container = scrollContainerRef.current;
        if (!container) return;

        const checkScrollPosition = () => {
            const scrollLeft = container.scrollLeft;
            const scrollWidth = container.scrollWidth;

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
            else if (scrollLeft <= 50) {
                container.style.scrollBehavior = 'auto';
                container.scrollLeft = scrollLeft + singleSetWidth;
                container.style.scrollBehavior = 'smooth';
            }
        };

        const handleScroll = () => {
            if (!container || !isMobile) return;

            if (!tickingRef.current) {
                window.requestAnimationFrame(() => {
                    checkScrollPosition();
                    tickingRef.current = false;
                });
                tickingRef.current = true;
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
        requestAnimationFrame(() => {
            initScroll();
            if (isMobile) {
                container.addEventListener('scroll', handleScroll);
            }
        });

        // Observer for Active Dot and Scaling Effect
        const activeObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-active-card');
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

                {/* Triple List Structure for Infinite Scroll */}
                <div className="features-grid" ref={scrollContainerRef}>
                    {cardList.map((Component, i) => {
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
        </section>
    );
};

export default CreatorFeatures;
