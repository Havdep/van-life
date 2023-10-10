import React from "react";
import { useParams } from "react-router-dom";

function HostVanDetails() {
  const paramID = useParams(null);
  return (
    <>
      <h1>Host Van Details</h1>
      {/* <h2>`The van id is: ${paramID}`</h2> */}
    </>
  );
}

export default HostVanDetails;
