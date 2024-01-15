interface CartaidentitaProps {
    CF:string,
    gender:string
}

const CFGender =({
    CF,
    gender
}:CartaidentitaProps
) => { 
    return (
        <div>
            <p>{CF}</p>
            <p>{gender}</p>
        </div>
    )
};
    export default  CFGender;
