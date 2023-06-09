import React, { Suspense } from "react";
import { fetchData } from "../API/fetchData";
import { DataGrid } from "@material-ui/data-grid";
import { Link } from "react-router-dom";
import { DeleteOutline } from "@material-ui/icons";

import { ButtonWrapper, ProductsContainer, NewProductButton } from "./Products.styled";

const apiDataProductos = await fetchData("http://127.0.0.1:5000/productos");


function APIProductos() {
  const dataproducto = apiDataProductos.read();

  const borrarProducto = async (productId) => {
    try {
      // Realiza la solicitud de eliminación al servidor
      await fetch(`http://127.0.0.1:5000/productos/${productId}`, {
        method: "DELETE",
      });

      // Actualiza la lista de productos después de borrar el producto
      const productosActualizados = productos.filter(
        (producto) => producto.id !== productId
      );
      setProductos(productosActualizados);

      console.log("Producto borrado con éxito");
      window.location.reload();
    } catch (error) {
      console.error("Error al borrar el producto", error);
    }
  };

  console.log(dataproducto)

  const columnas = [
    {
      field: "id",
      headerName: "ID",
      width: 90
    },
    {
      field: "nombre",
      headerName: "Nombre",
      width: 170
    },
    {
      field: "marca",
      headerName: "Marca",
      width: 130
    },
    {
      field: "precio",
      headerName: "Precio",
      width: 130
    },
    {
      field: "stock",
      headerName: "Stock",
      width: 150
    },
    {
      field: "action",
      headerName: "Accion",
      width: 150,
      renderCell: (params) => {
        const productId = params.row.id;
        console.log(productId)
        const actualizarUrl = `/productos/${productId}?id=${productId}`;
        return (
        <ButtonWrapper>
          <Link to={actualizarUrl}>
          <button className="editBtn">Actualizar</button>
          </Link>
          <DeleteOutline
              className="deleteBtn"
              onClick={() => borrarProducto(productId)}
            />
        </ButtonWrapper>
        )
      }
    }
  ];

  return (
    <ProductsContainer>
      <Suspense>
        <DataGrid
          rows={dataproducto}
          columns={columnas}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
          disableSelectionOnClick
        />
        <ButtonWrapper>
            <Link to="/newProduct">
              <button>Crear</button>
            </Link>
        </ButtonWrapper>
      </Suspense>
    </ProductsContainer>
  );
}
export default APIProductos;

