import { useState } from "react";

function InputForm() {
 const [expense, setExpense] = useState({
   name: "",
   description: "",
   category: "",
   amount: "",
   expenseDate: "",
 });
  const [expenses, setExpenses] = useState([]);

  const addExpense = (e) => {
      e.preventDefault(),
        setExpenses([...expenses, expense]);
      setExpense({
        name: ``,
        description: ``,
        category: ``,
        amount: ``,
        expneseDate: ``,
      })
  };
  return (
    <div className="border-[1px] shadow-2xl border-e-black">
      <form onSubmit={addExpense}>
        <h2>Add Expense</h2>
        <p>Enter your expense details below</p>
        <input
          type="text"
          name="name"
          id="input1"
          placeholder="Enter Expense name"
          className="m-2 p-0.5 border-[1px] border-black"
          value={expense.name}
          onChange={(e) => {
            setExpense({ ...expense, name: e.target.value });
          }}
        />
        <input
          type="text"
          name="description"
          id="input2"
          placeholder="Enter Description"
          className="m-2 p-0.5 border-[1px] border-black"
          value={expense.description}
          onChange={(e) => {
            setExpense({ ...expense, description: e.target.value });
          }}
        />
        <input
          type="text"
          name="category"
          id="input3"
          placeholder="Enter the Expense Category"
          className="m-2 p-0.5 border-[1px] border-black"
          value={expense.category}
          onChange={(e) => {
            setExpense({ ...expense, category: e.target.value });
          }}
        />
        <input
          type="text"
          name="amount"
          id="input4"
          placeholder="Enter Amount"
          className="m-2 p-0.5 border-[1px] border-black"
          value={expense.amount}
          onChange={(e) => {
            setExpense({ ...expense, amount: e.target.value });
          }}
        />
        <input
          type="text"
          name="expenseDate"
          id="input5"
          placeholder="Enter Date"
          className="m-2 p-0.5 border-[1px] border-black"
          value={expense.expenseDate}
          onChange={(e) => {
            setExpense({ ...expense, expenseDate: e.target.value });
          }}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
export default InputForm;
