import {ReactNode} from "react";
import {Link, useAsyncValue} from "react-router-dom";
import useCarrello from "./hooks/useCarrello";

const Header = ({children}: {children:ReactNode}) => {

    const {cart, addCart} = useCarrello()

    return(
        <div>
            <div className={"w-full h-full border-b-2 border-gray-200"}>
                <div className={"w-full py-8 flex flex-nowrap"}>
                    <Link to={"/"} className={"text-teal-500 font-extrabold text-4xl m-auto"}> e-Commerce </Link>
                    <div className={"flex gap-14 items-end m-auto"}>
                        <Link to={"/"} className={"font-bold hover:text-teal-500"}> Prodotti </Link>
                        <Link to={"/"} className={"font-bold hover:text-teal-500"}> Saldi </Link>
                        <Link to={"/"} className={"font-bold hover:text-teal-500"}> Partners </Link>
                        <Link to={"/"} className={"font-bold hover:text-teal-500"}> Contatti </Link>
                    </div>
                    <div className={"flex gap-14 items-end m-auto "}>
                        <Link to={"/"} className={"font-bold hover:text-teal-500"}> Registrati </Link>
                        <Link to={"/"} className={"text-teal-500 font-bold"}> Login </Link>
                        <Link to={"/carrello"} className={"text-xl"}>{cart.prodotti.length} 🛒 </Link>
                    </div>
                </div>
            </div>
            {children}
        </div>
    )
}

export default Header