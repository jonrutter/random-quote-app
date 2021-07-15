import React from 'react';

const TweetButton = ({ quote, author }) => {
  return (
    <a
      href={
        `https://twitter.com/intent/tweet?hashtags=quotes&text=` +
        encodeURIComponent(`"${quote}" - ${author}`)
      }
      id="tweet-quote"
      className="btn btn--social"
      target="_blank"
      rel="noreferrer"
    >
      Tweet
    </a>
  );
};

export default TweetButton;
