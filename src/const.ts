export const cardInfo = {
  category: ['Bug','Future','Documentation', 'Refactor', 'Test'],
  status: ['To Do', 'In Progress', 'Done'],
  priority: ['High','Medium','Low']
};

export const colors = {
  category: {
      [cardInfo.category[0]]: '#B22222', // Bug
      [cardInfo.category[1]]: '#bef574', // Future
      [cardInfo.category[2]]: 'white', // Documentation
      [cardInfo.category[3]]: 'blue', // Refactor
      [cardInfo.category[4]]: 'aquamarine' // Test
    },
    status: {
      [cardInfo.status[0]]: '#fefe22', // To Do 
      [cardInfo.status[1]]: '#7d7f7d', // In Progress,
      [cardInfo.status[2]]: '#00a550', // Done
    },
    priority: {
      [cardInfo.priority[0]]: 'red', // High
      [cardInfo.priority[1]]: 'orange', // Medium
      [cardInfo.priority[2]]: 'green' // Low
    },
  }

