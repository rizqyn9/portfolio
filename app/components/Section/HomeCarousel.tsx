import { styled } from "~/stitches.config"
import { motion } from "framer-motion"
import React from "react"
import { ImageReveal } from "../ImageReveal"

const ContainerCarousel = styled(motion.div, {
  minHeight: "100vh",
  maxWidth: "100%",
  width: "100%",
  bg: "white",

  position: "relative",

  display: "flex",
  alignItems: "flex-start",
  justifyContent: "space-between",
  py: "20vh",
  px: "5vw",
  flexWrap: "wrap",
})

function HomeCarousel() {
  return (
    <ContainerCarousel
      initial="hide"
      variants={{
        show: { opacity: 1 },
        hide: { opacity: 0 },
      }}
      transition={{ duration: 1 }}
      whileInView="show"
      viewport={{ margin: "-10px" }}
    >
      <ImageReveal src="/img/1.png" css={{ width: "22%" }} />
      <ImageReveal src="/img/1.png" css={{ width: "29%", mr: "1%", ml: "auto", mt: "20%" }} />
      <ImageReveal src="/img/1.png" css={{ width: "30%", mt: "0%" }} />
      <ImageReveal src="/img/1.png" css={{ width: "15%", mt: "15%" }} />
    </ContainerCarousel>
  )
}

export { HomeCarousel }
