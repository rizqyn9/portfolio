import { AnimatePresence, motion, useAnimation } from "framer-motion"
import { Container, NavLinkStyle, HeaderStyled } from "."

type HeaderProps = {
  active: boolean
  setActive(active: boolean): void
}

export function Header(props: HeaderProps) {
  const { active, setActive } = props
  useAnimation()
  return (
    <>
      <HeaderStyled>
        <h1 className="title">RDev</h1>
        <button onClick={() => setActive(!active)} className="menu">
          <motion.div className="container" layout animate={active ? "active" : "none"}>
            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1 }}
              variants={{ active: { y: 0 }, none: { y: 40 } }}
              transition={{ duration: 1 }}
            >
              Close
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              variants={{ active: { y: -40 }, none: { y: 0 } }}
              transition={{ duration: 1 }}
            >
              Menu
            </motion.p>
          </motion.div>
        </button>
      </HeaderStyled>
      <AnimatePresence>
        {active && (
          <>
            <Container
              overlay
              initial={{ height: 0 }}
              animate={{ height: "100%" }}
              exit={{ height: "0", transition: { duration: 1.5 } }}
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
  return (
    <NavLinkStyle>
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
