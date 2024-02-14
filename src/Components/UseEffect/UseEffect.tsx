import {useEffect, useState} from "react";

const UseEffect = () => {

    const [cont, setCont] = useState(0)

    // useEffect: funzione che viene chiamata
    // quando il componente viene visulizzato a schermo (mount)
    // e quando il componente sparisce dallo schermo (dismount)
    // e quando modifichi una delle variabili del deps
    // NB: se l'array delle deps vuoto, il codice viene eseguito solo al mount e dismount

    useEffect(
        () => {
            console.log("accedo a useEffect")
        },
        [cont]
    )

  return (
      <div>
          <p> valore: {cont} </p>
          <button onClick={() => {setCont(cont+1)}}>
              Incrementa
          </button>
      </div>
  );
};

export default UseEffect;