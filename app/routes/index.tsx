import React from "react"
import { useScroll, useTransform, motion } from "framer-motion"
import { Header } from "~/components/Header"
import { Layout } from "~/components/Layout"
import { HomeTitle } from "~/components/Section"
import { KeepScroll } from "~/components/KeepScroll"
import { HomeCarousel } from "~/components/Section/HomeCarousel"
import { Footer } from "~/components/Layout/Footer"

export default function () {
  const [active, setActive] = React.useState(false)
  const { scrollYProgress } = useScroll()
  // const background = useTransform(scrollYProgress, [0, 1], ["#3C3B3D", "#ffff"])
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1])

  return (
    <>
      <Header active={active} setActive={setActive} />
      <Layout>
        <KeepScroll />
        <HomeTitle />
      </Layout>
      <motion.div style={{ height: "100vh", width: "100vw", overflow: "hidden", background: "white", opacity }}>
        <HomeCarousel />
      </motion.div>
      {/* <div style={{ height: "100vh", width: "100vw", background: "white" }}>
        <Layout css={{ width: "100%", background: "transparent" }}>
        </Layout>
      </div>
      <Footer /> */}
    </>
  )
}
