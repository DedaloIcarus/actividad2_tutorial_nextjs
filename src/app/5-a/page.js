import navitems from "@/config/navitems";

export default function Page() {
  return (
    <div>
      <h1>{navitems[4].title}</h1>
      <h5>{navitems[4].items[0].title}</h5>
    </div>
  );
}
