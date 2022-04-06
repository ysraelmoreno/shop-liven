import CartSummary from "../../components/Cart/CartSummary";
import { Col, Container, Row } from "../../components/Layout";
import ProductCard from "../../components/ProductCard";
import { useCart } from "../../hooks/useCart";
import EmptyCart from "./EmptyCart";

function Cart() {
  const { cartItems } = useCart();
  return (
    <>
      <Container>
        {cartItems.length > 0 ? (
          <Row>
            <Col sm={12} md={8} lg={8} css={{ padding: "30px" }}>
              {cartItems.map((item) => (
                <ProductCard type="cart" product={item} />
              ))}
            </Col>
            <Col sm={12} md={4} lg={4} css={{ padding: "30px" }}>
              <CartSummary />
            </Col>
          </Row>
        ) : (
          <EmptyCart />
        )}
      </Container>
    </>
  );
}

export default Cart;
