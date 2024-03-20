import { PayloadAction, createSlice } from '@reduxjs/toolkit';


export interface DateState {
  date: Date;
}

const initialState: DateState = {
  date: new Date(),
};

const dateSlice = createSlice({
  name: 'date',
  initialState,
  reducers: {
    incrementDate(state, action: PayloadAction<number>) {
      state.date.setMonth(state.date.getMonth() + action.payload);
    },
  },
});

export const { incrementDate } = dateSlice.actions;
export default dateSlice.reducer;