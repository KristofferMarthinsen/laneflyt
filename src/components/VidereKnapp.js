import React, { Component } from 'react'
import { Button } from "@staccx/bento";

export class VidereKnapp extends Component {
    render() {
        return (
            <div>
                
                <Button>Videre</Button>
                <a href = "NedbetalingsPlan"><p>Nedbetalingsplan</p></a>
            </div>
        )
    }
}

export default VidereKnapp
