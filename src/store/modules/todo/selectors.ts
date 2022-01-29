import { createSelector } from 'reselect';
import { RootState } from '../../rootReducer';

export const selectRaw = (state: RootState) => state.todo;

export const selectTodos = createSelector([selectRaw], todo => todo.todos);

export const selectTodo = createSelector([selectRaw], todo => todo.todo);

const selectors = {
  selectRaw,
  selectTodos,
  selectTodo,
};

export default selectors;