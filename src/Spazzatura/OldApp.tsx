import "./App.css";
import Tabella from "../Components/Tabella/Tabella";

export interface ProvaInterfaccia {
    nome :string
    cognome :string
    eta :number
}

function App() {

    let risultato :number = 5.6
    let stringa :string = "ciao"
    let bool :boolean = true
    interface Interfaccia2 extends ProvaInterfaccia {
        nickname: string
        codiceFiscale: string
        sesso: "Maschio" | "Femmina"
    }


    let obj :ProvaInterfaccia = {
        nome: "vins",
        cognome: "grass",
        eta: 444
    }

    let oggetto: Interfaccia2[] = [{
        nome: "Vincenzo",
        cognome: "grasso",
        eta: 56,
        nickname: "blueroseswordman",
        codiceFiscale: "ascascascasc",
        sesso: "Maschio",
    }]

    /*
    * realizzare una funzione che prenda due parametri, nome ed eta,
    * faccia il console log
    * nome stringa
    * eta number
    * */

    function fun(n:"Luca" | "Mario" | "Giovanni", e:number):void {
        console.log(n, e)
    }
    fun("Luca", 66)


    function miaFunz(nome: string, cognome: string, sesso?: "M" | "F"):void {
        if(sesso === undefined) {
            console.log(nome, cognome)
            return
        }
        console.log(nome, cognome, sesso)
    }
    miaFunz("Vins", "Grass", "M")
    miaFunz("Lewis", "Hamilton")


    function mappatore() :void{
        oggetto.map((el: Interfaccia2) => {
            console.log(el.eta)
        })
    }






    interface InterfacciaCompito {
        portata: "Primo" | "Secondo" | "Contorno" | "Dolce"
        nome: string
        prezzo: number
        chef?: string
    }

    function funzioneCompito(t: "Primo" | "Secondo" | "Contorno" | "Dolce", n: string, p: number, c?: string): void {
        const oggetto: InterfacciaCompito = {
            portata: t,
            nome: n,
            prezzo: p,
            chef: c
        }
        if(oggetto.chef === undefined) {
            console.log("Nome Piatto: " + oggetto.nome + "\nTipo Piatto: " + oggetto.portata +
                "\nPrezzo: " + oggetto.prezzo)
            return
        }
        console.log("Nome Piatto: " + oggetto.nome + "\nTipo Piatto: " + oggetto.portata +
            "\nPrezzo: " + oggetto.prezzo + "\nNome Chef: " + oggetto.chef)
    }

    funzioneCompito("Secondo", "Arrosto", 35.99, "Auguste Gusteau")
    funzioneCompito("Primo", "Spaghetti", 15.70)




    return (
        <div className="p-5 w-full" >
            <Tabella />
        </div>
    );
}

export default App;
