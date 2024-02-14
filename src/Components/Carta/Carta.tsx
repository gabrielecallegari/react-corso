import {card} from "../Menu/Menu";

const Carta = ({p}:{p:card}) => {

    return (
        <div className={"bg-white p-2 mb-5"}>
            <p className={"font-bold"}> {p.nome} </p>
            <p className={"text-xs text-gray-600 pb-3"}> {p.desc} </p>
            <div className={"flex"}>
                <p className={"grow text-left font-extrabold"}> {p.prezzo} € </p>
                <button onClick={() => p.azione( {nome: p.nome, prezzo: p.prezzo} )}
                        className={"bg-red-600 py-2 px-5 text-white rounded"}> Add </button>
            </div>
        </div>
    );
};

export default Carta;