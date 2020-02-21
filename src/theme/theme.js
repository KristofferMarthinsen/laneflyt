import { css } from "styled-components"
import { theming } from "@staccx/bento"
import {buttonVariants} from "./variants/button.variants"
import {h1Variants} from "./variants/h1.variants"

const reset = theming.createGlobal({
  baseReset: theming.cssResets
})

const borderRadius = "0px"
const headerHeight = "70px"

const targetSize = {
  small: "36px",
  normal: "44px"
}

const wrapper = {
  small: "460px",
  medium: "720px",
  large: "1158px",
  huge: "1440px",
  breakout: "640px"
}

const spacing = {
  grid: "7vh",
  huge: "96px",
  largePlus: "72px",
  large: "48px",
  mediumPlus: "32px",
  medium: "24px",
  small: "12px",
  tiny: "6px",
  flush: "0"
}

const color = {
  bg: "#F4F2F1",
  primary: "#0000A0",
  primaryLight: "#DCEDFF",
  secondary: "#146670",
  gray: "#646464",
  text: "#000040",
  white: "#fff",
  link: "#0000A0",
  red: "#FC6161",
  yellow: "#FFE184",
  line: "#C9C7C7",
  wcag: "#777",
  disabled: "#E4E4E4",
  warning: "#FC6161",
  black: "#000",
  subtleHover: "#EDF2F7"
}

const font = {
  h1: "32px",
  h2: "26px",
  h3: "22px",
  h4: "18px",
  h5: "16px",
  h6: "14px",
  base: "14px"
}

const fontWeight = {
  bold: "700",
  normal: "400"
}

const webfonts = {
  google: {
    families: [
      "IBM Plex Sans:200,300,500,600"
    ]
  }
}

const fontFamily = {
  heading: "IBM Plex Sans",
  body: "IBM Plex Sans"
}

const theme = new theming.Theme(
    {},
    {
      name: "My theme",
      font,
      fontWeight,
      webfonts,
      color,
      wrapper,
      targetSize,
      borderRadius,
      headerHeight,
      fontFamily,
      spacing
    }
  )
  .add(reset)
  .add([buttonVariants,h1Variants])

export default theme