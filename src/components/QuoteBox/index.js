import React from 'react';
import { randomItem } from '../../helpers';

const endpoint =
  'https://gist.githubusercontent.com/jonrutter/400699473fcb2e61ae4584564cf76c4d/raw/72cfe8b4b1b95b4b9c464cdcdd29fdd5f2e7004b/quotes.json';

// Keeping the list of quotes as a regular variable instead of state, because the quotes will not be changed over the life of the program
let quotes;

class QuoteBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedQuote: { quote: '', author: '' },
    };
    this.setRandomQuote = this.setRandomQuote.bind(this);
  }

  setRandomQuote() {
    this.setState({ selectedQuote: randomItem(quotes) });
  }

  componentDidMount() {
    // Fetching the quotes
    fetch(endpoint)
      .then((response) => response.json())
      .then((data) => {
        quotes = data.quotes;
        this.setRandomQuote();
      });
  }

  render() {
    if (quotes) {
      return (
        <main className="quotebox" id="quote-box">
          <h1 className="quotebox__quote" id="text">
            {this.state.selectedQuote.quote}
          </h1>
          <p className="quotebox__author">{this.state.selectedQuote.author}</p>
        </main>
      );
    } else {
      return null;
    }
  }
}

export default QuoteBox;
