import React from "react";
import { useEffect, useState } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";

function Vans2() {
  const [vans, setVans] = useState([]);
  useEffect(() => {
    fetch("/api/host/vans")
      .then((res) => res.json())
      .then((data) => setVans(data.vans));
    console.log(vans);
  }, []);

  const vansDetail = vans.map((vans) => {
    return (
      <div className="flex mb-4 items-center justify-center w-[548px]">
        <Link to={`/host/vans/${vans.id}`} key={vans.id}>
          <div
            key={vans.id}
            className=" bg-[#FFF] w-[494px] h-[102px] shrink-0 rounded-md flex items-center"
          >
            <img
              src={vans.imageUrl}
              className="ml-6 rounded-md"
              alt=""
              width="65.877px"
              height="65.877px"
            />
            <div className="ml-4">
              <div className="text-lg font-bold">{vans.name}</div>
              <div className="text-sm text-[#4D4D4D] font-medium text-left">
                ${vans.price}/day
              </div>
            </div>
          </div>
        </Link>
      </div>
    );
  });

  return (
    <>
      <div className="flex-col mx-auto pb-[44px] bg-[#FFF7ED] items-center justify-center   flex w-[548px]  gap-8">
        <h1 className=" text-left mt-14 w-[494.333px] text-[32px] font-bold leading-[33.652px]">
          Your listed vans
        </h1>
        {vans.length > 0 ? (
          <div className="">{vansDetail}</div>
        ) : (
          <h2>LOADING...</h2>
        )}
      </div>
    </>
  );
}

export default Vans2;
