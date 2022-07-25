import { CSS, styled } from "~/stitches.config"
import { motion, useInView } from "framer-motion"
import React from "react"

const ContainerStyled = styled(motion.div, {
  // overflow: "hidden",
  // height: "max-content",
  // width: "max-content",
  padding: "1rem",
  height: "max-content",
  width: "max-content",
  backgroundColor: "PeachPuff",
})

const DivImageStyled = styled(motion.div, {
  height: "14rem",
  width: "24rem",

  backgroundSize: "cover",

  borderRadius: "2rem",

  boxShadow: "1px 5px 10px gray",
})

export type ImageRevealProps = {
  src: string
  css?: CSS
}

function ImageReveal(props: ImageRevealProps) {
  const { src, css } = props
  const ref = React.useRef<HTMLDivElement | null>(null)
  const inView = useInView(ref, { once: true })

  return (
    <ContainerStyled css={{ ...css }} ref={ref}>
      <DivImageStyled
        css={{ backgroundImage: `url(${src})` }}
        initial={"hidden"}
        animate={inView ? "show" : "hidden"}
        variants={{
          hidden: { height: 0 },
          show: { height: "14rem" },
        }}
        transition={{ duration: 0.8 }}
      />
    </ContainerStyled>
  )
}

export { ImageReveal }
