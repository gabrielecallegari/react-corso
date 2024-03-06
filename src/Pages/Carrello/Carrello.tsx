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
                    <div className={"flex flex-wrap justify-between"}>
                        <div className={"w-[65%]"}>
                            {cart.prodotti.map((p:tipoProd) => {
                                return(
                                    <CarrelloCard prod={p} />
                                )
                            })}
                        </div>
                        <div className={"h-full p-5 flex flex-col justify-between"}>
                            <div className={"p-5"}>
                                <div className={"flex justify-between"}>
                                    <p className={"font-extrabold text-xl"}>TOTALE: </p>
                                    <p className={"font-extrabold text-xl text-red-700"}>
                                        {cart.prodotti.reduce((pv:tipoProd, cv:tipoProd) => {return pv.price+cv.price}, 0)} €
                                    </p>
                                </div>
                                <div className={"w-full text-center mt-10"}>
                                    <Link to={"/carrello"} className={"w-full mr-2 m-auto mb-5 py-2 px-5 bg-teal-500 rounded " +
                                        "text-white font-bold hover:bg-black"}> PROCEDI ALL'ACQUISTO </Link>
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