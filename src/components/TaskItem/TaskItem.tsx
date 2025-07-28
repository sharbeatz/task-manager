import styles from "./TaskItem.module.css";
import { useTasks } from "../../context/TaskContext";
import type { Task } from "../../types/task";
import { Link } from "react-router-dom";

type TaskItemProps = {
  task: Task;
}

export const TaskItem = ({task}:TaskItemProps) => { 
  console.log(task.id)
  const id = task.id!; // id задачи.
  return (
    <div className={styles.card}>
       <Link to={id}>
      <h2 className={styles.cardTittle}>{task.title}</h2>
      <p className={styles.cardDescription}>{task.description}</p>
      </Link>
      <div className={styles.cardInfo}>
        <p className={styles.category}>{task.category}</p>
        <p className={styles.status}>{task.status}</p>
        <p className={styles.priority}>{task.priority}</p>
      </div>
    </div>
  )
}