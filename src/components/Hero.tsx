import React from 'react';
import './Hero.css';

const Hero: React.FC = () => {
    return (
        <section className="hero">
            <div className="container hero-container">
                <h1 className="hero-headline">
                    <span className="serif-italic">infinite</span> possibilities<br />
                    single <span className="serif-italic">prompt</span>.
                </h1>

                <p className="hero-subheadline">
                    Enable your limitless potential with <span className="serif-italic">Agen8</span>. You can now automate infinite number of apps simultaneously.
                </p>

                <div className="hero-input-wrapper">
                    <div className="hero-input-label">
                        What are you looking for?
                    </div>
                    <input
                        type="text"
                        placeholder="e.g. Build a customer support agent that replies to emails"
                        className="hero-input"
                    />
                    <button className="hero-submit-btn" aria-label="Send">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M22 2L11 13" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M22 2L15 22L11 13L2 9L22 2Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                </div>

                <p className="hero-footer-text">
                    No code. No setup. No limits.
                </p>
            </div>
        </section>
    );
};

export default Hero;
