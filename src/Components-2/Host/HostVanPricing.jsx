import React from "react";
import { useOutletContext } from "react-router-dom";

function HostVanPricing() {
  const { vans } = useOutletContext();

  return (
    <>
      <div className="mt-5">
        <h1 className="text-2xl  mb-3">Host Vans Info</h1>
        <h3 className="text-3xl font-semibold mb-2">
          Pricing: ${vans[0].price}/day
        </h3>
        <h3 className="mt-4 text-xl mb-2">Visibility: Public</h3>
      </div>
    </>
  );
}

export default HostVanPricing;
