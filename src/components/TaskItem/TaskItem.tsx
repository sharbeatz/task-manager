import styles from "./TaskItem.module.css";

export const TaskItem = () => {
  return (
    <div className={styles.card}>
      <h2 className={styles.cardTittle}>Создать проект</h2>
      <p className={styles.cardDescription}>Нужно сделать проект на React</p>
      <div className={styles.cardInfo}>
        <p className={styles.category}>Баг</p>
        <p className={styles.status}>В процессе</p>
        <p className={styles.priority}>Важно</p>
      </div>
    </div>
  )
}