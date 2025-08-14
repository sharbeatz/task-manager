import type { Task } from "../../../shared/types/task";
import { createContext, useContext, type ReactNode, useState } from "react";

type TaskContextProps = {
  children: ReactNode;
};

type TaskContextValue = {
  tasks: Task[];
  updateTask: (taskId: string, updateTask: Task) => void;
};

const TaskContext = createContext<TaskContextValue | undefined>(undefined);

export const TaskProvider = ({ children }: TaskContextProps) => {
  const [tasks, setTasks] = useState<Task[]>();
  const updateTask = (taskId: string, updatedTask: Task) => {
    setTasks((prev) =>
      prev.map((task) => (task.id === taskId ? updatedTask : task))
    );
  };

  return <TaskContext value={{ tasks, updateTask }}>{children}</TaskContext>;
};

export const useTasks = () => {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error("Не обернут в провайдер");
  }
  return context;
};
