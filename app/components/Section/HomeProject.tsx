import { styled } from "~/stitches.config"
import { motion } from "framer-motion"
import { LinkUnderlined } from "../Links"
import { ProjectPreviewContainer } from "../ProjectPreview"

const StyledContainer = styled(motion.div, {
  minHeight: "100vh",
  bg: "white",
  width: "100%",
  px: "5vw",

  position: "relative",
  zIndex: 10,

  color: "black",

  display: "flex",
  //   flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  flexWrap: "wrap",
  fontSize: "24px",

  "& .title": {
    width: "100%",
    fontSize: "clamp(20px, 10vw, 120px)",

    display: "flex",
    flexDirection: "column",
  },

  "& .list_project": {
    bg: "red",
    mt: "3rem",
    width: "100%",
    order: 2,
    "@md": {
      position: "relative",
    },
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
        <LinkUnderlined to="/" css={{ fontSize: "inherit" }}>
          SEE - ALL
        </LinkUnderlined>
      </div>

      {/* Accordion */}
      <ProjectPreviewContainer />

      {/* Preview */}
      <div className="preview">
        <div>Preview</div>
      </div>
    </StyledContainer>
  )
}
