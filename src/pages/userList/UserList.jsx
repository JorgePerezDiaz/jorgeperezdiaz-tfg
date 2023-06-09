import React, { Suspense } from "react";
import { fetchData } from "../API/fetchData";
import { DataGrid } from "@material-ui/data-grid";
import { UserListContainer } from "./UserList.styled";

const apiData = fetchData("https://jsonplaceholder.typicode.com/users");

function APIUsers() {
  const data = apiData.read();

  console.log(data)

  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 90
    },
    {
      field: "name",
      headerName: "Nombre",
      width: 170
    },
    {
      field: "username",
      headerName: "Usuario",
      width: 130
    },
    {
      field: "email",
      headerName: "Email",
      width: 240
    },
    {
      field: "phone",
      headerName: "Telefono",
      width: 220
    },
    {
      field: "website",
      headerName: "Pagina Web",
      width: 200
    }
  ];

  return (
    <UserListContainer>
      <Suspense>
        <DataGrid
          rows={data}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
          disableSelectionOnClick
        />
      </Suspense>
    </UserListContainer>
  );
}
export default APIUsers;
