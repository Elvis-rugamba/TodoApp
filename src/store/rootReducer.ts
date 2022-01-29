import { combineReducers } from 'redux';
import { persistReducer, PersistConfig } from 'redux-persist';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import AsyncStorage from '@react-native-async-storage/async-storage';
import todoReducer from './modules/todo/reducers';

const rootPersistConfig: PersistConfig<RootState> = {
  key: 'root',
  storage: AsyncStorage,
  stateReconciler: autoMergeLevel2,
};

const rootReducer = combineReducers({
  todo: todoReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default persistReducer<RootState>(rootPersistConfig, rootReducer);
