interface CodicefiscaleSesso {
    cf: string;
    sesso: string
}

export default function Dati2({
    cf,
    sesso
}: CodicefiscaleSesso){
    return(
        <div>
            <p>Codice fiscale: {cf}</p>
            <p>Sesso: {sesso}</p>
        </div>
    )

    
}