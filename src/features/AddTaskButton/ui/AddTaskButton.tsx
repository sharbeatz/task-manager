import styles from "./AddTaskButton.module.css";
import { Link } from "react-router-dom";
export const AddTaskButton = () => {
  return (
    <div>
      <button className={styles.newTask}>
        <Link to={"./task/new"}>Создать новую задачу</Link>
      </button>
    </div>
  );
};
