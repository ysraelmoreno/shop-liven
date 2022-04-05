import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../../hooks/useCart";
import { useToast } from "../../../hooks/useToast";
import { Product } from "../../../types/Product.types";
import Button from "../../Button";
import Flex from "../../Flex";
import InputStepper from "../../InputStepper";

interface ProductActionProps {
  product: Product;
}

function ProductAction({ product }: ProductActionProps): JSX.Element {
  const [itemQuantity, setItemQuantity] = useState(1);
  const navigate = useNavigate();

  const { handleAddCartItem } = useCart();
  const { addToast } = useToast();
  const handlePurchase = useCallback(() => {
    handleAddCartItem({ ...product, quantity: itemQuantity });

    navigate("/cart");
  }, [handleAddCartItem, itemQuantity, navigate, product]);

  const handleAddToCart = useCallback(() => {
    const newCartItem = {
      ...product,
      quantity: itemQuantity,
    };
    handleAddCartItem(newCartItem);

    addToast({
      title: "Product added to cart",
      description: "The product was added to your cart",
      type: "success",
    });
  }, [handleAddCartItem, itemQuantity, addToast, product]);

  return (
    <>
      <Flex
        css={{
          gap: "1.3rem",
          marginTop: "1.5rem",
        }}
      >
        <InputStepper
          onIncreaseValue={(value) => {
            setItemQuantity(value);
          }}
          onDecreaseValue={(value) => setItemQuantity(value)}
          onChange={(event) => setItemQuantity(Number(event.target.value))}
        />
        <Button variant="alternative" onClick={handleAddToCart}>
          Add to Cart
        </Button>
        <Button onClick={handlePurchase}>Purchase</Button>
      </Flex>
    </>
  );
}

export default ProductAction;
