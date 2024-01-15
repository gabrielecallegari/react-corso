import CFGender from "./CFGender";
import NameAge from "./NameYear";

interface ComponentProps {
    name:string,
    surname:string,
    year:number
}

const CartaIdentita =({

}:ComponentProps
) => { 
    
    return (
        <><NameAge></NameAge>
        <CFGender></CFGender></>
    )
}
    export default  CartaIdentita;
