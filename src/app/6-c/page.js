import navitems from "@/config/navitems";

export default function Page() {
  return (
      <div>
          <h1>{navitems[5].title}</h1>
          <h5>{navitems[5].items[2].title}</h5>
      </div>
  );
}