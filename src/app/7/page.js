import navitems from "@/config/navitems";

export default function Page() {
  return (
    <div className="text-center p-10">
      <div className="flex flex-col gap-2 mb-10">
        <h1 className="text-3xl">7 - {navitems[6].title}</h1>
      </div>
      <div className="text-start">
        <p>
          Este tutorial proporciona una introducción detallada al uso del
          framework Next.js.
          <br />
          El tutorial, sirve como una guía para la instalación y configuración
          de un proyecto Next.js, el manejo de rutas, variables de entorno y la
          estructura de directorios.
          <br />
          Además, se muestran comandos que ayudan en el seguimiento de dicho
          tutorial con la instalación y las configuraciones.
          <br />
          <br />
          Los objetivos que se han conseguido son crear una aplicación básica en
          Next.js, comprender su arquitectura y aprovechar las características
          avanzadas que aporta el framework para la realización de la
          aplicación.
        </p>
      </div>
    </div>
  );
}
