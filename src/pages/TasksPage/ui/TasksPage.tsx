import { AddTaskButton } from "@/features/AddTaskButton";
import { TaskList } from "@/features/TaskList";
import styles from "./taskPage.module.css";

const TasksPage = () => {
  return (
    <div className={styles.taskPage}>
      {/* <AddTaskButton /> */}
      <TaskList />
    </div>
  );
};

export default TasksPage;
