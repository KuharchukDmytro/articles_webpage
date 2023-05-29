import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Article } from '../types/Article';

import { someData } from '../app/data';

const articlesSlice = createSlice({
  name: 'articles',
  initialState: someData,
  reducers: {
    add: (articles, action: PayloadAction<Article>) => [action.payload, ...articles],
    remove: (articles, action: PayloadAction<Article>) => articles.filter(
      article => JSON.stringify(article) !== JSON.stringify(action.payload),
    ),
    update: (articles, action: PayloadAction<Article>) => {
      const articleToUpdate = action.payload;
      const filteredArticles = articles.filter(
        article => JSON.stringify(article) !== JSON.stringify(articleToUpdate),
      );

      return [articleToUpdate, ...filteredArticles];
    },
  }
})

export default articlesSlice.reducer;
export const { actions } = articlesSlice;
