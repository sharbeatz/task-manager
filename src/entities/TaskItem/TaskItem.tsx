import styles from "./TaskItem.module.css";
import type { Task } from "../../shared/types/task";
import { Link } from "react-router-dom";
import { colors } from "../../const";
import { taskRoutes } from "@/app/const";
import { useDispatch } from "react-redux";
import { deleteTask } from "@/features/TaskList/model/TasksSlice";
import { formatDate } from "./model/utils";

type TaskItemProps = {
  task: Task;
};

export const TaskItem = ({ task }: TaskItemProps) => {
  const dispatch = useDispatch();
  const id = task.id; // id задачи.
  const handleDelete = () => {
    dispatch(deleteTask(id));
  };
  return (
    <div className={styles.card}>
      <div className={styles.menu}>
        <Link
          className={styles.editTaskButton}
          to={`${taskRoutes.editForm}/${id}`}
        >
          ✏️
        </Link>
        <button className={styles.deleteTaskButton} onClick={handleDelete}>
          🗑️
        </button>
      </div>

      <h1 className={styles.cardTittle}>{task.title}</h1>

      <p className={styles.cardDescription}>{task.description}</p>
      <div className={styles.cardInfo}>
        <p className={`${styles.category} ${styles[task.category]}`}>
          {task.category}
        </p>
        <p className={`${styles.status} ${styles[task.status]}`}>
          {task.status}
        </p>
        <p className={`${styles.priority} ${styles[task.priority]}`}>
          {task.priority}
        </p>
      </div>
      <div className={styles.createdAt}>
        <small>Создана {formatDate(task.created_at)}</small>
      </div>
    </div>
  );
};

// Что-то придумать с дублирвоанием TaskItem и TaskDetails
