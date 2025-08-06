import type { Task } from "../types/task";
import { createContext, useContext, type ReactNode, useState} from "react";

type TaskContextProps = {
    children: ReactNode;
}

type TaskContextValue = {
    tasks: Task[];
    updateTask: (taskId: string, updateTask: Task) => void;
}

const TaskContext = createContext<TaskContextValue | undefined>(undefined);

export const TaskProvider = ( {children}:TaskContextProps ) => {

    const [tasks, setTasks] = useState<Task[]>([
       {
        id: '1',
        title: 'Исправить баг с авторизацией',
        description: 'При входе с Safari возникает ошибка 403. Нужно проверить CORS политику.',
        category: 'Bug',
        status: 'In Progress',
        priority: 'High',
    },
    {
        id: '2',
        title: 'Добавить страницу профиля',
        description: 'Сверстать UI профиля пользователя с аватаром и статистикой',
        category: 'Future',
        status: 'To Do',
        priority: 'Medium',
    },
    {
        id: '3',
        title: 'Провести рефакторинг API',
        description: 'Оптимизировать эндпоинты /users и /posts',
        category: 'Refactor',
        status: 'In Progress',
        priority: 'Medium',
    },
    {
        id: '4',
        title: 'Написать тесты для корзины',
        description: 'Покрыть тестами компонент Cart и связанные хуки',
        category: 'Test',
        status: 'Done',
        priority: 'Low',
    },
    {
        id: '5',
        title: 'Обновить документацию',
        description: 'Дописать раздел про аутентификацию в README.md',
        category: 'Documentation',
        status: 'To Do',
        priority: 'Low',
    },
    {
        id: '6',
        title: 'Миграция на TypeScript',
        description: 'Перевести компоненты Button и Modal на TypeScript',
        category: 'Refactor',
        status: 'In Progress',
        priority: 'High',
    },
    {
        id: '7',
        title: 'Интеграция с PayPal',
        description: 'Добавить новый платежный шлюз',
        category: 'Future',
        status: 'To Do',
        priority: 'High',
    },
    {
        id: '8',
        title: 'Оптимизация загрузки изображений',
        description: 'Реализовать lazy loading для галереи товаров',
        category: 'Future',
        status: 'To Do',
        priority: 'Medium',
    },
    {
        id: '9',
        title: 'Создать CI/CD пайплайн',
        description: 'Настроить автоматический деплой на AWS',
        category: 'Future',
        status: 'In Progress',
        priority: 'High',
    },
    {
        id: '10',
        title: 'Планирование спринта',
        description: 'Провести митинг с командой по задачам на следующую неделю',
        category: 'Documentation',
        status: 'Done',
        priority: 'Low',
    }
]);
    const updateTask = (taskId: string, updatedTask: Task) => {
        setTasks(prev => prev.map(task => task.id === taskId ? updatedTask : task))
    }


    return (
        <TaskContext value = {{tasks, updateTask}}>
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