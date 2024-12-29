import navitems from "@/config/navitems";

export default function Page() {
  return (
      <div>
          <h1>{navitems[2].title}</h1>
          <h5>{navitems[2].items[5].title}</h5>
      </div>
  );
}
