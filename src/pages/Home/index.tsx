import { useEffect, useState } from "react";
import Header from "../../components/Header";
import { Col, Container, Row } from "../../components/Layout";
import api from "../../services/products.api";

import { useToast } from "../../hooks/useToast";
import { AxiosResponse } from "axios";
import { Product } from "../../types/Product.types";
import ProductCard from "../../components/ProductCard";
import Flex from "../../components/Flex";

import { Link } from "react-router-dom";
import ProductsSkeleton from "./ProductsSkeleton";

function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  const { addToast } = useToast();

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const products: AxiosResponse<Product[]> = await api.get("/", {
          timeout: 4000,
        });

        setProducts(products.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        addToast({
          title: "Erro",
          description: "Ocorreu um erro ao carregar os produtos",
          type: "error",
        });
      }
    })();
  }, [addToast]);
  return (
    <>
      <Header />
      <Container>
        <Row>
          <Col sm={12} md={12} lg={12}>
            <Flex
              css={{
                marginTop: "1.3rem",
                gap: "1.3rem",
              }}
              flexWrap="wrap"
            >
              {loading
                ? [...Array(10)].map((_, index) => (
                    <ProductsSkeleton key={index} />
                  ))
                : products.map((product) => (
                    <>
                      <Link to="product">
                        <ProductCard product={product} />
                      </Link>
                    </>
                  ))}
            </Flex>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Home;
