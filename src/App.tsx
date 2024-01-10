import logo from "./logo.svg";
import "./App.css";
import PrimoComponente from "./Components/PrimoComponente/PrimoComponente";
import CartaIdentita from "./Components/CartaIdentita/CartaIdentita";

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
        <p>
          chipi chipi chapa chapa dubi dubi daba daba
        </p>
        <PrimoComponente x={"Vincenzo"} y={"Grasso"} z={21}/>
        <br></br>
        <CartaIdentita/>
        <br></br>
        <CartaIdentita/>
      </center>
    </div>
  );
}

export default App;
