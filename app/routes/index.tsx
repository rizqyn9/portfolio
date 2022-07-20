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
      <Grid columns="medium" gapX={4} gapY={10} className={wrapperGrid()}>
        <Box css={{ paddingBottom: "8rem" }}>
          <H1 weight="4">Hello! 🙋, I'm Rizqy P.A.N.</H1>
          <Text size="7">
            I help people make the world better through quality software.
          </Text>
        </Box>
      </Grid>
      <Box css={{ background: "var(--rdev-colors-emphasis)" }}>
        <Grid columns="medium" gapX={4} gapY={12} className={wrapperGrid()}>
          <Box css={{ padding: "4rem 0" }}>
            <H2>About me</H2>
            <Text variant="secondary" weight="2">
              I'm is a freelance and full-stack developer based in Indonesia
              with passion for building digital services/stuff. I have knack for
              all things launching products from planning and designing all the
              way to solving real-life problems with code.
            </Text>
          </Box>
        </Grid>
      </Box>
      <Box>
        <Grid columns="medium" gapX={4} gapY={12} className={wrapperGrid()}>
          <Box css={{ padding: "4rem 0" }}>
            <H2>Work</H2>
            <Box
              css={{ display: "flex", flexDirection: "column", gap: "3rem" }}
            >
              <Card title="Engineering Productivity" />
              <Card title="blups.asia" />
              <Card title="CI/CD Management" />
              <Card title="Public API" />
            </Box>
          </Box>
        </Grid>
      </Box>
    </Layout>
  )
}
