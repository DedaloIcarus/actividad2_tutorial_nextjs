import navitems from "@/config/navitems";

export default function Page() {
  return (
    <div className="text-center p-10">
      <div className="flex flex-col gap-2 mb-10">
        <h1 className="text-3xl">3 - {navitems[2].title}</h1>
        <h5 className="text-xl">a - {navitems[2].items[0].title}</h5>
      </div>
      <div className="text-start">
        <p>
          Next.js necesita ser instalado antes de poder usarlo en un proyecto.
          La instalación es bastante sencilla y se puede hacer en unos pocos
          pasos.
        </p>
      </div>
    </div>
  );
}
