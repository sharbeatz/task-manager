import styles from './TaskDetails.module.css'
import { useParams } from 'react-router-dom'
import { useTasks } from '../../context/TaskContext';


export const TaskDetails = () => {
  const { id } = useParams();

  const tasks = useTasks();
  const selectedTask = tasks.find(task => task.id === id)!; // ! - значит сто проц что есть этот id.


  console.log(selectedTask);

    return (
    <div className={styles.card}>
      <h2 className={styles.cardTittle}>{selectedTask.title}</h2>
      <p className={styles.cardDescription}>{selectedTask.description}</p>
      <div className={styles.cardInfo}>
        <p className={styles.category}>{selectedTask.category}</p>
        <p className={styles.status}>{selectedTask.status}</p>
        <p className={styles.priority}>{selectedTask.priority}</p>
      </div>
    </div>
    )
}