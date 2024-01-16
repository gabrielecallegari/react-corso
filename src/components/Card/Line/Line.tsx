const Line = ({ oggetto }: { oggetto: string }) => {
  //l'htmlFor che vedete nella label serve per selezionare la checkbox quando l'utente clicca
  //sulla scritta
  return (
    <div className="w-full">
      <input type="checkbox" id={oggetto} />
      <label className="w-full cursor-pointer select-none ml-1 text-xl" htmlFor={oggetto} >{oggetto}</label>
    </div>
  );
};

export default Line;
