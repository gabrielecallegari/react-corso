import logo from "./logo.svg";
import "./App.css";
import PrimoComponente from "./Components/PrimoComponente/PrimoComponente";

function App() {

  function compito(x: number, y: number, stringa: string, boo: boolean, z?:number){
      if (boo ===true ){
        console.log("buona sera", stringa)
      }else{
        if (z === undefined){
          console.log(x*y);
        }else{
          console.log(x*y*z)
        }
      }
  }

  compito(1,2,"maestro",true)

  return (
    <div className="">
      <center>
      <img src={'https://media1.tenor.com/m/mJ_Og97j5WwAAAAC/chipi-chapa.gif'} className="App-logo" alt="logo" />
      <div className="text-center grid gap-6 justify-center " >
        <p>
          chipi chipi chapa chapa dubi dubi daba daba
        </p>
        <PrimoComponente x={"Vincenzo"} y={"Grasso"} z={21}/>
      </div>
      </center>
    </div>
  );
}

export default App;
