import { H4, Text } from "../Typography"
import { Box } from "~/components/Atoms/Box"
import { styled } from "~/stitches.config"

const Image = styled("img", {})

type CardProps = {
  title: string
}

export function Card<T extends object = object>(props: CardProps & T) {
  const { title, ...rest } = props
  return (
    <Box {...rest} css={{}}>
      <Box
        css={{
          background: "var(--rdev-colors-emphasis)",
          borderRadius: "1rem",
          position: "relative",
        }}
      >
        <Box
          css={{
            height: "500px",
            width: "100%",
            position: "relative",
            borderRadius: "var(--border-radius-2)",
            background:
              "rgba(0, 0, 0, 0) linear-gradient(90deg, rgb(231, 223, 255) 0%, rgb(250, 172, 168) 100%, rgb(255, 169, 165) 100%) repeat scroll 0% 0%",
            overflow: "hidden",
          }}
        >
          <Box
            css={{
              boxSizing: "border-box",
              display: "block",
              overflow: "hidden",
              width: "initial",
              height: "initial",
              background: "rgba(0, 0, 0, 0) none repeat scroll 0% 0%",
              opacity: 1,
              border: "0px none",
              margin: "0px",
              padding: "0px",
              position: "absolute",
              inset: "0px",
            }}
          >
            <Image
              css={{
                position: "absolute",
                inset: "0px",
                boxSizing: "border-box",
                padding: "0px",
                border: "medium none",
                margin: "auto",
                display: "block",
                width: "0px",
                height: "0px",
                minWidth: "100%",
                maxWidth: "100%",
                minHeight: "100%",
                maxHeight: "100%",
                objectFit: "cover",
              }}
              src="https://res.cloudinary.com/dg5nsedzw/image/upload/f_auto,w_3840,q_75/portfolio/dds.png"
            />
          </Box>
        </Box>
      </Box>
      <H4 css={{ margin: 0, marginTop: "1rem" }}>{title}</H4>
      <Text>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et,
        doloremque!
      </Text>
    </Box>
  )
}
