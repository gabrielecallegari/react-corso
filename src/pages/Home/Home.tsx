import { Link } from "react-router-dom";
import { useGetAllProducts } from "./hooks/GET/useGetAllProducts";
import { useState } from "react";
import { useMutateProduct } from "./hooks/GET/useMutateProduct";
import useProdotti from "./hooks/useProdotti";

const Home = () => {
  const mutate = useMutateProduct();
  const { data } = useGetAllProducts();
  const { products } = useProdotti();
  const prezzo = 352;

  console.log(`IL PREZZO DI ${prezzo} è PER IL PRODOTTO 1`);


  return (
    <div>
      <p>Sei nella home</p>
      {products?.map((el: any) => {
        return (
          <button onClick={() => mutate.mutate(el.id)}>
            Prendi prodotto {el.id}{" "}
          </button>
        );
      })}
      <Link to={"/prodotto/1"}>Vai al prodotto 1</Link>
    </div>
  );
};

export default Home;
