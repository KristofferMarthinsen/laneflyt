import { css } from "styled-components";
import { Button, theming } from "@staccx/bento";

export const buttonVariants = theming.createVariants(
  {
    [theming.VARIANT_DEFAULT]: css`
      position: relative;
      background: #146670;
      border-radius: 3px;

      :hover {
        background: #146670;
      }
    `,
    topButton: css`
    background-color:white;
    color:#146670;
    margin-top:24px;

    :active {
      background-color: #146670;
      color:white;
    }

    :hover {
      background-color: #146670;
      color:white;
    }
    
  `,
    testi: css`
      border: null;
      padding: 0;
      background:none;
    `,
    unstyledButton: css`
      border: none;
      padding: 0;
      background: none;
      font-family: IBM Plex Sans;
      font-style: normal;
      font-weight: bold;
      font-size: 12px;

      position: relative;
      
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
