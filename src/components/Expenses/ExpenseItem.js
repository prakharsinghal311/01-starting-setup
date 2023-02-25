import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
import Card from "../UI/Card";
import "./ExpenseItem.css";
const ExpenseItem = (props) => {
  const [amount, setAmount] = useState(props.amount);

  const expenseHandler = () => {
    setAmount("100$");
    console.log(amount);
  };
  const eventHandler = () => {
    document.getElementById(props.id).remove();
  };
  return (
    <div id={props.id}>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <ExpenseDetails
          title={props.title}
          location={props.location}
          amount={amount}
        />
        <button onClick={expenseHandler}>Change Amount</button>
        <button onClick={eventHandler}>Delete Expense</button>
      </Card>
    </div>
  );
};

export default ExpenseItem;
