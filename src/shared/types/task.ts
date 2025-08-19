export const TaskCategory = {
  Bug: "Баг",
  Feuture: "Фишка",
  Documentation: "Документация",
  Refactor: "Рефактор",
  Test: "Тестирование",
};

export const TaskStatus = {
  ToDo: "Сделать",
  InProgress: "D процессе",
  Done: "Сделано",
};

export const TaskPriority = {
  Low: "Низкий",
  Medium: "Средний",
  High: "Высокий",
};

export type TaskCategory = (typeof TaskCategory)[keyof typeof TaskCategory];
export type TaskStatus = (typeof TaskStatus)[keyof typeof TaskStatus];
export type TaskPriority = (typeof TaskPriority)[keyof typeof TaskPriority];

export interface Task {
  id: string;
  title: string;
  description?: string;
  category: TaskCategory;
  status: TaskStatus;
  priority: TaskPriority;
}
