import {ReactNode} from "react";

const IntestazioneTab = ({children}: {children: ReactNode}) => {
    return(
        <div className={"w-1/3 border-2 m-auto p-2 rounded"}>
            <div className={"mb-2 rounded py-5 bg-orange-600 text-white font-semibold text-center text-xl"}>
                Tabella Dei Numeri
            </div>
            {children}
        </div>
    )
}

export default IntestazioneTab