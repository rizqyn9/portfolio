import { motion } from "framer-motion"
import { styled } from "~/stitches.config"

export const Container = styled(motion.div, {
  position: "fixed",
  zIndex: 100,
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

  "& > .prefix": {
    fontSize: ".5em",
    display: "flex",
  },

  "& > .overflow": {
    overflow: "hidden",
    height: "auto",
  },
})

export const HeaderStyled = styled("header", {
  display: "flex",
  justifyContent: "space-between",
  padding: "2rem 4rem",
  position: "fixed",
  zIndex: 200,
  width: "100%",
  mixBlendMode: "difference",

  "& .menu": {
    overflow: "hidden",
    height: "2rem",
    width: "4rem",
  },

  "& .container": {
    position: "relative",
    "& p": {
      position: "absolute",
      top: -20,
      right: 0,
    },
  },
})
