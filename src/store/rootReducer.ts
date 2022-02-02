import { combineReducers } from 'redux';
import { persistReducer, PersistConfig } from 'redux-persist';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import AsyncStorage from '@react-native-async-storage/async-storage';
import todoReducer, { TodoState } from './modules/todo/reducers';

const rootPersistConfig: PersistConfig<TodoState> = {
  key: 'root',
  storage: AsyncStorage,
  stateReconciler: autoMergeLevel2,
  whitelist: ['store'],
};

const rootReducer = combineReducers({
  todo: persistReducer<TodoState>(rootPersistConfig, todoReducer),
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
