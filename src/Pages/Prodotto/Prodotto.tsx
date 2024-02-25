import {useParams} from "react-router-dom";
import Header from "../Home/Header";
import {Link} from "react-router-dom";
import data from "../prodotti.json"
import {useGetAllProducts} from "../Home/hooks/GET/useGetAllProducts";

const Prodotto = (props: any) => {
    // devo chiamare questo id esattamente come l'id specificato nel path del router
    const {prodottoId} = useParams()

    const {data, isLoading, isError} = useGetAllProducts()

    if(isLoading)
        return(
            <Header>
                <div className={"p-14"}>
                    Loading...
                </div>
            </Header>
        )

    if(isError)
        return(
            <Header>
                <div className={"p-14"}>
                    Errore nella query
                </div>
            </Header>
        )

    return (
        <Header>
            <div className={"py-16 px-[15%] flex flex-wrap justify-around gap-5 m-auto"}>
                <div className={"w-96"}>
                    <a href={data.products[parseInt(prodottoId!)-1].thumbnail}><img className={"w-96 h-96 object-cover"} src={data.products[parseInt(prodottoId!)-1].thumbnail} /> </a>
                </div>
                <div className={"w-96 py-5"}>
                    <div className={"m-auto mt-1 h-full flex flex-col justify-between"}>
                        <div className={""}>
                            <p className={"text-4xl font-extrabold"}> {data.products[parseInt(prodottoId!)-1].title} </p>
                            <p className={"my-5 text-gray-700"}> {data.products[parseInt(prodottoId!)-1].description}</p>
                        </div>
                        <div className={"flex"}>
                            <p className={"text-red-700 text-3xl font-bold m-auto ml-0 mb-0"}> {data.products[parseInt(prodottoId!)-1].price} €</p>
                            <Link to={"/prodotto/"+prodottoId!} className={"py-2 px-5 bg-teal-500 rounded " +
                                "text-white font-bold hover:bg-black m-auto mr-0 mb-0"}> Aggiungi al carrello</Link>
                        </div>
                    </div>
                </div>
            </div>
        </Header>
    )
}

export default Prodotto