interface NomeCognomeProps {
  nome: string;
  cognome: string;
  annoDiNascita: number;
}

const NomeCognome = ({ annoDiNascita, cognome, nome }: NomeCognomeProps) => {
  return (
    <div>
      <p>Nome: {nome}</p>
      <p>Cognome: {cognome}</p>
      <p>Anno di nascita: {annoDiNascita}</p>
    </div>
  );
};

export default NomeCognome;
