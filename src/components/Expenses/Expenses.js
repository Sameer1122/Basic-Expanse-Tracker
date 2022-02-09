import React, { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesList from "./ExpensesList";
import ExpensesFilter from "../Filter/ExpensesFilter";
import ExpenseChart from "./ExpenseChart";

const Expenses = (props) => {
  const [amount, setAmount] = useState("2020");
  const amountHandler = (expenseData) => {
    setAmount(expenseData);
  };
  const showByYear = props.expanses.filter((expense) => {
    return expense.time.getFullYear().toString() === amount;
  });

  return (
    <li>
      <Card className="expenses">
        <ExpensesFilter passExpanse={amountHandler} dateValue={amount} />
        <ExpenseChart expenses={showByYear} />
        <ExpensesList expanses={showByYear} />
      </Card>
    </li>
  );
};

export default Expenses;
