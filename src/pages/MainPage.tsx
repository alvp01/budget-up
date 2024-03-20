import BudgetsList from "../features/Budget/BudgetsList";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

const MainPage = () => {
  const queryDate = useSelector((state: RootState) => state.date.date);

  return (
    <div>
      <h1>Main Page</h1>
      <BudgetsList queryDate={queryDate}/>
    </div>
  );
};

export default MainPage;