import { styled } from "~/stitches.config"
import { motion } from "framer-motion"

export const Container = styled(motion.div, {
  pointerEvents: "none",
  position: "fixed",
  width: "1rem",
  height: "1rem",
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
  zIndex: 30,
  mixBlendMode: "difference",

  display: "none",

  "@md": {
    display: "block",
  },

  "& .outer": {
    position: "relative",
    borderRadius: "100%",
    fontSize: ".8em",
  },
})
