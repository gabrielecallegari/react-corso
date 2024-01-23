import { useState } from "react";

export default function Bottoni(){

    const arrN : number [] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

    const [n, setN] = useState<number>(0)
  
    function clickNumber(numero : number){
      setN(numero)
    }
  
    return (
      <div className="">

          <h1>Il numero pigiato è: {n}</h1>
          <br></br>
          {arrN.map((num : number, i :number) => (
            <button key={i} onClick={() =>
              clickNumber(num)}>
              {num}
            </button>
          ))}
      </div>
    );
}