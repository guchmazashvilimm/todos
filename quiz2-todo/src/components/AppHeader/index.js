import AppInput from "../AppInput";
import styles from "./AppHeader.module.scss";

export default function AppHeader() {
  return (
    <div className={styles.AppHeader}>
      todo list
      <AppInput />
    </div>
  );
}
