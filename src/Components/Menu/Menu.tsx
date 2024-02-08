import {useState} from "react";

const Menu = () => {

    const [prezzo, setPrezzo] = useState(0)

    return (
        <div className={"w-full"}>
            <div className={"bg-white flex w-full pb-2"}>
                <img src={"https://www.clipartbest.com/cliparts/dTr/ogy/dTrogybnc.png"}
                     className={"gap-2 h-12 w-12"}/>
                <div className={"font-bold text-2xl grow text-center"}>
                    Prezzo: {prezzo} €
                </div>
                <img src={"https://cdn-icons-png.flaticon.com/512/107/107799.png"} className={"h-12 w-12"} />
            </div>
            <div className={"bg-gray-100 p-5 w-full"}>
                <div className={"flex"}>
                    <p className={"font-extrabold pb-2 border-b-4 border-red-600 tracking-wider"}> Milk Shakes </p>
                    <p></p>
                </div>


                <div className={"bg-white p-2 mb-5"}>
                    <p className={"font-bold"}> Crunchy Butterscotch </p>
                    <p className={"text-xs text-gray-600 pb-3"}> Butterscotch & Cashews </p>
                    <div className={"flex"}>
                        <p className={"grow text-left font-extrabold"}> 18,00 € </p>
                        <button onClick={() => setPrezzo(prezzo + 18.00)}
                            className={"bg-red-600 py-2 px-5 text-white rounded"}> Add </button>
                    </div>
                </div>

                <div className={"bg-white p-2 mb-5"}>
                    <p className={"font-bold"}> Supermans Secret </p>
                    <p className={"text-xs text-gray-600 pb-3"}> Peanut Butter, Dry Fruit, with Vanilla Ice Cream </p>
                    <div className={"flex"}>
                        <p className={"grow text-left font-extrabold"}> 21,00 € </p>
                        <button onClick={() => setPrezzo(prezzo + 21.00)}
                                className={"bg-red-600 py-2 px-5 text-white rounded"}> Add </button>
                    </div>
                </div>

                <div className={"bg-white p-2 mb-5"}>
                    <p className={"font-bold"}> Wonder Woman Shake </p>
                    <p className={"text-xs text-gray-600 pb-3"}> Saffron, with Vanilla Ice Cream </p>
                    <div className={"flex"}>
                        <p className={"grow text-left font-extrabold"}> 19,00 € </p>
                        <button onClick={() => setPrezzo(prezzo + 19.00)}
                                className={"bg-red-600 py-2 px-5 text-white rounded"}> Add </button>
                    </div>
                </div>

                <div className={"bg-white p-2 mb-5"}>
                    <p className={"font-bold"}> Almond Joy </p>
                    <p className={"text-xs text-gray-600 pb-3"}> American Nut, Badam Shake, Hazelnut Marimbula </p>
                    <div className={"flex"}>
                        <p className={"grow text-left font-extrabold"}> 19,00 € </p>
                        <button onClick={() => setPrezzo(prezzo + 19.00)}
                                className={"bg-red-600 py-2 px-5 text-white rounded"}> Add </button>
                    </div>
                </div>

                <div className={"text-center"}>
                    <button onClick={() => setPrezzo(0)}
                        className={"bg-red-600 py-2 px-5 text-white font-bold rounded-3xl"}>
                        Reset Cart
                    </button>
                </div>

            </div>
        </div>
    );

};

export default Menu;