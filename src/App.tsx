import logo from "./logo.svg";
import "./App.css";

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
    <div className="w-full bg-slate-700 h-screen justify-center items-center grid">
      <img src={'https://th.bing.com/th/id/R.e06ffb10941e302bbb71b24ba44b8082?rik=QC0e4J0oEMWJRg&pid=ImgRaw&r=0'} className="App-logo" alt="logo" />
      <div className="text-center grid gap-6 justify-center " >
        <h1 className="text-4xl text-white">
          Benvenuto nel corso React 101!
        </h1>
        <a className="text-blue-300 text-2xl border-b-2 border-blue-300 cursor-pointer w-fit" href="https://github.com/gabrielecallegari/react-corso">
          Link Repo GitHub
        </a>
      </div>
    </div>
  );
}

export default App;
