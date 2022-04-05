import { styled } from "../../../styles/Theme.provider";
import Flex from "../../Flex";

export const ProductImageContainer = styled(Flex, {
  flexDirection: "column",

  img: {
    borderRadius: "0.5rem",
    width: "100%",
    height: "400px",
    objectFit: "contain",
  },
});
