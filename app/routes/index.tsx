import { styled, css } from "~/stitches.config";

const Container = styled("div", {
  background: "gray",

  variants: {
    color: {
      light: {
        background: "pink",
      },
      dark: {
        background: "yellow",
      },
    },
  },
});

export default function Index() {
  return (
    <Container color={"dark"}>
      <p>asdasd</p>
    </Container>
  );
}
