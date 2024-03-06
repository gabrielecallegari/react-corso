import {useDispatch, useSelector} from "react-redux";
import {clearCarrello, addCarrello, removeOggetto} from "../../../reducers/carrelloReducer";
import {ReducerType} from "../../../store/store";

const useCarrello = () => {
    const dispatch = useDispatch()

    const cart = useSelector( (state: ReducerType) => state.carrelloReducer)

    const addCart = (data:any) => {
        dispatch(addCarrello(data))
    }
    const clearCart = () => {
        dispatch(clearCarrello())
    }
    const removeItem = (data:any) => {
        dispatch(removeOggetto(data))
    }
    return {cart, addCart, clearCart, removeItem}
}

export default useCarrello