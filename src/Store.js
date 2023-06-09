import { createContext, useState } from "react";
import { products } from "./data";

const initialProductsState = products;

export const ProductContext = createContext();

function Store({ children }) {
  const [productState, setProductState] = useState(initialProductsState);

  return (
    <ProductContext.Provider value={[productState, setProductState]}>
      {children}
    </ProductContext.Provider>
  );
}

export default Store;
