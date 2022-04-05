import { useCallback, useEffect, useState } from "react";
import { useCart } from "../../../hooks/useCart";
import { Product } from "../../../types/Product.types";
import Button from "../../Button";
import Flex from "../../Flex";
import InputStepper from "../../InputStepper";

interface ProductActionProps {
  product: Product;
}

function ProductAction({ product }: ProductActionProps): JSX.Element {
  const [itemQuantity, setItemQuantity] = useState(1);

  const { handleAddCartItem } = useCart();

  const handleAddToCart = useCallback(() => {
    const newCartItem = {
      ...product,
      quantity: itemQuantity,
    };
    handleAddCartItem(newCartItem);
  }, [handleAddCartItem, itemQuantity, product]);

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
        <Button>Purchase</Button>
      </Flex>
    </>
  );
}

export default ProductAction;
