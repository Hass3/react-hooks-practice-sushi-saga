import React, {useState,useEffect} from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";
// http://localhost:3001/sushis
function SushiContainer({setPlates, money, setMoney}) {
  const[sushi, setSushi] = useState([]);

  useEffect(()=>{
    fetch("http://localhost:3001/sushis?_limit=4")
    .then(r=>r.json())
    .then(sushis => setSushi(sushis))
  },[])


  return (
    <div className="belt">
      {sushi.map(su=><Sushi key={su.id} 
      name={su.name}
       img={su.img_url} 
       price ={su.price}
       setEmptyPlates={setPlates}
       cash={money}
       setCash={setMoney}
       />)}
      <MoreButton setSu ={setSushi} />
    </div>
  );
}

export default SushiContainer;
