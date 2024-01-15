interface ComponentProps {
    CF?:string,
    gender?:string
}

const CFGender =({
    CF,
    gender
}:ComponentProps
) => { 
    return (
        <div>
            <p>{CF}</p>
            <p>{gender}</p>
        </div>
    )
};
    export default  CFGender;
