import { styled } from "~/stitches.config"
import { motion } from "framer-motion"
import { LinkFooter } from "../LinkFooter"
import { Instagram, Telegram, Github, Linkedin } from "../Icon"
import { LinkUnderlined } from "../Links"
import { useCursorStore } from "~/components/Cursor"

const StyledContainer = styled(motion.div, {
  width: "100%",
  minHeight: "50vh",

  display: "flex",
  flexWrap: "wrap",
  gap: "3rem",
  px: "5vw",
  py: "8vh",

  position: "relative",
  zIndex: 10,

  bg: "black",
  fontSize: "33px",
  fontWeight: "normal",

  "& .idea_container": {
    width: "100%",
    order: 1,

    "& h2": {
      fontSize: "1.2em",
      fontWeight: "bolder",
    },
  },

  "& .nav_container": {
    width: "100%",
    borderBottom: "1px solid white",
    pb: ".7rem",
    order: 2,
    "& ul": {
      fontSize: "1.5rem",
      display: "flex",
      justifyContent: "space-between",
    },
  },

  "& .icon_container": {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    gap: "2rem",
    order: 4,
  },

  "& .copyright_container": {
    width: "100%",
    fontSize: ".8rem",
    textAlign: "center",
    order: 5,
  },

  "& .address_container": {
    width: "100%",
    fontSize: ".8rem",
    order: 3,
    "& p": {
      lineHeight: "2em",
    },
  },
})

export function HomeFooter() {
  const { update } = useCursorStore()
  return (
    <StyledContainer>
      {/* Idea */}
      <div className="idea_container">
        <h2>Have an idea ?</h2>
        <LinkUnderlined to="/" arrow css={{ width: "max-content", gap: "1rem", py: "1rem", textTransform: "uppercase" }}>
          Get in touch
        </LinkUnderlined>
      </div>

      {/* Nav Footer */}
      <div className="nav_container">
        <ul>
          {["home", "about", "works", "contact"].map((val, i) => (
            <LinkFooter key={i} to={val} />
          ))}
        </ul>
      </div>

      {/* Icon */}
      <div className="icon_container">
        <Telegram onMouseEnter={() => update("focus")} onMouseLeave={() => update("basic")} />
        <Instagram onMouseEnter={() => update("focus")} onMouseLeave={() => update("basic")} />
        <Github onMouseEnter={() => update("focus")} onMouseLeave={() => update("basic")} />
        <Linkedin onMouseEnter={() => update("focus")} onMouseLeave={() => update("basic")} />
      </div>

      {/* Copyright */}
      <div className="copyright_container">
        <p>2022 | Rizqy Prastya A.N - All Right Reseverd</p>
      </div>

      {/* Address */}
      <div className="address_container">
        <p>Indonesia - Central Java - Kudus 59327</p>
        <p>rizqynugroho9@gmail.com</p>
        <p>+62 898 566 5498</p>
      </div>
    </StyledContainer>
  )
}
