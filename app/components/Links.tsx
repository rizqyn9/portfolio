import { type CSS, styled } from "~/stitches.config"
import { Link } from "@remix-run/react"
import { Arrow } from "./Icon"

const LinkStyled = styled(Link, {
  fontSize: ".7em",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",

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

type LinkUnderlinedProps = {
  to?: string
  children: React.ReactNode
  arrow?: boolean
  css?: CSS
}

export function LinkUnderlined(props: LinkUnderlinedProps) {
  return (
    <LinkStyled to={props.to || "/"} css={{ ...props.css }}>
      <p>{props.children}</p>
      {props.arrow && <Arrow />}
    </LinkStyled>
  )
}
