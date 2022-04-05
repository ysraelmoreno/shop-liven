import { BiCart } from "react-icons/bi";
import { useCart } from "../../hooks/useCart";
import CartQuantityBadge from "./CartQuantityBadge";
import { CartItemContainer } from "./styles";

function CartItem() {
  const { cartQuantity } = useCart();
  return (
    <CartItemContainer to="/cart">
      {cartQuantity > 0 && <CartQuantityBadge quantity={cartQuantity} />}
      <BiCart />
    </CartItemContainer>
  );
}

export default CartItem;
