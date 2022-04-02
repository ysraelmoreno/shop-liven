import Flex from "../../../components/Flex";
import Skeleton from "../../../components/Skeleton";

function ProductsSkeleton() {
  return (
    <>
      <Flex direction="column">
        <Skeleton height="300px" />
        <Skeleton height="30px" css={{ marginTop: "10px" }} />
        <Flex css={{ marginTop: "10px" }}>
          <Skeleton height="25px" width="120px" />
          <Skeleton height="25px" width="120px" css={{ marginLeft: "10px" }} />
        </Flex>

        <Skeleton height="130px" css={{ marginTop: "20px" }} />
        <Skeleton height="45px" css={{ marginTop: "30px" }} />
      </Flex>
    </>
  );
}

export default ProductsSkeleton;
