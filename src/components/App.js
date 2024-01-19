import React, {useState,useEffect}  from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";



function App() {

  const API = "http://localhost:3001/sushis";

const [sushiList, setSushiList] = useState([])

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



  return (
    <div className="app">
      <SushiContainer  setSushiList={setSushiList} sushiList={sushiList} wallet ={wallet} setWallet={setWallet}/>
      <Table wallet ={wallet} setWallet={setWallet} />
    </div>
  );
}

export default App;
