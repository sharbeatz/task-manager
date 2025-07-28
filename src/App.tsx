import { Task } from "@mui/icons-material"
import { TaskItem } from "./components/TaskItem/TaskItem"
import { TaskProvider } from "./context/TaskContext"
import { TaskList } from "./components/TaskList"
import { TaskDetails } from "./components/TaskDetails/TaskDetails"

function App()
{

  return (
    <TaskProvider>
     <TaskList/>
     <TaskDetails></TaskDetails>
    </TaskProvider>
  )
}

export default App
