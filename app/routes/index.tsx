import React from "react"
import { motion, type MotionValue } from "framer-motion"
import { Header } from "~/components/Header"
import { type CSS, styled } from "~/stitches.config"
import { useCursorStore } from "~/components/Cursor"

export default function () {
  const [active, setActive] = React.useState(false)
  const { update } = useCursorStore()
  // const { scrollYProgress } = useScroll()
  // const x = useTransform(scrollYProgress, [0, 1], [0, 200])
  // const x2 = useTransform(scrollYProgress, [0, 1], [0, -500])
  return (
    <div onMouseEnter={() => update("basic")}>
      <Header active={active} setActive={setActive} />
      <TitleContainer css={{ padding: "0 5vw", "@md": { padding: "0 20vw" } }}>
        <TitleWord index={0} css={{ marginRight: "auto" }}>
          Creative
        </TitleWord>
        <TitleWord index={1} css={{ marginLeft: "auto" }}>
          Developer
        </TitleWord>
      </TitleContainer>
      <div style={{ height: "100vh", background: "var(--rdev-colors-body)" }}></div>
      <div style={{ height: "100vh", display: "flex", position: "relative", zIndex: 8, mixBlendMode: "difference", background: "white" }}></div>
      <div style={{ height: "100vh", background: "red", position: "relative", zIndex: 8 }}></div>
      <div style={{ height: "100vh", background: "blue" }}></div>
    </div>
  )
}

const TitleContainer = styled(motion.div, {
  zIndex: 1,
  position: "fixed",
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
  pointerEvents: "none",

  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "5em",
  "@sm": {
    fontSize: "7em",
  },

  willChange: "transform",

  "& .overflow": {
    overflow: "hidden",
  },
})

const TitleWordStyle = styled(motion.div, {})

const TitleWord = ({ children, css, index, x }: { children: React.ReactNode; css?: CSS; index: number; x?: MotionValue }) => {
  return (
    <TitleWordStyle
      css={{ ...css }}
      style={{ x }}
      transition={{
        when: "beforeChildren",
      }}
    >
      <div className="overflow">
        <motion.p
          style={{ color: "white", overflow: "visible", zIndex: 0, fontWeight: "bolder", transformStyle: "preserve-3d" }}
          initial={{ y: "2em" }}
          animate={{ y: 0 }}
          transition={{
            duration: 1,
            delay: index,
          }}
        >
          {children}
        </motion.p>
      </div>
    </TitleWordStyle>
  )
}
