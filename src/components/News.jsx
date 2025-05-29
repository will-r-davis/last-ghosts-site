import React from 'react';
import './News.css';

const newsItems = [
  {
    date: '2025-05-20',
    title: 'New Single Released!',
    content: 'Our latest track "Midnight Echoes" is out now on all streaming platforms. Check it out and let us know what you think!'
  },
  {
    date: '2025-04-15',
    title: 'Summer Tour Announced',
    content: 'We\'re hitting the road this summer! Visit the Tour page for dates and tickets.'
  },
  {
    date: '2025-03-10',
    title: 'Thank You for 10k Followers',
    content: 'We just hit 10,000 followers on social media. Thank you for your amazing support!'
  }
];

const News = () => (
  <section className="news-section">
    <h2 className="news-title">Band News</h2>
    <ul className="news-list">
      {newsItems.map((item, idx) => (
        <li key={idx} className="news-item">
          <span className="news-date">{item.date}</span>
          <h3 className="news-headline">{item.title}</h3>
          <p className="news-content">{item.content}</p>
        </li>
      ))}
    </ul>
  </section>
);

export default News;