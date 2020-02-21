import { css } from "styled-components";
import { Button, theming } from "@staccx/bento";

export const buttonVariants = theming.createVariants(
  {
    [theming.VARIANT_DEFAULT]: css`
      position: absolute;

      left: 30px;
      top: 713px;

      background: #146670;
      border-radius: 3px;

      :hover {
        background: #146670;
      }
    `,

    testi: css`
      border: null;
      padding: 0;
      background: none;
    `,
    unstyledButton: css`
      border: none;
      padding: 0;
      background: none;
      font-family: IBM Plex Sans;
      font-style: normal;
      font-weight: bold;
      font-size: 12px;

      position: absolute;
      width: 100px;
      height: 22px;
      left: 197px;
      top: 724px;
      color: #146670;

      :hover {
        background:none;
        border: none;
        padding: 0;
        color: #5C306B;
      }
    `
  },
  Button.themeProps.button
);
