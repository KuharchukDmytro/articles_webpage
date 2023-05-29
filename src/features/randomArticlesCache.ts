import { createSlice } from "@reduxjs/toolkit";

const randomArticlesCacheSlice = createSlice({
  name: 'randomArticlesCache',
  initialState: [] as any[],
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