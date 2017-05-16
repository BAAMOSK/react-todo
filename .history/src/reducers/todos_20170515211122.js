import uuid from 'uuid/v4';
import { CREATE_TODO, COMPLETED_TODO } from '../actions/todos';

export default (state = [], action) => {
  switch (action.type) {
    case CREATE_TODO:
      return [
        ...state,
        {
          id: uuid(),
          text: action.text,
          completed: false,
        }
      ];
    case COMPLETED_TODO:
      return state.map(
        todo =>
          (todo.id === action.id
          ? {
            ...todo,
            completed: !todo.completed,
          }
          : item)
      );
    default:
      return state;
  }
}