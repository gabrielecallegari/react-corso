

export default function Riga({ articolo, identificativo }: {articolo: string, identificativo: number } ){
    return(
        <div>
            <input type="checkbox" id={identificativo.toString()}/>
            <label htmlFor={identificativo.toString()}> {articolo} </label>
        </div>
    )
}