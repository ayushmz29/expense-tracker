import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";

const Expenses = (props) => {
  const [filteredYear, setFilterYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilterYear(selectedYear);
  };

  return (
    <Card className="expenses">
      {/* Component for Filter Menu */}
      <ExpenseFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      {/* Dynamically adding Expenses to Expense Array(here items[]) */}
      {/* expense = individual array element */}
      {props.items.map((expense) => (
        <ExpenseItem
          /* Key is added to uniquely identify individual Component in array */
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </Card>
  );
};

export default Expenses;
