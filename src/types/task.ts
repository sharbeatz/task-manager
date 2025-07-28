export interface Task {
    id?: string,
    title: string,
    description?: string,
    category: 'Bug' | 'Future' | 'Documentation' | 'Refactor' | 'Test',
    status: 'To Do' | 'In Progress' | 'Done',
    priority: 'Low' | 'Medium' | 'High'
};





