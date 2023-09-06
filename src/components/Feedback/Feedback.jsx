import React, { Component } from 'react';
import styles from "./Feedback.module.css"


class FeedbackWidget extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  handleFeedback = (type) => {
    this.setState((prevState) => ({
      [type]: prevState[type] + 1
    }));
  };

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <div className={styles['feedback-container']}>
        <h1>Please leave feedback</h1>
        <div>
          <button onClick={() => this.handleFeedback('good')}  className={styles['feedback-button']}>Good</button>
          <button onClick={() => this.handleFeedback('neutral')}  className={styles['feedback-button']}>Neutral</button>
          <button onClick={() => this.handleFeedback('bad')}  className={styles['feedback-button']}>Bad</button>
        </div>
        <h2 className={styles['feedback-stats']}>Statistic</h2>
        <div>
          <p>Good: {good}</p>
          <p>Neutral: {neutral}</p>
          <p>Bad: {bad}</p>
        </div>
      </div>
    );
  }
}

export default FeedbackWidget;

