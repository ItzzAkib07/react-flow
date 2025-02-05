import { createStore, combineReducers } from 'redux';
import { historyReducer, uiReducer } from './reducers';

const rootReducer = combineReducers({
  history: historyReducer,
  ui: uiReducer, // Ensure uiReducer is included here
});

export const store = createStore(rootReducer);

export type RootState = ReturnType<typeof rootReducer>;