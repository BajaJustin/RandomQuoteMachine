import React, { Component } from 'react';
// Bootstrap imports
import Button from 'react-bootstrap/Button';

// CSS imports
import '../css/style.css';

// Quotes and authors
const quotes = {
  quote: [
    "If something stands between you and your success, move it. Never be denied.", 
    "Don’t be afraid of failure. This is the way to succeed.",
    "You dream. You plan. You reach. There will be obstacles. There will be doubters. There will be mistakes. But with hard work, with belief, with confidence and trust in yourself and those around you, there are no limits.",
    "The only person who can stop you from reaching your goals is you.",
    "It doesn’t matter what you’re trying to accomplish. It’s all a matter of discipline."],
  author: ["Dwayne The Rock Johnson", "LeBron James","Michael Phelps", "Jackie Joyner-Kersee","Wilma Rudolph"]
}

class QuoteMachine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: quotes.quote[0],
      author: quotes.author[0]
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const randomNumber = Math.floor(Math.random() * quotes.quote.length)
    this.setState({
      text: quotes.quote[randomNumber],
      author: quotes.author[randomNumber]
    });
  }

  render() {
    return (
      <div id="quote-box" className="text-center pt-4 pb-4">
        <div className="text-quote">
          <p id="text">{this.state.text}</p>
        </div> {/* text-quote */}
        <div className="auhtor-quote">
          <p id="author"> - {this.state.author}</p>
        </div> {/* author-quote */}
        <div id="buttons">
          <button className="btn btn-primary"id="new-quote" onClick={this.handleClick}>New Quote</button>
          <button className="btn" ><a href="twitter.com/intent/tweet" id="tweet-quote">Tweet</a></button>
        </div> {/* buttons */}
    </div>
    );
  }
}

export default QuoteMachine;