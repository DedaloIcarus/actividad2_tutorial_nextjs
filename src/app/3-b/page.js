import navitems from "@/config/navitems";
import Image from "next/image";
import getImagesBasePath from "@/lib/images-loader";

export default function Page() {
  return (
    <div className="text-center p-10">
      <div className="flex flex-col gap-2 mb-10">
        <h1 className="text-3xl">3 - {navitems[2].title}</h1>
        <h5 className="text-xl">b - {navitems[2].items[1].title}</h5>
      </div>
      <div className="text-start">
        <p>
          1. Asegurarse de tener instalado Node.js y npm, para ello se puede
          abrir una terminal cmd, powershell, Bash, etc. y escribir los
          siguientes comandos:
          <br />
        </p>
        <div className="my-4 flex flex-col gap-4">
          <div className="mx-auto flex flex-col gap-4 w-[150px]">
            <div className="rounded-md border px-4 py-2 font-mono text-sm shadow-sm">
              node -v
            </div>
            <div className="rounded-md border px-4 py-2 font-mono text-sm shadow-sm">
              npm -v
            </div>
          </div>
          <Image
            className="mx-auto rounded-md"
            src={`${getImagesBasePath()}/cmd_node_npm.png`}
            width={250}
            height={250}
            alt="cmd_npm"
          />
        </div>
        <p>
          Si están instalados, nos devolverá por pantalla el número de la
          versión que tenemos instalada: Si no los tenemos instalados, podremos
          descárgalos desde su página web oficial:
          <a
            href="https://nodejs.org/"
            target="_blank"
            className="ms-1 underline"
          >
            https://nodejs.org/
          </a>
          <br />
          <br />
          2. Crear una app Next.js Para ello, abrimos terminal y escribimos el
          siguiente comando desde Next.js:
        </p>
        <div className="my-4 flex flex-col gap-4">
          <div className="mx-auto w-[300px]">
            <div className="rounded-md border px-4 py-2 font-mono text-sm shadow-sm">
              npx create-next-app@latest
            </div>
          </div>
          <Image
            className="mx-auto rounded-md"
            src={`${getImagesBasePath()}/cmd_create-next-app.png`}
            width={500}
            height={500}
            alt="cmd_create-next-app"
          />
        </div>
        <p>
          <br />
          3. Iniciar el servidor de desarrollo Necesitamos iniciar el servidor
          de desarrollo y así poder ver la aplicación en el navegador. En una
          terminal, escribimos el siguiente comando:
        </p>
        <div className="my-4 mx-auto w-[150px]">
          <div className="rounded-md border px-4 py-2 font-mono text-sm shadow-sm">
            npm run dev
          </div>
        </div>
        <p>Con esto se iniciará el servidor en http://localhost:3000</p>
      </div>
    </div>
  );
}
