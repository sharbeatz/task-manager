import styles from "./TaskItem.module.css";
// import { useTasks } from "../../features/TaskList/model/TaskContext";
import type { Task } from "../../shared/types/task";
import { Link } from "react-router-dom";
import { colors } from "../../const";
import { taskRoutes } from "@/app/const";
import { useDispatch } from "react-redux";
import { deleteTask } from "@/features/TaskList/model/TasksSlice";

type TaskItemProps = {
  task: Task;
};

export const TaskItem = ({ task }: TaskItemProps) => {
  const dispatch = useDispatch();
  const id = task.id!; // id задачи.
  return (
    <div className={styles.card}>
      <div className={styles.dropdownMenu}>
        <button className={styles.menuBtn}>Dropdown</button>
        <div className={styles.subMenu}>
          <button
            className={styles.deleteTask}
            onClick={() => dispatch(deleteTask(id))}
          >
            Удалить
          </button>
          <Link to={`${taskRoutes.editForm}/${id}`}>Редактировать</Link>
        </div>
      </div>
      <Link to={`${taskRoutes.detailsPage}/${id}`}>
        <h2 className={styles.cardTittle}>{task.title}</h2>
      </Link>
      <p className={styles.cardDescription}>{task.description}</p>
      <div className={styles.cardInfo}>
        <p
          className={styles.category}
          style={{ background: colors.category[task.category] }}
        >
          {task.category}
        </p>
        <p
          className={styles.status}
          style={{ background: colors.status[task.status] }}
        >
          {task.status}
        </p>
        <p
          className={styles.priority}
          style={{ background: colors.priority[task.priority] }}
        >
          {task.priority}
        </p>
      </div>
    </div>
  );
};

// Что-то придумать с дублирвоанием TaskItem и TaskDetails
