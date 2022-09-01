import { createSlice } from "@reduxjs/toolkit";

export const propertySlice = createSlice({
  name: "property",
  initialState: {
    isChanged: true,
  },

  reducers: {
    addProperty: (state, action) => {
      // state.propertyList.push(action.payload);
      state.isChanged = !state.isChanged;
    },
    deleteProperty: (state, action) => {
      // let indexOfObject = state.propertyList.findIndex((obj) => {
      //   return obj.id === action.payload.id;
      // });
      // state.propertyList.splice(indexOfObject, 1);
      state.isChanged = !state.isChanged;
    },
  },
});

export const { addProperty, deleteProperty } = propertySlice.actions;
export default propertySlice.reducer;
