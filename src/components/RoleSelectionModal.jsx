import { useEffect, useState } from 'react';
import './RoleSelectionModal.css';
import SignInModal from './SignInModal';

const RoleSelectionModal = ({ isOpen, onClose }) => {
    const [showLogin, setShowLogin] = useState(false);
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    // Reset login state when modal closes completely (unmounts or closes)
    useEffect(() => {
        if (!isOpen) {
            const timer = setTimeout(() => setShowLogin(false), 300); // Wait for animation if any
            return () => clearTimeout(timer);
        }
    }, [isOpen]);

    if (!isOpen) return null;

    const handleRoleSelect = (role) => {
        console.log(`Selected role: ${role}`);
        localStorage.setItem('userRole', role); // Save role for post-login
        setShowLogin(true);
    };

    if (showLogin) {
        return <SignInModal isOpen={true} onClose={onClose} />;
    }

    return (
        <div className="role-modal-overlay" onClick={onClose}>
            <div className="role-modal-content" onClick={e => e.stopPropagation()}>
                <button className="role-modal-close" onClick={onClose}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M18 6L6 18M6 6l12 12" />
                    </svg>
                </button>

                <div className="role-modal-header">
                    <h2 className="role-modal-title">Choose Your Path</h2>
                    <p className="role-modal-subtitle">Select how you want to join Collabifyy</p>
                </div>

                <div className="role-grid">
                    <div className="role-card" onClick={() => handleRoleSelect('brand')}>
                        <div className="role-icon">
                            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                                <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                                <line x1="12" y1="22.08" x2="12" y2="12" />
                            </svg>
                        </div>
                        <h3 className="role-title">Join as a Brand</h3>
                        <p className="role-description">
                            Discover authentic creators, manage campaigns, and scale your reach with AI-powered matching
                        </p>
                        <div className="role-arrow">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </div>
                    </div>

                    <div className="role-card" onClick={() => handleRoleSelect('creator')}>
                        <div className="role-icon">
                            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                                <circle cx="9" cy="7" r="4" />
                                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                            </svg>
                        </div>
                        <h3 className="role-title">Join as a Creator</h3>
                        <p className="role-description">
                            Get discovered by top brands, secure earnings, and monetize your content with exclusive opportunities
                        </p>
                        <div className="role-arrow">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RoleSelectionModal;
