import { motion, useAnimationControls, type Variant } from "framer-motion"
import React from "react"
import { useMousePosition } from "~/hooks/useMousePosition"
import { Container } from "./Cursor.styles"
import { useCursorStore, type CursorVariant as CursorVariantMap } from "./useCursorStore"

type CursorVariant = { [key in CursorVariantMap]: Variant }

const outerVariant: CursorVariant = {
  basic: {
    background: "transparent",
    scale: 1,
    height: "1rem",
    width: "1rem",
    margin: "-.5rem",
    border: "1px solid white",
  },
  focus: {
    background: "white",
    scale: 2,
    height: "3rem",
    width: "3rem",
    margin: "-1.5rem",
    border: "1px solid pink",
  },
}

export function Cursor() {
  const { x, y } = useMousePosition()
  const { state } = useCursorStore()
  const control = useAnimationControls()

  React.useEffect(() => {
    control.start(state)
  }, [state, control])

  return (
    <Container animate={{ x, y }}>
      <motion.div className="outer" initial={"basic"} animate={control} variants={outerVariant}></motion.div>
    </Container>
  )
}
