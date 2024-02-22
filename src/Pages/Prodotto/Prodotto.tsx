import {useParams} from "react-router-dom";
import Header from "../Home/Header";
import {Link} from "react-router-dom";
import data from "../prodotti.json"

const Prodotto = (props: any) => {
    // devo chiamare questo id esattamente come l'id specificato nel path del router
    const {prodottoId} = useParams()

    return (
        <Header>
            <div className={"my-16 flex h-96"}>
                <div className={"w-2/12"}></div>
                <img className={"w-3/12 h-full"} src={data.products[parseInt(prodottoId!)-1].image} />
                <div className={"w-2/12"}></div>
                <div className={"w-4/12 m-auto mt-1 h-full"}>
                    <div className={"h-3/4"}>
                        <p className={"text-4xl font-extrabold"}> {data.products[parseInt(prodottoId!)-1].name} </p>
                        <p className={"my-5 text-gray-700"}> {data.products[parseInt(prodottoId!)-1].description}</p>
                    </div>
                    <div className={"flex h-1/4"}>
                        <p className={"text-red-700 text-3xl font-bold m-auto ml-0 mb-0"}> {data.products[parseInt(prodottoId!)-1].price} €</p>
                        <Link to={"/prodotto"+prodottoId!} className={"py-2 px-5 bg-teal-500 rounded " +
                            "text-white font-bold hover:bg-black m-auto mr-0 mb-0"}> Aggiungi al carrello</Link>
                    </div>
                </div>
                <div className={"w-2/12"}></div>
            </div>
        </Header>
    )
}

export default Prodotto