import {ReactNode, useEffect} from "react";

// questo componente prende con parametro un altro componente
// il tipo del componente è React.ReactNode
// puoi accedere al componente passato semplicemente richiamandolo tra le graffe, come un qualunque pezzo typescript
const Figlio = ({children}:{children:ReactNode}) => {
    return (
      <div>
          <p> Componente Layout </p>
          {children}
      </div>
    );
};
export default Figlio;