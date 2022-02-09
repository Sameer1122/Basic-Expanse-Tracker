import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [nulled, setNulled] = useState(true);
  const [nulled2, setNulled2] = useState(true);
  const [titleChange, setTitleChange] = useState("");
  const [amountChange, setAmountChange] = useState("");
  const [dateChange, setDateChange] = useState("");
  const titleChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setNulled(true);
    }
    setTitleChange(event.target.value);
  };
  const amountChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setNulled2(true);
    }
    setAmountChange(event.target.value);
  };
  const dateChangeHandler = (event) => {
    console.log(event.target.value);
    setDateChange(event.target.value);
  };
  //submit handler
  const submitHandler = (event) => {
    event.preventDefault();

    const userInput = {
      id: Math.random().toString(),
      title: titleChange,
      item: amountChange,
      time: new Date(dateChange),
    };
    if (userInput.title.trim().length === 0) {
      console.log("this is working");
      setNulled(false);
    }
    if (userInput.item.toString().trim().length === 0) {
      console.log("this is also working");
      setNulled2(false);
      return;
    }
    props.onNewExpanse(userInput);
    setTitleChange("");
    setAmountChange("");
    setDateChange("");
  };
  return (
    <form action="" onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className={`new-expense__control ${!nulled && " invalid"}`}>
          <label htmlFor=""> Title</label>
          <input
            placeholder="Enter The Title of Expense"
            type="text"
            onChange={titleChangeHandler}
            value={titleChange}
          />
          {!nulled && <p style={{ color: "red" }}>Please Enter Title</p>}
        </div>
        <div className={`new-expense__control ${!nulled2 && " invalid"}`}>
          <label htmlFor=""> Amount</label>
          <input
            placeholder="Enter your Amount"
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
            value={amountChange}
          />
          {!nulled2 && <p style={{ color: "red" }}>Please Enter Amount</p>}
        </div>
        <div className="new-expense__control">
          <label htmlFor=""> Date</label>
          <input
            type="date"
            min="2017-01-01"
            max="2022-01-01"
            onChange={dateChangeHandler}
            value={dateChange}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.hide}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
