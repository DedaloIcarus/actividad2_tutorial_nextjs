import navitems from "@/config/navitems";

export default function Page() {
  return (
    <div className="text-center p-10">
      <div className="flex flex-col gap-2 mb-10">
        <h1 className="text-3xl">6 - {navitems[5].title}</h1>
        <h5 className="text-xl">b - {navitems[5].items[1].title}</h5>
      </div>
      <div className="text-start">
        <p>
          Existe la posibilidad de poder personalizar una aplicación y adaptarla
          a las necesidades específicas de cada uno modificando los directorios
          y ficheros.
          <br />
          Como ya es sabido, en el directorio app se encuentran las páginas que
          componen la aplicación, por lo que editando estos archivos
          realizaremos cambios en las páginas.
          <br />
          También existe la posibilidad de personalizar la configuración del
          framework modificando el fichero de configuración (next.config.js). Si
          lo que se busca es colocar y/o editar componentes, se deberá modificar
          el directorio components.
          <br />
          Otro tipo de ficheros que se pueden editar y que actúan con el
          framework, son los archivos CSS que aportan estilo a nuestra
          aplicación.
        </p>
      </div>
    </div>
  );
}
