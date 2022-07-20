import useScrollCounter from "~/hooks/useScrollCounter"
import {
  HeaderWrapper,
  HeaderContent,
  fixTruncate,
  HeaderPadding,
  LinkStyled,
} from "./Header.styles"
import type { HeaderProps } from "./Header.types"
import { Grid } from "../Atoms/Grid/Grid"
import { Flex } from "../Atoms/Flex"
import { Box } from "../Atoms/Box"
import { H1, Text } from "~/components/Typography"
import { Link } from "@remix-run/react"

const headerVariants = {
  open: {
    height: 120,
    transition: { ease: "easeInOut", duration: 0.3 },
  },
  collapsed: {
    height: 60,
    transition: { ease: "easeInOut", duration: 0.3, delayChildren: 0.5 },
  },
}

export function Header(props: HeaderProps) {
  const { offsetHeight = 120 } = props
  const reached = useScrollCounter(offsetHeight / 2)

  return (
    <>
      <HeaderWrapper
        initial="open"
        variants={headerVariants}
        animate={reached ? "collapsed" : "open"}
        css={{
          borderColor: reached ? "var(--rdev-border-color)" : "transparent",
        }}
      >
        <Grid columns="medium" gapX={4}>
          <Box
            css={{
              gridColumn: 2,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <H1 css={{ margin: 0 }}>RDev</H1>
            <Box css={{ display: "flex", gap: "1rem" }}>
              {["Home", "Snippets", "Blogs"].map((val) => (
                <NavLink title={val} key={val} to={val} />
              ))}
            </Box>
          </Box>
        </Grid>
      </HeaderWrapper>
      <HeaderPadding css={{ "--offsetHeight": `${offsetHeight}px` }} />
    </>
  )
}

type NavLinkProps = {
  title: string
  to: string
}
function NavLink(props: NavLinkProps) {
  const { to, title } = props
  return (
    <LinkStyled to={to}>
      <Text>{title}</Text>
    </LinkStyled>
  )
}
