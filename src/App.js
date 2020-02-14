import React from "react"
import Lanedetaljer from "./Lanedetaljer"
import { ThemeProvider } from "styled-components"
import { Button, CheckBox } from "@staccx/bento"
import baseTheme from "@staccx/bento/lib/theming/baseTheme"


function App () {
  return (
    <ThemeProvider theme={baseTheme}>
      <Lanedetaljer/>
    </ThemeProvider>
  )
}

export default App
