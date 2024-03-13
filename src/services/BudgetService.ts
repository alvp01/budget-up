import axios from "axios";

class BudgetService {
  static getBudgets =  async () =>{
    const response = await axios.get('http://localhost:3000/api/v1/budgets');
    return response.data;
  }
}

export default BudgetService