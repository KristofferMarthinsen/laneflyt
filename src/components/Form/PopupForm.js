import React from "react";
import PopupForm from "reactjs-popup";
import SikkerhetLeggTil from "../SikkerhetLeggTil";
import { Button } from "@staccx/bento";
import styled from "styled-components";
import { theming } from "@staccx/bento";
import { Link } from "react-router-dom";

export default () => (
  <PopupForm trigger={<button> Legg til > </button>} position="center center">
    <div>
      <SikkerhetLeggTil />
    </div>
  </PopupForm>
);
