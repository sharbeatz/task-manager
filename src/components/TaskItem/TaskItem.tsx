import styles from "./TaskItem.module.css";
import { useTasks } from "../../context/TaskContext";
import type { Task } from "../../types/task";
import { Link } from "react-router-dom";
import { colors } from "../../const";

type TaskItemProps = {
  task: Task;
}

export const TaskItem = ({task}:TaskItemProps) => { 


  const id = task.id!; // id задачи.
  return (
    <div className={styles.card}>
       <Link to={id}>
      <h2 className={styles.cardTittle}>{task.title}</h2>
        </Link>
      <p className={styles.cardDescription}>{task.description}</p>
      <div className={styles.cardInfo}>
        <p className={styles.category} style={{ background: colors.category[task.category] }}>{task.category}</p>
        <p className={styles.status} style={{ background: colors.status[task.status] }}>{task.status}</p>
        <p className={styles.priority} style= {{ background: colors.priority[task.priority]}} >{task.priority}</p>
      </div>


    </div>
  )
}

// Что-то придумать с дублирвоанием TaskItem и TaskDetails