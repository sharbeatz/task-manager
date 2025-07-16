import styles from "./TaskItem.module.css";

export const TaskItem = () => {
  return (
    <div className={styles.card}>
      <h2 className={styles.cardTittle}>ЗАГОЛОВОК</h2>
      <p className={styles.cardDescription}>Описание</p>
      <div className={styles.cardInfo}>
        <p className={styles.category}>Категория</p>
        <p className={styles.status}>Статус</p>
        <p className={styles.priority}>Приоритет</p>
      </div>
     <button className = {styles.cardButton}></button>
    </div>
  )
}