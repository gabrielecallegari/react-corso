interface NomeCognomeData {
    nome: string,
    cognome: string
    datadinascita: number
}

export default function Dati1({
    nome,
    cognome,
    datadinascita
}: NomeCognomeData){

    return(
        <div>
            <p>Nome: {nome}</p>
            <p>Cognome: {cognome}</p>
            <p>Data di nascita {datadinascita}</p>
        </div>
    )
}