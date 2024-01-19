import React,{useEffect, useState} from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi"

function SushiContainer({sushiList, sushiClicked, setSushiList,}) {

  const [doneCount, setDoneCount] = useState(0);

  function getMoreSushi(){

    

    fetch( `http://localhost:3001/sushis/`)
    .then((r) => r.json())
    .then((data)=> {
       
      setDoneCount(doneCount+4)
    console.log(doneCount)
     const newSushi= data.filter((sushi)=>{
       return(sushi.id > doneCount && sushi.id <= doneCount+4) 
      })
      console.log(newSushi)
      setSushiList(newSushi)
    })

  }


  return (
    <div className="belt">
      {/* Render Sushi components here! */}
      {sushiList.map((sushi)=>{
        return(
          <Sushi 
          sushiName={sushi.name} 
          image={sushi.img_url} 
          price={sushi.price} 
          key={sushi.id} 
          eaten={sushi.eaten}
          sushiClicked={sushiClicked}/>
        )
      })}
      <MoreButton  getMoreSushi={getMoreSushi}/>
    </div>
  );
}

export default SushiContainer;
