import { motion } from "framer-motion"
import { styled } from "~/stitches.config"
import { Layout } from "../Layout"

export const Container = styled(motion.div, {
  position: "fixed",
  zIndex: 12,
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,

  variants: {
    overlay: {
      true: {
        background: "gray",
        willChange: "transform",
      },
      false: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "2rem",
      },
    },
  },
})

export const NavLinkStyle = styled(motion.div, {
  fontSize: "4em",
  display: "grid",
  gridTemplateColumns: "auto auto",
  gap: ".6rem",
  justifySelf: "flex-start",
  alignSelf: "flex-start",
  marginLeft: "3rem",
  cursor: "none",

  "& > .prefix": {
    fontSize: ".5em",
    display: "flex",
  },

  "& > .overflow": {
    overflow: "hidden",
    height: "auto",
  },
})

export const HeaderStyled = styled(Layout, {
  $$fontSize: "4em",
  fontSize: "$$fontSize",
  fontWeight: "lighter",

  width: "100%",
  py: "1em",
  bg: "transparent",

  display: "flex",
  justifyContent: "space-between",
  position: "fixed",
  zIndex: 13,
  mixBlendMode: "difference",

  "@md": { $$fontSize: "2.5em" },
  "@lg": { $$fontSize: "1.5em !important" },

  "& .overflow": {
    height: "2rem",
    width: "max-content",
    position: "relative",
    overflow: "hidden",
    lineHeight: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
  },

  "& .toggle": {},
})
