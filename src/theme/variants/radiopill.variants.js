import { css } from "styled-components";
import { RadioPill, RadioPillItem, theming } from "@staccx/bento";

export const radiopillVariants = theming.createVariants(
  {
    [theming.VARIANT_DEFAULT]: css`
      transition: border 0.2s ease, box-shadow 0.2s ease;
      background-color: ${theming.color.primary};

      color: #146670;
      background-color: green;
      border-color: green;

      :checked:first-child {
        color: red;
        background-color: red;
      }
      :active:first-child {
        color: red;
        background-color: red;
      }
      :hover:first-child {
        color: red;
        background-color: red;
      }

      &:hover,
      &:focus {
        background-color: ${theming.color.primary};
      }

      &:hover {
        border-color: ${theming.color.primary};
      }

      &:focus {
        box-shadow: 0 0 0 2px ${theming.color.primary};
      }
    `
  },
  RadioPill.themeProps.radioPill
);
