import type { Task } from "../../../shared/types/task";
import { TaskItem } from "../../../entities/TaskItem/TaskItem";
import { useSelector } from "react-redux";
import type { RootState } from "@/app/model/store";
import { useEffect } from "react";
import styles from "./TaskList.module.css";
import { AddTaskButton } from "@/features/AddTaskButton";

export const TaskList = () => {
  const tasks = useSelector((state: RootState) => state.tasks.tasks);
  useEffect(() => {
    localStorage.setItem("saveTasks", JSON.stringify(tasks));
  }, [tasks]);
  return (
    <div className={styles.taskList}>
      <h1 className={styles.tasks}>Задачи</h1>
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
      <AddTaskButton />
    </div>
  );
};
