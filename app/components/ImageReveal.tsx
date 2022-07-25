import { type CSS, styled } from "~/stitches.config"
import { motion } from "framer-motion"

const ContainerStyled = styled(motion.div, {
  overflow: "hidden",
  height: "max-content",
  borderBottom: "3px solid red",
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
        view: { opacity: 1, height: "max-content", transition: { duration: Math.random() * 6, type: "spring" } },
        hide: { opacity: 0, height: "0px", transition: { duration: 0 } },
      }}
      transition={{ duration: 1 }}
    >
      <ImgStyled src={src} />
    </ContainerStyled>
  )
}

export { ImageReveal }
