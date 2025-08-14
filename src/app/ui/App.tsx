import { TaskDetails } from "@/pages";

import { TaskProvider } from "@/features/Tasks/model/TaskContext";
import { TaskList } from "@/features";

import { BrowserRouter, Route, Routes } from "react-router-dom";

export function App() {
  return (
    <TaskProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TaskList />}></Route>
          <Route path="/:id" element={<TaskDetails />}></Route>
        </Routes>
      </BrowserRouter>
    </TaskProvider>
  );
}
