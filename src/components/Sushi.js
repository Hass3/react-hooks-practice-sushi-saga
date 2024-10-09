import React, {useState} from "react";

function Sushi({name,price,img, setEmptyPlates, cash, setCash}) {
  const [isEaten, setIsEaten]= useState(false)


  function handleClick(){
    if(!isEaten && cash >= price){
    setIsEaten(true)
    setEmptyPlates(true)
    setCash((cash)=> cash-price)
    }
  }

  



  return (
    <div className="sushi">
      <div className="plate" onClick={handleClick}>
        {/* Tell me if this sushi has been eaten! */}
        {isEaten ? null : (
          <img
            src={img}
            alt={name}
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  );
}

export default Sushi;
