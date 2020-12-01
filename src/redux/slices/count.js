import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Axios from "axios";

// Create createAsyncThunk
export const allPost = createAsyncThunk("user/allPost", async () => {
  const res = await Axios.get("https://jsonplaceholder.typicode.com/posts");
  return res.data;
});

export const allPostById = createAsyncThunk("user/allPostById", async (id) => {
  const res = await Axios.get(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  return res.data;
});

const countSlice = createSlice({
  name: "count",
  initialState: {
    status: "idle",
    count: 0,
    nitCount: [],
    users: [],
    postById: [],
  },

  reducers: {
    increment: (state) => {
      state.count = state.count + 1;
    },
    decrement: (state) => {
      state.count = state.count - 1;
    },
    deleteCountById: (state, action) => {
      const { payload } = action;
      delete state.nitCount.shift(payload);
    },
    deletePostById: (state, action) => {
      const { payload } = action;
      delete state.users.shift(payload);
    },
    totalCount: (count, action) => {
      count.nitCount.push(action.payload);
    },
  },
  extraReducers: {
    [allPost.fulfilled]: (state, action) => {
      state.status = "success";
      const { payload } = action;
      state.users.push(...payload);
    },
    [allPostById.fulfilled]: (state, action) => {
      state.status = "success";
      const { payload } = action;
      state.postById = payload;
    },
  },
});

export const {
  increment,
  decrement,
  totalCount,
  loadUser,
  deleteCountById,
  deletePostById,
} = countSlice.actions;

export default countSlice.reducer;

// create selector
export const totalNumber = (state) => state.entities.counts;
