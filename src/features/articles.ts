import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Article } from "../types/Article";

const articlesSlice = createSlice({
  name: 'articles',
  initialState: [] as Article[],
  reducers: {
    add: (articles, action: PayloadAction<Article>) => [...articles, action.payload],
    remove: (articles, action: PayloadAction<string>) => articles.filter(
      article => article.urlToImage !== action.payload,
    ),
  }
})

export default articlesSlice.reducer;
export const { actions } = articlesSlice;
