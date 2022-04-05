import { styled } from "../../../styles/Theme.provider";

export const ProductTitle = styled("h2", {
  fontSize: "1.4rem",
  marginTop: "1rem",
});

export const ProductCategory = styled("span", {
  color: "$textSecondary",
  fontSize: "1rem",
  textTransform: "uppercase",
});

export const ProductDescription = styled("p", {
  fontSize: "1rem",
  color: "$text",
  marginTop: "1.5rem",
});
