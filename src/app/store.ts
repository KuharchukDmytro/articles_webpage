// npm i redux @types/redux
import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import articleReducer from '../features/articles';
import pinnedReducer from '../features/pinnedArticle';
import randomArticlesReducer from '../features/randomArticlesCache';

const reducer = combineReducers({
  articles: articleReducer,
  pinnedArticle: pinnedReducer,
  randomArticlesCache: randomArticlesReducer,
});

const store = configureStore({
  reducer: reducer,
});

export default store;
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
