import IntestazioneTab from "../IntestazioneTab/IntestazioneTab";
import Casella from "../Casella/Casella";

const Tabella = () => {

    const numeri: number[] =
    [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25]

    return (
        <div className={"w-full"}>
            <IntestazioneTab>
                {
                    numeri.map((n:number) => {
                        return (<Casella numero={n} />)
                    })
                }
            </IntestazioneTab>
        </div>
    )
}

export default Tabella