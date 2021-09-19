import React from 'react';

// icon
import { FaTwitter } from 'react-icons/fa';

// styles
import s from './TweetButton.module.css';

const TweetButton = ({ quote, author, color }) => {
  return (
    <a
      href={
        `https://twitter.com/intent/tweet?hashtags=quotes&text=` +
        encodeURIComponent(`"${quote}" - ${author}`)
      }
      id="tweet-quote"
      className={s.button}
      target="_blank"
      rel="noreferrer"
      aria-label="Tweet this quote"
      style={{ backgroundColor: color }}
      title="Tweet this quote"
    >
      <FaTwitter />
    </a>
  );
};

export default TweetButton;
