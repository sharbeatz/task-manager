import styles from "./AddTaskButton.module.css";
import { Link } from "react-router-dom";
export const AddTaskButton = () => {
  return (
    <div>
      {/* role = "button" - помогает screen readers понимать, что это кликабельно
      как кнопка. */}
      <Link className={styles.newTask} to={"/task/new"} role="button">
        Создать новую задачу
      </Link>
    </div>
  );
};
