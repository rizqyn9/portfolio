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
  // fontSize: "10em",
})

function HomeTitle() {
  const { scrollYProgress } = useScroll()
  const x = useTransform(scrollYProgress, [0, 0.2], ["0vw", "30vw"])
  const x2 = useTransform(scrollYProgress, [0, 0.3], ["0vw", "-20vw"])
  return (
    <>
      <div style={{ height: "100vh", background: "transparent" }}></div>
      <Wrapper style={{}}>
        <H1Styled style={{ marginRight: "auto", x }}>Creative</H1Styled>
        <H1Styled style={{ marginLeft: "auto", x: x2 }}>Developer</H1Styled>
      </Wrapper>
    </>
  )
}

export { HomeTitle }
