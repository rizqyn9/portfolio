import { AnimatePresence, motion, useAnimationControls, type Variant } from "framer-motion"
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
    display: "block",
    opacity: 1,
  },
  focus: {
    border: "1px solid black",
    background: "white",
    opacity: 0.7,
    scale: 2,
    height: "3rem",
    width: "3rem",
    margin: "-1.5rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "black",
  },
}

export function Cursor() {
  const { x, y } = useMousePosition()
  const { state, active } = useCursorStore()
  const control = useAnimationControls()

  React.useEffect(() => {
    control.start(state)
  }, [state, control])

  const mixBlendMode = React.useMemo(() => (state == "focus" ? "normal" : "difference"), [state])

  return (
    <AnimatePresence>
      {active && (
        <Container animate={{ x, y, opacity: 1 }} style={{ mixBlendMode }} initial={{ opacity: 0 }}>
          <motion.div className="outer" initial={"basic"} animate={control} variants={outerVariant}>
            {state == "focus" && "focus"}
          </motion.div>
        </Container>
      )}
    </AnimatePresence>
  )
}
