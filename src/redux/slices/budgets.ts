import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface Budget {
  id: number;
  planned_amount: number;
  remaining_amount: number;
  budget_date: string;
}

interface BudgetsState {
  budgets: Budget[];
}

const initialState: BudgetsState = {
  budgets: [],
};

const budgetsSlice = createSlice({
  name: 'budgets',
  initialState,
  reducers: {
    addBudget: (state, action: PayloadAction<Budget>) => {
      state.budgets.push(action.payload);
    },
    removeBudget: (state, action: PayloadAction<number>) => {
      state.budgets = state.budgets.filter((budget: Budget) => budget.id !== action.payload);
    },
    setBudgets: (state, action: PayloadAction<Array<Budget>>) => {
      state.budgets = action.payload;
    },
  },
});

export const { addBudget, removeBudget, setBudgets } = budgetsSlice.actions;
export default budgetsSlice.reducer;