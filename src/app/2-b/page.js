import navitems from "@/config/navitems";

export default function Page() {
    return (
        <div className="text-center p-10">
            <div className="flex flex-col gap-2 mb-10">
                <h1 className="text-3xl">2 - {navitems[1].title}</h1>
                <h5 className="text-xl">b - {navitems[1].items[1].title}</h5>
            </div>
            <div className="text-start">
                <p>
                    Next.js es un framework extremadamente versátil que se puede
                    utilizar en una variedad de aplicaciones y casos de uso como pueden
                    ser sitios web estáticos (blog, porfolios…), aplicaciones web dinámicas
                    (dashboards, paneles interactivos…), tiendas en línea “E-commerce”,
                    aplicaciones chat en vivo, redes sociales, foros de comunidad,
                    plataformas de video y multimedia, aplicaciones multiplataforma,
                    aplicaciones con autenticación y gestión de sesión, y un largo etcétera.
                </p>
            </div>
        </div>
    );
}
