import Flex from "../../Flex";
import { ProductCategory, ProductDescription, ProductTitle } from "./styles";

interface ProductInfoProps {
  title: string;
  category: string;
  description: string;
}

function ProductInfo({ title, category, description }: ProductInfoProps) {
  return (
    <>
      <Flex direction="column" css={{ gap: "10px" }}>
        <ProductTitle>{title}</ProductTitle>
        <ProductCategory>{category}</ProductCategory>
        <ProductDescription>{description}</ProductDescription>
      </Flex>
    </>
  );
}

export default ProductInfo;
