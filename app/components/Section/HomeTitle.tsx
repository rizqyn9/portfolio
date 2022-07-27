import { styled } from "~/stitches.config"
import { motion, useScroll, useTransform } from "framer-motion"

const Wrapper = styled(motion.section, {
  height: "100vh",
  maxWidth: "100%",
  overflow: "hidden",

  display: "flex",
  justifyContent: "center",
  flexDirection: "column",

  position: "fixed",
  top: 0,
  bottom: "0",
  left: "5vw",
  right: "5vw",

  fontSize: "13vw",
  mixBlendMode: "difference",
  zIndex: 10,

  pointerEvents: "none",
})

const H1Styled = styled(motion.h1, {
  fontSize: "clamp(45px, 13vw, 140px)",
})

function HomeTitle() {
  const { scrollYProgress } = useScroll()
  const x = useTransform(scrollYProgress, [0, 0.2], ["0%", "30vw"])
  const x2 = useTransform(scrollYProgress, [0, 0.3], ["0vw", "-26vw"])
  const y = useTransform(scrollYProgress, [0, 0.1, 0.3], ["0vh", "-30vh", "0vh"])
  return (
    <>
      <div style={{ height: "100vh", background: "transparent" }}></div>
      <Wrapper style={{}}>
        <H1Styled style={{ marginRight: "auto", x, y }}>Creative</H1Styled>
        <H1Styled style={{ marginLeft: "auto", x: x2, y }}>
          Devel<span style={{ fontSize: ".8em" }}>👋🏼</span>per
        </H1Styled>
      </Wrapper>
    </>
  )
}

export { HomeTitle }
