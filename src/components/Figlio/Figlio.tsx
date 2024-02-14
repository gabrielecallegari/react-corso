import { ReactNode, useEffect } from "react";

const Figlio = ({children,title,}: {children: ReactNode;title: string;}) => {
    
  useEffect(() => {
    console.log("Titolo in useEffect:" + title);
  }, []);
  return (
    <div>
      <p>Componente Layout {title} </p>
      {children}
    </div>
  );
};

export default Figlio;
