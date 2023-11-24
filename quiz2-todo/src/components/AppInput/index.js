import styles from "./AppInput.module.scss";

export default function AppInput() {
  return (
    <div className={styles.AppInput}>
      <div className={styles.AppInput__Input}>
        <input placeholder="Search note..." />
        <div className={styles.AppInput__Icon}>
          <svg
            viewBox="0 0 24 24"
            width="24"
            height="24"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="css-i6dzq1"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
        </div>
      </div>
      <select className={styles.AppInput__Select}>
        <option>All</option>
        <option>Completed</option>
      </select>
      <button className={styles.AppInput__Button}>
        <svg
          viewBox="0 0 24 24"
          width="24"
          height="24"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="css-i6dzq1"
        >
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
        </svg>
      </button>
    </div>
  );
}
