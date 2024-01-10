import Dati1 from "../DatiCarta/Dati1";
import Dati2 from "../DatiCarta/Dati2";

export default function CartaIdentita(){
    return(
        <div>
            <Dati1 nome={"Vincenzo"} cognome={"Grasso"} datadinascita={"27/11/2002"}/>
            <Dati2 cf={"1234567890123456"} sesso={"Poco purtroppo"}/>
        </div>
    );
}