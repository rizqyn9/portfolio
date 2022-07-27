import { styled, ComponentProps } from "~/stitches.config"
import { Link } from "@remix-run/react"
import { Arrow } from "./Icon"
import { useCursorStore } from "./Cursor"
import { motion } from "framer-motion"

const LinkStyled = styled(Link, {
  fontSize: ".7em",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  position: "relative",
  mixBlendMode: "difference",
  zIndex: 100,

  "& p": {
    position: "relative",
    width: "max-content",
  },

  "& p::before": {
    content: "",
    position: "absolute",
    width: "100%",
    height: "2px",
    bg: "white",
    bottom: 0,
    borderRadius: "999px",
    transition: "width .8s",
  },
  transition: "letter-spacing .8s",

  "&:hover": {
    letterSpacing: "1px",
    "& p::before": {
      width: 0,
    },
  },
})

const LinkMotion = motion(LinkStyled)

type LinkUnderlinedProps = {
  arrow?: boolean
} & ComponentProps<typeof LinkMotion>

export function LinkUnderlined(props: LinkUnderlinedProps) {
  const { update } = useCursorStore()
  const { arrow, children, to = "/", ...rest } = props
  return (
    <LinkMotion to={to} onMouseEnter={() => update("focus")} onMouseLeave={() => update("basic")} {...rest}>
      <p>{children}</p>
      {arrow && <Arrow />}
    </LinkMotion>
  )
}
