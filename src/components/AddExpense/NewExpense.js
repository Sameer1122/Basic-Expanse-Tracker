import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [show, setShow] = useState(false);
  const newexpanse = (expenseData) => {
    props.onNewExpanse(expenseData);
    setShow(false);
  };
  const toggle = () => {
    setShow(true);
  };
  const toggleStop = () => {
    setShow(false);
  };
  return (
    <div className="new-expense">
      {!show && <button onClick={toggle}>Add Expenses</button>}
      {show && <ExpenseForm onNewExpanse={newexpanse} hide={toggleStop} />}
    </div>
  );
};

export default NewExpense;
