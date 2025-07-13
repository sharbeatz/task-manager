import { createContext, useContext, useState, type ReactNode} from 'react';
import type { Task } from '../types/task';

interface TaskContextType {
    tasks: Task[]
    addTask: (task: Task) => void;
    updateTask: (id: string, updatedTask: Partial<Task>) => void // тип Partial означает, что можно передать не все поля Task, а только те, которые нужно изменить
    deleteTask: (id: string) => void;
}
const TaskContext = createContext<TaskContextType | undefined> (undefined);

export const TaskProvider = ({ children }: {children: ReactNode}) => {
    
    const [tasks, setTasks] = useState<Task[]>([
        {id: '1', title: 'Задача 1', description: 'Описание задачи 1', category: 'Bug', status:'To Do', priority: 'Low'},
        {id: '2', title: 'Задача 2', description: 'Описание задачи 2', category: 'Documentation', status:'Done', priority: 'Medium'},
    ])

    const addTask = (task: Task) => {
        setTasks([...tasks, task])
    }

    const updateTask = (id: string, updatedTask: Partial<Task>) => {
        const newTask = tasks.map(task => {
            if (id === task.id) {
                return {...task, ...updatedTask};
            }
            return task;
        }
    );
        setTasks(newTask);
    }

    const deleteTask = (id: string) => {
        setTasks(tasks.filter(task => task.id != id));
    }

    return (
        <TaskContext.Provider value = {{tasks, addTask,updateTask,deleteTask}}>
            {children}
        </TaskContext.Provider>
    )
}

// Кастомный хук
export const useTasks = () => {
    const context = useContext(TaskContext);
    if (!context) {
        throw new Error('Ошибка с useProvider')
    }
    return context;
};



