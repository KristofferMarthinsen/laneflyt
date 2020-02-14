import React from "react"
import { ThemeProvider } from "styled-components"
import { Button, CheckBox } from "@staccx/bento"
import baseTheme from "@staccx/bento/lib/theming/baseTheme"


function App () {
  return (
    <ThemeProvider theme={baseTheme}>
      <Button onClick={() => console.log("Something")}>This is a button</Button>
      <CheckBox id={"test"}>Tester</CheckBox>
    </ThemeProvider>
  )
}

export default App
