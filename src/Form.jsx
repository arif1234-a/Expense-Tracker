import React, { useState } from "react";

function InputForm({ setExpenses, expenses }) {
  const [expense, setExpense] = useState({
    name: "",
    description: "",
    category: "",
    amount: "",
    expenseDate: "",
  });

  const addExpense = (e) => {
    e.preventDefault();
    setExpenses([...expenses, expense]); 
    setExpense({
      name: "",
      description: "",
      category: "",
      amount: "",
      expenseDate: "",
    }); 
  };

    return (
      <div className="w-1/3 float-start border-b-black border-1 p-3 rounded-[10px]">
        <form onSubmit={addExpense} className="mt-4">
          <input
            type="text"
            placeholder="Name"
            className="border m-2 p-1 w-full rounded-[10px]"
            value={expense.name}
            onChange={(e) => setExpense({ ...expense, name: e.target.value })}
          />
          <input
            type="text"
            placeholder="Description"
            className="border m-2 p-1 rounded-[10px] w-full"
            value={expense.description}
            onChange={(e) =>
              setExpense({ ...expense, description: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="Category"
            className="border m-2 p-1 w-full rounded-[10px]"
            value={expense.category}
            onChange={(e) =>
              setExpense({ ...expense, category: e.target.value })
            }
          />
          <input
            type="number"
            placeholder="Amount"
            className="border m-2 p-1 w-full rounded-[10px]"
            value={expense.amount}
            onChange={(e) => setExpense({ ...expense, amount: e.target.value })}
          />
          <input
            type="date"
            className="border m-2 p-1 w-full rounded-[10px]"
            value={expense.expenseDate}
            onChange={(e) =>
              setExpense({ ...expense, expenseDate: e.target.value })
            }
          />
          <button
            type="submit"
            className="bg-black text-white px-4 py-2 w-full rounded-[10px]"
          >
            Submit
          </button>
        </form>
      </div>
    );
}

export default InputForm;
