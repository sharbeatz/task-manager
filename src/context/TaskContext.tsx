import type { Task } from "../types/task";
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
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: "1",
      title: "Исправить баг с авторизацией",
      description:
        "При входе с Safari возникает ошибка 403. Нужно проверить CORS политику.",
      category: "Баг",
      status: "В процессе",
      priority: "Высокий",
    },
    {
      id: "2",
      title: "Добавить страницу профиля",
      description: "Сверстать UI профиля пользователя с аватаром и статистикой",
      category: "Фишка",
      status: "Сделать",
      priority: "Средний",
    },
    {
      id: "3",
      title: "Провести рефакторинг API",
      description: "Оптимизировать эндпоинты /users и /posts",
      category: "Рефактор",
      status: "В процессе",
      priority: "Средний",
    },
    {
      id: "4",
      title: "Написать тесты для корзины",
      description: "Покрыть тестами компонент Cart и связанные хуки",
      category: "Тестирование",
      status: "Сделано",
      priority: "Низкий",
    },
    {
      id: "5",
      title: "Обновить документацию",
      description: "Дописать раздел про аутентификацию в README.md",
      category: "Документация",
      status: "Сделать",
      priority: "Низкий",
    },
    {
      id: "6",
      title: "Миграция на TypeScript",
      description: "Перевести компоненты Button и Modal на TypeScript",
      category: "Рефактор",
      status: "В процессе",
      priority: "Высокий",
    },
    {
      id: "7",
      title: "Интеграция с PayPal",
      description: "Добавить новый платежный шлюз",
      category: "Фишка",
      status: "Сделать",
      priority: "Высокий",
    },
    {
      id: "8",
      title: "Оптимизация загрузки изображений",
      description: "Реализовать lazy loading для галереи товаров",
      category: "Фишка",
      status: "Сделать",
      priority: "Средний",
    },
    {
      id: "9",
      title: "Создать CI/CD пайплайн",
      description: "Настроить автоматический деплой на AWS",
      category: "Фишка",
      status: "В процессе",
      priority: "Высокий",
    },
    {
      id: "10",
      title: "Планирование спринта",
      description: "Провести митинг с командой по задачам на следующую неделю",
      category: "Документация",
      status: "Сделано",
      priority: "Низкий",
    },
  ]);
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
