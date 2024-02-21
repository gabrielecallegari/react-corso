import {tipoProd} from "./Home";
import React from "react";
import {Link, redirect} from "react-router-dom";

const ProductCard = ({prod} : {prod:tipoProd}) => {
    return (
        <div className={"w-1/5 border-2 border-gray-200 p-0.5 rounded"}>
            <a href={"/prodotto/"+prod.id}><img className={"h-36 m-auto my-5"} src={prod.image} /></a>
            <Link to={"/prodotto/"+prod.id} className={"font-bold text-xl my-4 ml-2"}> {prod.name} </Link>
            <div className={"flex"}>
                <p className={"text-red-700 m-auto ml-2 font-bold"}> {prod.price} €</p>
                <Link to={"/prodotto/"+prod.id} className={"mr-2 m-auto mb-5 py-2 px-5 bg-teal-500 rounded " +
                    "text-white font-bold hover:bg-black"}> Vedi </Link>
            </div>
        </div>
    )
}

export default ProductCard