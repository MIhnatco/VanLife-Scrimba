import { useOutletContext } from "react-router-dom";

function HostVanInfo() {
  const { currentVan } = useOutletContext(); //shared context

  return (
    <section className="p-8">
      <h4 className="font-bold text-xl my-4">
        Name: <span className="font-light">{currentVan.name}</span>
      </h4>

      <h4 className="font-bold text-xl my-4">
        Category: <span className="font-light">{currentVan.type}</span>
      </h4>
      <h4 className="font-bold text-xl my-4">
        Description:{" "}
        <span className="font-light">{currentVan.description}</span>
      </h4>
      <h4 className="font-bold text-xl my-4">
        Visibility: <span className="font-light">Public</span>
      </h4>
    </section>
  );
}

export default HostVanInfo;
