import type { Task } from "../types/task";
import { createContext, useContext, type ReactNode, useState} from "react";

type TaskContextProps = {
    children: ReactNode;
}
const TaskContext = createContext<Task[] | undefined>(undefined);

export const TaskProvider = ( {children}:TaskContextProps ) => {
    const [task, setTask] = useState<Task[]>([
        {
        title: 'Задача',
        description: 'Описание',
        category: 'Bug',
        status: 'To Do',
        priority: 'Low',
    },

    {
        title: 'Задача2',
        description: 'Сделать React 2. Спроектировать макет',
        category: 'Future',
        status: 'To Do',
        priority: 'Medium',
    },

]);

    return (
        <TaskContext value = {task}>
            {children}
        </TaskContext>
    )
}

export const useTasks = () => {
    const context = useContext(TaskContext);
    if (!context) {
        throw new Error('Не обернут в провайдер')
    }
    return context;
}