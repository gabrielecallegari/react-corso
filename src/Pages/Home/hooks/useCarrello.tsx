import {useDispatch, useSelector} from "react-redux";
import {clearCarrello, addCarrello} from "../../../reducers/carrelloReducer";
import {ReducerType} from "../../../store/store";

const useCarrello = () => {
    const dispatch = useDispatch()

    const cart = useSelector( (state: ReducerType) => state.carrelloReducer)

    const addCart = (data:any) => {
        dispatch(addCarrello(data))
    }
    const clearCart = (data:any) => {
        dispatch(clearCarrello(data))
    }
    return {cart, addCart, clearCart}
}

export default useCarrello