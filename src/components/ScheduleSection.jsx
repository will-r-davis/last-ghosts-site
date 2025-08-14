import React from 'react';
import '../styles/ScheduleSection.css';

const gigs = [
    {
        date: 'Aug 23, 2025',
        venue: 'Venue 1',
        time: '8:00 PM',
        city: 'Chicago, IL',
        address: '123 Main St, Chicago, IL',
        link: 'https://velvetroomchicago.com'
    },
    {
        date: 'Sep 5, 2025',
        venue: 'Venue 2',
        time: '9:00 PM',
        city: 'Detroit, MI',
        address: '456 Elm St, Detroit, MI',
        link: 'https://echoloungedetroit.com'
    },
    {
        date: 'Sep 21, 2025',
        venue: '49 West',
        time: '7:30 PM',
        city: 'Annapolis, MD',
        address: '49 West St, Annapolis, MD',
        link: 'https://49westcoffeehouse.com'
    },
    {
        date: 'Oct 3, 2025',
        venue: 'Venue 3',
        time: '8:30 PM',
        city: 'Milwaukee, WI',
        address: '789 River Rd, Milwaukee, WI',
        link: 'https://riverfrontstagemke.com'
    },
    {
        date: 'Oct 17, 2025',
        venue: 'Venue 4',
        time: '6:00 PM',
        city: 'Madison, WI',
        address: 'Festival Grounds, Madison, WI',
        link: 'https://indiefestmadison.com'
    },
];

export default function ScheduleSection() {
    return (
        <section id="schedule" className="schedule-section">
            <h2 className="schedule-heading">Schedule</h2>
            <p className="schedule-intro">Check out our upcoming shows and events.</p>
            <ul className="gig-list">
                {gigs.map((gig, idx) => (
                    <React.Fragment key={idx}>
                        <li className="gig-item-simple">
                            <div className="gig-top">
                                <span className="gig-date">{gig.date}</span>
                                {' | '}
                                <span className="gig-venue">{gig.venue}</span>
                                {' | '}
                                <span className="gig-time">{gig.time}</span>
                            </div>
                            <div className="gig-bottom">
                                <a
                                    className="gig-link"
                                    href={gig.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Venue Website
                                </a>
                                {' | '}
                                <span className="gig-address">{gig.address}</span>
                            </div>
                        </li>
                        {idx < gigs.length - 1 && <hr className="gig-divider" />}
                    </React.Fragment>
                ))}
            </ul>
        </section>
    );
}