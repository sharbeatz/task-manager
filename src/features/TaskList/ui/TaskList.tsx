import type { Task } from "../../../shared/types/task";
import { TaskItem } from "../../../entities/TaskItem/TaskItem";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "@/app/model/store";
import { useEffect } from "react";

export const TaskList = () => {
  const tasks = useSelector((state: RootState) => state.tasks.tasks);
  useEffect(() => {
    localStorage.setItem("saveTasks", JSON.stringify(tasks));
  }, [tasks]);
  return (
    <div>
      {tasks.map((task) => (
        <TaskItem task={task} />
      ))}
    </div>
  );
};
