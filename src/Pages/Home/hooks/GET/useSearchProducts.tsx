import {useMutation} from "@tanstack/react-query";

export const useSearchProducts = () => {
    const searchProducts = async(product: string) => {
        const response = await fetch(
            `https://dummyjson.com/products/search?q=${product}`
        );
        return response.json();
    }

    return useMutation({
        mutationKey: ["searchProducts"],
        mutationFn: searchProducts
    })
}