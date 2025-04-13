import React from "react";

function Table({ expenses, searchQuery }) {
    const search = expenses.filter((expense) => {
      expense.name.toLowerCase().includes(searchQuery.toLowerCase());
    });

  return (
    <table className="border-gray-300 w-full rounded-[10px]">
      <thead>
        <tr className="bg-black text-white">
          <th className=" px-4 py-2">Name</th>
          <th className=" px-4 py-2">Description</th>
          <th className=" px-4 py-2">Category</th>
          <th className=" px-4 py-2">Amount</th>
          <th className="px-4 py-2">Date</th>
        </tr>
      </thead>
      <tbody>
              {search.lenght>0?(search.map((expense,index) => ( <tr key={index} className="text-center">
            <td className="border border-gray-300 px-4 py-2">{expense.name}</td>
            <td className="border border-gray-300 px-4 py-2">
              {expense.description}
            </td>
            <td className="border border-gray-300 px-4 py-2">
              {expense.category}
            </td>
            <td className="border border-gray-300 px-4 py-2">
              {expense.amount}
            </td>
            <td className="border border-gray-300 px-4 py-2">
              {expense.expenseDate}
            </td>
          </tr>))): (
                  expenses.map((expense, index) => (
          <tr key={index} className="text-center">
            <td className="border border-gray-300 px-4 py-2">{expense.name}</td>
            <td className="border border-gray-300 px-4 py-2">
              {expense.description}
            </td>
            <td className="border border-gray-300 px-4 py-2">
              {expense.category}
            </td>
            <td className="border border-gray-300 px-4 py-2">
              {expense.amount}
            </td>
            <td className="border border-gray-300 px-4 py-2">
              {expense.expenseDate}
            </td>
          </tr>
        )))}
      </tbody>
    </table>
  );
}

export default Table;