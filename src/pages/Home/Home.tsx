import { Link } from "react-router-dom";
import { useGetAllProducts } from "./hooks/GET/useGetAllProducts";

const Home = () => {
  const { data } = useGetAllProducts()
  return (
    <div>
      <p>Sei nella home</p>
      <Link to={"/prodotto/1"}>Vai al prodotto 1</Link>
    </div>
  );
};

export default Home;
