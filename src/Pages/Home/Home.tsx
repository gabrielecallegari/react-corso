import Header from "./Header";
import ProductCard from "./ProductCard";
import datas from "../prodotti.json"
import useOperations from "./hooks/useOperations";
import {useProducts} from "./hooks/useProducts";
import {useGetAllProducts} from "./hooks/GET/useGetAllProducts";
import {useEffect, useState} from "react";
import Prodotto from "../Prodotto/Prodotto";

export interface tipoProd {
    id: number
    name: string
    price: number
    description: string
    image: string
}

const Home = () => {

    // per richiamare l'hooks custom creato, si fa così:
    // crei una struttura che accolga gli elementi ritornati,
    // li devi scrivere tutti e con il nome usato nell'hooks
    const {prods, chiamataHooks} = useProducts()

    const {somma, differenza, prodotto, quoziente} = useOperations(10, 5)

    const [prodotti, setProdotti] = useState()
    const {data} = useGetAllProducts(setProdotti)

    return (
        <Header>
            <div className={"p-10 flex gap-5"}>
                {datas.products.map((p:tipoProd) => {
                    return(
                        <ProductCard prod={p} />
                    )
                })}
            </div>
        </Header>
    )
}

export default Home


/*
* nella home un sito di e-commerce
* con i prodotti mostrati e i loro dati
* ogni prodotto ha un link per andare alla pagina del prodotto
* la pagina del prodotto è a piacere
*
* const boh = require("./prodotti.json")
*    console.log(boh["products"][2].id)
*
*<Link to={"/prodotto/1"}> Vai al prodotto 1 </Link>
* */