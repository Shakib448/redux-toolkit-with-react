const { createSlice } = require("@reduxjs/toolkit");

const formSlice = createSlice({
  name: "form",
  initialState: {
    data: [],
  },
  reducers: {
    formData: (form, action) => {
      form.data.push(action.payload);
    },
  },
});

export const { formData } = formSlice.actions;

export default formSlice.reducer;

// Create selector

export const formSelector = (state) => state.entities.data;
