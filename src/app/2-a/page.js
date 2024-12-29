import navitems from "@/config/navitems";

export default function Page() {
  return (
    <div className="text-center p-10">
      <div className="flex flex-col gap-2 mb-10">
        <h1 className="text-3xl">2 - {navitems[1].title}</h1>
        <h5 className="text-xl">a - {navitems[1].items[0].title}</h5>
      </div>
      <div className="text-start">
        <p>
          NextJS es un framework JavaScript ligero y de código abierto creado
          sobre React, que permite desarrollar aplicaciones y sitios web muy
          rápidos y fáciles de usar.
          <br />
          <br />
          Aunque tiene una curva de aprendizaje, incluso los desarrolladores
          nuevos de front-end pueden aprenderlo rápidamente. Se basa en Babel y
          Node.js, integrándose con React para desarrollar aplicaciones.
          <br />
          <br />
          Un dato curioso es, que React menciona a NextJS entre sus herramientas
          recomendadas, indicando que es una solución para crear sitios web
          renderizados por el servidor. Las aplicaciones de React solo pueden
          renderizar su contenido en el navegador, del lado del cliente.
          <br />
          <br />
          Además, NextJS incluye todas las funciones necesarias para convertirse
          en la plataforma líder para crear sitios web modernos, como
          exportación estática, modo de vista previa, renderizado previo,
          optimización automática y compilación más rápida.
        </p>
      </div>
    </div>
  );
}
