import React from 'react';
import '../styles/HeroSection.css';
import AnimatedOutlineButton from './AnimatedOutlineButton';


const navLinks = [
  { name: 'About', key: 'about' },
  { name: 'Music', key: 'music' },
  { name: 'Schedule', key: 'schedule' },
  { name: 'EPK', key: 'epk' },
  { name: 'Contact', key: 'contact' },
];

const socialLinks = [
    { name: 'Apple Music', href: 'https://music.apple.com/us/artist/last-ghosts/1805279790', icon: 'fab fa-apple' },
    { name: 'Spotify', href: 'https://open.spotify.com/artist/266uGjsk3PzF7fGg9WgrkW', icon: 'fab fa-spotify' },
    { name: 'SoundCloud', href: 'https://soundcloud.com/lastghosts', icon: 'fab fa-soundcloud' },
    { name: 'YouTube', href: 'https://www.youtube.com/channel/UCr8BRZx4fpdAM9wIjiEoYMg', icon: 'fab fa-youtube' },
    { name: 'Instagram', href: 'https://www.instagram.com/lastghostsband/', icon: 'fab fa-instagram' },
    { name: 'Facebook', href: 'https://facebook.com/profile.php?id=61574590510381', icon: 'fab fa-facebook' },
    { name: 'TikTok', href: 'https://www.tiktok.com/@lastghostsband', icon: 'fab fa-tiktok' },
];

const HeroSection = ({ onNavClick }) => (
    <section className="hero-section">
        <div className="hero-content">
            <h1 className="hero-title">Last Ghosts</h1>
            <nav className="hero-nav">
                <ul className="hero-nav-list">
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <AnimatedOutlineButton onClick={() => onNavClick(link.key)}>
                                {link.name}
                            </AnimatedOutlineButton>
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