import React, { Suspense } from "react";
import { useFetch } from "./useFetch";
import { fetchData } from "./fetchData";

import "./styleAPI.css";

const apiData = fetchData("https://jsonplaceholder.typicode.com/users");

function API() {
  const data = apiData.read();

  return (
    <div className="API">
      <h1>Fetch like a Pro</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <ul className="card">
          {data?.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </Suspense>
    </div>
  );
}
export default API;
