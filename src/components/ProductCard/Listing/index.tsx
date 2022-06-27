import { Product } from "../../../types/Product.types";
import Flex from "../../Flex";
import {
  ProductCardCategory,
  ProductCardContainer,
  ProductCardDescription,
  ProductCardRating,
  ProductCardTitle,
} from "./styles";
import { CSS } from "../../../styles/Theme.provider";
import { AiFillStar } from "react-icons/ai";
import Button from "../../Button";

interface ProductListCardProps {
  product: Product;
  css?: CSS;
}

function ProductListingCard({ product, css }: ProductListCardProps) {
  return (
    <>
      <ProductCardContainer direction="column" css={css}>
        <Flex>
          <img src={product.image} alt={product.title} />
        </Flex>
        <Flex direction="column">
          <ProductCardTitle>{product.title}</ProductCardTitle>
          <Flex css={{ gap: "10px" }}>
            <ProductCardCategory>
              {product.category.toUpperCase()}
            </ProductCardCategory>
            <ProductCardRating>
              <AiFillStar />
              {product.rating.rate}
            </ProductCardRating>
          </Flex>
          <ProductCardDescription>{product.description}</ProductCardDescription>
        </Flex>
        <Flex css={{ marginTop: "30px", gap: "10px" }}>
          <Button>Learn more</Button>
        </Flex>
      </ProductCardContainer>
    </>
  );
}

export default ProductListingCard;
