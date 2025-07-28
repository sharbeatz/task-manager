import { useTasks } from "../../context/TaskContext";
import type { Task } from "../../types/task";
import { TaskItem } from "../TaskItem/TaskItem";

export const TaskList = () => {
    const tasks = useTasks();
    console.log(tasks);
    return ( 
        <div>
        {tasks.map((task) => <TaskItem task = {task}/>)}
        </div>
    )
}