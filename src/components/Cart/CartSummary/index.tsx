import { useCart } from "../../../hooks/useCart";
import formatPrice from "../../../utils/formatPrice";
import Button from "../../Button";
import Flex from "../../Flex";
import { ProductCurrency } from "../../Product";
import { CartSummaryContainer } from "./styles";

function CartSummary() {
  const { cartQuantity, cartTotal, handleClearCart } = useCart();
  return (
    <CartSummaryContainer direction="column" justifyContent="spaceBetween">
      <Flex direction="column" css={{ gap: "10px" }}>
        <Flex
          alignItems="center"
          justifyContent="spaceBetween"
          css={{ span: { color: "$textSecondary" } }}
        >
          <span>Total quantity of items</span>
          <h4>{cartQuantity}</h4>
        </Flex>

        <Flex
          alignItems="center"
          justifyContent="spaceBetween"
          css={{ span: { color: "$textSecondary" }, h2: { fontSize: "2rem" } }}
        >
          <span>Total</span>
          <h4>
            <ProductCurrency currency="pt-BR" /> {formatPrice(cartTotal)}
          </h4>
        </Flex>
      </Flex>

      <Button>Purchase</Button>
      <Button
        onClick={handleClearCart}
        variant="ghost"
        css={{ fontSize: "0.8rem", height: "fit-content", padding: "0" }}
      >
        Clear cart
      </Button>
    </CartSummaryContainer>
  );
}

export default CartSummary;
