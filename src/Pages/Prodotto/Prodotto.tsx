import {useParams} from "react-router-dom";
import CheckidLayout from "../../Layout/Checkid";

const Prodotto = (props: any) => {

    // devo chiamare questo id esattamente come l'id specificato nel path del router

    const {prodottoId} = useParams()

    console.log(prodottoId)

    return (
        <div>
            <p> Sei nel prodotto </p>
        </div>
    )
}

export default Prodotto