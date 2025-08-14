import React, { useState } from 'react';
import '../styles/ContactSection.css';

export default function ContactSection() {
    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would handle sending the email to your backend or service
        setSubmitted(true);
    };

    return (
        <section id="contact" className="contact-section">
            <h2 className="contact-heading">Contact</h2>
            <p className="contact-intro">Join our email list for updates and news!</p>
            {!submitted ? (
                <form className="contact-form" onSubmit={handleSubmit}>
                    <input
                        type="email"
                        className="contact-input"
                        placeholder="Enter your email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        required
                    />
                    <button type="submit" className="contact-button">Subscribe</button>
                </form>
            ) : (
                <p className="contact-success">Thank you for subscribing!</p>
            )}
        </section>
    );
}