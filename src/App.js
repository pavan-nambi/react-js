import "./App.css";
import { useState } from "react";
import NewExpenses from "./components/NewExpenses";
import Expenses from "./components/Expenses";


const DummyExpenses = [{
  title: "Shampoo",
  date: new Date(2021, 12, 1),

  amount: 5,

},
{
  title: "beer",
  date: new Date(2021, 11, 14),
  amount: 345,

},]

const App=()=> {
  
const [expenses, setExpenses] = useState(DummyExpenses);


const addNewExpense=(expense)=> {
  console.log(expense);


 setExpenses(prevExpenses=>{
   console.log(prevExpenses);
   return [expense,...prevExpenses];

 });
  
}
  return (
    <div>
      <div className="App">
        <NewExpenses AppaddExpense={addNewExpense} />
       
        {/* <header className="App-header"></header> */}
        <Expenses expenses={expenses}/>
      </div>
    </div>
  );
}

export default App;
