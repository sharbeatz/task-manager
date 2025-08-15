import { TaskForm } from "@/pages/TaskDetailsPage";
import { TaskDetailsPage } from "@/pages/TaskDetailsPage";
import TasksPage from "@/pages/TasksPage/ui/TasksPage";

import { BrowserRouter, Route, Routes } from "react-router-dom";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TasksPage />}></Route>
        <Route path="/form/:id" element={<TaskForm />}></Route>
        <Route path=":id" element={<TaskDetailsPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
