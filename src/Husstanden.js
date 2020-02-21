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
import VidereKnapp from "./components/VidereKnapp";
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
        <Header title="Husstanden" id={3}/>
        <Button variant= "">Hovedlåntaker</Button>
        <Button variant ="">Medlåntaker</Button>
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

        <Link to="/Legitimering">
          <Button>Videre</Button>
        </Link>
      </div>
    );
  }
}

export default Husstanden;
