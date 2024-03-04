import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import useProdotti from "../useProdotti";

export const useGetAllProducts = () => {
  const { setProducts } = useProdotti();

  const getProducts = async () => {
    const response = await fetch("https://dummyjson.com/products");
    return response.json();
  };

  const query = useQuery({
    queryKey: ["getAllProducts"],
    queryFn: () => getProducts(),
  });

  useEffect(() => {
    if (query.isSuccess) {
      setProducts(query.data.products);
    }
    if (query.isError) {
      console.log("ERROREW");
    }
  }, [query.data]);

  return query;
};
