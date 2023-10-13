import React from "react";
import { useOutletContext } from "react-router-dom";

function HostVanPricing() {
  const { vans } = useOutletContext();

  return (
    <>
      <h1>Host Vans Info</h1>
      <h3>Pricing: {vans[0].price}</h3>
      <h3>Visibility: Public</h3>
    </>
  );
}

export default HostVanPricing;
