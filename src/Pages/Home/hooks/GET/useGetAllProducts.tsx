import {useQuery} from "@tanstack/react-query";
import {useEffect} from "react";

export const useGetAllProducts = (setProdotti:any) => {
    const getProducts = async () => {
        const response = await fetch('https://dummyjson.com/products')
        return response.json()
    }

    const query = useQuery({
        queryKey: ["getAllProducts"], queryFn: () => getProducts()
    })

    useEffect(() => {
        // se la query va a buon fine stampi i dati
        if(query.isSuccess) {
            console.log(query.data)
            setProdotti(query.data.products)
        }
        // se la query fallisce fallo sapere all'utente
        else if(query.isError) {
            console.log("Errore Query")
        }
    },[query.data])

    // query.data è il modo per accedere ai dati ritornati dalla query eseguita sopra
    // quando carichi il componente query.data è vuoto
    // quando si riempie richiami lo useEffect

    return query

}