import {useParams} from "react-router-dom";
import Header from "../Home/Header";
import {useGetProduct} from "../Home/hooks/GET/useGetProduct";
import useCarrello from "../Home/hooks/useCarrello";

const Prodotto = (props: any) => {

    const {addCart} = useCarrello()

    // devo chiamare questo id esattamente come l'id specificato nel path del router
    const {prodottoId} = useParams()

    const getprod = useGetProduct(prodottoId!)

    if(getprod.isLoading)
        return(
            <Header>
                <div className={"p-14"}>
                    Loading...
                </div>
            </Header>
        )

    if(getprod.isError)
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
                    <a target="_blank" href={getprod.data.thumbnail}><img className={"w-96 h-96 object-cover"} src={getprod.data.thumbnail} /> </a>
                </div>
                <div className={"w-96 py-5"}>
                    <div className={"m-auto mt-1 h-full flex flex-col justify-between"}>
                        <div className={""}>
                            <p className={"text-4xl font-extrabold"}> {getprod.data.title} </p>
                            <p className={"my-5 text-gray-700"}> {getprod.data.description}</p>
                        </div>
                        <div className={"flex"}>
                            <p className={"text-red-700 text-3xl font-bold m-auto ml-0 mb-0"}> {getprod.data.price} €</p>
                            <button onClick={() => addCart(getprod)}
                            className={"py-2 px-5 bg-teal-500 rounded text-white font-bold hover:bg-black m-auto mr-0 mb-0"}>
                                Aggiungi al carrello
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </Header>
    )
}

export default Prodotto