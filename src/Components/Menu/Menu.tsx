import {useState} from "react";
import FigliouseEffect from "../FigliouseEffect/FigliouseEffect";
import Carta from "../Carta/Carta";
import MenuWrapper from "../MenuWrapper/MenuWrapper";

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
        <MenuWrapper prodCurr={currProd}>
            {cards.map((p) => {
                return (
                    <FigliouseEffect title={"ho wrappato ogni carta"}>
                        <Carta p={p} />
                    </FigliouseEffect>
                )
            })}
        </MenuWrapper>
    );
};

export default Menu;