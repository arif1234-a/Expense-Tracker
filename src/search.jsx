/*import React from "react";
function Search({expenses,searchQuery,setSearchQuery}){
    const search = expenses.filter((expense) => {
        expense.name.value.toLowerCase().includes(searchQuery.toLowerCase());
    }); return (
        <div className="mt-4">
            <input
                type="text"
                placeholder="Search expense name"
                className="border border-gray-400 p-2 w-full rounded-[10px] my-2"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            />
        </div>
    );
}
export default Search; */