import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
    const [email, setEmail] = React.useState('');
    const [submitted, setSubmitted] = React.useState(false);

    const handleSubmit = () => {
        if (email) {
            setSubmitted(true);
            setTimeout(() => {
                setSubmitted(false);
                setEmail('');
            }, 3000); // Reset after 3s
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            handleSubmit();
        }
    };

    return (
        <footer className="footer-combined">
            {/* Top part is essentially the Early Access Call to Action */}
            <div className="container footer-cta-section">
                <h2 className="footer-cta-title">
                    Get early access to <span style={{ color: '#FF5C00' }}>agen8</span>
                </h2>

                <div className={`email-input-wrapper ${submitted ? 'submitted' : ''}`}>
                    {submitted ? (
                        <div className="success-message">
                            <span>You're on the list! 🚀</span>
                        </div>
                    ) : (
                        <>
                            <input
                                type="email"
                                placeholder="hello@gmail.com"
                                className="email-input-field"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                onKeyDown={handleKeyDown}
                            />
                            <button className="email-submit-btn" onClick={handleSubmit}>
                                Join the waitlist
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </button>
                        </>
                    )}
                </div>
            </div>

            {/* Bottom split section */}
            <div className="container footer-bottom-split">
                <div className="footer-left">
                    <div className="footer-logo-lg">agen8</div>
                    <p className="footer-tagline">
                        infinite possibilities<br />
                        single prompt
                    </p>
                </div>

                <div className="footer-right">
                    <div className="footer-socials">
                        <a href="https://www.instagram.com/danlab.dev" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Instagram">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="2" />
                                <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
                                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                            </svg>
                        </a>
                        <a href="https://twitter.com/agen8" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="X (Twitter)">
                            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                            </svg>
                        </a>
                        <a href="https://linkedin.com/company/agen8" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="LinkedIn">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
