import { css } from "styled-components";
import { RadioPillItem, theming } from "@staccx/bento";


export const radiopillitemvariant  = theming.createVariants(
    {
        [theming.VARIANT_DEFAULT]: css`
        color:white;
        background-color: #146670;

        `
    },
    RadioPillItem.themeProps.checked
  );
  export const radiopillWrappervariant  = theming.createVariants(
    {
        [theming.VARIANT_DEFAULT]: css`
        color:red;
        background-color: red;

        `
    },
    RadioPillItem.themeProps.wrapper
  );