import logo from "./logo.svg";
import "./App.css";
import CartaIdentita from "./Components/CartaIdentita";
import NameAge from "./Components/NameYear";

function App() {
  return (
    <div className="">
      <p>Name, surname, year, CF, gender</p>
    <CartaIdentita name={"lorenzo"} surname={"cairo"} year={1997}/>
    <p>Name, surname, year, CF, gender</p>
    <CartaIdentita name={"lorenzo"} surname={"bairo"} year={1998}/>
    </div>
  );
}

export default App;
