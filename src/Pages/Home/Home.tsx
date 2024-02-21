import Header from "./Header";
import ProductCard from "./ProductCard";
import data from "./prodotti.json"

export interface tipoProd {
    id: number
    name: string
    price: number
    description: string
    image: string
}

const Home = () => {

    return (
        <Header>
            <div className={"p-10 flex gap-5"}>
                {data.products.map((p:tipoProd) => {
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