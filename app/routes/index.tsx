import React from "react"
import { motion, type MotionValue, useScroll, useTransform, useMotionValue, useTime } from "framer-motion"
import { Header } from "~/components/Header"
import { type CSS, styled } from "~/stitches.config"

export default function () {
  const [active, setActive] = React.useState(false)
  const { scrollYProgress } = useScroll()
  const x = useTransform(scrollYProgress, [0, 1], [0, 200])
  const x2 = useTransform(scrollYProgress, [0, 1], [0, -500])
  return (
    <div>
      <Header active={active} setActive={setActive} />
      <TitleContainer css={{ padding: "0 5vw", "@md": { padding: "0 20vw" } }}>
        <TitleWord index={0} css={{ marginRight: "auto" }} x={x}>
          Creative
        </TitleWord>
        <TitleWord index={0.5} css={{ marginLeft: "auto" }} x={x2}>
          Web
        </TitleWord>
        <TitleWord index={1} css={{ marginRight: "auto" }} x={x}>
          Developer
        </TitleWord>
      </TitleContainer>
      <div style={{ height: "100vh", background: "var(--rdev-colors-body)" }}></div>
      <div style={{ height: "100vh", display: "flex", position: "relative", zIndex: 20, mixBlendMode: "difference", background: "white" }}></div>
      <div style={{ height: "100vh", background: "red", position: "relative", zIndex: 20 }}></div>
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
          initial={{ y: "3em" }}
          animate={{ y: 0 }}
          transition={{
            duration: 1.8,
            delay: index,
          }}
        >
          {children}
        </motion.p>
      </div>
    </TitleWordStyle>
  )
}
