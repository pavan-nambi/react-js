import ExpenseForm from "./ExpenseForm";
import "./NewExpenses.css";

function NewExpenses(props) {
  function AddExpenseHandler(enteredExpenseData) {
    const ExpenseData = {
      ...enteredExpenseData,
    };
    props.AppaddExpense(ExpenseData);
  }

  return (
    <div className="new-expense">
      <ExpenseForm AddExpense={AddExpenseHandler} />
    </div>
  );
}

export default NewExpenses;
