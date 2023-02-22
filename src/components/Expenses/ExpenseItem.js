import React from "react";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
import Card from "../UI/Card";
import "./ExpenseItem.css";
const ExpenseItem = (props) => {
  const clickHandler = () => {
    console.log("clicked!!!!");
  };
  const eventHandler = () => {
    document.getElementById(props.id).remove();
  };
  return (
    <div id={props.id}>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <ExpenseDetails title={props.title} />
        <div className="expense-item__description">
          <h2>{props.location}</h2>
        </div>
        <ExpenseDetails amount={props.amount} />
        <button onClick={clickHandler}>Change Title</button>
        <button onClick={eventHandler}>Delete Expense</button>
      </Card>
    </div>
  );
};

export default ExpenseItem;
