import { ProductImageContainer } from "./styles";

interface ProductImageProps {
  src: string;
  alt: string;
}

function ProductImage({ src, alt }: ProductImageProps) {
  return (
    <>
      <ProductImageContainer>
        <img src={src} alt={alt} />
      </ProductImageContainer>
    </>
  );
}

export default ProductImage;
