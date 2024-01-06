import React, {useState}  from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";


function App() {

  const [wallet, setWallet] = useState(100);


  return (
    <div className="app">
      <SushiContainer wallet ={wallet} setWallet={setWallet}/>
      <Table wallet ={wallet} setWallet={setWallet} />
    </div>
  );
}

export default App;
