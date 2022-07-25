import { Heading, Text } from "~/components/Typography"
import { BaseRevealStyled } from "./Reveal.styles"

type RevealProps = {
  children: React.ReactNode
}
export function Reveal(props: RevealProps) {
  const { children } = props

  return <BaseRevealStyled>{children}</BaseRevealStyled>
}
