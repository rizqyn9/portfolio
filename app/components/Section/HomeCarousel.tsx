import { styled } from "~/stitches.config"
import { motion, useInView } from "framer-motion"
import React from "react"
import { ImageReveal } from "../ImageReveal"

const ContainerCarousel = styled("div", {
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "space-between",
  height: "100vh",
  py: "20vh",
  px: "5vw",
  maxWidth: "100%",
  flexWrap: "wrap",
})

function HomeCarousel() {
  return (
    <ContainerCarousel>
      <ImageReveal src="/img/1.png" css={{ width: "22%" }} />
      <ImageReveal src="/img/1.png" css={{ width: "29%", mr: "1%", ml: "auto", mt: "20%" }} />
      <ImageReveal src="/img/1.png" css={{ width: "30%", mt: "0%" }} />
      <ImageReveal src="/img/1.png" css={{ width: "15%", mt: "15%" }} />
    </ContainerCarousel>
  )
}

export { HomeCarousel }
