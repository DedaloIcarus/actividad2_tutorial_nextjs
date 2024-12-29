import navitems from "@/config/navitems";

export default function Page() {
  return (
    <div className="text-center p-10">
      <div className="flex flex-col gap-2 mb-10">
        <h1 className="text-3xl">6 - {navitems[5].title}</h1>
        <h5 className="text-xl">a - {navitems[5].items[0].title}</h5>
      </div>
      <div className="text-start">
        <p>
          Next.js actúa tanto en ficheros, secciones, como sobre todo en
          páginas.
          <br />
          <br />
          Las páginas se crean automáticamente a partir de los archivos que se
          colocan dentro del directorio app. Cada archivo existente en este
          directorio, es una página.
          <br />
          <br />
          Next.js también gestiona tanto los ficheros estáticos (en el
          directorio public) como los componentes y módulos JavaScript
          (directorios components y lib respectivamente).
          <br />
          <br />
          Se pueden crear y organizar componentes de interfaz (como encabezados
          y pies de página) A través del layout
        </p>
      </div>
    </div>
  );
}
