import React from "react";
import Layout from "./components/Layout";
import HusstandForm from "./components/Form/HusstandForm";

export const Husstanden = () => {
  return (
    <div>
      <Layout id={3} title="Husstanden" />

      <HusstandForm next="/Legitimering" />
    </div>
  );
};
export default Husstanden;

