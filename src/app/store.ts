// npm i redux @types/redux
import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import articleReducer from '../features/articles';
import pinnedReducer from '../features/pinnedArticle';

const reducer = combineReducers({
  articles: articleReducer,
  pinnedArticle: pinnedReducer,
});

const store = configureStore({
  reducer: reducer,
});

export default store;
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
