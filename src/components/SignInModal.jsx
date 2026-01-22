import React, { useEffect } from 'react';
import './SignInModal.css';

const SignInModal = ({ isOpen, onClose }) => {
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

    if (!isOpen) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <button className="modal-close" onClick={onClose}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M18 6L6 18M6 6l12 12" />
                    </svg>
                </button>

                <h2 className="modal-title">Choose your path</h2>

                <div className="modal-grid">
                    <div className="modal-option">
                        <div className="icon-wrapper">
                            🎨
                        </div>
                        <h3 className="option-title">Sign in as Creator</h3>
                        <p className="option-desc">
                            Showcase your talent, connect with top brands, and monetize your content.
                        </p>
                        <div className="btn-arrow">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </div>
                    </div>

                    <div className="modal-option">
                        <div className="icon-wrapper">
                            🚀
                        </div>
                        <h3 className="option-title">Sign in as Brand</h3>
                        <p className="option-desc">
                            Discover authentic creators, manage campaigns, and scale your reach.
                        </p>
                        <div className="btn-arrow">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignInModal;
