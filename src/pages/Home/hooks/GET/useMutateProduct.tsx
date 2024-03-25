import { useMutation } from "@tanstack/react-query";
import { useEffect } from "react";

export const useMutateProduct = () => {
  const getProducts = async (id: any) => {
    const response = await fetch(`https://dummyjson.com/products/${id}`);
    return response.json();
  };

  const query = useMutation({
    mutationKey: ["getProducts"],
    mutationFn: getProducts,
  });

  useEffect(() => {
    if (query.isSuccess) {
      console.log("ID",query.data);
    }
    if (query.isError) {
      console.log("ERROREW");
    }
  }, [query.data]);

  return query;
};
