import React, { Component } from 'react';
import FeedbackWidget from './Feedback/Feedback';

class App extends Component {
  state = {
    feedback: {
      good: 0,
      neutral: 0,
      bad: 0,
    },
  };

  render() {
    const { feedback } = this.state;

    return (
      <div>
        <FeedbackWidget feedback={feedback} />
      </div>
    );
  }
}

export default App;
