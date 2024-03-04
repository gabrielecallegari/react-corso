import { useDispatch, useSelector } from "react-redux";
import { ReducerType } from "../../../store/store";
import { setProdotti } from "../../../reducers/prodottiReducer";

const useProdotti = () => {
  const dispatch = useDispatch();
  const products = useSelector((state: ReducerType) => state.prodottiReducer);

  const setProducts = (data: any) => {
    dispatch(setProdotti(data))
  }

  return {
    products,
    setProducts
  }
};

export default useProdotti;
