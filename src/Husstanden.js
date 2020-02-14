import React, { Component } from "react";
import { Button, Input, SelectSimple, CheckBox } from "@staccx/bento";
import VidereKnapp from "./components/VidereKnapp";

export class Husstanden extends Component {
  render() {
    return (
      <div>
        <Button>Hovedlåntaker</Button>
        <Button>Medlåntaker</Button>
        <Input label={"Fornavn"} autoFocus />
        <Input label={"Etternavn"} />
        <Input label={"Telefonnummer"} />
        <Input label={"E-post"} />
        <SelectSimple label={"Sivilstatus"} placeholder="Velg..." id="simpleSelect">
          <option value={1}>Gift </option>
          <option value={2}>Samober</option>
          <option value={3}>Skilt</option>
          <option value={4}>Partnerskap</option>
          <option value={5}>Enke/Enkemann</option>
          <option value={6}>Separert</option>
        </SelectSimple>
        <CheckBox id="1ID" group="test">Checkbox 1 </CheckBox>
        <CheckBox id="2ID" group="test">Checkbox 2 </CheckBox>
        <VidereKnapp onClick={this.props.onNext} />
      </div>
    );
  }
}

export default Husstanden;
