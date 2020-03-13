import React from "react";
import AntallBoliger from "./AntallBoliger";

const AntallBoligerInput = () => {
  return (
    <div>
      <h3>Antall fritids- og utleieboliger</h3>
      <AntallBoliger
        name={"antallBolig"}
        label={"Antall boliger i husholdningen"}
      />
    </div>
  );
};
export default AntallBoligerInput;
