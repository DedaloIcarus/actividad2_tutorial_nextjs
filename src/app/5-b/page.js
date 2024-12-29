import navitems from "@/config/navitems";

export default function Page() {
  return (
    <div className="text-center p-10">
      <div className="flex flex-col gap-2 mb-10">
        <h1 className="text-3xl">5 - {navitems[4].title}</h1>
        <h5 className="text-xl">b - {navitems[4].items[1].title}</h5>
      </div>
      <div className="text-start">
        <p>
          Existe la posibilidad de poder personalizar una aplicación y adaptarla
          a las necesidades específicas de cada uno modificando los directorios
          y ficheros.
          <br />
          Como ya es sabido, en el directorio{" "}
          <span className="font-bold">app</span> se encuentran las páginas que
          componen la aplicación, por lo que editando estos archivos
          realizaremos cambios en las páginas.
          <br />
          También existe la posibilidad de personalizar la configuración del
          framework modificando el fichero de configuración{" "}
          <span className="font-bold">(next.config.js)</span>. Si lo que se
          busca es colocar y/o editar componentes, se deberá modificar el
          directorio <span className="font-bold">components</span>.
          <br />
          Otro tipo de ficheros que se pueden editar y que actúan con el
          framework, son los archivos <span className="font-bold">CSS</span> que
          aportan estilo a nuestra aplicación.
        </p>
      </div>
    </div>
  );
}
