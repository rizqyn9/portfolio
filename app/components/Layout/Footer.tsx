import { styled } from "~/stitches.config"
import { Layout } from "./Layout"

const ContainerStyled = styled("footer", {
  minHeight: "50vh",
  zIndex: 11,
  position: "relative",
  bg: "var(--rdev-colors-body)",
  display: "flex",
})

function Footer() {
  return (
    <ContainerStyled>
      <Layout css={{ display: "flex", height: "100%", alignItems: "center", justifyContent: "center" }}>
        <p>2022 | Rizqy Prastya Ari Nugoho</p>
      </Layout>
    </ContainerStyled>
  )
}

export { Footer }
