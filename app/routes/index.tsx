import React from "react"
import { useScroll, motion } from "framer-motion"
import { Header } from "~/components/Header"
import { Layout } from "~/components/Layout"
import { HomeTitle } from "~/components/Section"
import { KeepScroll } from "~/components/KeepScroll"
import { HomeCarousel } from "~/components/Section/HomeCarousel"
import { HomeAbout } from "~/components/Section/HomeAbout"
import { HomeFooter } from "~/components/Section/HomeFooter"
import { HomeProject } from "~/components/Section/HomeProject"
import { Toast } from "~/components/TemporayToast"

export default function () {
  const [active, setActive] = React.useState(false)
  const { scrollYProgress } = useScroll()
  // const background = useTransform(scrollYProgress, [0, 1], ["#3C3B3D", "#ffff"])

  return (
    <>
      <Toast />
      <Header active={active} setActive={setActive} />
      <Layout>
        <KeepScroll />
        <HomeTitle />
      </Layout>
      <motion.div
        style={{ height: "100vh", width: "100vw", overflow: "hidden", background: "white" }}
        variants={{ show: { opacity: 1, transition: { duration: 2 } }, hide: { opacity: 0, transition: { duration: 0 } } }}
        initial="hide"
        whileInView="show"
      >
        <HomeCarousel />
      </motion.div>
      <HomeAbout />
      <HomeProject />
      <HomeFooter />
      <div style={{ background: "white", color: "black", position: "relative", zIndex: 10 }}>
        <p style={{ fontSize: "3em", textAlign: "center", padding: "2rem " }}>
          Built with{" "}
          <a href="https://remix.run/" target="__blank">
            Remix ❤️
          </a>
        </p>
      </div>
    </>
  )
}
