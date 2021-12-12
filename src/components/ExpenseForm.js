import { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm(props) {
  const [EnteredTitle, setEnteredTitle] = useState("");
  const [EnteredAmount, setEnteredAmount] = useState("");
  const [EnteredDate, setEnteredDate] = useState("");

  function TitleHandler(event) {
    setEnteredTitle(event.target.value);
  }
  function AmountHandler(event) {
    setEnteredAmount(event.target.value);
  }
  function DateHandler(event) {
    setEnteredDate(event.target.value);
  }

  function SubmitHandler(e) {
    e.preventDefault();
    console.log("ok");
    const expenseData = {
      title: EnteredTitle,
      amount: EnteredAmount,
      date: new Date(EnteredDate),
    };

    props.AddExpense(expenseData);

    setEnteredTitle(""); //to clear title after submit
    setEnteredAmount("");
    setEnteredDate("");
  }

  return (
    <form onSubmit={SubmitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="newExpenseTitle">title</label>
          <input type="text" id="newExpenseTitle" value={EnteredTitle} onChange={TitleHandler} />
        </div>
        <div className="new-expense__control">
          <label htmlFor="">date</label>
          <input type="date" value={EnteredDate} onChange={DateHandler} />
        </div>

        <div className="new-expense__control">
          <label htmlFor="">price</label>
          <input type="number" value={EnteredAmount} onChange={AmountHandler} />
        </div>
      </div>
      <div className="new-expense__actions">
      <button type="submit">add expense</button>
      </div>
    </form>
  );
}
export default ExpenseForm;
