import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  let month = props.date.toLocaleString("en-US", { month: "long" });
  let year = props.date.getFullYear();
  let day = props.date.toLocaleString("en-US", { day: "2-digit" });

  return (
    <div className="expense-item">
      <div>{day}-</div>
      <div>{month}-</div>
      <div>{year}</div>

      <div className="expense-item_description">
        <h2>{props.title}</h2>
        <div className="expense-item_price">${props.amount}</div>
      </div>
    </div>
  );
};

export default ExpenseItem;
