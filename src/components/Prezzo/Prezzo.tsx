import { useState } from "react";

export interface PrezzoProps {
  price: number;
  valuta: string;
}

const Prezzo = ({ price, valuta }: PrezzoProps) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  return (
    <div className="">
      {isVisible === true ? <p>Mario rossi</p> : null}
      <button className="bg-slate-400" onClick={() => setIsVisible(!isVisible)}>
        {isVisible === true ? "Non visualizzare dato" : "Visualizza dato"}
      </button>
    </div>
  );
};

export default Prezzo;
