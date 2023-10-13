import React from "react";
import { useOutletContext } from "react-router-dom";

function HostVanInfo() {
  const { vans } = useOutletContext();
  console.log(vans);
  return (
    <>
      <h4>
        Name: <span>{vans[0].name}</span>
      </h4>
      <h4>
        Category: <span>{vans[0].type}</span>
      </h4>
      <h4>
        Description: <span>{vans[0].description}</span>
      </h4>
      <h4>
        Visibility: <span>Public</span>
      </h4>
    </>
  );
}

export default HostVanInfo;
