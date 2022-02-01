import { TodoAction } from './actions';
import {
  CREATE,
  GET_ACTIVE,
  GET_DONE,
  GET_SINGLE,
  UPDATE,
  DELETE,
  MARK_DONE,
} from './types';

export type TodoState = {
  todos: Todo[];
  active: Todo[];
  done: Todo[];
  todo: Todo | null;
};

const initialState: TodoState = {
  todos: [],
  active: [],
  done: [],
  todo: null,
};

export default (
  state: TodoState = initialState,
  { type, payload }: TodoAction,
) => {
  switch (type) {
    case CREATE:
      const ids: number[] = state.todos.map(todo => todo.id);
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: ids.length > 0 ? Math.max(...ids) + 1 : 1,
            createdDate: new Date(),
            modifiedDate: new Date(),
            done: false,
            ...payload,
          },
        ],
      };

    case GET_ACTIVE:
      return {
        ...state,
        active: state.todos.filter(todo => todo.done === false),
      };

    case GET_DONE:
      return {
        ...state,
        done: state.todos.filter(todo => todo.done === true),
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
          todo.id !== payload.id
            ? todo
            : { ...todo, ...payload.todo, modifiedDate: new Date() },
        ),
      };

    case DELETE:
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== payload),
      };

    case MARK_DONE:
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id !== payload ? todo : { ...todo, done: true },
        ),
      };

    default:
      return state;
  }
};
