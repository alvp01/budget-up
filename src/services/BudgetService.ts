import axios from "axios";
import type { BudgetType } from "../utils/appTypes";

type BudgetsResponse = {
  budgets: BudgetType[]
  success: boolean
  message: string
}

type BudgetByYearAndMonthResponse = {
  budget: BudgetType
  success: boolean
  message: string
}

class BudgetService {
  static getBudgets =  async (): Promise<BudgetsResponse> =>{
    const response = await axios.get('http://localhost:3000/api/v1/budgets');
    return response.data;
  }

  static getBudgetByYearAndMonth = async (year: number, month: number): Promise<BudgetByYearAndMonthResponse> => {
    const response = await axios.get(`http://localhost:3000/api/v1/budget?year=${year}&month=${month}`);
    return response.data;
  }

}

export default BudgetService