import styles from './TaskDetails.module.css'
import { Link, useParams } from 'react-router-dom'
import { useTasks } from '../../context/TaskContext';
import { colors } from '../../const';

export const TaskDetails = () => {
  const { id } = useParams();

  const tasks = useTasks();
  const selectedTask = tasks.find(task => task.id === id)!; // ! - значит сто проц что есть этот id.


  console.log(selectedTask);

    return (
    <div>
      <div className={styles.card}>
        <h2 className={styles.cardTittle}>{selectedTask.title}</h2>
        <p className={styles.cardDescription}>{selectedTask.description}</p>
        <div className={styles.cardInfo}>
        <p className={styles.category} style={{ background: colors.category[selectedTask.category] }}>{selectedTask.category}</p>
        <p className={styles.status} style={{ background: colors.status[selectedTask.status] }}>{selectedTask.status}</p>
        <p className={styles.priority} style= {{ background: colors.priority[selectedTask.priority]}} >{selectedTask.priority}</p>
        </div>
      </div>

    <Link to={'/'} className={styles.buttonBack}>Назад</Link>
    </div>
    )
}

// Что-то придумать с дублирвоанием TaskItem и TaskDetails