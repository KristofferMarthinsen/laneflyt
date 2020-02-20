import { css } from "styled-components"
import { Button, theming } from "@staccx/bento"

export const buttonVariants = theming.createVariants(
  {
    [theming.VARIANT_DEFAULT]: css`
      background-color: ${theming.color.secondary}
    `
    ,
    test: css`
    background-color: red
    `

  },
  Button.themeProps.button
)