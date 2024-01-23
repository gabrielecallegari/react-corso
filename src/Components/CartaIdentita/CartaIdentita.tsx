import Dati1 from "../DatiCarta/Dati1";
import Dati2 from "../DatiCarta/Dati2";

export interface CartaIdentitaProps {
    nome: string,
    cognome: string,
    anno: number,
    cf: string,
    sesso: string
}

export default function CartaIdentita({
    nome,
    cognome,
    anno,
    cf,
    sesso
}: CartaIdentitaProps){
    return(
        <div>
            <Dati1 nome={nome} cognome={cognome} datadinascita={anno}/>
            <Dati2 cf={cf} sesso={sesso}/>
        </div>
    );
}