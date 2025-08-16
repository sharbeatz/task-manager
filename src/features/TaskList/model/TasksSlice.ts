import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Task } from "@/shared/types/task";
import { tasksMock } from "@/shared/models/tasksMock";

type State = {
  tasks: Task[];
};

const initialState: State = {
  tasks: JSON.parse(localStorage.getItem("saveTasks")!),
};

const TasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, task: PayloadAction<Task>) => {
      state.tasks.push(task.payload);
    },
    updateTask: (state, task: PayloadAction<Task>) => {
      const id = task.payload.id;
      state.tasks = state.tasks.map((item) =>
        item.id === id ? task.payload : item
      );
      console.log(state.tasks);
    },
    deleteTask: (state, taskId: PayloadAction<string>) => {
      state.tasks = state.tasks.filter((item) => item.id != taskId.payload);
    },
  },
});

export const TasksReducer = TasksSlice.reducer;
export const { addTask, updateTask, deleteTask } = TasksSlice.actions;
