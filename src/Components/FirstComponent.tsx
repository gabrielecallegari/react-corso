interface ComponentProps {
    name:string,
    age:number
}

const FirstComponent =({
    name,
    age
}:ComponentProps
) => { 
    
    console.log("User: ", name, " Age: ",age);
    return (
        <div>
            <p>first component</p>
        </div>
    )
};
    export default  FirstComponent;
