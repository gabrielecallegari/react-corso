import {tipoProd} from "./Home";
import React from "react";
import {Link, redirect} from "react-router-dom";

const ProductCard = ({prod} : {prod:tipoProd}) => {
    return (
        <div className={"w-64 border-2 border-gray-200 p-0.5 rounded flex flex-col justify-between"}>
            <div>
                <a href={"/prodotto/"+prod.id}><img className={"w-56 h-56 m-auto my-5 object-cover"} src={prod.thumbnail} /></a>
            </div>
            <div>
                <Link to={"/prodotto/"+prod.id} className={"font-bold text-xl ml-2"}> {prod.title} </Link>
                <div className={"flex mt-4"}>
                    <p className={"text-red-700 m-auto ml-2 font-bold"}> {prod.price} €</p>
                    <Link to={"/prodotto/"+prod.id} className={"mr-2 m-auto mb-5 py-2 px-5 bg-teal-500 rounded " +
                        "text-white font-bold hover:bg-black"}> Vedi </Link>
                </div>
            </div>


        </div>
    )
}

export default ProductCard