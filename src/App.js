import React from 'react';
import QuoteBox from './components/QuoteBox';

import { randomNum } from './helpers';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      themeColor: '#000',
    };
    this.themeChange = this.themeChange.bind(this);
  }

  themeChange() {
    this.setState({
      themeColor: `rgb(${randomNum(0, 255)}, ${randomNum(0, 255)}, ${randomNum(
        0,
        255
      )})`,
    });
  }

  render() {
    return (
      <div
        className="app"
        style={{
          backgroundColor: this.state.themeColor,
          color: this.state.themeColor,
        }}
      >
        <QuoteBox
          themeColor={this.state.themeColor}
          themeChange={this.themeChange}
        />
      </div>
    );
  }
}

export default App;
