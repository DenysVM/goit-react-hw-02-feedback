import styles from '../Feedback.module.css'

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div>
      {options.map((option) => (
        <button key={option} onClick={() => onLeaveFeedback(option)} className={styles.feedback_button}>
          {option}
        </button>
      ))}
    </div>
  );
};

export default FeedbackOptions;