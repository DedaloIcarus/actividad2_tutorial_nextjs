import navitems from "@/config/navitems";

export default function Page() {
  return (
    <div className="text-center p-10">
      <div className="flex flex-col gap-2 mb-10">
        <h1 className="text-3xl">5 - {navitems[4].title}</h1>
        <h5 className="text-xl">c - {navitems[4].items[2].title}</h5>
      </div>
      <div className="text-start">
        <p>
          Para referenciar ficheros creados desde otras aplicaciones, una de las
          mejores formas consiste en empaquetar esos componentes como un paquete
          NPM para posteriormente instalarlo en la aplicación que uno quiera.
        </p>
      </div>
    </div>
  );
}
