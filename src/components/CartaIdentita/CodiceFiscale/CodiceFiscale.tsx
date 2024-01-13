interface CodiceFiscaleProps {
  codiceFiscale: string;
  sesso: string;
}

const CodiceFiscale = ({ codiceFiscale, sesso }: CodiceFiscaleProps) => {
  return (
    <div>
      <p>Codice Fiscale: {codiceFiscale}</p>
      <p>Sesso: {sesso}</p>
    </div>
  );
};

export default CodiceFiscale;
