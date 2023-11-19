import { useState } from "react";
import Buttons from "./components/Buttons";
import Table from "./components/Table";
import Banner from "./components/banner";
import satData from "./components/satData";


function App() {
  const [sat, setSat] = useState(satData); //holds and changes state respecitvely
  const displaySats = [...new Set(satData.map((data)=> data.orbitType))]; //creates new sat array to display
  const filterByType = function (currentType){ //filter for orbits, takes in orbit type
    const displaySats = satData.filter((newSats)=>{ //creates new sat list to display
      return newSats.orbitType === currentType; 
    });
    setSat(displaySats);//changes state with new sats
  };



  return (
    <div>
      <Banner />     
      <Buttons 
           filterByType={filterByType}
           setSat={setSat}
           displaySats={displaySats}
           />
      <Table sat={sat}/>
    </div>
  );
}

export default App;