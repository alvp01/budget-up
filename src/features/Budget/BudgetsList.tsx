import Budget from "./Budget";
import BudgetService from "../../services/BudgetService";
import { useQuery } from "@tanstack/react-query";
import type { BudgetType } from "../../utils/appTypes";

const BudgetsList = () => {

  const { 
    error, 
    status, 
    data: budgetsData,
    isLoading,
  } = useQuery({
    queryKey: ['budgetsData'],
    queryFn: () => BudgetService.getBudgets(),
  });

  if (isLoading) return <div>Loading...</div>
  if (status === 'error') return <div>{error.message}</div>

  return (
    <div>
      <h1>Budgets</h1>
      <ul>
        {budgetsData?.budgets.map((budget: BudgetType) => (
          <li key={budget.id}><Budget {...budget} /></li>
        ))}
      </ul>
    </div>
  )
}

export default BudgetsList;