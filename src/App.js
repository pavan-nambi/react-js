import "./App.css";
import NewExpenses from "./components/NewExpenses";
import Expenses from "./components/Expenses";
import { fireEvent } from "@testing-library/react";

function addNewExpense(ExpenseData){
    console.log('in app');
    console.log(ExpenseData);

}


function App() {
  return (
    <div>
     

    <div className="App">
    <NewExpenses AppaddExpense={addNewExpense}/>
      <h2>expenseeeeeeeeeeeeeeeeeeeee</h2>
      <header className="App-header"></header>
      <Expenses />
    </div>
      </div>
  );
}

export default App;
