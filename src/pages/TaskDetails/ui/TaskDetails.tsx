import styles from "./TaskDetails.module.css";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useTasks } from "../../../features/TaskList/model/TaskContext";
import { colors } from "../../../const";
import { useState } from "react";
import type { Task } from "../../../shared/types/task";
import { cardInfo } from "../../../const";
import Button from "@/shared/ui/Button/Button";

export const TaskDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();


  console.log(task);
  const [editing, setEditing] = useState<boolean>(false);


  // Кнопка сохранения изменений
  const handleSave = () => {
    updateTask(task.id, text);
    setEditing(false);
  };

  const handleCancel = () => {
    setEditing(false);
    setText(task);
  };

  console.log(tasks.map((item) => item));

  const color = {
    category: { backgroundColor: colors.category[task.category] },
    status: { backgroundColor: colors.status[task.status] },
    priority: { backgroundColor: colors.priority[task.priority] },
  };

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

  

// Что-то придумать с дублирвоанием TaskItem и TaskDetails
