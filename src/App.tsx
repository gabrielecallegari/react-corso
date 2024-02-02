import { useState } from "react";
import "./App.css";
import Title from "./Components/Title/Title";

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

    function funzioneCompito(oggetto: InterfacciaCompito): void {
        console.log("Nome Piatto: " + oggetto.nome)
        console.log("Tipo Piatto: " + oggetto.portata)
        console.log("Prezzo: " + oggetto.prezzo)
        if(oggetto.chef != undefined)
            console.log("Nome Chef: " + oggetto.chef)
    }

    const ogg1: InterfacciaCompito = {
        portata: "Secondo",
        nome: "Arrosto all'arancia",
        prezzo: 45.65,
        chef: "Auguste Gusteau"
    }
    const ogg2: InterfacciaCompito = {
        portata: "Primo",
        nome: "Spaghetti allo scoglio",
        prezzo: 25.00
    }

    funzioneCompito(ogg1)
    funzioneCompito(ogg2)

  return (
    <div className="p-5  w-full" >
        <Title />

    </div>
  );
}

export default App;
