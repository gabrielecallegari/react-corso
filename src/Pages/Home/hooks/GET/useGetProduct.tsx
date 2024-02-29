import {useQuery} from "@tanstack/react-query";
import {useEffect} from "react";

export const useGetProduct = (id: string) => {

    const getProduct = async () => {
        const response = await fetch(`https://dummyjson.com/products/${id}`)
        return response.json()
    }

    const query = useQuery({
        queryKey: ["getProduct"], queryFn: () => getProduct()
    })

    useEffect(() => {
        if(query.isLoading) {
            console.log("Loading...")
        }
        // se la query va a buon fine stampi i dati
        if(query.isSuccess) {
            console.log(query.data)
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