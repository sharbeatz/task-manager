export const cardInfo = {
  category: ["Баг", "Фишка", "Документация", "Рефактор", "Тестирование"],
  status: ["Сделать", "В процессе", "Сделано"],
  priority: ["Высокий", "Средний", "Низкий"],
};

export const colors = {
  category: {
    [cardInfo.category[0]]: "#B22222", // Баг
    [cardInfo.category[1]]: "#bef574", // Фишка
    [cardInfo.category[2]]: "white", // Документация
    [cardInfo.category[3]]: "blue", // Рефактор
    [cardInfo.category[4]]: "aquamarine", // Тестирование
  },
  status: {
    [cardInfo.status[0]]: "#fefe22", // Сделать
    [cardInfo.status[1]]: "#7d7f7d", // В прцоессе,
    [cardInfo.status[2]]: "#00a550", // Сделано
  },
  priority: {
    [cardInfo.priority[0]]: "red", // Высокий
    [cardInfo.priority[1]]: "orange", // Средний
    [cardInfo.priority[2]]: "green", // Низкий
  },
};
