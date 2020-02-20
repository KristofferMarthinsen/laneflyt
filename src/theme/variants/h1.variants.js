import { css } from "styled-components"
import { Heading, theming } from "@staccx/bento"

export const h1Variants = theming.createVariants(
  {
    [theming.VARIANT_DEFAULT]: css`
    color: #146670;
    font-size: 32px;
    font-weight: 600;
    

    `
  },
  Heading.themeProps.heading
)