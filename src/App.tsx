import logo from "./logo.svg";
import "./App.css";
import PrimoComponente from "./Components/PrimoComponente/PrimoComponente";
import CartaIdentita, { CartaIdentitaProps } from "./Components/CartaIdentita/CartaIdentita";
import Riga from "./Components/Riga/Riga";
import { useState } from "react";
import Bottoni from "./Components/Bottoni/Bottoni";

function App() {

  function compito(x: number, y: number, stringa: string, boo: boolean, z?:number){
      if (boo ===true ){
        console.log("buona sera", stringa)
      }else{
        if (z === undefined){
          console.log(x*y);
        }else{
          console.log(x*y*z)
        }
      }
  }

  compito(1,2,"maestro",true)

  const arrNum : number[] = [0,1,2,3,4,5,6,7,8,9]

  arrNum.map((elemento: number)=> 
  console.log(elemento)
  )

  const arrArticle : string [] = ["Latte", "Uova","Formaggio","Prosciutto","Latte","Latte","Latte","Latte","Latte","Latte","Latte"]

  const [count, setCount] = useState<number>(0)
  
  function clicked(){
    setCount(count+1)
  }

  return (
    <div className="">
      <center>
      <img src={'https://media1.tenor.com/m/mJ_Og97j5WwAAAAC/chipi-chapa.gif'} className="App-logo" alt="logo" />

        {arrArticle.map((articolo: string, i: number) =>{
          return <Riga articolo={articolo} key={i} identificativo={i}/>
        })}

        <button onClick={()=>{
          clicked()
          console.log("Non sei brutto")
        }}>mi hai toccato: {count}</button>

        <Bottoni/>
    
      </center> 
    </div>
  );
}

export default App;
