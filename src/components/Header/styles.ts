import { styled } from "../../styles/Theme.provider";

export const HeaderContainer = styled("header", {
  display: "flex",
  width: "100%",
  minHeight: "100px",
});

export const Container = styled("div", {
  display: "flex",
  maxWidth: "1024px",
  margin: "0 auto",
  width: "100%",
  padding: "3rem",

  borderBottom: "1px solid $border",
});
