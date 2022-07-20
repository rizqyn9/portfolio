import { Box } from "../Atoms/Box"
import { H1 } from "~/components/Typography"
import { Link } from "@remix-run/react"
import { styled } from "~/stitches.config"

const StyledLink = styled(Link, {})
export function NotFound() {
  return (
    <Box
      css={{
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "10px",
        flexDirection: "column",
      }}
    >
      <H1>Website under construction 👨🏼‍🔧</H1>
      <StyledLink
        css={{
          textDecoration: "none",
          textAlign: "center",
          color: "white",
          border: "2px solid white",
          width: "max-content",
          borderRadius: "10px",
          padding: ".5rem 2rem",
          "&:hover": {
            background: "white",
            color: "black",
          },
        }}
        to="/"
      >
        Back to Home
      </StyledLink>
    </Box>
  )
}
