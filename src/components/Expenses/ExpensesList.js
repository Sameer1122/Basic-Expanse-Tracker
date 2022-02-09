import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = (props) => {
  if (props.expanses.length === 0) {
    return <h2 className="expenses-list__fallback">No Expanses Found!</h2>;
  }
  return (
    <ul className="expenses-list">
      {props.expanses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          item={expense.item}
          time={expense.time}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;
