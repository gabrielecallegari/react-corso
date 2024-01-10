import "./App.css";
import PrimoComponente from "./components/PrimoComponente/PrimoComponente";

function App() {
  return (
    <div className="">
      <p>componente padre</p>
      <PrimoComponente primoNumero={9} secondoNumero={42} />
    </div>
  );
}

export default App;
