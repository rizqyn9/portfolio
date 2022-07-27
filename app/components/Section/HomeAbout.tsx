import { motion } from "framer-motion"
import { styled } from "~/stitches.config"
import { LinkUnderlined } from "../Links"

const ContainerStyled = styled(motion.div, {
  boxSizing: "border-box",
  //   height: "100vh",
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
    // height: "50%",
    // bg: "red",
    fontSize: "10vw",
    lineHeight: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    // alignItems: "center",
  },

  "& .motivated": {
    fontSize: "6vw",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    // alignItems: "center",
    // bg: "blue",
  },

  "& .small": {
    fontSize: ".8em",
    fontWeight: "lighter",
  },
})

export function HomeAbout() {
  return (
    <ContainerStyled>
      <div className="container solve">
        <h1>Solve Hard</h1>
        <h1>Problems</h1>
        <h1>Climate</h1>
      </div>
      <div className="container motivated">
        <div>
          <p>
            Motivated <span className="small">to</span>
          </p>

          <p className="small">learn new technologies</p>
        </div>
        <hr />
        <div>
          <LinkUnderlined arrow css={{ width: "max-content", gap: "1rem", py: "2rem", fontSize: "1.5em" }}>
            Get to know me
          </LinkUnderlined>
        </div>
      </div>
    </ContainerStyled>
  )
}
