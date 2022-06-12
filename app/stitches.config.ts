import { createStitches } from "@stitches/react";

const { styled, css, keyframes, getCssText, theme, config, globalCss } =
  createStitches({
    theme: {
      colors: {
        gray400: "gainsboro",
        gray500: "lightgray",
      },
    },
    media: {
      bp1: "(min-width: 480px)",
    },
  });

export { config, css, getCssText, keyframes, styled, theme, globalCss };
