import navitems from "@/config/navitems";

export default function Page() {
  return (
    <div className="text-center p-10">
      <div className="flex flex-col gap-2 mb-10">
        <h1 className="text-3xl">3 - {navitems[2].title}</h1>
        <h5 className="text-xl">d - {navitems[2].items[4].title}</h5>
      </div>
      <div className="text-start">
        <p>
          Next.js usa el sistema de archivos para definir las rutas de la
          aplicación.
          <br />
          Los archivos page.js dentro de la carpeta{" "}
          <span className="font-bold">app</span> se convierten automáticamente
          en rutas accesibles en la aplicación.
          <br />
          Por ejemplo, para la página de inicio, el archivo{" "}
          <span className="font-bold">app/page.js</span> corresponde a la{" "}
          <span className="font-bold">ruta /</span> (la raíz de la aplicación).
          <br />
          Otro ejemplo de una página estática es app/about/page.js, que
          corresponde a la ruta /about.
          <br />
          Para las páginas dinámicas, se crean con archivos page.js dentro de
          directorios que contienen parámetros entre{" "}
          <span className="font-bold">corchetes</span>, como por ejemplo:{" "}
          <span className="font-bold">app/[id]/page.js</span>
        </p>
      </div>
    </div>
  );
}
