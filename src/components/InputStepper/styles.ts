import { styled } from "../../styles/Theme.provider";
import Button from "../Button";

export const InputStepperContainer = styled("div", {
  width: "100%",
  display: "flex",
  alignItems: "center",
  borderBottom: "1px solid $primary",
});

export const Input = styled("input", {
  width: "100%",
  height: "100%",
  textAlign: "center",
  border: "none",
  backgroundColor: "transparent",
});

export const InputButton = styled(Button, {});
