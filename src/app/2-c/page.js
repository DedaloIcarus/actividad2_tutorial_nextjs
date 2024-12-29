import navitems from "@/config/navitems";

export default function Page() {
  return (
    <div className="text-center p-10">
      <div className="flex flex-col gap-2 mb-10">
        <h1 className="text-3xl">2 - {navitems[1].title}</h1>
        <h5 className="text-xl">c - {navitems[1].items[2].title}</h5>
      </div>
      <div className="text-start">
        <p>
          Principalmente trabaja con JavaScript y TypeScript que es una
          evolución a JavaScript pero que agrega características de tipado
          estático, lo que permite definir tipos de datos para las variables,
          funciones y objetos en el código, lo que ayuda a detectar errores en
          tiempo de desarrollo.
          <br />
          <br />
          A su vez, Next.js permite trabajar tanto con CSS tradicional como
          CSSin-JS que incorpora soluciones como styled-components para escribir
          CSS dentro de los archivos JavaScript.
          <br />
          <br />
          Si bien es cierto que Next.js no usa HTML de manera directa, sí
          permite trabajar con una estructura similar a HTML a través de JSX
          para escribir elementos HTML dentro de funciones de JavaScript, pero
          con una sintaxis especial que es procesada por React para generar el
          DOM.
          <br />
          <br />
          Por otro lado, se encuentra Node.js que es el entorno de ejecución
          JavaScript en el servidor que permite a Next.js hacer cosas como el
          renderizado del lado del servidor (SSR) y la generación de sitios
          estáticos (SSG).
          <br />
          <br />
          Por último, cabe mencionar que Next.js maneja datos a menudo en
          formato JSON al interactuar con APIs o cuando se realizan consultas en
          el lado del servidor (SSR) o en rutas de API.
        </p>
      </div>
    </div>
  );
}
