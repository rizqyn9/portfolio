import { type CSS, styled } from "~/stitches.config"
import { motion } from "framer-motion"

const ContainerStyled = styled(motion.div, {
  // overflow: "hidden",
  height: "max-content",
  // position: "absolute",
})

const ImgStyled = styled(motion.img, {})

export type ImageRevealProps = {
  src: string
  css?: CSS
}

function ImageReveal(props: ImageRevealProps) {
  const { src, css } = props

  return (
    <ContainerStyled
      css={{ ...css }}
      whileInView="view"
      initial="hide"
      variants={{
        view: { opacity: 1, transition: { duration: Math.random() * 6, type: "spring" } },
        hide: { opacity: 0, transition: { duration: 0 } },
      }}
    >
      <ImgStyled
        src={src}
        variants={{
          hide: { skewX: "10deg", scale: 0.3, transition: { duration: 0 } },
          view: { skewX: "0deg", scale: 1 },
        }}
        transition={{ duration: 1 }}
      />
    </ContainerStyled>
  )
}

export { ImageReveal }
