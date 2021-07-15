import React from 'react';

import Button from '../Button';

const GetQuoteButton = ({ handleClick }) => (
  <Button
    btnType="getQuoteButton"
    text="New Quote"
    id="new-quote"
    handleClick={handleClick}
  />
);

export default GetQuoteButton;
