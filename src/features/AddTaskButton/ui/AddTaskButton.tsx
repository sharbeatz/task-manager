import styles from "./AddTaskButton.module.css";
import { Link } from "react-router-dom";
export const AddTaskButton = () => {
  return (
    <div>
      <Link className={styles.newTask} to={"./task/new"}>
        Создать новую задачу
      </Link>
    </div>
  );
};
