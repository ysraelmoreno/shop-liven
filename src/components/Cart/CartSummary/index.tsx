import formatPrice from "../../../utils/formatPrice";
import Button from "../../Button";
import Flex from "../../Flex";
import { ProductCurrency } from "../../Product";
import { CartSummaryContainer } from "./styles";

interface CartSummaryProps {
  total: number;
  quantity: number;
}
function CartSummary({ total, quantity }: CartSummaryProps) {
  return (
    <CartSummaryContainer direction="column" justifyContent="spaceBetween">
      <Flex direction="column" css={{ gap: "10px" }}>
        <Flex
          alignItems="center"
          justifyContent="spaceBetween"
          css={{ span: { color: "$textSecondary" } }}
        >
          <span>Total quantity of items</span>
          <h4>{quantity}</h4>
        </Flex>

        <Flex
          alignItems="center"
          justifyContent="spaceBetween"
          css={{ span: { color: "$textSecondary" }, h2: { fontSize: "2rem" } }}
        >
          <span>Total</span>
          <h4>
            <ProductCurrency currency="pt-BR" /> {formatPrice(total)}
          </h4>
        </Flex>
      </Flex>

      <Button>Purchase</Button>
    </CartSummaryContainer>
  );
}

export default CartSummary;
