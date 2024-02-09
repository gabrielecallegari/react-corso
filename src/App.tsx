import { useState } from "react";
import "./App.css";
import Card from "./components/Card/Card";
import { Cards } from "./interface/interface";

function App() {
  const [item, setItem] = useState<string>("Non Selezionato");

  const arrayProdotti: Cards[] = [
    {
      id: 0,
      title: "Pomodoro",
      onClick: setItem,
    },
    {
      id: 1,
      title: "Mozzarella",
      onClick: setItem,
    },
    {
      id: 2,
      title: "Basilico",
      onClick: setItem,
    },
    {
      id: 3,
      title: "Pasta",
      onClick: setItem,
    },
    {
      id: 4,
      title: "Pancetta",
      onClick: setItem,
    },
    {
      id: 5,
      title: "Salame",
      onClick: setItem,
    },
    {
      id: 6,
      title: "Olio",
      onClick: setItem,
    },
    {
      id: 7,
      title: "Aglio",
      onClick: setItem,
    },
    {
      id: 8,
      title: "Melanzana",
      onClick: setItem,
    },
  ];
  return (
    <div className="p-5  w-full flex items-center flex-col gap-8">
      <p className="text-3xl font-semibold">Prodotto selezionato: {item}</p>
      {arrayProdotti.map((el:Cards)=>{
        return(
          <Card onClick={el.onClick} title={el.title} key={el.id} />
        )
      })}
    </div>
  );
}

export default App;
