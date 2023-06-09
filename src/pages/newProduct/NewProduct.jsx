import { useState } from "react";
import { NewProductContainer, NewProductForm, FormItem, NewProductButton } from "./NewProduct.styled";


function NewProduct() {
  
  const [producto, setProduct] = useState({
    nombre: "",
    marca: "",
    precio: 0,
    stock: 0
  });

  const creaProducto = async (producto) => {
    await fetch("http://localhost:5000/productos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(producto)
    });
  };

  const handleChange = (e) => {
    setProduct({ ...producto, [e.target.name]: e.target.value });
  };

  return (
    <NewProductContainer>
      <h2 className="newProductTitle">Nuevo Producto</h2>
      <NewProductForm>
        <FormItem>
          <label>Nombre</label>
          <input 
            type="text"
            value={producto.name}
            name="nombre"
            onChange={handleChange}
            placeholder="IPhone"
          />
        </FormItem>
        <FormItem>
          <label>Marca</label>
          <input
            type="text"
            name="marca"
            value={producto.marca}
            onChange={handleChange}
            placeholder="Apple"
          />
        </FormItem>
        <FormItem>
          <label>Precio</label>
          <input
            name="precio"
            type="number"
            value={producto.precio}
            onChange={handleChange}
            placeholder="1233"
          />
        </FormItem>
        <FormItem>
          <label>Stock</label>
          <input
            type="number"
            name="stock"
            value={producto.stock}
            onChange={handleChange}
            placeholder="12"
          />

        </FormItem>
        <NewProductButton onClick={async (e) =>  await creaProducto(producto,e)}>
          Crear
        </NewProductButton>
      </NewProductForm>
    </NewProductContainer>
  );
}

export default NewProduct;
