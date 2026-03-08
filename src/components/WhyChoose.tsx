import React from 'react';
import './WhyChoose.css';

const WhyChoose: React.FC = () => {
    return (
        <section className="why-choose">
            <div className="container">
                <div className="why-choose-card">
                    <div className="section-header text-center">
                        <h2 className="section-title">
                            Why choose <span className="serif-italic">agen8</span>?
                        </h2>
                        <p className="section-subtitle">
                            From node formation to complex workflows, simultaneously acting with a single prompt, an agent that gets your business done.
                        </p>

                        <div className="feature-tags">
                            <span>Prompt-driven</span>
                            <span className="dot">•</span>
                            <span>Autonomous</span>
                            <span className="dot">•</span>
                            <span>Production-ready</span>
                        </div>
                    </div>

                    {/* YouTube Video Embed */}
                    <div className="video-placeholder">
                        <iframe
                            className="video-iframe"
                            src="https://www.youtube-nocookie.com/embed/A30beHR5_no"
                            title="Agen8 Demo"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                        ></iframe>
                    </div>

                    <p className="video-footer-text">
                        Replace your pre-existing AI flows with Agen8, which is more precise, reliable, and faster.
                    </p>

                    <div className="text-center">
                        <button className="btn btn-primary">
                            Try for free
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginLeft: '8px' }}>
                                <path d="M5 12H19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M12 5L19 12L12 19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChoose;
