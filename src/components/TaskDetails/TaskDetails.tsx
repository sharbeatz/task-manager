import styles from './TaskDetails.module.css'
import { Link, useParams } from 'react-router-dom'
import { useTasks } from '../../context/TaskContext';
import { colors } from '../../const';
import { useState } from 'react';
import type { Task } from '../../types/task';

export const TaskDetails = () => {
  const { id } = useParams();

  const tasks = useTasks();
  const task = tasks.find(task => task.id === id)!; // ! - значит сто проц что есть этот id.
  console.log(task);
  const [text, setText] = useState<Task>(task);
  const [editing, setEditing] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
    const {value, name} = e.target;
    setText(prev=> ({
      ...prev,
      [name]: value
    }))
  }

   // Форма Просмотра
  if (!editing) {
      return (
      <>
        <div className={styles.card}>
          <h2 className={styles.cardTittle}>
            {task.title}
            </h2>
          <p className={styles.cardDescription}>
            {task.description}
            </p>
          <div className={styles.cardInfo}>
            <p className={styles.category} style={{ background: colors.category[task.category] }}>{task.category}</p>
            <p className={styles.status} style={{ background: colors.status[task.status] }}>{task.status}</p>
            <p className={styles.priority} style= {{ background: colors.priority[task.priority]}} >{task.priority}</p>
            <button className={styles.editButton} onClick={() => setEditing(true)}>Редактировать</button>
          </div>
        </div>
      <Link to={'/'} className={styles.backButton}>Назад</Link>
      </>
      )
  }

  // Форма Редактирования 
  return (
        <>
        <div className={styles.card}>
          <input className={styles.cardTittleEditing} value={text.title} onChange={handleChange} name='title'></input>
          <textarea className={styles.cardDescriptionEditing} value={text.description} onChange={handleChange} name='description'></textarea>
          <div className={styles.cardInfo}>

          <select className={styles.categoryEditing} style={{ background: colors.category[task.category] }}>

          </select>

          <select className={styles.statusEditing} style={{ background: colors.status[task.status] }}>
            <option style={{ background: colors.status.Done }}>Одна фигня</option>
             <option className={styles.vibor} style={{backgroundColor: 'blue'}}>Вторая фигня</option>
             <option>Третья фигня</option>
          </select>

          <select className={styles.priorityEditing} style= {{ background: colors.priority[task.priority]}}>
            <option>Одна фигня</option>
             <option>Вторая фигня</option>
          </select>

          <button className={styles.cancelButton}>Отменить</button>
          <button className={styles.editButton}>Сохранить</button>
          </div>
        </div>
      <Link to={'/'} className={styles.backButton}>Назад</Link>
      <p>{text.title}</p>
      </>
  )
}



// Что-то придумать с дублирвоанием TaskItem и TaskDetails