import React from "react";
import { useOutletContext } from "react-router-dom";

function HostVanPhotos() {
  const { vans } = useOutletContext();

  return (
    <>
      <div className="mt-5">
        <h1 className="text-2xl font-bold mb-3">Host Vans Photos!</h1>
        <h3 className="mb-2">
          <img
            src={vans[0].imageUrl}
            width="80px"
            height="80px"
            alt=""
            className="ml-4 mr-3"
          />
          Visibility: Public
        </h3>
      </div>
    </>
  );
}

export default HostVanPhotos;
