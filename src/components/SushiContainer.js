import React,{useEffect, useState} from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi"

function SushiContainer() {

  
  const [sushiList, setSushiList] = useState([])
  const [wallet, setWallet] = useState(100);

  function sushiClicked(eatenSushi){
    if (wallet >= eatenSushi.price) {
      const updatedSushis = sushiList.map((sushi) => {
        if (sushi.id === eatenSushi.id) return { ...sushi, eaten: true };
        return sushi;
      });

      setSushiList(updatedSushis);

      setWallet((wallet) => wallet - eatenSushi.price);
    } else {
      alert("Need more 💸");
    }
  }


  useEffect(() => {
    fetch("http://localhost:3001/sushis/?_limit=4")
      .then((r) => r.json())
      .then((sushis) => {
        const updatedSushis = sushis.map((sushi) => {
          return { ...sushi, eaten: false };
        });
        setSushiList(updatedSushis);
        console.log(sushiList)
      });
  }, []) 

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
      <MoreButton />
    </div>
  );
}

export default SushiContainer;
