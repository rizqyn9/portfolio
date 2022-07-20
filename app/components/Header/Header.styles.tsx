import { css, styled } from "~/stitches.config"
import { motion } from "framer-motion"
import { Flex } from "../Atoms/Flex"
import { Link } from "@remix-run/react"

export const HeaderWrapper = styled(motion.header, {
  position: "fixed",
  zIndex: 10,
  top: "0",
  backdropFilter: "blur(8px)",
  width: "100%",
  transition: "background-color 0.5s, border-color 0.5s",
  background: "var(--rdev-colors-header)",
  borderBottom: "1px solid",

  "@media (max-width: 700px)": {
    height: "64px !important",
  },
})

export const HeaderTitleWrapper = styled("div", {
  display: "flex",
  marginLeft: "40px",
  marginRight: "40px",
  overflow: "hidden",

  a: {
    color: "inherit",
    textDecoration: "none",
  },

  "@media (max-width: 700px)": {
    display: "none",
  },
})

export const HeaderProgressBar = styled("div", {
  "@media (min-width: 700px)": {
    display: "none",
  },

  width: "100%",
  background: "transparent",
  position: "relative",
  height: 1,

  "&:after": {
    content: "",
    position: "absolute",
    top: -2,
    left: 0,
    background: "var(--rdev-colors-typeface-tertiary)",
    transition: "width 0.5s",
    willChange: "width",
    height: 2,
    width: "var(--progress)",
  },
})

export const HeaderPadding = styled("div", {
  height: "var(--offsetHeight)",
  "@media (max-width: 700px)": {
    height: "calc(var(--offsetHeight) * 0.6)",
  },
})

export const HeaderContent = styled(Flex, {
  gridColumn: 2,
})

export const fixTruncate = css({
  flex: 1,
  minWidth: 0,
})

export const LinkStyled = styled(Link, {
  color: "white",
  textDecoration: "none",
  "--border-color": "transparent",
  borderBottom: "3px solid var(--border-color)",
  "&:hover": {
    "--border-color": "var(--rdev)",
  },
})
