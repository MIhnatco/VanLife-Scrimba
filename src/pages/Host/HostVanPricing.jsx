import { useOutletContext } from "react-router-dom";

function HostVanPricing() {
  const { currentVan } = useOutletContext();

  return (
    <section className="p-8">
      <h4 className="font-bold text-xl my-4">
        ${currentVan.price} <span className="font-medium">/day</span>
      </h4>
    </section>
  );
}

export default HostVanPricing;
