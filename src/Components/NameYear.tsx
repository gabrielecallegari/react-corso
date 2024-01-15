interface CartaidentitaProps {
    name:string,
    surname:string,
    year:number
}

const NameYear =({
    name,
    surname,
    year
}:CartaidentitaProps
) => { 
    return (
        <div>
            <p>{name}</p>
            <p>{surname}</p>
            <p>{year}</p>
        </div>
    )
};
    export default NameYear;
