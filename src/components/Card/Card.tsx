import { CardProps } from "../../interface/interface";

const Card = ({ onClick, title }: CardProps) => {
  return (
    <div className="max-w-96 rounded-lg shadow-xl shadow-black p-8 w-full flex justify-between items-center" >
      <p className="text-2xl font-semibold" >{title}</p>
      <button onClick={()=>onClick(title)} className="bg-red-500 text-white text-2xl px-3 cursor-pointer " >Seleziona</button>
    </div>
  );
};

export default Card;
