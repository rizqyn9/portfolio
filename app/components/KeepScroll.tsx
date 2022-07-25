import { motion, useTime, useTransform } from "framer-motion"
import { styled } from "~/stitches.config"

const TextSvgStyled = styled("text", {
  fontSize: 15,
})

const SVGMotion = styled(motion.svg, {})

const Container = styled("div", {
  position: "fixed",
  margin: "auto",
  bottom: "3rem",
  "@md": {
    bottom: "2rem",
    right: "2rem",
  },
  mixBlendMode: "difference",
})

function KeepScroll() {
  const time = useTime()
  const rotate = useTransform(
    time,
    [0, 10_000],
    [0, 360], // ...rotate 360deg
    { clamp: false }
  )

  return (
    <Container>
      <SVGMotion
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        style={{ rotate }}
        transition={{ duration: 1 }}
        viewBox="0 0 100 100"
        width="100"
        height="100"
        fill="white"
        css={{
          transformOrigin: "center",
          mixBlendMode: "difference",
        }}
      >
        <defs>
          <path id="circle" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" />
        </defs>
        <TextSvgStyled>
          <textPath xlinkHref="#circle">&bull; Keep &bull; Scrolling &bull; Keep &bull; Scrolling</textPath>
        </TextSvgStyled>
      </SVGMotion>
    </Container>
  )
}

export { KeepScroll }
