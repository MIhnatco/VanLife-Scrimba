import { useOutletContext } from "react-router-dom";

function HostVanPricing() {
    const {currentVan} = useOutletContext()
  return <h1>Host Van Pricing component </h1>;
}

export default HostVanPricing;
