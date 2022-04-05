import { HeaderContainer, Container } from "./styles";

import logo from "../../assets/logo.png";
import CartItem from "../CartItem";
import { Link } from "react-router-dom";

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
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
        <CartItem />
      </Container>
    </HeaderContainer>
  );
}

export default Header;
