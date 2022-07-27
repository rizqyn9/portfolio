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
import { useCursorStore } from "~/components/Cursor"

export default function () {
  const { update } = useCursorStore()
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
      <HomeCarousel />
      <HomeAbout />
      <HomeProject />
      <HomeFooter />
      <div style={{ background: "white", color: "black", position: "relative", zIndex: 10 }}>
        <p style={{ fontSize: "16px", textAlign: "center", padding: "10px " }}>
          Built with{" "}
          <a href="https://remix.run/" target="__blank" onMouseEnter={() => update("focus")} onMouseLeave={() => update("basic")}>
            Remix ❤️
          </a>
        </p>
      </div>
    </>
  )
}
