function InputForm() {
    <div className="border-[1px] shadow-2xl border-e-black">
      <form
        action="submit"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <h2>Add Expense</h2>
        <p>Enter your expense details below</p>
        <input
          type="text"
          name=""
          id=""
          placeholder="Enter Expense name"
          className="m-2 p-0.5 border-[1px] border-black"
        />
        <input
          type="text"
          name=""
          id=""
          placeholder="Enter Description"
          className="m-2 p-0.5 border-[1px] border-black"
        />
        <input
          type="text"
          name=""
          id=""
          placeholder="Enter the Expense Category"
          className="m-2 p-0.5 border-[1px] border-black"
        />
        <input
          type="text"
          name=""
          id=""
          placeholder="Enter Amount"
          className="m-2 p-0.5 border-[1px] border-black"
        />
        <input
          type="text"
          name=""
          id=""
          placeholder="Enter Date"
          className="m-2 p-0.5 border-[1px] border-black"
        />
        <button onClick={(e) => {}}>Submit</button>
      </form>
      ;
    </div>;
}