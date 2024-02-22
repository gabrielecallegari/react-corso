import { useParams } from "react-router-dom";
import CheckIdLayout from "../../layout/CheckId";

const Prodotto = () => {
  const { prodottoId } = useParams();
  console.log(prodottoId);

  return (
    <CheckIdLayout prodottoId={prodottoId} >
      <div>
        <p>Sei nel Prodotto</p>
      </div>
    </CheckIdLayout>
  );
};

export default Prodotto;
