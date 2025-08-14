export interface Task {
  id: string;
  title: string;
  description?: string;
  category: "Баг" | "Фишка" | "Документация" | "Рефактор" | "Тестирование";
  status: "Сделать" | "В процессе" | "Сделано";
  priority: "Низкий" | "Средний" | "Высокий";
}
