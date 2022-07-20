import React from "react"
import { type HeaderProps, Header } from "../Header"
import { styled } from "~/stitches.config"

const Wrapper = styled("main", {
  background: "var(--rdev-colors-body)",
  transition: "0.5s",

  /**
   * Disable outline when user doesn't use keyboard
   */
  "&:focus:not(:focus-visible)": {
    outline: 0,
  },

  /**
   * Custom outline
   */
  "&:focus-visible": {
    outline: "2px solid var(--rdev-colors-brand)",
    backgroundColor: "var(--rdev-colors-foreground)",
  },
})

interface LayoutProps {
  footer?: boolean
  header?: boolean
  headerProps?: HeaderProps
}

const Layout: React.FC<LayoutProps> = (props) => {
  const { children, header, footer, headerProps } = props

  return (
    <Wrapper>
      {header ? <Header {...headerProps} /> : null}
      {children}
      {/* {footer ? <Footer /> : null} */}
    </Wrapper>
  )
}

export { Layout }
