import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";

export const useGetAllProducts = (setProdotti: any) => {
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
      console.log(query.data);
      setProdotti(query.data.products)
    }
    if (query.isError) {
      console.log("ERROREW");
    }
  }, [query.data]);

  return query;
};
