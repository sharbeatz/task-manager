import type { Task } from "../../../shared/types/task";
import { TaskItem } from "../../../entities/TaskItem/TaskItem";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "@/app/model/store";

export const TaskList = () => {
  const tasks = useSelector((state: RootState) => state.tasks.tasks);
  console.log(tasks);
  return (
    <div>
      {tasks.map((task) => (
        <TaskItem task={task} />
      ))}
    </div>
  );
};
