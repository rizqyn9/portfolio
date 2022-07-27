import { motion } from "framer-motion"
import { styled } from "~/stitches.config"
import { Box } from "../Atoms/Box"
import { LinkUnderlined } from "../Links"

const ContainerStyled = styled(motion.div, {
  boxSizing: "border-box",
  px: "5vw",
  py: "10vh",
  position: "relative",
  zIndex: 10,

  background: "black",
  display: "flex",
  flexDirection: "column",
  gap: "2rem",

  "& .container": {
    // flex: "1 1 50%",
  },

  "& .solve": {
    fontSize: "clamp(45px,10vw,120px)",
    lineHeight: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    // alignItems: "center",
  },

  "& .motivated": {
    fontSize: "clamp(25px,4vw,45px)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    // alignItems: "center",
    // bg: "blue",
  },

  "& .small": {
    fontSize: ".8em",
    fontWeight: "lighter",
    fontStyle: "italic",
  },
})

const BoxMotion = motion(Box)
export function HomeAbout() {
  return (
    <ContainerStyled>
      <BoxMotion
        className="container solve"
        initial={{ color: "#0000" }}
        whileInView={{ color: "#ffff" }}
        transition={{ duration: 1 }}
        viewport={{ margin: "-35px" }}
      >
        <h1>Solve Hard</h1>
        <h1>Problems</h1>
        <h1>Climate</h1>
      </BoxMotion>
      <BoxMotion
        className="container motivated"
        initial={{ color: "#0000" }}
        whileInView={{ color: "#ffff" }}
        transition={{ duration: 1 }}
        viewport={{ margin: "-25px" }}
      >
        <p>
          Motivated <span className="small">to</span>
        </p>
        <p className="small">learn new technologies</p>
        <LinkUnderlined to="/" arrow css={{ width: "max-content", gap: "1rem", py: "2rem", fontSize: "1em" }}>
          Get to know me
        </LinkUnderlined>
      </BoxMotion>
    </ContainerStyled>
  )
}
