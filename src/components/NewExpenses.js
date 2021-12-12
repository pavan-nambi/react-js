import ExpenseForm from "./ExpenseForm";
import "./NewExpenses.css";

function NewExpenses(props) {
  function AddExpenseHandler(enteredExpenseData) {
    const ExpenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
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
