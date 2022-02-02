import { AnyAction } from 'redux';
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

export interface TodoAction extends AnyAction {
  type: string;
  payload?: any;
}

/**
 * Create a todo item
 *
 * @param {Todo} todo
 * @returns {TodoAction}
 */
export const createTodo = (todo: Todo): TodoAction => ({
  type: CREATE,
  payload: todo,
});

/**
 * Get all todo items
 *
 * @returns {TodoAction}
 */
export const getAllTodos = (): TodoAction => ({
  type: GET_ALL,
});

/**
 * Get active todo items
 *
 * @returns {TodoAction}
 */
export const getActiveTodos = (): TodoAction => ({
  type: GET_ACTIVE,
});

/**
 * Get done todo items
 *
 * @returns {TodoAction}
 */
export const getDoneTodos = (): TodoAction => ({
  type: GET_DONE,
});

/**
 * Get todo items
 *
 * @returns {TodoAction}
 */
export const getSingleTodo = (id: number): TodoAction => ({
  type: GET_SINGLE,
  payload: id,
});

/**
 * Update a todo item
 *
 * @param {number} id
 * @param {Todo} todo
 * @returns {TodoAction}
 */
export const updateTodo = (id: number, todo: Todo): TodoAction => ({
  type: UPDATE,
  payload: { id, todo },
});

/**
 * Delete a todo item
 *
 * @param {number} id
 * @returns {TodoAction}
 */
export const deleteTodo = (id: number): TodoAction => ({
  type: DELETE,
  payload: id,
});

/**
 * Mark a todo item as done
 *
 * @param {number} id
 * @returns {TodoAction}
 */
export const markDoneTodo = (id: number): TodoAction => ({
  type: MARK_DONE,
  payload: id,
});

/**
 * Search todo items
 *
 * @param {string} query
 * @returns {TodoAction}
 */
export const searchTodo = (query: string): TodoAction => ({
  type: SEARCH,
  payload: query,
});

/**
 * Filter todo items
 *
 * @param {string} filter
 * @returns {TodoAction}
 */
export const filterTodos = (filter: 'Low' | 'Medium' | 'High'): TodoAction => ({
  type: FILTER,
  payload: filter,
});
