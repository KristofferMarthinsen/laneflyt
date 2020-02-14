import React from "react";
import {
  Button,
  Input,
  SelectSimple,
  CheckBox,
  RadioPill,
  RadioPillItem
} from "@staccx/bento";
import VidereKnapp from "./components/VidereKnapp";


export class Husstanden extends React.Component {
     myList = [
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
          label: "3 +",
          defaultChecked: false
        }
      ];
  render() {
    return (
      <div>
        <Button>Hovedlåntaker</Button>
        <Button>Medlåntaker</Button>
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
        <CheckBox id="1ID" group="test">
          Checkbox 1{" "}
        </CheckBox>
        <CheckBox id="2ID" group="test">
          Checkbox 2{" "}
        </CheckBox>
        <p>Antall barn</p>
        <RadioPill group={"Radiopills"}>
          {myList.map(listItem => (
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

        <VidereKnapp onClick={this.props.onNext} />
      </div>
    );
  }
}

export default Husstanden;
