import React from "react";
import {Link} from "react-router-dom";
import useCarrello from "../Home/hooks/useCarrello";
import {tipoProd} from "../Home/Home";

const CarrelloCard = ({prod}: {prod:any}) => {

    const {cart} = useCarrello()

    return (
        <div className={"m-1 border-2 border-gray-200 p-5 rounded flex flex-wrap gap-14"}>
             <div>
                 <a href={"/prodotto/"+prod.data.id}><img className={"w-56 h-56 m-auto my-5 object-cover"} src={prod.data.thumbnail} /></a>
             </div>
             <div className={"flex flex-col justify-between"}>
                 <div className={"w-80"}>
                     <Link to={"/prodotto/"+prod.data.id} className={"font-bold text-xl"}> {prod.data.title} </Link>
                     <p className={"my-5 text-gray-700"}> {prod.data.description}</p>
                 </div>
                 <div className={"flex flex-row mt-4 items-center justify-between"}>
                     <div>
                         <Link to={"/prodotto/"+prod.data.id} className={"mr-2 m-auto mb-5 py-2 px-5 bg-teal-500 rounded " +
                              "text-white font-bold hover:bg-black"}> RIMUOVI DAL CARRELLO </Link>
                      </div>
                      <div>
                          <p className={"text-red-700 m-auto ml-2 font-bold text-2xl"}> {prod.data.price} €</p>
                      </div>
                   </div>
               </div>
           </div>
    )
}

export default CarrelloCard