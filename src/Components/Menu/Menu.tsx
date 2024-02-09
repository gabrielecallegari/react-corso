import {useState} from "react";

const Menu = () => {

    interface card {
        nome: string
        desc: string
        prezzo: number
    }

    const cards: card[] = [
        {
            nome: "Crunchy Butterscotch",
            desc: "Butterscotch & Cashews",
            prezzo: 18
        },
        {
            nome: "Supermans Secret",
            desc: "Peanut Butter, Dry Fruit, with Vanilla Ice Cream",
            prezzo: 21
        },
        {
            nome: "Wonder Woman Shake",
            desc: "Saffron, with Vanilla Ice Cream ",
            prezzo: 19
        },
        {
            nome: "Almond Joy",
            desc: "American Nut, Badam Shake, Hazelnut Marimbula",
            prezzo: 19
        },
        {
            nome: "Vins 'n' Tasty",
            desc: "Frusta Margherita, 33cl Fanta",
            prezzo: 27
        },
        {
            nome: "Spider-Man Flavour",
            desc: "Webs, Spiders, Pain",
            prezzo: 31
        },
    ]

    const [currProd, setCurrProd] = useState({
        nome: "non selezionato",
        prezzo: 0
    })

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
                        <div className={"bg-white p-2 mb-5"}>
                            <p className={"font-bold"}> {p.nome} </p>
                            <p className={"text-xs text-gray-600 pb-3"}> {p.desc} </p>
                            <div className={"flex"}>
                                <p className={"grow text-left font-extrabold"}> {p.prezzo} € </p>
                                <button onClick={() => setCurrProd( {nome: p.nome, prezzo: p.prezzo} )}
                                        className={"bg-red-600 py-2 px-5 text-white rounded"}> Add </button>
                            </div>
                        </div>
                    )
                })}
            </div>

        </div>
    );
};

export default Menu;