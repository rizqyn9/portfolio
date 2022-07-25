import { styled } from "~/stitches.config"

const Layout = styled("main", {
  background: "var(--rdev-colors-body)",
  transition: "0.5s",

  /**
   * Disable outline when user doesn't use keyboard
   */
  "&:focus:not(:focus-visible)": {
    outline: 0,
  },

  /**
   * Custom outline
   */
  "&:focus-visible": {
    outline: "2px solid var(--rdev-colors-brand)",
    backgroundColor: "var(--rdev-colors-foreground)",
  },

  boxSizing: "border-box",
  flexShrink: 0,

  // Custom
  ml: "auto",
  mr: "auto",
  px: "$5",

  variants: {
    size: {
      "1": {
        maxWidth: "430px",
      },
      "2": {
        maxWidth: "715px",
      },
      "3": {
        maxWidth: "1145px",
      },
      "4": {
        maxWidth: "none",
      },
    },
  },
  defaultVariants: {
    size: "4",
  },
})

export { Layout }
