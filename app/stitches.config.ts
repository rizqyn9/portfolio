import { createStitches, type CSS as StitchesCSS } from "@stitches/react";
import { radii } from "./lib/tokens/radii";

const { config, css, getCssText, globalCss, keyframes, styled, theme } =
  createStitches({
    theme: {
      radii,
    },
  });

export type CSS = StitchesCSS<typeof config>;
export type { VariantProps } from "@stitches/react";

export { Shadows } from "./lib/tokens/shadows";
export { config, css, getCssText, globalCss, keyframes, styled, theme };
