import {useEffect, useState} from "react";

const Casella = ({numero}:{numero:number}) => {

    const [flag, setFlag] = useState(0)

    useEffect(
        () => {
            console.log(numero*numero-1)
        },
        [flag]
    )

    return (
        <button onClick={() => setFlag(flag+1)}
            className={"w-1/5 border-2 rounded aspect-square hover:bg-red-600 hover:bg-opacity-40 hover:font-bold"}>
            {numero}
        </button>
    )
}

export default Casella