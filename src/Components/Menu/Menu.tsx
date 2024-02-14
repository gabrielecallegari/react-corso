import {useState} from "react";
import FigliouseEffect from "../FigliouseEffect/FigliouseEffect";
import Carta from "../Carta/Carta";

export interface card {
    nome: string
    desc: string
    prezzo: number
    azione: any
}


const Menu = () => {

    const [currProd, setCurrProd] = useState({
        nome: "non selezionato",
        prezzo: 0
    })

    const cards: card[] = [
        {
            nome: "Crunchy Butterscotch",
            desc: "Butterscotch & Cashews",
            prezzo: 18,
            azione: setCurrProd //la funzione set può essere usata come attributo! utile per spezzettare codice
        },
        {
            nome: "Supermans Secret",
            desc: "Peanut Butter, Dry Fruit, with Vanilla Ice Cream",
            prezzo: 21,
            azione: setCurrProd
        },
        {
            nome: "Wonder Woman Shake",
            desc: "Saffron, with Vanilla Ice Cream ",
            prezzo: 19,
            azione: setCurrProd
        },
        {
            nome: "Almond Joy",
            desc: "American Nut, Badam Shake, Hazelnut Marimbula",
            prezzo: 19,
            azione: setCurrProd
        },
        {
            nome: "Vins 'n' Tasty",
            desc: "Frusta Margherita, 33cl Fanta",
            prezzo: 27,
            azione: setCurrProd
        },
        {
            nome: "Spider-Man Flavour",
            desc: "Webs, Spiders, Pain",
            prezzo: 31,
            azione: setCurrProd
        },
    ]



    return (
        <div className={"w-full"}>
            <div className={"bg-white flex w-full pb-2"}>
                <img src={"https://www.clipartbest.com/cliparts/dTr/ogy/dTrogybnc.png"}
                     className={"gap-2 h-12 w-12"}/>
                <div className={"font-bold text-2xl grow text-center"}>
                    Prodotto: {currProd.nome} | Prezzo: {currProd.prezzo} €
                </div>
                <img src={"https://cdn-icons-png.flaticon.com/512/107/107799.png"} className={"h-12 w-12"} />
            </div>

            <div className={"bg-gray-100 p-5 w-full"}>
                <div className={"flex"}>
                    <p className={"font-extrabold pb-2 border-b-4 border-red-600 tracking-wider"}> Milk Shakes </p>
                    <p></p>
                </div>
                {cards.map((p) => {
                    return (
                        <FigliouseEffect title={"ho wrappato ogni carta"}>
                            <Carta p={p} />
                        </FigliouseEffect>
                    )
                })}
            </div>
        </div>
    );
};

export default Menu;