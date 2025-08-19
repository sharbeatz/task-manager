import { TaskForm } from "@/pages/TaskDetailsPage";
import { TaskDetailsPage } from "@/pages/TaskDetailsPage";
import TasksPage from "@/pages/TasksPage/ui/TasksPage";
import { taskRoutes } from "./const";
import "@/app/styles/global.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export function App() {
  const TaskCategory1 = {
    Bug: "Баг",
    Feuture: "Фишка",
    Documentation: "Документация",
    Refactor: "Рефактор",
    Test: "Тестирование",
  };

  type TaskCategory = (typeof TaskCategory1)[keyof typeof TaskCategory1];

  console.log();
  return (
    <BrowserRouter>
      <Routes>
        {/* Главная страница */}
        <Route path={taskRoutes.main} element={<TasksPage />}></Route>
        {/* Создание новой задачи */}
        <Route
          path={taskRoutes.newTaskForm}
          element={<TaskForm mode="create" />}
        ></Route>
        {/* Редактирование задачи */}
        <Route
          path={`${taskRoutes.editForm}/:id`}
          element={<TaskForm mode="edit" />}
        ></Route>
        {/* Детальное отображнеи задачи*/}
        <Route
          path={`${taskRoutes.detailsPage}/:id`}
          element={<TaskDetailsPage />}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}
