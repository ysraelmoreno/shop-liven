import { CartQuantityBadgeContainer } from "./styles";
import { CSS } from "../../../styles/Theme.provider";

interface CartQuantityBadgeProps {
  quantity: number;
  css?: CSS;
}

function CartQuantityBadge({ quantity, css }: CartQuantityBadgeProps) {
  return (
    <CartQuantityBadgeContainer css={css}>
      {quantity}
    </CartQuantityBadgeContainer>
  );
}

export default CartQuantityBadge;
