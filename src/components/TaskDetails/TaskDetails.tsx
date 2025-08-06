import styles from './TaskDetails.module.css'
import { Link, useParams } from 'react-router-dom'
import { useTasks } from '../../context/TaskContext';
import { colors } from '../../const';
import { useState } from 'react';
import type { Task } from '../../types/task';
import { cardInfo } from '../../const';

export const TaskDetails = () => {
  const { id } = useParams();

  const {tasks, updateTask} = useTasks();

  const task = tasks.find(task => task.id === id)!; // ! - значит сто проц что есть этот id.
  console.log(task);
  const [text, setText] = useState<Task>(task);
  const [editing, setEditing] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement> | React.ChangeEvent<HTMLSelectElement> ) => {
    const {value, name} = e.target;
    setText(prev=> ({
      ...prev,
      [name]: value
    }))
  }

  // Кнопка сохранения изменений
  const handleSave = () => {
    updateTask(task.id, text);
    setEditing(false);
  }

  const handleCancel = () => {
    setEditing(false);
    setText(task);
  }

  

  console.log(tasks.map(item => item))

  const color = {
    category: { backgroundColor: colors.category[task.category] },
    status: { backgroundColor: colors.status[task.status] },
    priority: { backgroundColor: colors.priority[task.priority] }
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
            <p className={styles.category} style={color.category}>{task.category}</p>
            <p className={styles.status} style={color.status}>{task.status}</p>
            <p className={styles.priority} style={color.priority}>{task.priority}</p>
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

          <select className={styles.categoryEditing} onChange={handleChange} name='category' value={text.category}>
            {cardInfo.category.map(item => (<option>{item}</option>))}
          </select>

          <select className={styles.statusEditing} onChange={handleChange} name='status' value={text.status}>
            {cardInfo.status.map(item => (<option>{item}</option>))}

          </select>

          <select className={styles.priorityEditing} onChange={handleChange} name='priority' value={text.priority}>
            {cardInfo.priority.map(item => (<option>{item}</option>))}
          </select>

          <button className={styles.cancelButton} onClick={handleCancel}>Отменить</button>
          <button className={styles.editButton} onClick={handleSave}>Сохранить</button>
          </div>
        </div>
      <Link to={'/'} className={styles.backButton}>Назад</Link>

      </>
  )
}



// Что-то придумать с дублирвоанием TaskItem и TaskDetails