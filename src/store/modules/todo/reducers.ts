import { Todo } from '../../../types';
import { TodoAction } from './actions';
import {
  CREATE,
  GET_ACTIVE,
  GET_DONE,
  GET_SINGLE,
  UPDATE,
  DELETE,
} from './types';

export type TodoState = {
  todos: Todo[];
  active: Todo[];
  done: Todo[];
  todo: Todo | null;
};

const initialState: TodoState = {
  todos: [
    // {
    //   title: 'Buy hand sanitizers',
    //   description:
    //     'Call HB to confirm with the quantity and the price. Remember the TIN number too',
    //   priority: 'Medium',
    //   id: 1,
    //   createdDate: new Date(),
    //   modifiedDate: new Date(),
    //   done: false,
    // },
    // {
    //   title: 'Call Awesomity Lab',
    //   description:
    //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    //   priority: 'Medium',
    //   id: 2,
    //   createdDate: new Date(),
    //   modifiedDate: new Date(),
    //   done: true,
    // },
    // {
    //   title: 'Submit Awesomity challenge',
    //   description:
    //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    //   priority: 'High',
    //   id: 3,
    //   createdDate: new Date(),
    //   modifiedDate: new Date(),
    //   done: false,
    // },
    // {
    //   title: 'Eat Vegies',
    //   description:
    //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    //   priority: 'Low',
    //   id: 4,
    //   createdDate: new Date(),
    //   modifiedDate: new Date(),
    //   done: false,
    // },
  ],
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
