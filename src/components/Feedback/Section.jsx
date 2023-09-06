import styles from "./Feedback.module.css"

const Section = ({ title, children }) => {
  return (
    <div>
      <h1  className={styles['feedback-stats']}>{title}</h1>
      {children}
    </div>
  );
};

export default Section;
