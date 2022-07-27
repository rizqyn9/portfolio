import { BaseRevealStyled } from "./Reveal.styles"
import { motion } from "framer-motion"
import { styled, type ComponentProps } from "~/stitches.config"

type RevealProps = {
  children: React.ReactNode
}
export function Reveal(props: RevealProps) {
  const { children } = props

  return <BaseRevealStyled>{children}</BaseRevealStyled>
}

const PStyledMotion = motion(styled("div"))

type PRevealProps = ComponentProps<typeof PStyledMotion>

export function PReveal(props: PRevealProps) {
  const { children, ...rest } = props
  return (
    <PStyledMotion {...rest}>
      <p>{children}</p>
    </PStyledMotion>
  )
}
