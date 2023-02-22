import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
import Card from "../UI/Card";
import "./ExpenseItem.css";
const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);
  console.log("Expense item evaluated by react");

  const [amount, setAmount] = useState(props.amount);

  const expenseHandler = () => {
    setAmount("100$");
    console.log(amount);
  };

  const clickHandler = () => {
    setTitle("Updated!");
    console.log(title);
  };
  const eventHandler = () => {
    document.getElementById(props.id).remove();
  };
  return (
    <div id={props.id}>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <ExpenseDetails
          title={title}
          location={props.location}
          amount={amount}
        />
        <button onClick={expenseHandler}>Change Amount</button>
        <button onClick={clickHandler}>Change Title</button>
        <button onClick={eventHandler}>Delete Expense</button>
      </Card>
    </div>
  );
};

export default ExpenseItem;
