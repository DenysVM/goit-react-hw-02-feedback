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

    countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  }

  countPositiveFeedbackPercentage() {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    return total === 0 ? 0 : Math.round((good / total) * 100);
  }

  render() {
    const { good, neutral, bad } = this.state;
    const totalFeedback = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();

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
            <p>Total: {totalFeedback}</p>
          <p>Positive feedback: {positivePercentage}%</p>
        </div>
      </div>
    );
  }
}

export default FeedbackWidget;

