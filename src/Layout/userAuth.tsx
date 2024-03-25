import {ReactNode} from "react";
import {useCookies} from "react-cookie";

const userAuth = ({children}: {children:ReactNode}) => {

    const [cookies] = useCookies()

}

export default userAuth