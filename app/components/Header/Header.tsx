import { AnimatePresence, motion } from "framer-motion"
import { Container, NavLinkStyle, HeaderStyled } from "."

type HeaderProps = {
  active: boolean
  setActive(active: boolean): void
}

export function Header(props: HeaderProps) {
  const { active, setActive } = props
  return (
    <>
      <HeaderStyled>
        <div className="overflow">
          <motion.h1 className="title" initial={{ y: 30 }} animate={{ y: 0 }} transition={{ duration: 1 }}>
            RDev
          </motion.h1>
        </div>
        <button onClick={() => setActive(!active)} className="menu">
          <motion.div
            className="container"
            layout
            animate={active ? "active" : "none"}
            initial={{ marginTop: "100%" }}
            variants={{
              active: { marginTop: "-50%" },
              none: { marginTop: "0%" },
            }}
            transition={{ duration: 1 }}
          >
            <p>Menu</p>
            <p>Close</p>
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
