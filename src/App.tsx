import "./App.css";
import Prezzo from "./components/Prezzo/Prezzo";

function App() {
  return (
    <div className="p-5  w-full">
      <Prezzo price={32} valuta={"€"} />
    </div>
  );
}

export default App;
