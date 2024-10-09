import React, {useState} from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";



function App() {
  const [emptyPlates, setEmptyPlates]= useState([])
  const[cash, setCash]= useState(200)

  function addPlate (newPlate){
    setEmptyPlates((prev)=> [...prev, newPlate])
  }


  return (
    <div className="app">
      <SushiContainer setPlates={addPlate} money={cash} setMoney ={setCash} />
      <Table money={cash} plates={emptyPlates} />
    </div>
  );
}

export default App;

// Clicking a sushi on a plate will eat the sushi, causing it to be removed from its plate and an empty plate to appear on the table.

// We need to make money! Whenever a sushi is eaten, customers should be automatically charged! Based on a budget decided by you, the developer, the amount of money remaining should go down by the cost of the sushi that was eaten. There is a spot to display this number in the Table component.

// No free meals! Customers cannot eat any sushi that exceeds the amount of money remaining in their balance.