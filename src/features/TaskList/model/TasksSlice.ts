import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Task } from "@/shared/types/task";
import { tasksMock } from "@/shared/models/tasksMock";

type State = {
  tasks: Task[];
};

const initialState: State = {
  tasks: [
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
  ],
};

const TasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, task: PayloadAction<Task>) => {
      state.tasks.push(task.payload);
    },
  },
});

export const TasksReducer = TasksSlice.reducer;
export const { addTask } = TasksSlice.actions;
