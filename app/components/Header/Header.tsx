import { Link } from "@remix-run/react"
import { AnimatePresence, motion, MotionConfig } from "framer-motion"
import React from "react"
import { Container, NavLinkStyle, HeaderStyled } from "."
import { Box } from "../Atoms/Box"
import { useCursorStore } from "../Cursor"

type HeaderProps = {
  active: boolean
  setActive(active: boolean): void
}

const LinkMotion = motion(Link)
const BoxMotion = motion(Box)

export function Header(props: HeaderProps) {
  const { active, setActive } = props

  return (
    <>
      {/* <HeaderStyled> */}
      <MotionConfig transition={{ duration: 1, ease: "easeInOut" }}>
        <BoxMotion css={{ overflow: "hidden", position: "fixed", top: "1em", left: "5vw", zIndex: 20, fontSize: "22px", mixBlendMode: "difference" }}>
          <BoxMotion initial={{ y: "1.5em" }} animate={{ y: "0em" }}>
            Rdev
          </BoxMotion>
        </BoxMotion>
        <BoxMotion
          onClick={() => setActive(!active)}
          css={{
            overflow: "hidden",
            maxHeight: "1.5em",
            lineHeight: "1.5em",
            position: "fixed",
            top: "1em",
            right: "5vw",
            zIndex: 20,
            fontSize: "22px",
            mixBlendMode: "difference",
          }}
          animate={active ? "close" : "open"}
          initial="initial"
        >
          <BoxMotion variants={{ initial: { y: "2.5em" }, close: { y: "-1.5em" }, open: { y: "0em" } }}>Menu</BoxMotion>
          <BoxMotion variants={{ close: { y: "-1.5em" }, open: { y: "0em" } }}>Back</BoxMotion>
        </BoxMotion>
      </MotionConfig>
      {/* </HeaderStyled> */}
      <AnimatePresence>
        {active && (
          <>
            <Container
              overlay
              initial={{ height: 0 }}
              animate={{ height: "100%", background: ["#3C3B3D", "#B3B3B3"] }}
              exit={{ height: "0", background: "#3C3B3D", transition: { duration: 1.5 } }}
              transition={{ duration: 0.8 }}
            />
            <Container overlay={false} transition={{ staggerChildren: 100 }}>
              <Navlink>Home</Navlink>
              <Navlink>Work</Navlink>
              <Navlink>About</Navlink>
              <Navlink>Contact</Navlink>
            </Container>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

function Navlink({ children }: { children: React.ReactNode }) {
  const { update } = useCursorStore()
  return (
    <NavLinkStyle onMouseEnter={() => update("focus")} onMouseLeave={() => update("basic")}>
      <motion.p
        className="prefix"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.5 } }}
        transition={{
          delay: 1.2,
          duration: 0.3,
        }}
      >
        01.
      </motion.p>
      <div className="overflow">
        <motion.p initial={{ y: "-2em" }} animate={{ y: 0 }} exit={{ y: "-2em", transition: { duration: 1 } }} transition={{ duration: 1.5 }}>
          {children}
        </motion.p>
      </div>
    </NavLinkStyle>
  )
}
