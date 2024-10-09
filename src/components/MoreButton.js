import React, {useState} from "react";

function MoreButton({setSu}) {
const[currtentIndex, setCurrentIndex]= useState(4);


  function handleClick(){
  fetch(`http://localhost:3001/sushis?_start=${currtentIndex}&_limit=4`)
  .then(r=>r.json())
  .then(sushi=>setSu(sushi))
   setCurrentIndex(currtentIndex + 4)
  }


  return <button onClick={handleClick}>More sushi!</button>;
}

export default MoreButton;


