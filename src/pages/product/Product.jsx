import { useState } from "react";
import {
  ProductContainer,
  TitleContainer,
  ProductBottomContainer,
  ProductForm,
  ProductFormLeft,
  ProductFormRight,
  ProductButton
} from "./Product.styled";

function Product() {
  const [product, setProduct] = useState({
    nombre: "",
    marca: "",
    precio: 0,
    stock: 0
  });

  const updateProducto = async () => {
    const productID = window.location.search.replace("?id=", "")
    await fetch(`http://localhost:5000/productos/${productID}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(product)
    });
    console.log(productID)
    console.log(product)
  };
 

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  return (
    <ProductContainer>
      <TitleContainer>
        <h1>Producto</h1>
      </TitleContainer>
      <ProductBottomContainer>
        <ProductForm>
          <ProductFormLeft>
            <label>Nombre</label>
            <input
              type="text"
              name="nombre"
              value={product.nombre}
              onChange={handleChange}
              placeholder="IPhone"
            />
            <label>Marca</label>
            <input
              type="text"
              name="marca"
              value={product.marca}
              onChange={handleChange}
              placeholder="Apple"
            />
            <label>Precio</label>
            <input
              name="precio"
              type="number"
              value={product.precio}
              onChange={handleChange}
              placeholder="1233"
            />
            <label>Stock</label>
            <input
              type="number"
              name="stock"
              value={product.stock}
              onChange={handleChange}
              placeholder="12"
            />
          </ProductFormLeft>
          <ProductFormRight>
            <ProductButton onClick={() => updateProducto()}>
              Actualizar
            </ProductButton>
          </ProductFormRight>
        </ProductForm>
      </ProductBottomContainer>
    </ProductContainer>
  );
}

export default Product;