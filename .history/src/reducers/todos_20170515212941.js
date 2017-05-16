//This is like a schema for a model
//Sets up the structure of the object
import uuid from 'uuid/v4';
//The functionality for each
import { CREATE_TODO, COMPLETED_TODO, DELETED_TODO } from '../actions/todos';

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
            : todo),
      );
    case DELETED_TODO:
      return state.filter(todo => todo.id !== action.id);
    default:
      return state;
  }
}