import { styled } from "~/stitches.config"
import { motion } from "framer-motion"

export const CarouselContainerStyled = styled("div", {
  display: "flex",
  overflow: "hidden",
  height: "100%",
  width: "100%",
  position: "relative",
})

export const ImageStyled = styled(motion.img, {
  position: "absolute",
  width: "20vw",
  height: "max-content",
})
