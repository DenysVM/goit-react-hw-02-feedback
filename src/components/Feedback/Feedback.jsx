import React, { Component } from 'react';
import Section from './Section';
import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions';
import Notification from './Notification';
import styles from "./Feedback.module.css"

class FeedbackWidget extends Component {
  constructor(props) {
    super(props);

    this.state = {
      feedback: {
        good: 0,
        neutral: 0,
        bad: 0,
      },
    };
  }

  handleFeedback = (type) => {
    this.setState((prevState) => ({
      feedback: {
        ...prevState.feedback,
        [type]: prevState.feedback[type] + 1,
      },
    }));
  };

  countTotalFeedback() {
    const { good, neutral, bad } = this.state.feedback;
    return good + neutral + bad;
  }

  countPositiveFeedbackPercentage() {
    const { good } = this.state.feedback;
    const total = this.countTotalFeedback();
    return total === 0 ? 0 : Math.round((good / total) * 100);
  }

  render() {
    const { feedback } = this.state;
    const totalFeedback = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();
    const options = ['good', 'neutral', 'bad'];

    return (
      <div className={styles['feedback-container']}>
        <Section title="Please leave feedback">
          <FeedbackOptions options={options} onLeaveFeedback={this.handleFeedback} />
        </Section>

        <Section title="Statistics">
          {totalFeedback === 0 ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics
              good={feedback.good}
              neutral={feedback.neutral}
              bad={feedback.bad}
              total={totalFeedback}
              positivePercentage={positivePercentage}
            />
          )}
        </Section>
      </div>
    );
  }
}

export default FeedbackWidget;
