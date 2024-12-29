import navitems from "@/config/navitems";

export default function Page() {
    return (
        <div className="text-center p-10">
            <div className="flex flex-col gap-2 mb-10">
                <h1 className="text-3xl">3 - {navitems[2].title}</h1>
                <h5 className="text-xl">c - {navitems[2].items[2].title}</h5>
            </div>
            <div className="text-start">
                <p>
                    La versión actual de Next.js (15.1.3) requiere Node.js 18.18.
                    <br/>
                    En cuanto a React, requiere React 19 ya que se ha vuelto estable, y esta versión incluye nuevas
                    características, que Next.js utiliza para mejorar el rendimiento.
                    <br/>
                    Sin embargo, siempre se recomienda instalar la última versión estable de Next.js para aprovechar las
                    características más recientes.
                </p>
            </div>
        </div>
    );
}
