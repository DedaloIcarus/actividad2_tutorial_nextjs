import navitems from "@/config/navitems";

export default function Page() {
    return (
        <div className="text-center p-10">
            <div className="flex flex-col gap-2 mb-10">
                <h1 className="text-3xl">4 - {navitems[3].title}</h1>
                <h5 className="text-xl">a - {navitems[3].items[0].title}</h5>
            </div>
            <div className="text-start">
                <p>
                    Al crear una aplicación en Next.js con create-next-app, todo ya está configurado y listo. Para crear
                    una aplicación simple de &quot;Hola Mundo&quot;, simplemente puedes editar el archivo app/page.js.
                    <br/>
                    Con un editor de código (como Visual Studio Code, por ejemplo), abre el archivo y modifícalo para
                    agregar el texto &quot;Hola Mundo&quot; de la siguiente manera:
                    <br/>
                    <br/>
                </p>
            </div>
            <div className="text-start rounded-md border px-4 py-2 font-mono text-sm shadow-sm mx-auto w-[300px]">
<pre>
<code>
{`// app/page.js
export default function Home() {
    return (
        <div>
            <h1>"Hola Mundo"</h1>
        </div>
    );
}`}
</code>
</pre>
            </div>
                <div className="text-start">
                    <p>
                        <br/>
                        Una vez editado el archivo, guarda los cambios e inicia el servidor de desarrollo para
                        visualizarlo
                        en el navegador. Para ello, abre una terminal y escribe el siguiente comando:

                        npm run dev
                        Por último, abre un navegador y escribe lo siguiente en la barra de direcciones:
                        Local: http://localhost:3000

                        Con todo esto, ya podrás ver &quot;Hola Mundo&quot; en el navegador.
                    </p>
                </div>
            </div>
            );
            }
