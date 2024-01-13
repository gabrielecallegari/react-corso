import CodiceFiscale from "./CodiceFiscale/CodiceFiscale";
import NomeCognome from "./NomeCognome/NomeCognome";

export interface CartaIdentitaProps {
  //l'interfaccia ha l'export perché così la rende visibile in tutti i file
  //del progetto. Se non avesse la keyword export sarebbe visibile solo in questo file
  nome: string;
  cognome: string;
  annoDiNascita: number;
  codiceFiscale: string;
  sesso: string;
}

const CartaIdentita = ({
  codiceFiscale,
  cognome,
  annoDiNascita,
  nome,
  sesso,
}: CartaIdentitaProps) => {
  return (
    <div className="m-12" >
      <NomeCognome
        nome={nome}
        cognome={cognome}
        annoDiNascita={annoDiNascita}
      />
      <CodiceFiscale sesso={sesso} codiceFiscale={codiceFiscale} />
    </div>
  );
};

export default CartaIdentita;
