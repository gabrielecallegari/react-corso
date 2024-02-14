import {useEffect} from "react";
import {ReactNode} from "react";

const FigliouseEffect = ({children, title}: {children:ReactNode, title:string}) => {

    useEffect(
        () => {
            console.log(title)
        },
        []
    )

    return(
        <div>
            <p> Componente Layout: {title} </p>
            {children}
        </div>
    );
};

export default FigliouseEffect;