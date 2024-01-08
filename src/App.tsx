import logo from "./logo.svg";
import "./App.css";

function App() {
  console.log("ecco la mia variabile:")
  const variableName: number = 0

  interface MyInterface {
    number: number;
    name: string;
  }

  console.log(variableName)
  return (
    <div className="w-full bg-slate-700 h-screen justify-center items-center grid">
      <img src={logo} className="App-logo" alt="logo" />
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
