import { styled } from "../../../styles/Theme.provider";
import Flex from "../../Flex";

export const ProductCartCardContainer = styled(Flex, {
  padding: "20px 10px",
  borderRadius: "10px",
  maxHeight: "170px",
  height: "100%",
  backgroundColor: "white",
  boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
});

export const ImageContainer = styled("img", {
  maxWidth: "100px",
  width: "100%",
  objectFit: "contain",
  marginRight: "20px",
});

export const ProductTitle = styled("h3", {
  fontSize: "1.2rem",
});

export const ProductUnitPrice = styled("span", {
  color: "$textSecondary",
  fontSize: "0.8rem",
});

export const ProductCategory = styled("span", {
  fontSize: "0.8rem",
  marginTop: "5px",
  textTransform: "uppercase",
  color: "$textSecondary",
});

export const ProductCardPrice = styled("h4", {
  fontSize: "1.6rem",
  color: "$text",
});
