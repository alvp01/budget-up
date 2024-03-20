import Budget from "./Budget";
import BudgetService from "../../services/BudgetService";
import { useQuery } from "@tanstack/react-query";
import type { BudgetType } from "../../utils/appTypes";

const BudgetsList = ({ queryDate }: { queryDate: Date }) => {
  console.log(queryDate);

  const { 
    error, 
    status, 
    data: budgetData,
    isLoading,
  } = useQuery({
    queryKey: ['budgetData'],
    queryFn: () => BudgetService.getBudgetByYearAndMonth(queryDate.getFullYear(), queryDate.getMonth() + 1),
  });

  if (isLoading) return <div>Loading...</div>
  if (status === 'error') return <div>{error.message}</div>

  return (
    <div>
      <h1>Budgets</h1>
      <Budget {...budgetData!.budget}/>
    </div>
  )
}

export default BudgetsList;