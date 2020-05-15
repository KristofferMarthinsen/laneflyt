import React from "react";
import Layout from "../Layout";
import HusstandForm from "./HusstandForm";

export const Husstanden = () => {
  return (
    <div>
      <Layout id={3} title="Husstanden" />

      <HusstandForm next="/Legitimering" />
    </div>
  );
};
export default Husstanden;

