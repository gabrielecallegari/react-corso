import Header from "./Header";
import ProductCard from "./ProductCard";
import useOperations from "./hooks/useOperations";
import {useProducts} from "./hooks/useProducts";
import {useGetAllProducts} from "./hooks/GET/useGetAllProducts";
import {useUpdateProducts} from "./hooks/GET/useUpdateProducts";
export interface tipoProd {
    id: number
    title: string
    description: string
    price: number
    discountPercentage: number
    rating: number
    stock:number
    brand: string
    category: string
    thumbnail: string
    images: string[]
}

const Home = () => {

    // per richiamare l'hooks custom creato, si fa così:
    // crei una struttura che accolga gli elementi ritornati,
    // li devi scrivere tutti e con il nome usato nell'hooks
    const {prods, chiamataHooks} = useProducts()

    const {somma, differenza, prodotto, quoziente} = useOperations(10, 5)

    const query = useGetAllProducts()
    const mutation = useUpdateProducts()

    if(query.isLoading)
        return(
            <Header>
                <div className={"p-14"}>
                    Loading...
                </div>
            </Header>
        )

    if(query.isError)
        return(
            <Header>
                <div className={"p-14"}>
                    Errore nella query
                </div>
            </Header>
        )

    return (
        <Header>
            <div className={"p-14"}>
                <div className={"m-auto flex gap-5 flex-wrap"}>
                    {query.data.products.map((p:tipoProd) => {
                        return(
                            <ProductCard prod={p} />
                        )
                    })}
                </div>
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