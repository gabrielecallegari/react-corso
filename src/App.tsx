import "./App.css";
import Tabella from "./Components/Tabella/Tabella";
import {useSearchProducts} from "./Pages/Home/hooks/GET/useSearchProducts";
import {useState} from "react";
import {Autosave} from "react-autosave";
import {Link} from "react-router-dom";
import {usePersonalCookies} from "./Pages/Home/hooks/usePersonalCookies";

function App() {

    const {mutate, data} = useSearchProducts()

    const [input, setInput] = useState("")

    const {setPersonalCookie, removePersonalCookie} = usePersonalCookies()

  return (
    <div className="p-5 w-full" >
        <Tabella />
        <div className={"flex flex-col items-center"}>
            <input className={"border"} type={"text"} placeholder={"Cerca..."} value={input}
                    onChange={(event:React.ChangeEvent<HTMLInputElement>) => {
                        setInput(event.target.value)
                    }}/>
            <Autosave data={input} onSave={() => mutate(input)} />
            {(input!=="") && data?.products.map((e:any)=>{
                return(
                    <Link to={"/prodotto/"+e.id}>{e.title}</Link>
                )
            })}
        </div>

        <div className={"flex justify-center mt-16"}>
            <button className={"p-2 m-2 bg-black text-white rounded hover:bg-gray-700"}
                onClick={() => setPersonalCookie("Ci_stanno_tracciando_staccah!")}>
                Set Cookies
            </button>
            <button className={"p-2 m-2 bg-black text-white rounded hover:bg-gray-700"}
                onClick={() => removePersonalCookie()}>
                Delete Cookies
            </button>
        </div>

    </div>
  );
}

export default App;
