import axios from "axios";
import type { BudgetType } from "../utils/appTypes";

type BudgetsResponse = {
  budgets: BudgetType[]
  success: boolean
  message: string
}



class BudgetService {
  static getBudgets =  async (): Promise<BudgetsResponse> =>{
    const response = await axios.get('http://localhost:3000/api/v1/budgets');
    return response.data;
  }
}

export default BudgetService