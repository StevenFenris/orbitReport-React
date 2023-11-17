import satData from "./satData";
import "./styling.css";
const Buttons = ({ filterByType, setSat, displaySats }) => {
  return (
    
    
    <div>
      <button>{displaySats.map((sat, id) => {
       return (
      <button onClick={() => filterByType(sat)} key={id}>
      {sat} Orbit
      </button>
      );
      })}
      </button>
      <button onClick={()=> setSat(satData)}>All Orbits</button>
    </div>
  );
};

export default Buttons;