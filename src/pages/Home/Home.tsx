import { Link } from "react-router-dom";
import { useProducts } from "./hooks/useProducts";

const Home = () => {
  const { products, chiamataHooks } = useProducts();
  return (
    <div>
      <p>Sei nella home</p>
      <button onClick={()=>chiamataHooks()} >Pemimmio</button>
      <Link to={"/prodotto/1"}>Vai al prodotto 1</Link>
    </div>
  );
};

export default Home;
