import CFGender from "./CFGender";
import NameYear from "./NameYear";
import NameAge from "./NameYear";

export interface CartaidentitaProps {
    name:string,
    surname:string,
    year:number,
    CF:string,
    gender:string
}

const CartaIdentita =({
name,
surname,
year,
CF,
gender
}:CartaidentitaProps
) => { 
    
    return (
       <div>
        <NameYear
            name={name}
            surname={surname}
            year={year}
        />
        <CFGender
            CF={CF}
            gender={gender}
        />
       </div>
    )
}
    export default  CartaIdentita;
