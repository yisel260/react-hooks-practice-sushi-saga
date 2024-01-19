import React, {useState,useEffect}  from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";



function App() {

  const [wallet, setWallet] = useState(100);

  const API = "http://localhost:3001/sushis";

  const[emptyPlates,setEmptyPlates] = useState([])


const [sushiList, setSushiList] = useState([])

useEffect(() => {
  fetch("http://localhost:3001/sushis/?_limit=4")
    .then((r) => r.json())
    .then((sushis) => {
      const updatedSushis = sushis.map((sushi) => {
        return { ...sushi, eaten: false };
      });
      setSushiList(updatedSushis);
    
    });
}, []) 






  function sushiClicked(event){




    const eatenSushiId =  parseInt(event.currentTarget.getAttribute("value"))

    console.log(eatenSushiId)

    const eatenSushi = sushiList.find((sushi) => sushi.id === eatenSushiId)


    if (wallet >= eatenSushi.price) {

      const updatedSushis = sushiList.map((sushi) => {
        if (sushi.id === eatenSushi.id) return { ...sushi, eaten: true };
        return sushi;
      });

      setSushiList(updatedSushis);

      setWallet((wallet) => wallet - eatenSushi.price);

      setEmptyPlates([...emptyPlates,1])

    } else {
      alert("Need more 💸");
    }
  }



  return (
    <div className="app">
      <SushiContainer  setSushiList={setSushiList} sushiList={sushiList} sushiClicked={sushiClicked} />
      <Table wallet ={wallet} setWallet={setWallet} plates={emptyPlates} />
    </div>
  );
}

export default App;
