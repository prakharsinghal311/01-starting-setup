import React from "react";

import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = (props) => {
  if (props.items.length === 0) {
    return <h2 className="expense-list__fallback">Found no expenses.</h2>;
  }
  return (
    <>
      <ul className="expenses-list">
        {props.items.map((items) => (
          <ExpenseItem
            title={items.title}
            amount={items.amount}
            date={items.date}
            location={items.LocationOfExpenditure}
            id={items.id}
            key={items.id}
          />
        ))}
      </ul>
      {props.items.length === 1 && (
        <h2 className="expense-list__fallback">
          Only single Expense here. Please add more...
        </h2>
      )}
    </>
  );
};

export default ExpensesList;
