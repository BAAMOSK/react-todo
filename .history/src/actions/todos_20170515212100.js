
export const CREATE_TODO = 'CREATE_TODO';
export const COMPLETED_TODO = 'COMPLETED_TODO';
export function createTodo(text) {
  return {
    type: CREATE_TODO,
    text
  }
}

export function completedTodo(id) {
  return {
    type: COMPLETED_TODO,
    id: id
  }
}