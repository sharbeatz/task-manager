import styles from "./TaskDetails.module.css";
import { Link, useParams, useNavigate } from "react-router-dom";

import { colors } from "../../../const";
import { useState } from "react";
import type { Task } from "../../../shared/types/task";
import { cardInfo } from "../../../const";
import Button from "@/shared/ui/Button/Button";
import { useSelector } from "react-redux";
import type { RootState } from "@/app/model/store";

export const TaskDetailsPage = () => {
  const { id } = useParams();

  // вынести скорее всего надо будет отдельно
  const tasks = useSelector((state: RootState) => state.tasks.tasks);
  const task = tasks.find((task) => task.id === id)!;

  console.log(task);
  const [editing, setEditing] = useState<boolean>(false);

  console.log(tasks.map((item) => item));

  const color = {
    category: { backgroundColor: colors.category[task.category] },
    status: { backgroundColor: colors.status[task.status] },
    priority: { backgroundColor: colors.priority[task.priority] },
  };

  // вынести отдельно позже
  const navigate = useNavigate();
  const handleBack = (event: React.MouseEvent<HTMLAnchorElement>) => {
    navigate(-1);
  };
  // Форма Просмотра
  if (!editing) {
    return (
      <>
        <div className={styles.card}>
          <h2 className={styles.cardTittle}>{task.title}</h2>
          <p className={styles.cardDescription}>{task.description}</p>
          <div className={styles.cardInfo}>
            <p className={styles.category} style={color.category}>
              {task.category}
            </p>
            <p className={styles.status} style={color.status}>
              {task.status}
            </p>
            <p className={styles.priority} style={color.priority}>
              {task.priority}
            </p>
            <button
              className={styles.editButton}
              onClick={() => setEditing(true)}
            >
              Редактировать
            </button>
          </div>
        </div>
        <Button onClick={handleBack}>Назад</Button>
      </>
    );
  }
};
// Что-то придумать с дублирвоанием TaskItem и TaskDetails
