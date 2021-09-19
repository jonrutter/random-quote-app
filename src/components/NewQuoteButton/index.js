import React from 'react';

import s from './NewQuoteButton.module.css';

const NewQuoteButton = ({ updateQuote, color }) => {
  return (
    <button
      type="button"
      onClick={updateQuote}
      className={s.button}
      id="new-quote"
      style={{ backgroundColor: color }}
    >
      New Quote
    </button>
  );
};

export default NewQuoteButton;
