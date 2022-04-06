import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Button from "../../components/Button";
import Flex from "../../components/Flex";
import Header from "../../components/Header";
import { Col, Container, Row } from "../../components/Layout";
import {
  ProductAction,
  ProductImage,
  ProductInfo,
  ProductPrice,
} from "../../components/Product";
import { useToast } from "../../hooks/useToast";
import api from "../../services/products.api";
import { Product } from "../../types/Product.types";
import ProductSkeleton from "./ProductSkeleton";

function ProductPage() {
  const [product, setProduct] = useState<Product>({} as Product);
  const [loading, setLoading] = useState(true);
  const param = useParams();

  const { addToast } = useToast();
  useEffect(() => {
    (async () => {
      try {
        const productInformation = await api.get(`/${param.id}`);

        setProduct(productInformation.data);
      } catch (err) {
        addToast({
          type: "error",
          title: "Something went wrong",
          description: "We couldn't load the product information",
        });
      } finally {
        setLoading(false);
      }
    })();
  }, [param.id, addToast]);

  return (
    <>
      <Container css={{ marginTop: "20px" }}>
        {loading ? (
          <ProductSkeleton />
        ) : (
          <Row>
            <Col sm={12} md={4} lg={6} css={{ padding: "30px" }}>
              <ProductImage src={product.image} alt={product.title} />
            </Col>
            <Col
              sm={12}
              md={8}
              lg={6}
              css={{
                padding: "30px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <ProductInfo
                title={product.title}
                description={product.description}
                category={product.category}
              />
              <Flex justifyContent="end">
                <ProductPrice
                  price={product.price}
                  currency={window.navigator.language as "pt-BR" | "en-US"}
                />
              </Flex>

              <ProductAction product={product} />
            </Col>
          </Row>
        )}
      </Container>
    </>
  );
}

export default ProductPage;
