import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Article } from "../types/Article";

interface ArticlesState {
  pinnedArticle: Article | null;
}

const initialState: ArticlesState = {
  pinnedArticle: null,
};

const pinnedArticle = createSlice({
  name: 'pinnedArticle',
  initialState,
  reducers: {
    pin: (state, action: PayloadAction<Article>) => {
      state.pinnedArticle = action.payload;
    },
    unpin: (state) => {
      state.pinnedArticle = null;
    },
  },
})

export default pinnedArticle.reducer;
export const { actions } = pinnedArticle;