import { styled } from "~/stitches.config"
import { motion, useInView } from "framer-motion"
import React from "react"
import { ImageReveal } from "../ImageReveal"

const ContainerCarousel = styled("div", {
  //   bg: "white",
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, 10rem)",
  gap: "1rem",
  py: "10rem",
})

const ImageContainer = styled(motion.div, {
  width: "10rem",
  height: "20rem",
  backgroundSize: "cover",
})

function HomeCarousel() {
  const ref = React.useRef<HTMLDivElement | null>(null)
  const inView = useInView(ref, { once: true })

  return (
    <ContainerCarousel>
      <ImageReveal src="/img/pic5.png" css={{ mt: "-5rem" }} />
      <ImageReveal src="/img/pic4.png" css={{ mt: "20rem", ml: "-2vw" }} />
      <ImageReveal src="/img/pic3.png" css={{ mt: "8rem", ml: "10vw" }} />
    </ContainerCarousel>
  )
}

export { HomeCarousel }
