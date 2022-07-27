import { styled } from "~/stitches.config"
import { motion, useAnimationControls, type Variant } from "framer-motion"
import { Box } from "./Atoms/Box"
import { PReveal } from "./Motion/Reveal"
import { useCursorStore } from "~/components/Cursor"

const PreviewContainer = styled(motion.div, {
  overflow: "visible",
  width: "100%",

  "& .image-preview": {
    display: "none",
    "@md": {
      display: "block",
    },
  },

  "@md": {
    width: "50%",
  },
  py: "1rem",
})

const Image = styled("img", {
  width: "100%",
})

const BoxMotion = motion(Box)

type ProjectPreviewProps = {
  img: string
  title: string
  subtitle: string
  blur: Variant
  active: Variant
}

export function ProjectPreview(props: ProjectPreviewProps) {
  const { img, title, subtitle, active, blur } = props

  const { update } = useCursorStore()
  const control = useAnimationControls()

  return (
    <PreviewContainer
      initial="blur"
      animate={control}
      transition={{ duration: 1 }}
      onMouseEnter={() => {
        control.start("active")
        update("focus")
      }}
      onMouseLeave={() => {
        update("basic")
        control.start("blur")
      }}
    >
      <Box as={motion.div} css={{ display: "flex", fontWeight: "normal", gap: ".5rem", alignItems: "flex-start", justifyContent: "flex-start" }}>
        <h2 style={{ textTransform: "uppercase" }}>{title}</h2>
        <PReveal
          css={{
            position: "relative",
            fontWeight: "lighter",
            width: "auto",
            overflow: "visible",
            maxWidth: "max-content",
            fontSize: ".7em",
            "@md": {
              overflow: "hidden",
            },
            "& p": { whiteSpace: "nowrap" },
          }}
          variants={{
            active: { width: "100%" },
            blur: { width: "0" },
          }}
          transition={{ duration: 0.8 }}
        >
          {subtitle}
        </PReveal>
      </Box>
      {/* Preview */}
      <BoxMotion
        className="image-preview"
        style={{ pointerEvents: "none", overflow: "visible", maxHeight: "100%" }}
        css={{ bg: "Green", position: "absolute", top: 0, left: 0, width: "45%" }}
        variants={{
          active: { opacity: 1, ...active },
          blur: { opacity: 0, ...blur },
        }}
        transition={{ duration: 0.5 }}
      >
        <Image src={img} alt={title} />
      </BoxMotion>
    </PreviewContainer>
  )
}

export function ProjectPreviewContainer() {
  return (
    <BoxMotion
      css={{
        mt: "1rem",
        position: "relative",
        width: "100%",

        display: "flex",
        justifyContent: "flex-end",
        alignItems: "flex-end",
        flexDirection: "column",

        fontSize: "1rem",

        "@md": {
          fontSize: "inherit",
        },

        "& hr": { border: ".5px solid black", maxWidth: "100%", "@md": { maxWidth: "50%" } },
      }}
      initial="initial"
      animate="show"
      transition={{
        staggerChildren: 0.3,
      }}
    >
      <motion.hr variants={{ initial: { width: "0%" }, show: { width: "100%" } }} transition={{ duration: 1 }} />

      <ProjectPreview
        img="/img/1.png"
        title="LingoTalk"
        subtitle="Project Manager"
        active={{ rotateZ: "5deg", translateY: "0", scale: 1.1 }}
        blur={{ rotateZ: "-2deg", translateY: "1rem", scale: 0.8, transition: { duration: 0.4 } }}
      />
      <motion.hr variants={{ initial: { width: "0%" }, show: { width: "100%" } }} transition={{ duration: 1 }} />
      <ProjectPreview
        img="/img/2.png"
        title="CariGuru"
        subtitle="Web Leader"
        active={{ rotateX: "-5deg", translateY: "0rem", skewX: "10deg", scale: 1.1 }}
        blur={{ rotateX: "10deg", translateY: "2rem", skewX: "0deg", scale: 0.8, transition: { duration: 0.4 } }}
      />
      <motion.hr variants={{ initial: { width: "0%" }, show: { width: "100%" } }} transition={{ duration: 1 }} />
      <ProjectPreview
        img="/img/3.png"
        title="Blups.asia"
        subtitle="Front end"
        active={{ rotateZ: "4deg", translateY: "0rem", scale: 1.1 }}
        blur={{ rotateZ: "-2deg", translateY: "2rem", scale: 0.8, transition: { duration: 0.4 } }}
      />
      <motion.hr variants={{ initial: { width: "0%" }, show: { width: "100%" } }} transition={{ duration: 1 }} />
    </BoxMotion>
  )
}
