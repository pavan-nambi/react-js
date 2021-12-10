import ExpenseItem from "./components/ExpenseItem";
function App() {

  const expenses = [{
    date: new Date(2021, 12, 1),
    title: "Shampoo",
    amount: 5
  },
  {
    date: new Date(2021, 11, 14),
    title: "beer",
    amount: 345
  }]
  return (
    <div className="App">
      <header className="App-header"></header>
      <ExpenseItem
      date={expenses[0].date}
      amount={expenses[0].amount}
      title={expenses[0].title}></ExpenseItem>
      <ExpenseItem
            date={expenses[1].date}
            amount={expenses[1].amount}
            title={expenses[1].title}></ExpenseItem>


    </div>
  );
}

export default App;
