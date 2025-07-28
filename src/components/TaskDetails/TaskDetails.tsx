import styles from './TaskDetails.module.css'

export const TaskDetails = () => {

    return (
    <div className={styles.card}>
      <h2 className={styles.cardTittle}>заголовок</h2>
      <p className={styles.cardDescription}>Описание</p>
      <div className={styles.cardInfo}>
        <p className={styles.category}>Категория</p>
        <p className={styles.status}>Статус</p>
        <p className={styles.priority}>Приоритет</p>
      </div>
    </div>
    )
}