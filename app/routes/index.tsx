import { domAnimation, LazyMotion, motion } from "framer-motion";
import { styled, css } from "~/stitches.config";

const Container = styled("div", {});

export default function () {
  return (
    <Container>
      <Title />
    </Container>
  );
}

const Title = () => {
  return (
    <Container
      css={{
        position: "relative",
        maxWidth: "100%",
        width: "100%",
        height: "50vh",
        overflow: "hidden",
      }}
    >
      <motion.h1
        className={css({
          whiteSpace: "nowrap",
          transform: "translate(-200%, 0)",
        })()}
        initial={{
          x: "-200%",
        }}
        animate={{
          x: "0%",
        }}
        transition={{
          duration: "10",
          ease: "linear",
        }}
        onAnimationEnd={() => alert("ad")}
      >
        Hi im Rizqy Prastya Ari Nugroho 🙋
      </motion.h1>
      {/* <h1
        className={css({
          top: "50%",
          whiteSpace: "nowrap",
          position: "absolute",
        })()}
      >
        Hi im Rizqy Prastya Ari Nugroho 🙋
      </h1> */}
    </Container>
  );
};
