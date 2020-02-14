import React, { Component } from 'react'
import { Slider,ExpandListItem, List } from "@staccx/bento";

export class Nedbetaling extends Component {
    render() {
        return (
            <div>
                <List>
         <ExpandListItem variant={"variant"} title={"Nedbetalingstid"}>
                    <Slider/>
                  </ExpandListItem>
                  <ExpandListItem variant={"variant"} title={"Avdragsfrihet"}>
                    <Slider/>
                  </ExpandListItem>
                  <ExpandListItem variant={"variant"} title={"Rente nominell"}>
                    <Slider/>
                  </ExpandListItem>
                  <ExpandListItem variant={"variant"} title={"Rente effektiv"}>
                    <Slider/>
                  </ExpandListItem>
                <h3>Å betale hver måned: 9328,-</h3>
                 
    </List>
            </div>
        )
    }
}

export default Nedbetaling
