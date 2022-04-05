import ProductCurrency from "../ProductCurrency";
import { ProductPriceText } from "./styles";

interface ProductPriceProps {
  price: number;
  currency?: "pt-BR" | "en-US";
}

function ProductPrice({ price, currency = "pt-BR" }: ProductPriceProps) {
  return (
    <>
      <ProductPriceText>
        <ProductCurrency currency={currency} />
        {price?.toFixed(2).replace(".", ",")}
      </ProductPriceText>
    </>
  );
}

export default ProductPrice;
