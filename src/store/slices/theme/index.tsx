import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface ModeState {
  value: string;
}

const initialState: ModeState = {
  value: "light",
};

export const modeSlice = createSlice({
  name: "mode",
  initialState,
  reducers: {
    light: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value = "light";
    },
    dark: (state) => {
      state.value = "dark";
    },
    /*incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },*/
  },
});

// Action creators are generated for each case reducer function
export const { light, dark /*, incrementByAmount*/ } = modeSlice.actions;

export default modeSlice.reducer;
