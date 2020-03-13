import React from "react";
import NedbetalingsTid from "./NedbetalingsTid";
import styled from "styled-components";

const NedbetalingsTidInput = () => {
  return (
    <>
      <Lalala><p>Nedbetalingstid: </p>
      <NedbetalingsTid name={"NedbetalingsTid"} label={false} />
	  </Lalala>
	</>
  );
};
export default NedbetalingsTidInput;

const Lalala = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	height: 46px;
	border-bottom: 1px solid #EAEAEA;
`