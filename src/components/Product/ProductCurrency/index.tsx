import { useMemo } from "react";
import { ProductCurrencyContainer } from "./styles";

interface ProductCurrencyProps {
  currency: "pt-BR" | "en-US";
}

function ProductCurrency({ currency }: ProductCurrencyProps) {
  const getCurrencySymbol = useMemo(() => {
    const currencyMap = {
      "pt-BR": "R$",
      "en-US": "$",
    };

    return currencyMap[currency];
  }, [currency]);

  return (
    <>
      <ProductCurrencyContainer>{getCurrencySymbol}</ProductCurrencyContainer>
    </>
  );
}

export default ProductCurrency;
