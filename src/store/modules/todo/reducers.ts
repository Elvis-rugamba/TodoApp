import { TodoAction } from './actions';
import {
  CREATE,
  GET_ALL,
  GET_ACTIVE,
  GET_DONE,
  GET_SINGLE,
  UPDATE,
  DELETE,
  MARK_DONE,
  SEARCH,
  FILTER,
} from './types';

export type TodoState = {
  store: Todo[];
  todos: Todo[];
  todo: Todo | null;
  active: Todo[];
  done: Todo[];
  searchResults: Todo[];
};

const initialState: TodoState = {
  store: [],
  todos: [],
  todo: null,
  active: [],
  done: [],
  searchResults: [],
};

export default (
  state: TodoState = initialState,
  { type, payload }: TodoAction,
) => {
  switch (type) {
    case CREATE:
      const ids: number[] = state.store.map(todo => todo.id);
      return {
        ...state,
        store: [
          ...state.store,
          {
            id: ids.length > 0 ? Math.max(...ids) + 1 : 1,
            createdDate: new Date(),
            modifiedDate: new Date(),
            done: false,
            ...payload,
          },
        ],
      };

    case GET_ALL:
      return {
        ...state,
        todos: [...state.store].reverse(),
      };

    case GET_ACTIVE:
      return {
        ...state,
        active: state.store.filter(todo => todo.done === false),
      };

    case GET_DONE:
      return {
        ...state,
        done: state.store.filter(todo => todo.done === true),
      };

    case GET_SINGLE:
      return {
        ...state,
        todo: state.store.find(todo => todo.id === payload) || null,
      };

    case UPDATE:
      return {
        ...state,
        store: state.store.map(todo =>
          todo.id !== payload.id
            ? todo
            : { ...todo, ...payload.todo, modifiedDate: new Date() },
        ),
      };

    case DELETE:
      return {
        ...state,
        store: state.store.filter(todo => todo.id !== payload),
      };

    case MARK_DONE:
      return {
        ...state,
        store: state.store.map(todo =>
          todo.id !== payload ? todo : { ...todo, done: true },
        ),
      };

    case SEARCH:
      return {
        ...state,
        searchResults: state.store.filter(todo =>
          todo.title
            .toLowerCase()
            .includes(payload ? payload.toLowerCase() : undefined),
        ),
      };

    case FILTER:
      return {
        ...state,
        todos: state.store.filter(todo => todo.priority === payload),
      };

    default:
      return state;
  }
};
