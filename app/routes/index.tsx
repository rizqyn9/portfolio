import React from "react"
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion"
import { Header } from "~/components/Header"
import { type CSS, styled } from "~/stitches.config"
import { useCursorStore } from "~/components/Cursor"
import { Layout } from "~/components/Layout"
import { HomeTitle } from "~/components/Section"
import { KeepScroll } from "~/components/KeepScroll"

export default function () {
  const [active, setActive] = React.useState(false)
  const { update } = useCursorStore()
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 8_00])

  return (
    <div onMouseEnter={() => update("basic")}>
      <Header active={active} setActive={setActive} />
      <Layout>
        <HomeTitle />
        <KeepScroll />
      </Layout>
      <Layout>
        <HomeTitle />
        <KeepScroll />
      </Layout>

      {/* <TitleContainer style={{ y }}>
        <TitleWord index={0} css={{ marginRight: "auto" }}>
          Solve
        </TitleWord>
        <TitleWord index={0.2} css={{ marginRight: "auto" }}>
          Hard
        </TitleWord>
        <TitleWord index={0.4} css={{ marginRight: "auto" }}>
          Climate
        </TitleWord>
        <TitleWord index={0.6} css={{ marginRight: "auto" }}>
          Problems
        </TitleWord>
        <motion.button initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
          Lets Talk
        </motion.button>
      </TitleContainer>
      <div style={{ height: "100vh", background: "gray", zIndex: 8, position: "relative", padding: "3rem" }}>
        <h1 style={{ fontSize: "2em" }}>
          I{"'"}m here to ask the necessary (and sometimes difficult questions) to create brands and products that focus on and prioritize people
        </h1>
        <motion.button>GET TO KNOW ME</motion.button>
      </div> */}
    </div>
  )
}

const TitleContainer = styled(motion.div, {
  height: "100vh",
  minHeight: "max-content",
  pointerEvents: "none",

  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "4.5em",

  "@sm": {
    maxWidth: "50vw",
    flexDirection: "row",
    alignItems: "flex-end",
    alignContent: "end",
    justifyContent: "end",
    flexWrap: "wrap",
  },

  willChange: "transform",

  "& .overflow": {
    overflow: "hidden",
  },

  "& button": {
    fontSize: ".4em",
    marginRight: "auto",
    marginTop: "2em",
    padding: "1rem 2rem",
    background: "white",
    color: "black",
    borderRadius: "9999px",

    "&::hover": {
      boxShadow: "1rem 1rem 1rem green",
    },
  },
})

const TitleWordStyle = styled(motion.div, {})

const TitleWord = ({ children, css, index, x }: { children: React.ReactNode; css?: CSS; index: number; x?: MotionValue }) => {
  return (
    <TitleWordStyle
      css={{ ...css }}
      style={{ x }}
      transition={{
        when: "beforeChildren",
      }}
    >
      <div className="overflow">
        <motion.p
          style={{ color: "white", overflow: "visible", zIndex: 0, fontWeight: "bolder", transformStyle: "preserve-3d", lineHeight: ".9em" }}
          initial={{ y: "2em" }}
          animate={{ y: 0 }}
          transition={{
            duration: 1,
            delay: index,
          }}
        >
          {children}
        </motion.p>
      </div>
    </TitleWordStyle>
  )
}
