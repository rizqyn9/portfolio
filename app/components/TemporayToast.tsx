import { AnimatePresence, motion } from "framer-motion"
import React from "react"
import { styled } from "~/stitches.config"

const ToastContainer = styled(motion.div, {
  textAlign: "center",
  bg: "#F50057",
  fontWeight: "lighter",
  overflow: "hidden",
  py: ".5rem",
  position: "relative",
  zIndex: 100,
})

export function Toast() {
  const [active, setActive] = React.useState(true)
  return (
    <AnimatePresence>
      {active && (
        <ToastContainer exit={{ height: 0, padding: 0 }} transition={{ duration: 0.5 }} onClick={() => setActive(false)}>
          Under construction ⚒️
        </ToastContainer>
      )}
    </AnimatePresence>
  )
}
