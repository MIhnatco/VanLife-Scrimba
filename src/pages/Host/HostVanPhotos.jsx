import { useOutletContext } from "react-router-dom";

function HostVanPhotos() {
  const { currentVan } = useOutletContext();

  return (
    <section className="p-8">
      <img src={currentVan.imageUrl} className="w-40 rounded-md" />
    </section>
  );
}

export default HostVanPhotos;
