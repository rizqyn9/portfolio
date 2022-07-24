import { styled } from "~/stitches.config"
import { keyframes } from "@stitches/react"

export const TrailingContainerStyled = styled("div", {
  display: "flex",
  height: "100%",
  justifyContent: "center",
  alignItems: "center",
  gap: "1rem",
  width: "max-content",
  overflow: "hidden",
  fontSize: "5em",
  fontWeight: "bolder",
})

const keyInfininite = keyframes({
  "100%": { translate: "calc(2*-100%)" },
})

export const TrailingChildStyled = styled("p", {
  width: "50vw",
  animation: `${keyInfininite} 10s linear infinite`,
})
