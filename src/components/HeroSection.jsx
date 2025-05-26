import React from 'react';
import './HeroSection.css';

const backgroundImage = 'https://via.placeholder.com/1600x900?text=Background+Image';

const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Music', href: '#' },
    { name: 'Tour', href: '#' },
    { name: 'About', href: '#' },
    { name: 'Contact', href: '#' },
];

const HeroSection = () => (
    <section
        className="hero-section"
        style={{ backgroundImage: `url(${backgroundImage})` }}
    >
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
    </section>
);

export default HeroSection;