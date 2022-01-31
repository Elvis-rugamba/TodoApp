import { AnyAction } from 'redux';
import { Todo } from '../../../types';
import {
  CREATE,
  GET_ALL,
  GET_ACTIVE,
  GET_DONE,
  GET_SINGLE,
  UPDATE,
  DELETE,
} from './types';

export interface TodoAction extends AnyAction {
  type: string;
  payload?: any;
}

export const createTodo = (todo: Todo): TodoAction => ({
  type: CREATE,
  payload: todo,
});

export const getAllTodos = (): TodoAction => ({
  type: GET_ALL,
});

export const getActiveTodos = (): TodoAction => ({
  type: GET_ACTIVE,
});

export const getDoneTodos = (): TodoAction => ({
  type: GET_DONE,
});

export const getSingleTodo = (id: number): TodoAction => ({
  type: GET_SINGLE,
  payload: id,
});

export const updateTodo = (id: number, todo: Todo): TodoAction => ({
  type: UPDATE,
  payload: { id, todo },
});

export const deleteTodo = (id: number): TodoAction => ({
  type: DELETE,
  payload: id,
});
