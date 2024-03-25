import {ReactNode, useState} from "react";
import {Link} from "react-router-dom";
import useCarrello from "./hooks/useCarrello";
import {Autosave} from "react-autosave";
import {useSearchProducts} from "./hooks/GET/useSearchProducts";
import {useGetAllProducts} from "./hooks/GET/useGetAllProducts";

const Header = ({children}: {children:ReactNode}) => {

    const {cart, addCart} = useCarrello()
    const {mutate, data} = useSearchProducts()
    const query = useGetAllProducts()

    const [input, setInput] = useState("")
    const [search, setSearch] = useState([])

    return(
        <div>
            <div className={"w-full border-b-2 border-gray-200"}>
                <div className={"w-full py-8 flex flex-nowrap"}>
                    <Link to={"/"} className={"text-teal-500 font-extrabold text-4xl m-auto"}> e-Commerce </Link>
                    <div className={"flex gap-14 items-end m-auto"}>
                        <div className={"relative"}>
                            <input className={"border"} type={"text"} placeholder={"Cerca..."} value={input}
                                   onChange={(event:React.ChangeEvent<HTMLInputElement>) => {
                                       setInput(event.target.value)
                                   }}/>
                            <Autosave data={input} onSave={() => setSearch(query.data?.products.filter((p:any) => p.title.toLowerCase().includes(input.toLowerCase())))} interval={500}/>
                            <div className={"grid absolute bg-white"}>
                                {(input!=="") && search?.map((e:any)=>{
                                    return(
                                        <div className={"z-10 left-0"}>
                                            <Link to={"/prodotto/"+e.id}>{e.title}</Link>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
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