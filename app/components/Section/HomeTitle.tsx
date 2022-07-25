import { styled } from "~/stitches.config"
import { motion, useScroll, useTransform } from "framer-motion"

const Wrapper = styled("section", {
  height: "100vh",
  maxWidth: "100%",
  overflow: "hidden",

  display: "flex",
  justifyContent: "center",
  flexDirection: "column",

  fontSize: "13vw",
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
  return (
    <Wrapper>
      <H1Styled style={{ x }}>Creative</H1Styled>
      <H1Styled style={{ x: x2 }} css={{ marginLeft: "auto" }}>
        Developer
      </H1Styled>
    </Wrapper>
  )
}

export { HomeTitle }
