import { Todo } from '../../../types';
import { TodoAction } from './actions';
import { CREATE, GET_SINGLE, UPDATE, DELETE } from './types';

export type TodoState = {
  todos: Todo[];
  todo: Todo | null;
};

const initialState: TodoState = {
  todos: [],
  todo: null,
};

export default (state = initialState, { type, payload }: TodoAction) => {
  switch (type) {
    case CREATE:
      const ids: number[] = state.todos.map(todo => todo.id);
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: ids.length > 0 ? Math.max(...ids) + 1 : 1,
            ...payload,
          },
        ],
      };

    case GET_SINGLE:
      return {
        ...state,
        todo: state.todos.find(todo => todo.id === payload) || null,
      };

    case UPDATE:
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id !== payload.id ? todo : { ...todo, ...payload.todo },
        ),
      };

    case DELETE:
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== payload),
      };

    default:
      return state;
  }
};
