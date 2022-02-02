import { createSelector } from 'reselect';
import { RootState } from '../../rootReducer';

/**
 * Select state
 */
export const selectRaw = (state: RootState) => state.todo;

/**
 * Select todo items count
 */
export const selectCountTodos = createSelector(
  [selectRaw],
  todo => todo.store.length,
);

/**
 * Select all todo items
 */
export const selectTodos = createSelector([selectRaw], todo => todo.todos);

/**
 * Select a todo item
 */
export const selectTodo = createSelector([selectRaw], todo => todo.todo);

/**
 * Select active todo items
 */
export const selectActiveTodos = createSelector(
  [selectRaw],
  todo => todo.active,
);

/**
 * Select done todo items
 */
export const selectDoneTodos = createSelector([selectRaw], todo => todo.done);

/**
 * Select search results
 */
export const selectSearchResults = createSelector(
  [selectRaw],
  todo => todo.searchResults,
);

const selectors = {
  selectRaw,
  selectCountTodos,
  selectTodos,
  selectTodo,
  selectActiveTodos,
  selectDoneTodos,
  selectSearchResults,
};

export default selectors;
