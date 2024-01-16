const Line = ({ oggetto }: { oggetto: string }) => {
  return (
    <div className="w-full">
      <input type="checkbox" id={oggetto} />
      <label className="w-full cursor-pointer select-none ml-1 text-xl" htmlFor={oggetto} >{oggetto}</label>
    </div>
  );
};

export default Line;
