import navitems from "@/config/navitems";

export default function Page() {
  return (
      <div>
          <h1>{navitems[1].title}</h1>
          <h5>{navitems[1].items[1].title}</h5>
      </div>
  );
}
