import React from "react"
import { useScroll, useTransform } from "framer-motion"
import { Header } from "~/components/Header"
import { Layout } from "~/components/Layout"
import { HomeTitle } from "~/components/Section"
import { KeepScroll } from "~/components/KeepScroll"
import { HomeCarousel } from "~/components/Section/HomeCarousel"
import { Footer } from "~/components/Layout/Footer"

export default function () {
  const [active, setActive] = React.useState(false)
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 8_00])

  return (
    <>
      <Header active={active} setActive={setActive} />
      <Layout>
        <KeepScroll />
        <HomeTitle />
      </Layout>
      {/* <div style={{ height: "100vh", width: "100vw", background: "white" }}>
        <Layout css={{ width: "100%", background: "transparent" }}>
          <HomeCarousel />
        </Layout>
      </div>
      <Footer /> */}
    </>
  )
}
