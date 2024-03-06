import React from "react";
import {Link} from "react-router-dom";
import useCarrello from "../Home/hooks/useCarrello";

const CarrelloCard = ({prod}: {prod:any}) => {

    const {removeItem} = useCarrello()

    return (
        <div className={"m-1 p-5 flex flex-wrap gap-14"}>
            <div>
                <Link to={"/prodotto/"+prod.data.id}><img className={"w-56 h-56 m-auto my-5 object-cover"} src={prod.data.thumbnail} /></Link>
            </div>
            <div className={"flex flex-col justify-between"}>
                <div className={"w-80"}>
                    <Link to={"/prodotto/"+prod.data.id} className={"font-bold text-xl"}> {prod.data.title} </Link>
                    <p className={"my-5 text-gray-700"}> {prod.data.description}</p>
                </div>
                <div className={"flex flex-row mt-4 items-baseline justify-between"}>
                    <div>
                        <p className={"text-red-700 m-auto ml-2 font-bold text-3xl"}> {prod.data.price} €</p>
                    </div>
                    <div>
                        <button onClick={() => removeItem(prod)} className={"mr-2 m-auto mb-5 py-2 px-5 border border-red-700 rounded " +
                            "text-red-700 font-extrabold hover:text-black text-4xl"}> 🗑 </button>
                    </div>
                 </div>
             </div>
            <p className={"border-2 w-full"}></p>
        </div>
    )
}

export default CarrelloCard