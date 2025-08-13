import { Task } from "@mui/icons-material";
import { TaskItem } from "./components/TaskItem/TaskItem";
import { TaskProvider } from "./context/TaskContext";
import { TaskList } from "./components/TaskList/TaskList";
import { TaskDetails } from "./components/TaskDetails/TaskDetails";
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
