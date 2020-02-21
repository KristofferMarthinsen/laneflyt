import React, {useState} from "react";
import {Button, CurrencyInput, Slider,RadioPill,RadioPillItem} from "@staccx/bento";
import {Link} from "react-router-dom";
import Header from "./components/Header";
export const bil = [
    {
      myUniqueId: "1bil",
      value: 1,
      label: "1",
      defaultChecked: true
    },
    {
      myUniqueId: "2bil",
      value: 2,
      label: "2",
      defaultChecked: false
    },
    {
      myUniqueId: "3bil",
      value: 3,
      label: "3 ",
      defaultChecked: false
    },
    {
      myUniqueId: "4bil",
      value: 4,
      label: "4",
      defaultChecked: false
    },
    {
      myUniqueId: "5bil",
      value: 5,
      label: "5 +",
      defaultChecked: false
    }
  ];
  export const boliger = [
    {
      myUniqueId: "1boliger",
      value: 1,
      label: "1",
      defaultChecked: true
    },
    {
      myUniqueId: "2boliger",
      value: 2,
      label: "2",
      defaultChecked: false
    },
    {
      myUniqueId: "3boliger",
      value: 3,
      label: "3 ",
      defaultChecked: false
    },
    {
      myUniqueId: "4boliger",
      value: 4,
      label: "4",
      defaultChecked: false
    },
    {
      myUniqueId: "5boliger",
      value: 5,
      label: "5 +",
      defaultChecked: false
    }
  ];
  

const Okonomi = () => {
    const  [ SamletOkonomi, setSamletOkonomi ] = useState(0)  
  return (
    <div>
    <Header title="Økonomi" id={7}/>
      <p>Legg inn samlet økonomi</p>
      <CurrencyInput label={"Sum inntekt"} value={SamletOkonomi|| 0} onChange={e => setSamletOkonomi(e.target.value)}/>
      <Slider
          name={"Disabled"}
          onChange={e => setSamletOkonomi(e.target.value)}
          min={0}
          max={10000}
          step={1000}
        />
        <p>Antall biler i husholdningen</p>
        <RadioPill group={"Radiopills"}>
          {bil.map(listItem => (
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
        <p>Antall fritids- og utleieboliger</p>
        <RadioPill group={"Radiopill"}>
          {boliger.map(listItem => (
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
      <Link to = "/Gjeld"><Button>Videre</Button></Link>

      

    </div>
  );
};

export default Okonomi;