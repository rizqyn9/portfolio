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
  left: "3rem",
  right: "3rem",

  fontSize: "13vw",
  mixBlendMode: "difference",
  zIndex: 10,

  pointerEvents: "none",
})

const H1Styled = styled(motion.h1, {
  // fontSize: "10em",
})

const Button = styled("button", {
  appearance: "none",
  bg: "white",
  color: "black",
  fontSize: ".5em",
  width: "max-content",
  py: ".1rem",
  px: "3rem",
  borderRadius: "9999px",
})

function HomeTitle() {
  const { scrollYProgress } = useScroll()
  const x = useTransform(scrollYProgress, [0, 0.2], [0, 2_00])
  const x2 = useTransform(scrollYProgress, [0, 0.3], [0, -2_00])
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 6_00])
  return (
    <>
      <div style={{ height: "100vh" }}></div>
      <Wrapper style={{}}>
        <H1Styled style={{ x }}>Creative</H1Styled>
        <H1Styled style={{ x: x2 }} css={{ marginLeft: "auto" }}>
          Developer
        </H1Styled>
      </Wrapper>
    </>
  )
}

export { HomeTitle }
