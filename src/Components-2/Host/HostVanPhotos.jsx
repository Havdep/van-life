import React from "react";
import { useOutletContext } from "react-router-dom";

function HostVanPhotos() {
  const { vans } = useOutletContext();

  return (
    <>
      <h1>Host Vans Photos!</h1>
      <h3>
        <img src={vans[0].imageUrl} width="80px" height="80px" alt="" />
      </h3>
      <h3>Visibility: Public</h3>
    </>
  );
}

export default HostVanPhotos;
