import navitems from "@/config/navitems";

export default function Page() {
  return (
    <div className="text-center p-10">
      <div className="flex flex-col gap-2 mb-10">
        <h1 className="text-3xl">3 - {navitems[2].title}</h1>
        <h5 className="text-xl">f - {navitems[2].items[5].title}</h5>
      </div>
      <div className="text-start">
        <p>
          Next.js no requiere una base de datos por sí mismo para funcionar.
          <br />
          Es un framework para construir aplicaciones web que facilita la
          gestión de datos desde el backend con rutas API, pero los
          desarrolladores pueden integrar bases de datos para leer y escribir
          datos utilizando componentes del servidor y bibliotecas de terceros.
        </p>
      </div>
    </div>
  );
}
