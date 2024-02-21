import {useState} from "react";

export interface tipoTitolo {
    prezzo: number
    valuta: string
}

const Title = ({prezzo, valuta}: tipoTitolo) => {

    const [price, setPrice] = useState(prezzo)
    const [isVisible, setIsVisible] = useState(false)

    return (
      <div className="bg-lime-600 flex gap-3">
          <p className={"text-white"}> Il valore corrente è: {price}{valuta}</p>
          <button className={"font-extrabold text-blue-700"}
            onClick={() => setPrice(price+1)}>
                INCREMENTA
          </button>
          <button className={"font-extrabold text-red-700"}
              onClick={() => setPrice(price-1)}> DECREMENTA </button>



          {isVisible === true ? <p> qui c'è il dato </p> : null}

          <button className={"bg-black text-white gap-5 font-extrabold"}
            onClick={() => setIsVisible(!isVisible)}>
              {isVisible === true ? "NASCONDI DATO" : "VISUALIZZA DATO"}
          </button>
      </div>
    );
};

export default Title;