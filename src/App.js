import "./App.css";
import ExpenseItem from "./components/ExpenseItem";

const App = () => {
  let expenDate = new Date(2022, 6, 26);
  let expenTitle = "School Fees";
  let expenAmount = 800;

  return (
    <div>
      <h1>Using Components with change values</h1>
      <ExpenseItem
        date={expenDate}
        title={expenTitle}
        amount={expenAmount}
      ></ExpenseItem>
    </div>
  );
};
export default App;
