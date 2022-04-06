import Flex from "../../../components/Flex";
import { Col, Row } from "../../../components/Layout";
import Skeleton from "../../../components/Skeleton";

function ProductSkeleton() {
  return (
    <>
      <Row>
        <Col sm={12} md={4} lg={6} css={{ padding: "30px" }}>
          <Skeleton width="100%" height="500px" />
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
          <Flex direction="column">
            <Skeleton width="100%" height="50px" />
            <Skeleton
              width="120px"
              height="30px"
              css={{ marginTop: "0.6rem" }}
            />
          </Flex>

          <Skeleton width="100%" height="170px" />

          <Flex alignItems="center" justifyContent="end">
            <Skeleton
              width="40px"
              height="20px"
              css={{ marginRight: "10px" }}
            />
            <Skeleton width="50px" height="30px" />
          </Flex>

          <Flex justifyContent="end" css={{ gap: "20px" }}>
            <Skeleton width="50%" height="50px" />
            <Skeleton width="100%" height="50px" />
            <Skeleton width="100%" height="50px" />
          </Flex>
        </Col>
      </Row>
    </>
  );
}

export default ProductSkeleton;
