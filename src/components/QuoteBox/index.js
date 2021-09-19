import React, { useState, useEffect } from 'react';

// styles
import s from './QuoteBox.module.css';

// Components
import TweetButton from '../TweetButton';
import NewQuoteButton from '../NewQuoteButton';

// icons
import { FaQuoteLeft } from 'react-icons/fa';

// helpers
import { randomItem } from '../../helpers';

const endpoint =
  'https://gist.githubusercontent.com/jonrutter/400699473fcb2e61ae4584564cf76c4d/raw/72cfe8b4b1b95b4b9c464cdcdd29fdd5f2e7004b/quotes.json';

// Keeping the list of quotes as a regular variable instead of state, because the quotes will not be changed over the life of the program
// let quotes;

const QuoteBox = ({ themeColor, updateTheme }) => {
  const [quotes, setQuotes] = useState([]);
  const [selectedQuote, setSelectedQuote] = useState({});

  const updateQuote = () => {
    setSelectedQuote(randomItem(quotes));
  };

  useEffect(() => {
    fetch(endpoint)
      .then((response) => response.json())
      .then((data) => {
        setQuotes(data.quotes);
      });
  }, []);

  useEffect(() => {
    setSelectedQuote(randomItem(quotes));
  }, [quotes]);

  if (selectedQuote && Object.keys(selectedQuote).length) {
    const quote = selectedQuote.quote;
    const author = selectedQuote.author;
    return (
      <div className={s.wrapper}>
        <main className={s.content} id="quote-box">
          <p className={s.quote} id="text">
            <FaQuoteLeft /> {quote}
          </p>
          <p className={s.author} id="author">
            --{author}
          </p>
          <div className={s.buttons}>
            <TweetButton quote={quote} author={author} />
            <NewQuoteButton updateQuote={updateQuote} />
          </div>
        </main>
        <p className={s.attribution}>
          Made by{' '}
          <a
            href="https://github.com/jonrutter"
            target="_blank"
            rel="noreferrer"
          >
            Jon Rutter
          </a>
        </p>
      </div>
    );
  } else {
    return (
      <div className={s.loadWrap}>
        <h1>Loading...</h1>
      </div>
    );
  }
};

export default QuoteBox;
