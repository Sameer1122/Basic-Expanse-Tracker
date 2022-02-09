import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/AddExpense/NewExpense";
import NavBar from "./components/UI/Navbar";
import "./App.css";

const DUMMTDATA = [
  {
    id: "1",
    title: "Car Insurance",
    item: "294",
    time: new Date(2019, 7, 3),
  },
  {
    id: "2",
    title: "Piano",
    item: "399",
    time: new Date(2021, 3, 13),
  },
  {
    id: "3",
    title: "Guitar ",
    item: "100.14",
    time: new Date(2021, 1, 29),
  },
  {
    id: "4",
    title: "Laptop",
    item: "799",
    time: new Date(2021, 4, 23),
  },
];

function App() {
  const [expenses, setExpanses] = useState(DUMMTDATA);

  const newexpanse = (inputData) => {
    // console.log(expenses)
    // console.log(inputData)
    setExpanses((prevExpenses) => {
      return [inputData, ...prevExpenses];
    });
  };
  return (
    <div class="container">
      <NavBar></NavBar>
      <NewExpense onNewExpanse={newexpanse} />
      <Expenses expanses={expenses} />
    </div>
  );
}

export default App;
