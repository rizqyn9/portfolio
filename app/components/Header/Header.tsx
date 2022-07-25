import { Link } from "@remix-run/react"
import { AnimatePresence, motion, MotionConfig, useTransform } from "framer-motion"
import { Container, NavLinkStyle, HeaderStyled } from "."
import { useCursorStore } from "../Cursor"

type HeaderProps = {
  active: boolean
  setActive(active: boolean): void
}

const LinkMotion = motion(Link)

export function Header(props: HeaderProps) {
  const { active, setActive } = props
  return (
    <>
      <HeaderStyled>
        <MotionConfig transition={{ duration: 1 }}>
          <div className="overflow">
            <LinkMotion style={{ display: "block" }} to="/" className="title" initial={{ y: "2.5rem" }} animate={{ y: 0 }}>
              RDev
            </LinkMotion>
          </div>
          <button onClick={() => setActive(!active)} className="overflow">
            <motion.p className="toggle" animate={active ? "show" : "hide"} initial={"hide"} variants={{ show: { y: "0rem" }, hide: { y: "-2rem" } }}>
              Close
            </motion.p>
            <motion.p className="toggle" animate={active ? "hide" : "show"} initial={"hide"} variants={{ show: { y: "-2rem" }, hide: { y: "1rem" } }}>
              Open
            </motion.p>
          </button>
        </MotionConfig>
      </HeaderStyled>
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
