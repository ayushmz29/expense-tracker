import React from "react";
import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";

const ExpensesList = (props) => {
    
  /* checking if filtered expenses array is empty */
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback"> No Expenses Found </h2>;
  }

  return (
    <ul className="expenses-list">
      {props.items.map((expense) => (
        <ExpenseItem
          key={
            expense.id
          } /* Key is added to uniquely identify individual Component in array */
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </ul>
  );
};
export default ExpensesList;
