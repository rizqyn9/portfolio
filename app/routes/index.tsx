import { Layout } from "~/components/Layout"
import { H1, H2, Text } from "~/components/Typography"
import { Grid } from "~/components/Atoms/Grid"
import { css } from "~/stitches.config"
import { Box } from "~/components/Atoms/Box"
import { styled } from "~/stitches.config"
import { motion, MotionProps, type Variants } from "framer-motion"
import { Card } from "~/components/Card"

const wrapperGrid = css({
  "> *": {
    gridColumn: 2,
  },
})

export default function () {
  return (
    <Layout header headerProps={{ offsetHeight: 256 }}>
      <Grid columns="medium" gapX={4} gapY={12} className={wrapperGrid()}>
        <Box>
          <H1 weight="4">
            Hello! 🙋, I'm Rizqy P.A.N . I help people make the world better
            through quality software.
            <Text variant="secondary" size="7" weight="4">
              Here, I share through my writing my experience as a frontend
              engineer and everything I'm learning about on React, Typescript,
              SwiftUI, Serverless, and testing.
            </Text>
          </H1>
        </Box>
      </Grid>
      <Box css={{ background: "var(--rdev-colors-emphasis)" }}>
        <Grid columns="medium" gapX={4} gapY={12} className={wrapperGrid()}>
          <Box css={{ padding: "3rem 0" }}>
            <H2>About me</H2>
            <Text>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore
              impedit ipsa, quis molestias repellendus harum saepe adipisci
              repudiandae voluptates deserunt?
            </Text>
          </Box>
        </Grid>
      </Box>
      <Box>
        <Grid columns="medium" gapX={4} gapY={12} className={wrapperGrid()}>
          <Box css={{ padding: "3rem 0" }}>
            <H2>Work</H2>
            <Card<MotionProps> as={motion.div} initial="init" />
          </Box>
        </Grid>
      </Box>
    </Layout>
  )
}

const Glow = styled(motion.div, {
  position: "absolute",
  top: "0",
  left: "0",
  width: "100%",
  height: "100%",
  webkitFilter: "blur(15px)",
  filter: "blur(15px)",
  borderRadius: "var(--border-radius-2)",
})
