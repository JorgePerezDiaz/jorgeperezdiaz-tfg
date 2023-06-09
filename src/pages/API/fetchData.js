import { startTransition } from "react";

export function fetchData(url) {
  const getSuspender = (promise) => {
    let status = "pending";
    let response;

    const suspender = promise.then(
      (res) => {
        status = "success";
        response = res;
      },
      (err) => {
        status = "error";
        response = err;
      }
    );

    const read = () => {
      switch (status) {
        case "pending":
          throw suspender;
        case "error":
          throw response;
        default:
          return response;
      }
    };

    return { read };
  };

  const promise = fetch(url)
    .then((response) => response.json())
    .then((json) => json)
    .catch((error) => {
      console.error("A ocurrido un error:", error);
      throw error;
    });

  const suspender = getSuspender(promise);

  startTransition(() => {
    // Realiza cualquier operación adicional aquí dentro de startTransition, si es necesario.
  });

  return suspender;
}
