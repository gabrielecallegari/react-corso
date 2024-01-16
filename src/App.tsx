import "./App.css";
import CartaIdentita, {
  CartaIdentitaProps,
} from "./components/CartaIdentita/CartaIdentita";

function App() {
  const arrayPersone: CartaIdentitaProps[] = [
    {
      nome: "Vincenzo",
      cognome: "Grasso",
      annoDiNascita: 2002,
      codiceFiscale: "GSSVCN01H20G596Z",
      sesso: "Indefinito",
    },
    {
      nome: "Lorenzo",
      cognome: "Cairo",
      annoDiNascita: 1967,
      codiceFiscale: "LRZCRR01H20G596Z",
      sesso: "Poco",
    },
    {
      nome: "Lorenzo",
      cognome: "Cairo",
      annoDiNascita: 1967,
      codiceFiscale: "LRZCRR01H20G596Z",
      sesso: "Poco",
    },
  ];

  return (
    <div>
      {arrayPersone.map((elemento: CartaIdentitaProps, i: number) => {
        return (
          <CartaIdentita
            nome={elemento.nome}
            cognome={elemento.cognome}
            annoDiNascita={elemento.annoDiNascita}
            codiceFiscale={elemento.codiceFiscale}
            sesso={elemento.sesso}
            key={i}
          />
        );
      })}
    </div>
  );
}

export default App;
