import { VariantProps } from "@stitches/react";
import { styled } from "../../styles/Theme.provider";

export const Container = styled("button", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  width: "100%",
  height: "40px",
  padding: "10px",

  border: "none",
  borderRadius: "5px",
  backgroundColor: "#fff",
  color: "$primary",
  fontWeight: "700",
  transition: "all .2s ease",
  zIndex: "3",

  overflow: "hidden",

  svg: {
    marginRight: "10px",
    marginLeft: "0",
  },

  "&:hover": {
    color: "white",

    "&:before": {
      width: "100%",
    },
  },

  "&:disabled": {
    color: "$textSecondary",
    pointerEvents: "none",
  },

  variants: {
    loading: {
      true: {
        "&:after": {
          backgroundColor: "$textSecondary",
        },
      },
    },
    variant: {
      primary: {
        backgroundColor: "$primary !important",
        color: "$textLight",

        "&:hover": {
          backgroundColor: "$primaryHover !important",
          boxShadow: "0 0 5px 1px rgba(255, 103, 56, 0.3) ",
        },
      },
      secondary: {
        backgroundColor: "white !important",
        color: "$primary",

        "&:hover": {
          color: "rgba(255, 103, 56, 0.6) !important",
          backgroundColor: "rgba(201, 201, 201, 1)",
          boxShadow: "0 0 5px 1px rgba(255, 103, 56, 0.3) ",
        },
      },
      alternative: {
        backgroundColor: "transparent",
        border: "1px solid $primary !important",
        color: "$primary !important",

        "&:hover": {
          backgroundColor: "rgba(255, 103, 56, 0.1) !important",
          boxShadow: "0 0 2px 1px rgba(255, 103, 56, 0.2) ",
        },
      },
      ghost: {
        backgroundColor: "transparent !important",
        border: "none",
        color: "$text",

        "&:hover": {
          color: "$primary",
        },

        "&:disabled": {
          color: "$textSecondary",
        },
      },
    },
  },
});

export type ButtonVariants = VariantProps<typeof Container>;
