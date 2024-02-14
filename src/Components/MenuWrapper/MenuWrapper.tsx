import FigliouseEffect from "../FigliouseEffect/FigliouseEffect";
import Carta from "../Carta/Carta";
import {ReactNode} from "react";

const MenuWrapper = ({children, prodCurr}: {children: ReactNode, prodCurr: {nome:string, prezzo:number}}) => {

    return(
        <div className={"w-full"}>
            <div className={"bg-white flex w-full pb-2"}>
                <img src={"https://www.clipartbest.com/cliparts/dTr/ogy/dTrogybnc.png"}
                     className={"gap-2 h-12 w-12"}/>
                <div className={"font-bold text-2xl grow text-center"}>
                    Prodotto: {prodCurr.nome} | Prezzo: {prodCurr.prezzo} €
                </div>
                <img src={"https://cdn-icons-png.flaticon.com/512/107/107799.png"} className={"h-12 w-12"} />
            </div>

            <div className={"bg-gray-100 p-5 w-full"}>
                <div className={"flex"}>
                    <p className={"font-extrabold pb-2 border-b-4 border-red-600 tracking-wider"}> Milk Shakes </p>
                    <p></p>
                </div>
                {children}
            </div>
        </div>
    )
}

export default MenuWrapper