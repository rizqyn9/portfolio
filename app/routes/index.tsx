import { useScroll } from "framer-motion"
import { Layout } from "~/components/Layout"
import { HomeTitle } from "~/components/Section"
import { KeepScroll } from "~/components/KeepScroll"
import { HomeCarousel } from "~/components/Section/HomeCarousel"
import { HomeAbout } from "~/components/Section/HomeAbout"
import { HomeProject } from "~/components/Section/HomeProject"

export default function () {
  const { scrollYProgress } = useScroll()
  // const background = useTransform(scrollYProgress, [0, 1], ["#3C3B3D", "#ffff"])

  return (
    <>
      <Layout>
        <KeepScroll />
        <HomeTitle />
      </Layout>
      <HomeCarousel />
      <HomeAbout />
      <HomeProject />
    </>
  )
}
