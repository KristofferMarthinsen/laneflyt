import React from "react";
import PopupForm from "reactjs-popup";
import SikkerhetLeggTil from "../SikkerhetLeggTil";


export default () => (
  <PopupForm trigger={<button> Legg til > </button>} position="center center">
    <div>
      <SikkerhetLeggTil />
    </div>
  </PopupForm>
);
