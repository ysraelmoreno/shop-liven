import { Product } from "../../types/Product.types";
import { CSS } from "../../styles/Theme.provider";
import ProductListingCard from "./Listing";
import ProductCartCard from "./Cart";
import { ICartItem } from "../../hooks/useCart";

type ProductCardType = "listing" | "cart";
interface ProductCardProps {
  product: Product | ICartItem;
  type?: ProductCardType;
  css?: CSS;
}

function ProductCard({ product, type = "listing", css }: ProductCardProps) {
  const component: Record<ProductCardType, JSX.Element> = {
    listing: <ProductListingCard product={product as Product} css={css} />,
    cart: <ProductCartCard product={product as ICartItem} css={css} />,
  };

  return component[type];
}

export default ProductCard;
