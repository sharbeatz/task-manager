import styles from "./TaskDetails.module.css";
import { useState } from "react";
import type { Task } from "@/shared/types/task";
import { useParams } from "react-router-dom";
import { cardInfo } from "@/const";
import Button from "@/shared/ui/Button/Button";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "@/app/model/store";
import { addTask, updateTask } from "@/features/TaskList/model/TasksSlice";

type TaskFormProps = {
  mode: "create" | "edit";
};

export const TaskForm = (mode: TaskFormProps) => {
  const { id } = useParams();

  const dispatch = useDispatch();

  // const task = tasks[0];

  const tasks = useSelector((state: RootState) => state.tasks.tasks); // получаем начальные значения задач
  const generateId = () => (tasks.length + 1).toString(); // функция генерации id. Потом можно вынести отдельно
  const task = tasks.find((task) => task.id === id)!; // ! - значит сто проц что есть этот id.
  const initialValueEdit: Task = task;
  // console.log(initialValueEdit);

  // useState и начальные значения. Потом переписать
  // const [text, setText] = useState<Task>({
  //   id: "0",
  //   title: "",
  //   category: "Баг",
  //   status: "В процессе",
  //   description: "",
  //   priority: "Высокий",
  // });
  const initialValueCreate: Task = {
    id: generateId(),
    title: "",
    category: "Баг",
    status: "В процессе",
    description: "",
    priority: "Высокий",
  };

  const [text, setText] = useState(
    mode.mode === "create" ? initialValueCreate : initialValueEdit
  );

  // Кнопка сохранения изменений
  const handleSave = () => {
    if (mode.mode === "create") {
      dispatch(addTask(text));
    } else if (mode.mode === "edit") {
      dispatch(updateTask(text));
    }
    navigate("/");
  };

  const handleCancel = () => {
    navigate(-1);
  };
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

  // вынести отдельно позже
  const navigate = useNavigate();
  const handleBack = (event: React.MouseEvent<HTMLAnchorElement>) => {
    navigate(-1);
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
