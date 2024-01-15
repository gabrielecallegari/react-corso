import logo from "./logo.svg";
import "./App.css";
import CartaIdentita, { CartaidentitaProps } from "./Components/CartaIdentita";

function App() {
  const arrayPeople : CartaidentitaProps[]=[
{
name:"Lorenzo",
surname:"Cairo",
year: 1997,
CF:"ABABABA",
gender:"male"
},{
  name:"Loredana",
surname:"Bairo",
year: 1998,
CF:"ABABABA",
gender:"female"
}
]
return (
  <div>
    {
      arrayPeople.map((el:CartaidentitaProps)=>{
        return (
          <CartaIdentita 
          name={el.name}
          surname={el.surname}
          year={el.year}
          CF={el.CF}
          gender={el.gender}/>
        )
      })}
  </div>
    )
}
  
export default App;
