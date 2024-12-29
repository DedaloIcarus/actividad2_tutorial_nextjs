import navitems from "@/config/navitems";

export default function Page() {
    return (
        <div className="text-center p-10">
            <div className="flex flex-col gap-2 mb-10">
                <h1 className="text-3xl">2 - {navitems[1].title}</h1>
                <h5 className="text-xl">d - {navitems[1].items[3].title}</h5>
            </div>
            <div className="text-start">
                <p>
                    Para poder trabajar con Next.js se necesita tener algunos elementos
                    básicos relacionados con el entorno de desarrollo, como son:
                    <br/>
                    <br/>
                    <span className="font-bold underline">Node.js</span>
                    <br/>
                    Next.js requiere Node.js para funcionar, ya que el framework se
                    ejecuta en este entorno.
                    <br/>
                    <br/>
                    <span className="font-bold underline">npm o Yarn</span>
                    <br/>
                    <span className="underline">npm</span> es el gestor de paquetes predeterminado que se utiliza para
                    instalar dependencias y paquetes en proyectos de Node.js.
                    <br/>
                    <span className="underline">Yarn</span> es otro gestor de paquetes similar a npm, pero algunas
                    personas
                    prefieren usarlo por su velocidad y características adicionales.
                    <br/>
                    <br/>
                    <span className="font-bold underline">Un editor de código</span> como puede ser Visual Studio Code, Sublime Text,
                    Atom y un largo etcétera para poder escribir y editar el código.
                </p>
            </div>
        </div>
    );
}
