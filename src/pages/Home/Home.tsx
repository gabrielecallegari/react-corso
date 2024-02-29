import { Link } from "react-router-dom";
import { useGetAllProducts } from "./hooks/GET/useGetAllProducts";
import { useState } from "react";

const Home = () => {
  const [prodotti, setProdotti] = useState()
  const { data } = useGetAllProducts(setProdotti)
  console.log("PRODOTTI:",prodotti);
  
  
  return (
    <div>
      <p>Sei nella home</p>
      <Link to={"/prodotto/1"}>Vai al prodotto 1</Link>
    </div>
  );
};

export default Home;
