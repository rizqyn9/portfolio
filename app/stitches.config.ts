import { createStitches } from "@stitches/react"
import type { CSS as StitchesCSS, PropertyValue } from "@stitches/react"

export const { config, css, getCssText, keyframes, styled, theme, globalCss } = createStitches({
  theme: {},
  media: {
    sm: "(min-width: 640px)",
    md: "(min-width: 768px)",
    lg: "(min-width: 1024px)",
    xl: "(min-width: 1280px)",
    "2xl": "(min-width: 1536px)",
    motion: "(prefers-reduced-motion)",
    hover: "(any-hover: hover)",
    dark: "(prefers-color-scheme: dark)",
    light: "(prefers-color-scheme: light)",
  },
  utils: {
    customTransition: ([property, duration]: ["all" | "color", "string"]) => ({ transition: `${property} ${duration}` }),
    ringShadow: (value: string) => ({ boxShadow: `0 0 0 ${value}` }),
    bg: (value: PropertyValue<"background">) => ({ background: value }),
    p: (value: PropertyValue<"padding">) => ({ padding: value }),
    pt: (value: PropertyValue<"paddingTop">) => ({ paddingTop: value }),
    pr: (value: PropertyValue<"paddingRight">) => ({ paddingRight: value }),
    pb: (value: PropertyValue<"paddingBottom">) => ({ paddingBottom: value }),
    pl: (value: PropertyValue<"paddingLeft">) => ({ paddingLeft: value }),
    px: (value: PropertyValue<"paddingLeft">) => ({ paddingLeft: value, paddingRight: value }),
    py: (value: PropertyValue<"paddingTop">) => ({ paddingTop: value, paddingBottom: value }),
    m: (value: PropertyValue<"margin">) => ({ margin: value }),
    mt: (value: PropertyValue<"marginTop">) => ({ marginTop: value }),
    mr: (value: PropertyValue<"marginRight">) => ({ marginRight: value }),
    mb: (value: PropertyValue<"marginBottom">) => ({ marginBottom: value }),
    ml: (value: PropertyValue<"marginLeft">) => ({ marginLeft: value }),
    mx: (value: PropertyValue<"marginLeft">) => ({ marginLeft: value, marginRight: value }),
    my: (value: PropertyValue<"marginTop">) => ({ marginTop: value, marginBottom: value }),
    pe: (value: PropertyValue<"pointerEvents">) => ({ pointerEvents: value }),
    us: (value: PropertyValue<"userSelect">) => ({
      WebkitUserSelect: value,
      userSelect: value,
    }),

    userSelect: (value: PropertyValue<"userSelect">) => ({
      WebkitUserSelect: value,
      userSelect: value,
    }),

    size: (value: PropertyValue<"width">) => ({
      width: value,
      height: value,
    }),

    appearance: (value: PropertyValue<"appearance">) => ({
      WebkitAppearance: value,
      appearance: value,
    }),
    backgroundClip: (value: PropertyValue<"backgroundClip">) => ({
      WebkitBackgroundClip: value,
      backgroundClip: value,
    }),
  },
})

export type CSS = StitchesCSS<typeof config>
export type { VariantProps, ComponentProps } from "@stitches/react"
