import styles from "./TaskForm.module.css"
import { useState } from "react";
import type { Task } from "@/shared/types/task";
import { useTasks } from "@/features/TaskList/model/TaskContext";
import { useParams } from "react-router-dom";

const TaskForm = () => {
  const { id } = useParams();
    const { tasks, updateTask } = useTasks();
  const task = tasks.find((task) => task.id === id)!; // ! - значит сто проц что есть этот id.
  
  const [text, setText] = useState<Task>(task);

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    const { value, name } = e.target;
    setText((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

// Форма Редактирования
  return (
    <>
      <div className={styles.card}>
        <input
          className={styles.cardTittleEditing}
          value={text.title}
          onChange={handleChange}
          name="title"
        ></input>
        <textarea
          className={styles.cardDescriptionEditing}
          value={text.description}
          onChange={handleChange}
          name="description"
        ></textarea>
        <div className={styles.cardInfo}>
          <select
            className={styles.categoryEditing}
            onChange={handleChange}
            name="category"
            value={text.category}
          >
            {cardInfo.category.map((item) => (
              <option>{item}</option>
            ))}
          </select>

          <select
            className={styles.statusEditing}
            onChange={handleChange}
            name="status"
            value={text.status}
          >
            {cardInfo.status.map((item) => (
              <option>{item}</option>
            ))}
          </select>

          <select
            className={styles.priorityEditing}
            onChange={handleChange}
            name="priority"
            value={text.priority}
          >
            {cardInfo.priority.map((item) => (
              <option>{item}</option>
            ))}
          </select>

          <button className={styles.cancelButton} onClick={handleCancel}>
            Отменить
          </button>
          <button className={styles.editButton} onClick={handleSave}>
            Сохранить
          </button>
        </div>
      </div>
      <Button onClick={handleBack}>Назад</Button>
    </>
  );
};
};

export default TaskForm;
