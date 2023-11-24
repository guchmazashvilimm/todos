import styles from "./AppModal.module.scss";
import AppPortal from "../../AppPortal";

export default function AppModal({
  isVisible,
  onChange,
  note,
  onNoteChange,
  onApply,
}) {
  const handleApply = () => {
    onApply();
    onChange();
  };

  if (!isVisible) return null;

  return (
    <AppPortal>
      <div className={styles.AppModal}>
        <div className={styles.AppModal__Container}>
          <div className={styles.AppModal__Header}>
            <div className={styles.AppModal__Top}>
              <h3>New note</h3>
              <div className={styles.AppModal__Icon} onClick={onChange}>
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
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </div>
            </div>
            <div className={styles.AppModal__Input}>
              <input
                placeholder="Input Your Note..."
                value={note}
                onChange={(e) => onNoteChange(e.target.value)}
              />
            </div>
          </div>
          <div className={styles.AppModal__Actions}>
            <button className={styles.AppModal__Cancel} onClick={onChange}>
              Cancel
            </button>
            <button className={styles.AppModal__Apply} onClick={handleApply}>
              Apply
            </button>
          </div>
        </div>
      </div>
    </AppPortal>
  );
}
