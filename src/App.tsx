import "./App.css";
import CartaIdentita, {
  CartaIdentitaProps,
} from "./components/CartaIdentita/CartaIdentita";

function App() {
  const persona1: CartaIdentitaProps = {
    nome: "Vincenzo",
    cognome: "Grasso",
    annoDiNascita: 2002,
    codiceFiscale: "GSSVCN01H20G596Z",
    sesso: "Indefinito",
  };

  const persona2: CartaIdentitaProps = {
    nome: "Lorenzo",
    cognome: "Cairo",
    annoDiNascita: 1967,
    codiceFiscale: "LRZCRR01H20G596Z",
    sesso: "Poco",
  };

  return (
    <div>
      <CartaIdentita
        nome={persona1.nome}
        cognome={persona1.cognome}
        sesso={persona1.sesso}
        annoDiNascita={persona1.annoDiNascita}
        codiceFiscale={persona1.codiceFiscale}
      />
      <CartaIdentita
        nome={persona2.nome}
        cognome={persona2.cognome}
        sesso={persona2.sesso}
        annoDiNascita={persona2.annoDiNascita}
        codiceFiscale={persona2.codiceFiscale}
      />
    </div>
  );
}

export default App;
