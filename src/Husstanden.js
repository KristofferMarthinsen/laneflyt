import React from "react";
import { Link } from "react-router-dom";
import Header from "./components/Header";
import {
  Button,
  Input,
  SelectSimple,
  CheckBox,
  RadioPillItem,
  Heading,
  RadioPill
} from "@staccx/bento";
import styled from "styled-components"
export const barn = [
  {
    myUniqueId: "221e98j",
    value: 1,
    label: "1",
    defaultChecked: true
  },
  {
    myUniqueId: "ads31",
    value: 2,
    label: "2",
    defaultChecked: false
  },
  {
    myUniqueId: "h14",
    value: 3,
    label: "3 ",
    defaultChecked: false
  },
  {
    myUniqueId: "h14asdsdf",
    value: 4,
    label: "4",
    defaultChecked: false
  },
  {
    myUniqueId: "h14dsfgdfgsd",
    value: 5,
    label: "5 +",
    defaultChecked: false
  }
];

export class Husstanden extends React.Component {
  render() {
    return (
      <div>
      <HusstandenStil>
        <Header title="Husstanden" id={3}/>
        </HusstandenStil>
        <Button variant= "topButton">Hovedlåntaker</Button>
        <Button variant ="topButton">Medlåntaker</Button>
        <InputStyles>
        <Input label={"Fornavn"} autoFocus />
        <Input label={"Etternavn"} />
        <Input label={"Telefonnummer"} />
        <Input label={"E-post"} />
        <SelectSimple
          label={"Sivilstatus"}
          placeholder="Velg..."
          id="simpleSelect"
        >
          <option value={1}>Gift </option>
          <option value={2}>Samober</option>
          <option value={3}>Skilt</option>
          <option value={4}>Partnerskap</option>
          <option value={5}>Enke/Enkemann</option>
          <option value={6}>Separert</option>
        </SelectSimple>
        <p>Har du barn under 18 år ?</p>
        <CheckBox id="1ID" group="Ja">
          Ja{" "}
        </CheckBox>
        <CheckBox id="2ID" group="Nei">
          Nei{" "}
        </CheckBox>
        <p>Antall barn</p>
        </InputStyles>
       
        <RadioPill group={"Radiopills"}>
          {barn.map(listItem => (
            <RadioPillItem
              key={listItem.myUniqueId}
              value={listItem.value}
              defaultChecked={listItem.defaultChecked}
              id={listItem.myUniqueId}
            >
              {listItem.label}
            </RadioPillItem>
          ))}
        </RadioPill>
       
       
            <Buttons>
        <Link to="/Legitimering">
          <Button>Videre</Button>
          </Link>
          <Link to ="/Nedbetalingsplan"><Button variant="unstyledButton">Nedbetalingsplan</Button></Link>
        
        </Buttons>
      </div>
    );
  }
}

export default Husstanden;

const Buttons = styled.div`
padding-top: 32px;
display: flex;
flex-direction: row;
padding-left: 24px;
justify-content: space-between;
`

const HusstandenStil = styled.h1`
padding-top: 124px;
padding-left: 6px;

`

const InputStyles = styled.div`
padding-top: 24px;
`


