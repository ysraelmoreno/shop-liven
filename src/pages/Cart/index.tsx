import CartSummary from "../../components/Cart/CartSummary";
import { Col, Container, Row } from "../../components/Layout";
import ProductCard from "../../components/ProductCard";
import { useCart } from "../../hooks/useCart";

function Cart() {
  const { cartItems, cartTotal, cartQuantity } = useCart();
  return (
    <>
      <Container>
        <Row>
          <Col sm={12} md={8} lg={8} css={{ padding: "30px" }}>
            {cartItems.map((item) => (
              <ProductCard type="cart" product={item} />
            ))}
          </Col>
          <Col sm={12} md={4} lg={4} css={{ padding: "30px" }}>
            <CartSummary total={cartTotal} quantity={cartQuantity} />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Cart;
