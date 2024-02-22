import React, { useEffect } from "react";
import { redirect } from "react-router-dom";

const CheckIdLayout = ({
  children,
  prodottoId,
}: {
  children: React.ReactNode;
  prodottoId: any;
}) => {

  useEffect(() => {
    if (parseInt(prodottoId) > 10) {
      console.log("QAUI");

      redirect("/");
    }
  }, []);
  return <div className="w-full h-full">{children}</div>;
};

export default CheckIdLayout;
