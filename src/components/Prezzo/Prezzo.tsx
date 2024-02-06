import { useState } from "react";

export interface PrezzoProps {
  price: number;
  valuta: string;
}

const Prezzo = ({ price, valuta }: PrezzoProps) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const myArr = [
    6, 2, 3, 4, 5, 6, 7, 8, 12, 23, 45, 65675, 767, 4343, 8, 8, 8, 54534, 1, 2,
    4,
  ];

  return (
    <div className="">
      {isVisible === true ? <p>Mario rossi</p> : null}
      <button className="bg-slate-400" onClick={() => setIsVisible(!isVisible)}>
        {isVisible === true ? "Non visualizzare dato" : "Visualizza dato"}
      </button>
      <div className="flex gap-5">
        {myArr
          .filter((el: number, i: number) => i < 3)
          .map((el: number,i: number) => {
            return <p key={i} >{el}</p>;
          })}
      </div>

      <div className="flex gap-5" >
          {myArr.map((el: number)=><p key={el} >{el}</p>)}
      </div>
    </div>
  );
};

export default Prezzo;
