import navitems from "@/config/navitems";

export default function Page() {
    return (
        <div className="text-center p-10">
            <div className="flex flex-col gap-2 mb-10">
                <h1 className="text-3xl">3 - {navitems[2].title}</h1>
                <h5 className="text-xl">e - {navitems[2].items[4].title}</h5>
            </div>
            <div className="text-start">
                <p>
                    Las variables de entorno son esenciales para configurar parámetros
                    específicos de la aplicación según el entorno en el que se esté
                    ejecutando (desarrollo, producción, etc.). Next.js facilita el uso de
                    estas variables de entorno y permite gestionarlas de manera segura
                    tanto para el servidor como para el cliente.
                    <br/>
                    <br/>
                    Next.js permite definir variables de entorno en los siguientes archivos:
                    <br/>
                    <span className="font-bold">.env.local:</span> Este archivo es específico para el entorno local. Las
                    variables definidas aquí no se deben incluir en el sistema de control de
                    versiones (por ejemplo, Git).
                    <br/>
                    <span className="font-bold">.env.development:</span> Este archivo contiene variables que se utilizan
                    durante el desarrollo.
                    <br/>
                    <span className="font-bold">.env.production:</span> Este archivo es utilizado cuando la aplicación se
                    ejecuta en producción.
                    <br/>
                    <span className="font-bold">.env.test:</span> Este archivo es utilizado durante las pruebas
                    <br/>
                    <br/>
                    <span className="font-bold underline">Nota:</span> Solo las variables que comienzan con NEXT_PUBLIC_ son
                    accesibles en el cliente y estarán disponibles en el navegador.
                </p>
            </div>
        </div>
    );
}
