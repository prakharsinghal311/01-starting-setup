import React from "react";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
const Expenses = (props) => {
  return (
    <Card className="expenses">
      {props.expenseItems.map((items) => (
        <ExpenseItem
          title={items.title}
          amount={items.amount}
          date={items.date}
          location={items.LocationOfExpenditure}
          id={items.id}
        />
      ))}
    </Card>
  );
};

export default Expenses;
