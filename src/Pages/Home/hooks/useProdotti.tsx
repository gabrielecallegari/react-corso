import {useDispatch, useSelector} from "react-redux";
import {setProdotti} from "../../../reducers/prodottiReducer";
import {ReducerType} from "../../../store/store";

const useProdotti = () => {
    const dispatch = useDispatch()

    const product = useSelector( (state: ReducerType) => state.prodottiReducer)

    const setProducts = (data:any) => {
        dispatch(setProdotti(data))
    }
    return {product, setProducts}
}


export default useProdotti