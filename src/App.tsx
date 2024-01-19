import { useState } from "react";
import "./App.css";

function App() {
  
  const [incremento, setIncremento] = useState<number>(0)
  

  function clicked(){
    console.log("Click");
    setIncremento(incremento +1)
    
  }

  return (
    <div className="p-5  w-full" >
      <p>Valore variabile: {incremento} </p>
      <button onClick={clicked} >Cliccami</button>
    </div>
  );
}

export default App;
