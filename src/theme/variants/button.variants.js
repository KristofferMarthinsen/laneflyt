import { css } from "styled-components"
import { Button, theming } from "@staccx/bento"

export const buttonVariants = theming.createVariants(
  {
    [theming.VARIANT_DEFAULT]: css`
      background-color: ${theming.color.secondary
      }
    `
    ,
    test: css`
      position: absolute;

left: 30px;
top: 713px;

background: #146670;
border-radius: 3px;
button:hover
  
    `
    ,
    testi:css`
    position: absolute;
left: 197px;
top: 724px;

font-family: IBM Plex Sans;
font-style: normal;
font-weight: bold;
font-size: 12px;
line-height: 182%;
/* identical to box height, or 22px */

display: flex;
align-items: center;

color: #146670;
`

  },
  Button.themeProps.button
)