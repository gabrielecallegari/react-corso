interface ComponentProps {
    name?:string,
    surname?:string,
    year?:number
}

const NameAge =({
    name,
    surname,
    year
}:ComponentProps
) => { 
    return (
        <div>
            <p>{name}</p>
            <p>{surname}</p>
            <p>{year}</p>
        </div>
    )
};
    export default NameAge;
