import { styled } from "../../../styles/Theme.provider";

export const CartQuantityBadgeContainer = styled("div", {
  padding: "5px 7px",
  height: "fit-content",
  fontSize: "0.9rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "1rem",
  backgroundColor: "red",
  position: "absolute",
  top: "-5px",
  right: "-15px",
  color: "$textLight",
});
