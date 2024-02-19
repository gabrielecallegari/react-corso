import {Link} from "react-router-dom";

const Home = () => {

    return (
        <div>
            <p> Sei nella HOME </p>
            <Link to={"/prodotto/1"}> Vai al prodotto 1 </Link>
        </div>
    )
}

export default Home


/*
* nella home un sito di e-commerce
* con i prodotti mostrati e i loro dati
* ogni prodotto ha un link per andare alla pagina del prodotto
* la pagina del prodotto è a piacere
* */