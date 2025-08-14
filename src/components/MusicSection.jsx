import React from 'react';
import '../styles/MusicSection.css';

export default function MusicSection() {   
    return (
        <section id="music" className="music-section">
            <h2 className="music-heading">Music</h2>
            <p className="music-intro">Our latest video:</p>
            <div className="music-video-container">
                <iframe width="800" height="450" src="https://www.youtube.com/embed/ENeMDUwHiTk?si=PGBXBTjNiEE8gsdJ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
        </section>
    );
}