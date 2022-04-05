import { styled } from "../../../styles/Theme.provider";
import Flex from "../../Flex";

export const ProductCardContainer = styled(Flex, {
  maxWidth: "300px",
  width: "100%",
  margin: "5px",
  padding: "20px 15px",
  borderRadius: "10px",
  border: "1px solid #e6e6e6",
  img: {
    width: "100%",
    minHeight: "200px",
    maxHeight: "200px",
    objectFit: "contain",
  },
});

export const ProductCardTitle = styled("h2", {
  fontSize: "1.2rem",
  marginTop: "3rem",
  color: "$text",
  display: "block",
  width: "100%",
  textOverflow: "ellipsis",
  overflow: "hidden",
  whiteSpace: "nowrap",
});

export const ProductCardCategory = styled("span", {
  color: "$textSecondary",
  margin: "0.3rem 0",
});

export const ProductCardDescription = styled("p", {
  fontSize: "1rem",
  color: "$text",
  height: "100px",
  marginTop: "1rem",
  textOverflow: "ellipsis",
  overflow: "hidden",
  whiteSpace: "wrap",
});

export const ProductCardRating = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  color: "$textSecondary",
});

export const ProductCardPrice = styled("h3", {});
