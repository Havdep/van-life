import React from "react";
import { useOutletContext } from "react-router-dom";

function HostVanInfo() {
  const { vans } = useOutletContext();

  return (
    <>
      <div className="mt-5 text-left flex-col">
        <h4 className="text-lg mb-2">
          <span className="font-bold underline">Name:</span>{" "}
          <span className="font">{vans[0].name}</span>
        </h4>
        <h4 className="text-lg mb-2">
          <span className="font-bold underline">Category:</span>{" "}
          <span className="font">{vans[0].type}</span>
        </h4>
        <h4 className="text-lg mb-2">
          <span className="font-bold underline">Description:</span>{" "}
          <span className="font">{vans[0].description}</span>
        </h4>
        <h4 className="text-lg mb-2">
          <span className="font-bold underline">Visibility:</span>{" "}
          <span className="font">Public</span>
        </h4>
      </div>
    </>
  );
}

export default HostVanInfo;
