import React from 'react';
import '../styles/EPKSection.css';

export default function EPKSection() {   
    return (
        <section id="epk" className="epk-section">
            <h2 className="epk-heading">Electronic Press Kit</h2>
            <p className="epk-intro">
                Download our EPK for press inquiries, booking information, and band details.
            </p>
            <a
                href="/assets/LastGhosts-EPK.pdf"
                className="epk-download"
                download
                target="_blank"
                rel="noopener noreferrer"
            >
                Download PDF
            </a>
            <div className="epk-details">
                <h3>Band Bio</h3>
                <p>
                    Last Ghosts is an indie band blending drums, bass, and saxophone into a unique, energetic sound. Known for their dynamic live performances and haunting melodies, Last Ghosts brings a fresh spirit to every stage.
                </p>
                <h3>Contact</h3>
                <p>Email: <a href="mailto:booking@lastghosts.com">booking@lastghosts.com</a></p>
                <h3>Social Links</h3>
                <ul>
                    <li><a href="https://music.apple.com/us/artist/last-ghosts/1805279790" target="_blank" rel="noopener noreferrer">Apple Music</a></li>
                    <li><a href="https://open.spotify.com/artist/266uGjsk3PzF7fGg9WgrkW" target="_blank" rel="noopener noreferrer">Spotify</a></li>
                    <li><a href="https://soundcloud.com/lastghosts" target="_blank" rel="noopener noreferrer">SoundCloud</a></li>
                    <li><a href="https://www.youtube.com/channel/UCr8BRZx4fpdAM9wIjiEoYMg" target="_blank" rel="noopener noreferrer">YouTube</a></li>
                    <li><a href="https://www.instagram.com/lastghostsband/" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                    <li><a href="https://facebook.com/profile.php?id=61574590510381" target="_blank" rel="noopener noreferrer">Facebook</a></li>
                    <li><a href="https://www.tiktok.com/@lastghostsband" target="_blank" rel="noopener noreferrer">TikTok</a></li>
                </ul>
            </div>
        </section>
    );
}