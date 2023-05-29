import { createSlice } from '@reduxjs/toolkit';
import { Article } from '../types/Article';

const randomArticlesCacheSlice = createSlice({
  name: 'randomArticlesCache',
  initialState: [] as Article[],
  reducers: {
    add: (randomArticlesCache, action) => [
      ...randomArticlesCache,
      ...action.payload,
    ],
    clear: () => [],
  },
})

export default randomArticlesCacheSlice.reducer;
export const { actions } = randomArticlesCacheSlice;