import { styled } from "~/stitches.config"
import { motion } from "framer-motion"

const StyledContainer = styled(motion.div, {
  bg: "white",
  width: "100%",
  py: "10vh",
  px: "5vw",

  position: "relative",
  zIndex: 10,

  color: "black",

  display: "flex",
  //   flexDirection: "column",
  flexWrap: "wrap",
  fontSize: "24px",

  "& .title": {
    width: "100%",
    fontSize: "13vw",

    display: "flex",
    flexDirection: "column",
  },

  "& .list_project": {
    mt: "3rem",
    width: "100%",
    order: 2,
  },

  "& .preview": {
    width: "50%",
    display: "none",
    order: 1,
  },

  "& .more": {
    mt: "3rem",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    order: 3,
    fontWeight: "lighter",
    "& p": {
      borderBottom: "1px solid black",
    },
  },

  "& .container_list": {
    display: "flex",
    alignItems: "center",
    py: "3vh",
    gap: ".8rem",
    fontWeight: "bold",

    "& p:nth-child(2)": {
      fontSize: ".8em",
      fontWeight: "lighter",

      alignSelf: "flex-start",
      mt: "-.2rem",
    },
  },
})

export function HomeProject() {
  return (
    <StyledContainer>
      {/* Title */}
      <div className="title">
        <h1 style={{ marginRight: "auto" }}>Selected</h1>
        <h1 style={{ marginLeft: "auto" }}>Projects</h1>
      </div>

      {/* Link Button Project */}
      <div className="more">
        <p>SEE - ALL</p>
        <hr />
      </div>

      {/* Accordion */}
      <ul className="list_project">
        <hr />
        <li className="container_list">
          <p>Project 1</p>
          <p>Front end</p>
        </li>
        <hr />
        <li className="container_list">
          <p>Project 1</p>
          <p>Front end</p>
        </li>
        <hr />
        <li className="container_list">
          <p>Project 1</p>
          <p>Front end</p>
        </li>
        <hr />
      </ul>

      {/* Preview */}
      <div className="preview">
        <div>Preview</div>
      </div>
    </StyledContainer>
  )
}
