import { HeaderContainer, Container } from "./styles";

import logo from "../../assets/logo.png";
import CartItem from "../CartItem";

function Header(): JSX.Element {
  return (
    <HeaderContainer>
      <Container
        css={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
          img: {
            height: "fit-content",
          },
        }}
      >
        <a href="/">
          <img src={logo} alt="logo" />
        </a>
        <CartItem />
      </Container>
    </HeaderContainer>
  );
}

export default Header;
