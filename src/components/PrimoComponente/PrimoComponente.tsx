interface ComponenteProps {
  primoNumero: number;
  secondoNumero: number;
}

const PrimoComponente = ({ 
    primoNumero, 
    secondoNumero }: 
    ComponenteProps) => {
  console.log(primoNumero);

  return (
    <div>
        <p>Secondo Numero : {secondoNumero}</p>
      <p>primo componente</p>
    </div>
  );
};

export default PrimoComponente;
