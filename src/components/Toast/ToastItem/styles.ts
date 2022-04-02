import { VariantProps } from "@stitches/react";
import { keyframes, styled } from "../../../styles/Theme.provider";

const slideIn = keyframes({
  "0%": {
    transform: "translateX(100%)",
  },
  "100%": {
    transform: "translateX(0)",
  },
});

export const ToastItemContainer = styled("div", {
  width: "100%",
  maxHeight: "120px",
  backgroundColor: "$background",
  padding: "10px",
  borderRadius: "5px",
  boxShadow: "0 0 5px rgba(0, 0, 0, 0.2)",

  strong: {
    color: "$gray12",
    fontWeight: "500",
    fontSize: "12px",
  },

  p: {
    color: "$gray10",
    fontSize: "11px",
  },

  "& + div": {
    marginTop: "10px",
  },

  animation: `${slideIn} 0.5s ease-in-out`,

  variants: {
    type: {
      success: {
        borderBottom: "4px solid green",
      },
      error: {
        borderBottom: "4px solid red",
      },
      info: {
        borderBottom: "4px solid $secondary",
      },
    },
  },
});

export type ToastItemVariants = VariantProps<typeof ToastItemContainer>;
