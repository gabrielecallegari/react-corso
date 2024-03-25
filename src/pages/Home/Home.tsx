import { Link } from "react-router-dom";
import { useGetAllProducts } from "./hooks/GET/useGetAllProducts";
import { useState } from "react";
import { useMutateProduct } from "./hooks/GET/useMutateProduct";
import useProdotti from "./hooks/useProdotti";
import { usePersonalCookies } from "../../hooks/usePersonalCookies";

const Home = () => {
  const mutate = useMutateProduct();
  const { data } = useGetAllProducts();
  const { products } = useProdotti();

  const { setPersonalCookie, removePersonalCookie } = usePersonalCookies();

  return (
    <div>
      <button onClick={()=>setPersonalCookie("Ciao sono gabriele")} >Set Cookies</button>
      <button onClick={removePersonalCookie} >Remove Cookies</button>
    </div>
  );
};

export default Home;
