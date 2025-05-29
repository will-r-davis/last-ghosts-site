import React from 'react';
import './HeroSection.css';
import AnimatedOutlineButton from './AnimatedOutlineButton';


const navLinks = [
    { name: 'About', href: '#' },
    { name: 'Music', href: '#' },
    { name: 'Schedule', href: '#' },
    { name: 'EPK', href: '#' },
    { name: 'Contact', href: '#' },
];

const socialLinks = [
    { name: 'Apple Music', href: '#', icon: 'fab fa-apple' },
    { name: 'Spotify', href: '#', icon: 'fab fa-spotify' },
    { name: 'Bandcamp', href: '#', icon: 'fab fa-bandcamp' },
    { name: 'TikTok', href: '#', icon: 'fab fa-tiktok' },
    { name: 'YouTube', href: '#', icon: 'fab fa-youtube' },
    { name: 'Instagram', href: '#', icon: 'fab fa-instagram' },
    { name: 'Facebook', href: '#', icon: 'fab fa-facebook' },
];

const HeroSection = () => (
    <section className="hero-section">
        <div className="hero-content">
            <h1 className="hero-title">Last Ghosts</h1>
            <nav className="hero-nav">
                <ul className="hero-nav-list">
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <a
                                href={link.href}
                                className="hero-nav-link"
                            >
                                {link.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
        <div className="hero-socials">
            <ul className="hero-socials-list">
                {socialLinks.map((link) => (
                    <li key={link.name}>
                        <a
                            href={link.href}
                            className="hero-social-link"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={link.name}
                        >
                            <i className={link.icon}></i>
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    </section>
);

export default HeroSection;

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"></link>