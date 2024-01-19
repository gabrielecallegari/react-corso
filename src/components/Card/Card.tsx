import Line from "./Line/Line";
import Title from "./Title/Title";

const Card = () => {
  const oggetti: string[] = [
    "Salsa al pomodoro",
    "caffe",
    "strutto",
    "lardo",
    "carta igienica",
    "televisore",
    "wii",
    "playstation",
    "birra",
    "vino",
  ];

  return (
    <div className="w-2/3 p-5 rounded-lg shadow-xl bg-red-300 grid gap-4">
      <Title />
      <div>
        {oggetti.map((el: string, i: number) => {
          console.log(el);

          return <Line oggetto={el} key={i} />;
        })}
      </div>
    </div>
  );
};

export default Card;
