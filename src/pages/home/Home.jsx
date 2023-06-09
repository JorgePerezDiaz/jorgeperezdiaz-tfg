import React from "react";

import "./Home.css";

function Home() {
  return (
    <div className="title">
      <header className="App-header">
        <h1>¿Qué es React y JavaScript?</h1>
      </header>
      <main>
        <section>
          <h2>React</h2>
          <p>
            React es una biblioteca de JavaScript utilizada para construir interfaces de usuario interactivas. Fue desarrollado por Facebook y se ha vuelto muy popular en la comunidad de desarrollo web. React utiliza un enfoque basado en componentes, lo que significa que puedes construir la interfaz de tu aplicación dividiéndola en componentes reutilizables y manejables.
          </p>
          <p>
            Algunas características principales de React son:
          </p>
          <ul>
            <li>Virtual DOM: React utiliza un DOM virtual para mejorar el rendimiento al minimizar las actualizaciones en el DOM real.</li>
            <li>Componentes reutilizables: Puedes crear componentes independientes y reutilizables que encapsulan la lógica y la interfaz de usuario.</li>
            <li>Estado y ciclo de vida: React permite administrar el estado de los componentes y manejar su ciclo de vida.</li>
          </ul>
        </section>
        <section>
          <h2>JavaScript</h2>
          <p>
            JavaScript es un lenguaje de programación ampliamente utilizado en el desarrollo web. Es un lenguaje de programación de alto nivel, interpretado por el navegador web, que te permite agregar interactividad y dinamismo a tus sitios web.
          </p>
          <p>
            Algunas características principales de JavaScript son:
          </p>
          <ul>
            <li>Interactividad: JavaScript permite a los usuarios interactuar con los elementos de la página y realizar acciones dinámicas.</li>
            <li>Manipulación del DOM: Puedes utilizar JavaScript para acceder y manipular los elementos del DOM, cambiar estilos, agregar o eliminar contenido, etc.</li>
            <li>Gestión de eventos: JavaScript permite manejar eventos como clics de botón, envío de formularios y desplazamiento de la página.</li>
          </ul>
        </section>
      </main>
      <footer>
        <p>¡Espero que esta breve introducción te haya dado una idea de qué es React y JavaScript!</p>
      </footer>
    </div>
  );
}

export default Home;
