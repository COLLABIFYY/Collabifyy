import React from 'react';
import './Footer.css';
import { Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="footer-section">
            <div className="footer-container">
                <div className="footer-top">
                    {/* Brand Column */}
                    <div className="footer-brand">
                        <h2 className="footer-logo">Collabifyy</h2>
                        <p className="footer-desc">
                            The ultimate platform connecting visionary brands with creative talent. Scale your influence today.
                        </p>



                        <div className="social-links">
                            <a href="#" className="social-icon" aria-label="Twitter"><Twitter size={18} /></a>
                            <a href="https://www.instagram.com/collabifyy?igsh=MWhodWsxOTkyZTV5cA==" className="social-icon" aria-label="Instagram"><Instagram size={18} /></a>
                            <a href="https://www.linkedin.com/company/collabifyy/" className="social-icon" aria-label="LinkedIn"><Linkedin size={18} /></a>
                        </div>
                    </div>

                    {/* Product Links */}
                    <div className="footer-col">
                        <h3>Product</h3>
                        <ul className="footer-links">
                            <li><a href="#">Features</a></li>
                            <li><a href="#">For Brands</a></li>
                            <li><a href="#">For Creators</a></li>
                            <li><a href="#">Pricing</a></li>
                        </ul>
                    </div>

                    {/* Company Links */}
                    <div className="footer-col">
                        <h3>Company</h3>
                        <ul className="footer-links">
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Careers</a></li>
                            <li><a href="#">Blog</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </div>

                    {/* Resources Links */}


                    {/* Legal Links */}
                    <div className="footer-col">
                        <h3>Legal</h3>
                        <ul className="footer-links">
                            <li><a href="#">Privacy</a></li>
                            <li><a href="#">Terms</a></li>
                            <li><a href="#">Security</a></li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p className="copyright">© 2026 Collabifyy. All rights reserved.</p>
                    <div className="bottom-links">
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
