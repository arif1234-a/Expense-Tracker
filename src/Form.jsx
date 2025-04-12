import { useState } from "react";

function InputForm() {
  const { expense, setExpense } = useState({});
  const [ expenses, setExpenses ]= useState([]);

  const addExpense = (e) => {
    e.preventDefault(),
      (setExpense = {
        name: `${document.getElementById("input1").value}`,
        Description: `${document.getElementById("input2").value}`,
        Category: `${document.getElementById("input3").value}`,
        Amount: `${document.getElementById("input4").value}`,
        Date: `${document.getElementById("input5").value}`,
      }),
      setExpenses = ([...expenses,expense]);
  };
  return (
    <div className="border-[1px] shadow-2xl border-e-black">
      <form onSubmit={addExpense}>
        <h2>Add Expense</h2>
        <p>Enter your expense details below</p>
        <input
          type="text"
          name=""
          id="input1"
          placeholder="Enter Expense name"
          className="m-2 p-0.5 border-[1px] border-black"
        />
        <input
          type="text"
          name=""
          id="input2"
          placeholder="Enter Description"
          className="m-2 p-0.5 border-[1px] border-black"
        />
        <input
          type="text"
          name=""
          id="input3"
          placeholder="Enter the Expense Category"
          className="m-2 p-0.5 border-[1px] border-black"
        />
        <input
          type="text"
          name=""
          id="input4"
          placeholder="Enter Amount"
          className="m-2 p-0.5 border-[1px] border-black"
        />
        <input
          type="text"
          name=""
          id="input5"
          placeholder="Enter Date"
          className="m-2 p-0.5 border-[1px] border-black"
        />
        <button>
          Submit
        </button>
      </form>
    </div>
  );
}
export default InputForm;
