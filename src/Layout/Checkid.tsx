import {ReactNode, useEffect} from "react";
import {redirect} from "react-router-dom";

const CheckidLayout = ({children, prodottoId}: {children:ReactNode, prodottoId:any}) => {

    useEffect(() => {
        if(parseInt(prodottoId) > 10) {
            // dovrebbe redirectare ma non lo fa!
            redirect("/")
        }
    },[]
    )

    return(
        <div className={"w-full h-full"}>
            {children}
        </div>
    )
}

export default CheckidLayout