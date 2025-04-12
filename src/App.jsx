import React from 'react';
import './App.css'
import Header from './header'
import InputForm from './Form'
import Table from './table';
import { useState } from 'react';
{/*import Search from './search';*/}

function App() {
    const [expenses, setExpenses] = useState([]); 
    {/*const [searchQuery , setSearchQuery] = useState("")*/}
    return (
      <div className="p-2">
        <Header />
        <div className="flex flex-row gap-3">
          <InputForm setExpenses={setExpenses} expenses={expenses} />
                <div className="w-2/3 float-left">
                    {/*< Search
                        searchQuery={searchQuery}
                        setSearchQuery={setSearchQuery} />*/}
                    <Table expenses={expenses}       />
          </div>
        </div>
      </div>
    );
}
export default App;