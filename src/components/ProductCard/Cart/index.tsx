import { useCallback, useState } from "react";
import { ICartItem, useCart } from "../../../hooks/useCart";
import { CSS } from "../../../styles/Theme.provider";
import formatPrice from "../../../utils/formatPrice";
import Flex from "../../Flex";
import InputStepper from "../../InputStepper";
import { Col, Row } from "../../Layout";
import ProductCurrency from "../../Product/ProductCurrency";
import {
  ImageContainer,
  ProductCardPrice,
  ProductCartCardContainer,
  ProductCategory,
  ProductTitle,
  ProductUnitPrice,
} from "./styles";

interface ProductCartCardProps {
  product: ICartItem;
  css?: CSS;
}

function ProductCartCard({ product, css }: ProductCartCardProps) {
  const { handleQuantity } = useCart();

  const handleIncreaseQuantity = useCallback(
    (quantity) => {
      handleQuantity({ id: product.id, quantity });
    },
    [handleQuantity, product.id]
  );
  return (
    <ProductCartCardContainer
      direction="row"
      alignItems="center"
      css={{
        ...css,

        "& + div": {
          marginTop: "20px",
        },
      }}
    >
      <Row>
        <Col sm={10} md={10} lg={10}>
          <Flex direction="row" alignItems="center">
            <ImageContainer src={product.image} alt={product.title} />
            <Flex direction="column" css={{ marginLeft: "5px" }}>
              <Flex direction="column">
                <ProductTitle>{product.title}</ProductTitle>
                <ProductCategory>{product.category}</ProductCategory>
              </Flex>

              <Flex
                direction="column"
                justifyContent="center"
                css={{
                  marginTop: "0.7rem",
                }}
              >
                <Flex alignItems="center">
                  <ProductCurrency currency="pt-BR" />
                  <ProductCardPrice>
                    {formatPrice(product.price * product.quantity)}
                  </ProductCardPrice>
                </Flex>
                <ProductUnitPrice>
                  Unit price: {formatPrice(product.price)}
                </ProductUnitPrice>
              </Flex>
            </Flex>
          </Flex>
        </Col>
        <Col sm={2} md={2} lg={2}>
          <Flex
            justifyContent="center"
            direction="column"
            css={{ height: "100%" }}
          >
            <Flex
              direction="column"
              alignItems="center"
              css={{ span: { color: "$textSecondary", marginTop: "5px" } }}
            >
              <InputStepper
                onIncreaseValue={(value) => handleIncreaseQuantity(value)}
                onDecreaseValue={(value) => handleIncreaseQuantity(value)}
                value={product.quantity}
              />
              <span>Quantity</span>
            </Flex>
          </Flex>
        </Col>
      </Row>
    </ProductCartCardContainer>
  );
}

export default ProductCartCard;
