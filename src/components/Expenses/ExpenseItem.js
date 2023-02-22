import React from "react";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
import Card from "../UI/Card";
import "./ExpenseItem.css";
const ExpenseItem = (props) => {
  return (
    <div>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <ExpenseDetails title={props.title} />
        <div className="expense-item__description">
          <h2>{props.location}</h2>
        </div>
        <ExpenseDetails amount={props.amount} />
      </Card>
    </div>
  );
};

export default ExpenseItem;
