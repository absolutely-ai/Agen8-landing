import React, { useState, useEffect } from 'react';
import { supabase } from '../lib/supabaseClient';
import './EarlyAccess.css';

// SVG Icons from Integration (duplicated for self-containment/isolation as requested)
const apps = [
    // Slack
    {
        name: 'Slack',
        viewBox: '0 0 64 64',
        icon: <g><path d="M22.5,40.3c0-3.7,2.8-6.7,6.3-6.7c3.5,0,6.3,3,6.3,6.7v16.6c0,3.7-2.8,6.7-6.3,6.7c-3.5,0-6.3-3-6.3-6.7V40.3z" fill="#E01E5A" /><path d="M40.3,46.2c-3.7,0-6.7-2.8-6.7-6.3s3-6.3,6.7-6.3h16.6c3.7,0,6.7,2.8,6.7,6.3s-3,6.3-6.7,6.3H40.3z" fill="#ECB22E" /><path d="M33.6,7.1c0-3.7,2.8-6.7,6.3-6.7c3.5,0,6.3,3,6.3,6.7V23.7c0,3.7-2.8,6.7-6.3,6.7c-3.5,0-6.3-3-6.3-6.7V7.1z" fill="#2EB67D" /><path d="M7.1,30.4c-3.7,0-6.7-2.8-6.7-6.3c0-3.5,3-6.3,6.7-6.3h16.6c3.7,0,6.7,2.8,6.7,6.3c0,3.5-3,6.3-6.7,6.3H7.1z" fill="#36C5F0" /></g>
    },
    // Gmail
    {
        name: 'Gmail',
        viewBox: '0 0 32 32',
        icon: <g><path d="M29.986 27.715H2.008C.915 27.715 0 26.85 0 25.733V6.376A2.01 2.01 0 0 1 2.008 4.37h27.978c1.093 0 2.008.9 2.008 2.008v19.33c-.025 1.144-.915 2.008-2.008 2.008z" fill="#f2f2f2" /><g fill="#d44c3d"><path d="M2.008 27.715C.9 27.715 0 26.85 0 25.733V6.35c0-1.118.9-1.32 2.008-1.32s2.008.23 2.008 1.32v21.364z" /><path d="M2.008 5.334c1.423 0 1.703.432 1.703 1.016v21.084H2.008c-.94 0-1.703-.762-1.703-1.703V6.35c-.025-.6.28-1.016 1.703-1.016zm0-.28C.9 5.055 0 5.283 0 6.35v19.356a1.98 1.98 0 0 0 2.008 2.008h2.008V6.35C4 5.258 3.126 5.055 2.008 5.055zm27.978.28c1.296 0 1.703.254 1.703.966v19.458c0 .94-.762 1.703-1.703 1.703h-1.703V6.3c-.025-.737.407-.966 1.703-.966zm0-.28c-1.118 0-2.008.152-2.008 1.245v21.44h2.008c1.118 0 2.008-.9 2.008-2.008V6.274c-.025-1.093-.915-1.22-2.008-1.22z" /><path d="M29.986 27.715h-2.008V6.3c0-1.118.9-1.245 2.008-1.245s2.008.152 2.008 1.245v19.458a2 2 0 0 1-2.008 1.957z" /></g><g fill="#d44c3d"><path d="M15.96 18.98L.864 8.028c-.9-.66-1.144-1.93-.483-2.82s1.93-1.093 2.846-.432l12.757 9.275L28.817 4.65c.9-.66 2.135-.457 2.795.457.66.9.457 2.135-.457 2.795z" /></g></g>
    },
    // Google Drive
    {
        name: 'Drive',
        viewBox: '0 0 64 64',
        icon: <g transform="matrix(.460432 0 0 .460432 57.509647 126.82041)"><path d="M-100.704-145.738l-24.2-41.9 45.3-78.5 24.2 41.9z" fill="#0da960" /><path d="M-100.704-145.738l24.2-41.9h90.6l-24.2 41.9z" fill="#2b72ea" /><path d="M14.096-187.638h-48.4l-45.3-78.5h48.4z" fill="#ffd24d" /><path d="M-55.404-187.638h-21.1l10.5-18.3-34.7 60.2z" fill="#2d6fdd" /><path d="M-34.304-187.638h48.4l-58.9-18.3z" fill="#e5b93c" /><path d="M-66.004-205.938l10.6-18.3-24.2-41.9z" fill="#0c9b57" /></g>
    },
    // Figma
    {
        name: 'Figma',
        viewBox: '0 0 7.678 7.68',
        icon: <g><path d="M2.56 7.68A1.28 1.28 0 0 0 3.84 6.4V5.12H2.56a1.28 1.28 0 0 0 0 2.56z" fill="#0acf83" /><path d="M1.28 3.84a1.28 1.28 0 0 1 1.28-1.28h1.28v2.56H2.56a1.28 1.28 0 0 1-1.28-1.28z" fill="#a259ff" /><path d="M1.28 1.28A1.28 1.28 0 0 1 2.559 0h1.28v2.56H2.56a1.28 1.28 0 0 1-1.28-1.28z" fill="#f24e1e" /><path d="M3.84 0h1.28a1.28 1.28 0 0 1 0 2.56H3.84z" fill="#ff7262" /><path d="M6.4 3.84a1.28 1.28 0 0 1-2.56 0 1.28 1.28 0 0 1 2.56 0z" fill="#1abcfe" /></g>
    },
    // Notion
    {
        name: 'Notion',
        viewBox: '0 0 24 24',
        icon: <path d="M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 1.968c-.42-.326-.981-.7-2.055-.607L3.01 2.295c-.466.046-.56.28-.374.466zm.793 3.08v13.904c0 .747.373 1.027 1.214.98l14.523-.84c.841-.046.935-.56.935-1.167V6.354c0-.606-.233-.933-.748-.887l-15.177.887c-.56.047-.747.327-.747.933zm14.337.745c.093.42 0 .84-.42.888l-.7.14v10.264c-.608.327-1.168.514-1.635.514-.748 0-.935-.234-1.495-.933l-4.577-7.186v6.952L12.21 19s0 .84-1.168.84l-3.222.186c-.093-.186 0-.653.327-.746l.84-.233V9.854L7.822 9.76c-.094-.42.14-1.026.793-1.073l3.456-.233 4.764 7.279v-6.44l-1.215-.139c-.093-.514.28-.887.747-.933zM1.936 1.035l13.31-.98c1.634-.14 2.055-.047 3.082.7l4.249 2.986c.7.513.934.653.934 1.213v16.378c0 1.026-.373 1.634-1.68 1.726l-15.458.934c-.98.047-1.448-.093-1.962-.747l-3.129-4.06c-.56-.747-.793-1.306-.793-1.96V2.667c0-.839.374-1.54 1.447-1.632z" fill="#000000" />
    },
    // GitHub
    {
        name: 'GitHub',
        viewBox: '0 0 24 24',
        icon: <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" fill="#181717" />
    },
    // Linear
    {
        name: 'Linear',
        viewBox: '0 0 24 24',
        icon: <path d="M2.886 4.18A11.982 11.982 0 0 1 11.99 0C18.624 0 24 5.376 24 12.009c0 3.64-1.62 6.903-4.18 9.105L2.887 4.18ZM1.817 5.626l16.556 16.556c-.524.33-1.075.62-1.65.866L.951 7.277c.247-.575.537-1.126.866-1.65ZM.322 9.163l14.515 14.515c-.71.172-1.443.282-2.195.322L0 11.358a12 12 0 0 1 .322-2.195Zm-.17 4.862 9.823 9.824a12.02 12.02 0 0 1-9.824-9.824Z" fill="#5E6AD2" />
    },
    // Zoom
    {
        name: 'Zoom',
        viewBox: '0 0 24 24',
        icon: <path d="M18.28 7.3c.1-.1.2-.1.3-.1.3 0 .6.3.6.6v8.4c0 .3-.3.6-.6.6-.1 0-.2 0-.3-.1l-4.4-3.1V9.5l4.4-2.2zM2.8 6.6h9.6c.9 0 1.6.7 1.6 1.6v7.6c0 .9-.7 1.6-1.6 1.6H2.8c-.9 0-1.6-.7-1.6-1.6V8.2c0-.9.7-1.6 1.6-1.6z" fill="#2D8CFF" />
    },
    // Dropbox
    {
        name: 'Dropbox',
        viewBox: '89.9 347.3 32 32',
        icon: <path d="M99.337 348.42L89.9 354.5l6.533 5.263 9.467-5.837m-16 11l9.437 6.2 6.563-5.505-9.467-5.868m9.467 5.868l6.594 5.505 9.406-6.14-6.503-5.233m6.503-5.203l-9.406-6.14-6.594 5.505 9.497 5.837m-9.467 7.047l-6.594 5.474-2.843-1.845v2.087l9.437 5.656 9.437-5.656v-2.087l-2.843 1.845" fill="#007ee5" />
    },
    // Trello
    {
        name: 'Trello',
        viewBox: '0 0 73.323 64',
        icon: <path d="M55.16 1.5H7.88a7.88 7.88 0 0 0-5.572 2.308A7.88 7.88 0 0 0 0 9.39v47.28a7.88 7.88 0 0 0 7.88 7.88h47.28A7.88 7.88 0 0 0 63 56.67V9.4a7.88 7.88 0 0 0-7.84-7.88zM27.42 49.26A3.78 3.78 0 0 1 23.64 53H12a3.78 3.78 0 0 1-3.8-3.74V13.5A3.78 3.78 0 0 1 12 9.71h11.64a3.78 3.78 0 0 1 3.78 3.78zM54.85 33.5a3.78 3.78 0 0 1-3.78 3.78H39.4a3.78 3.78 0 0 1-3.78-3.78v-20a3.78 3.78 0 0 1 3.78-3.79h11.67a3.78 3.78 0 0 1 3.78 3.78z" fill="#0079BF" />
    },
    // Stripe
    {
        name: 'Stripe',
        viewBox: '0 0 32 32',
        icon: <path d="M111.328 15.602c0-4.97-2.415-8.9-7.013-8.9s-7.423 3.924-7.423 8.863c0 5.85 3.32 8.8 8.036 8.8 2.318 0 4.06-.528 5.377-1.26V19.22a10.246 10.246 0 0 1-4.764 1.075c-1.9 0-3.556-.67-3.774-2.943h9.497a39.64 39.64 0 0 0 .063-1.748zm-9.606-1.835c0-2.186 1.35-3.1 2.56-3.1s2.454.906 2.454 3.1zM89.4 6.712a5.434 5.434 0 0 0-3.801 1.509l-.254-1.208h-4.27v22.64l4.85-1.032v-5.488a5.434 5.434 0 0 0 3.444 1.265c3.472 0 6.64-2.792 6.64-8.957.003-5.66-3.206-8.73-6.614-8.73zM88.23 20.1a2.898 2.898 0 0 1-2.288-.906l-.03-7.2a2.928 2.928 0 0 1 2.315-.96c1.775 0 2.998 2 2.998 4.528.003 2.593-1.198 4.546-2.995 4.546zM79.25.57l-4.87 1.035v3.95l4.87-1.032z" fill="#6772e5" transform="translate(-70, 0) scale(1)" />
    },
    // Teams
    {
        name: 'Teams',
        viewBox: '0 0 24 24',
        icon: <path d="M12.9 14.5c0 2.1-1.7 3.8-3.8 3.8-2.1 0-3.8-1.7-3.8-3.8s1.7-3.8 3.8-3.8c2.1 0 3.8 1.7 3.8 3.8zM21 14.5c0 2.1-1.7 3.8-3.8 3.8s-3.8-1.7-3.8-3.8 1.7-3.8 3.8-3.8 3.8 1.7 3.8 3.8z" fill="#6264A7" />
    },
    // Jira
    {
        name: 'Jira',
        viewBox: '0 0 24 24',
        icon: <path d="M11.571 11.513H0a5.218 5.218 0 0 0 5.232 5.215h2.13v2.057A5.215 5.215 0 0 0 12.575 24V12.518a1.005 1.005 0 0 0-1.005-1.005zm5.723-5.756H5.736a5.215 5.215 0 0 0 5.215 5.214h2.129v2.058a5.218 5.218 0 0 0 5.215 5.214V6.758a1.001 1.001 0 0 0-1.001-1.001zM23.013 0H11.455a5.215 5.215 0 0 0 5.215 5.215h2.129v2.057a5.215 5.215 0 0 0 5.215 5.215V1.006a1.006 1.006 0 0 0-1.001-1.006z" fill="#0052CC" />
    },
    // Intercom
    {
        name: 'Intercom',
        viewBox: '0 0 2500 2500',
        icon: <path d="M375.336 1250c0 483.252 391.412 874.664 874.664 874.664 483.252 0 874.664-391.412 874.664-874.664 0-483.252-391.412-874.664-874.664-874.664-483.252 0-874.664 391.412-874.664 874.664zm874.664 1250C559.771 2500 0 1940.23 0 1250S559.771 0 1250 0s1250 559.771 1250 1250-559.771 1250-1250 1250zm580.457-1903.61c-42.062 0-76.162 34.1-76.162 76.161v434.341c0 42.061 34.1 76.161 76.162 76.161 42.061 0 76.161-34.1 76.161-76.161v-434.34c0-42.062-34.1-76.162-76.161-76.162zM792.05 1374.346v-303.497c0-38.358 31.096-69.454 69.454-69.454 38.358 0 69.454 31.096 69.454 69.454v303.497c0 38.358-31.096 69.454-69.454 69.454-38.358 0-69.454-31.096-69.454-69.454z" fill="#1F8CEB" />
    },
    // Zendesk
    {
        name: 'Zendesk',
        viewBox: '0 0 24 24',
        icon: <g fill="#03363D"><path d="M11.9 4.3h-4.3v4.3h-4.3v4.3h4.3v-4.3h4.3v-4.3z" /><path d="M19.1 4.3h-4.3v4.3h4.3v4.3h4.3v-4.3h-4.3v-4.3z" /><path d="M11.9 15.4h-4.3v4.3h-4.3v4.3h4.3v-4.3h4.3v-4.3h4.3v-4.3z" /><path d="M19.1 15.4h-4.3v4.3h4.3v4.3h4.3v-4.3h-4.3v-4.3z" /></g>
    },
];

const EarlyAccess: React.FC = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    // Use a shuffled selection of apps for the cloud
    const cloudApps = React.useMemo(() => {
        // Duplicate to ensure enough density
        const combined = [...apps, ...apps];
        return combined.sort(() => 0.5 - Math.random());
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!email) return;

        setStatus('loading');
        try {
            const { error } = await supabase
                .from('waitlist')
                .insert([{ email }]);

            if (error) throw error;

            setStatus('success');
            setEmail('');
            setTimeout(() => {
                setStatus('idle');
                setIsExpanded(false);
            }, 3000);
        } catch (err: any) {
            console.error('Error adding to waitlist:', err);
            setStatus('error');
            alert(`Error: ${err.message || JSON.stringify(err)}`);
        }
    };

    return (
        <section className="early-access-section">
            <div className="container relative z-10">

                {/* Floating Icon Cloud Container */}
                <div className="early-access-card">
                    <div className="icon-cloud-wrapper">
                        {cloudApps.map((app, index) => {
                            // Assign varied animation delays for organic feel
                            const delay = Math.random() * 5;
                            const duration = 3 + Math.random() * 4; // 3-7s duration

                            // Randomize position slightly provided by CSS or here? 
                            // We'll let CSS handle the cloud layout and just pass inline styles for randomness if needed
                            // Actually using the organic scatter classes from Integration but scoped here

                            return (
                                <div
                                    key={index}
                                    className={`cloud-icon-item item-${index % 5}`}
                                    style={{
                                        animationDelay: `-${delay}s`,
                                        animationDuration: `${duration}s`
                                    }}
                                >
                                    <div className="icon-inner">
                                        <svg viewBox={app.viewBox} fill="none">
                                            {app.icon}
                                        </svg>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    <div className="early-access-content">
                        <h2 className="ea-title">
                            <span className="serif-italic">infinite</span> possibilities<br />single <span className="serif-italic">prompt</span>.
                        </h2>
                        <p className="ea-subtitle">
                            Enable your limitless potential with <span className="serif-italic">Agen8</span>. You can now automate infinite number of apps simultaneously.
                        </p>

                        <div className="ea-form-wrapper">
                            {!isExpanded ? (
                                <button
                                    className="btn btn-primary ea-trigger-btn"
                                    onClick={() => setIsExpanded(true)}
                                >
                                    Join the waitlist
                                </button>
                            ) : (
                                <form onSubmit={handleSubmit} className="ea-form fade-in">
                                    <div className="input-group">
                                        <input
                                            type="email"
                                            placeholder="name@example.com"
                                            className="ea-input"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            autoFocus
                                            required
                                            disabled={status === 'loading' || status === 'success'}
                                        />
                                        <button type="submit" className="btn btn-primary ea-submit-btn" disabled={status === 'loading' || status === 'success'}>
                                            {status === 'loading' ? 'Joining...' : status === 'success' ? 'Joined!' : 'Join'}
                                        </button>
                                    </div>
                                </form>
                            )}
                        </div>

                        <p className="ea-footer-text">
                            <span className="serif-italic">No code. No setup. No limits.</span>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EarlyAccess;
