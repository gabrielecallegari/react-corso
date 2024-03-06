import Header from "../Home/Header";
import {Link} from "react-router-dom";
import useCarrello from "../Home/hooks/useCarrello";
import CarrelloCard from "./CarrelloCard";
import {tipoProd} from "../Home/Home";
import React from "react";

const Prodotto = (props: any) => {

    const {cart, addCart, clearCart} = useCarrello()

    if(cart.prodotti.length == 0) {
        return (
            <Header>
                <div className={"py-16 px-[15%] m-auto"}>
                    <p className={"font-extrabold text-xl mb-10"}> Non ci sono prodotti nel carrello! </p>
                    <Link to={"/"} className={"ml-2 m-auto py-2 px-5 bg-teal-500 rounded " +
                        "text-white font-bold hover:bg-black"}> Esplora Prodotti </Link>
                </div>
            </Header>
        )
    }
    else {
        return (
            <Header>
                <div className={"py-16 px-[15%] m-auto"}>
                    <div className={"flex flex-row flex-wrap justify-between"}>
                        <div>
                            {cart.prodotti.map((p:tipoProd) => {
                                return(
                                    <CarrelloCard prod={p} />
                                )
                            })}
                        </div>
                        <div className={"h-full p-5 flex flex-col justify-between"}>
                            <div className={"p-5 w-72"}>
                                <div className={"flex justify-between"}>
                                    <p className={"font-extrabold text-xl"}>TOTALE: </p>
                                    <p className={"font-extrabold text-xl text-red-700"}>
                                        {cart.prodotti.map((p:any) => p.data).map((p:tipoProd) => p.price).reduce((pv:number, cv:number) => {return pv+cv}, 0)} €
                                    </p>
                                </div>
                                <div className={"w-full text-center mt-10"}>
                                    <button className={"w-full m-auto mb-5 py-2 px-5 bg-teal-500 rounded " +
                                        "text-white font-bold hover:bg-black"}> PROCEDI ALL'ACQUISTO </button>
                                    <button onClick={() => clearCart()} className={"w-full m-auto py-2 px-5 border-red-700 rounded " +
                                        "text-red-700 font-bold hover:bg-red-700 hover:text-white border"}> SVUOTA CARRELLO </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Header>
        )
    }
}

export default Prodotto