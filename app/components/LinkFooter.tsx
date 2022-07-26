import { Link, useLocation } from "@remix-run/react"
import { styled } from "~/stitches.config"

type LinkFooterProps = {
  to: string
}

export function LinkFooter(props: LinkFooterProps) {
  let { to } = props
  to = to == "home" ? "/" : to
  const active = useLocation().pathname.includes(to)
  return (
    <li>
      <LinkStyled to={to} active={active}>
        {props.to}
      </LinkStyled>
    </li>
  )
}

const LinkStyled = styled(Link, {
  position: "relative",
  zindex: 2,
  textTransform: "capitalize",
  "&::before": {
    bg: "white",
    position: "absolute",
    zindex: 1,
    mixBlendMode: "difference",
    width: "1.5rem",
    height: "1.5rem",
    ml: "-.5rem",
    mt: "-.2rem",
    borderRadius: "9999px",
    display: "block",
  },

  variants: {
    active: {
      true: {
        "&::before": { content: "" },
      },
    },
  },
})
