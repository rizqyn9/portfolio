import type { CSS, VariantProps } from "~/stitches.config";
import type { DEFAULT_TAG } from "./Typography.constants";
import type { Text } from "./TypographyText";

export type TextSizeVariants = Pick<
  VariantProps<typeof Text>,
  "size" | "variant" | "gradient"
>;

export type EMProps = React.HTMLAttributes<HTMLParagraphElement> &
  TextSizeVariants;
export type StrongProps = React.HTMLAttributes<HTMLParagraphElement> &
  TextSizeVariants;

export type HeadingSizeVariants = "1" | "2" | "3" | "4";
export type HeadingVariants = { size?: HeadingSizeVariants } & Omit<
  VariantProps<typeof Text>,
  "size"
>;

export type HeadingProps = React.ComponentProps<typeof DEFAULT_TAG> &
  HeadingVariants & { css?: CSS; as?: any };

export type ShortHandHeadingProps = Omit<HeadingProps, "size" | "as">;
