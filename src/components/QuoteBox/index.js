import React from 'react';

// Components
import QuoteText from '../QuoteText';
import QuoteAuthor from '../QuoteAuthor';
import TweetLink from '../TweetLink';
import GetQuoteButton from '../GetQuoteButton';

import { randomItem } from '../../helpers';

const endpoint =
  'https://gist.githubusercontent.com/jonrutter/400699473fcb2e61ae4584564cf76c4d/raw/72cfe8b4b1b95b4b9c464cdcdd29fdd5f2e7004b/quotes.json';

// Keeping the list of quotes as a regular variable instead of state, because the quotes will not be changed over the life of the program
// let quotes;

class QuoteBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: [],
      selectedQuote: { quote: '', author: '' },
    };
    this.setRandomQuote = this.setRandomQuote.bind(this);
  }

  setRandomQuote() {
    this.setState((prevState) => ({
      selectedQuote: randomItem(prevState.quotes),
    }));

    this.props.themeChange();
  }

  componentDidMount() {
    // Fetching the quotes
    fetch(endpoint)
      .then((response) => response.json())
      .then((data) => {
        this.setState({ quotes: data.quotes });
        this.setRandomQuote();
      });
  }

  render() {
    if (this.state.quotes.length > 0) {
      const quote = this.state.selectedQuote.quote;
      const author = this.state.selectedQuote.author;
      const color = this.props.themeColor;
      return (
        <main className="quotebox" id="quote-box">
          <QuoteText quote={quote} />
          <QuoteAuthor author={author} />
          <div className="quotebox__buttons">
            <TweetLink quote={quote} author={author} color={color} />
            <GetQuoteButton handleClick={this.setRandomQuote} color={color} />
          </div>
        </main>
      );
    } else {
      return null;
    }
  }
}

export default QuoteBox;
