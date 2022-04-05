import { Link } from "react-router-dom";
import { styled } from "../../styles/Theme.provider";

export const CartItemContainer = styled(Link, {
  display: "flex",
  alignItems: "center",
  position: "relative",
  svg: {
    fontSize: "30px",
  },
});
