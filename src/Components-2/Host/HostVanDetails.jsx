// import React, { useState, useEffect } from "react";
import { useEffect, useState } from "react";
import { Link, NavLink, Outlet, useParams } from "react-router-dom";

function HostVanDetails() {
  const params = useParams();
  const [vans, setVans] = useState(null);
  useEffect(() => {
    fetch(`/api/host/vans/${params.id}`)
      .then((res) => res.json())
      .then((data) => setVans(data.vans));
  }, [params.id]);

  const baseStyle =
    " hover:underline text-[16.149px] text-[#4D4D4D] pr-[22px] py-2";
  const activeStyle =
    "text-[16.149px] font-semibold text-[#4D4D4D] pr-[22px] py-2 hover:underline ";

  const vanDetails =
    vans &&
    vans.map((van) => {
      return (
        <div key={van.id} className=" flex items-center">
          <div>
            <img
              className="ml-6 mt-[20px] rounded-[6px] shrink-0 "
              src={van.imageUrl}
              alt=""
              width="160.15px"
              height="158px"
            />
          </div>
          <div className="ml-4">
            <p className="pl-[11px] mb-4 first-letter:uppercase rounded-[4.072px] text-left bg-[#E17654] text-[#FFEAD0] w-[69.796px] h-[27.594px]">
              {van.type}
            </p>
            <p className="text-left w-[264.667px] text-[26.058px] font-bold leading-[27.404px] text-base">
              {van.name}
            </p>
            <p className="text-left text-base w-[264.667px] font-bold leading-[35.404px]">
              ${van.price}/day
            </p>
          </div>
        </div>
      );
    });
  console.log(vans);

  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <NavLink to=".." relative="path">
          {/* relative path se back jana...rather than parent par */}
          <div className="pl-6 text-left h-[121px] pt-[61px] pb-[37px] bg-[#FFF7ED] w-[548.151px]">
            ← Back to all vans
          </div>
        </NavLink>
        {vans ? (
          <div className="bg-[#FFF7ED] w-[548.151px]">
            <div className="ml-6 bg-[#FFFFFF] mb-[45px] w-[496px] h-[499px]">
              {vanDetails}

              <nav className="ml-6 w-[59.214px] h-[18.841px] text-center items-center flex gap-22 mt-6">
                <NavLink
                  end
                  to="."
                  // relative="path"
                  className={({ isActive }) =>
                    isActive ? activeStyle : baseStyle
                  }
                >
                  Details
                </NavLink>
                <NavLink
                  to="pricing"
                  className={({ isActive }) =>
                    isActive ? activeStyle : baseStyle
                  }
                >
                  Pricing
                </NavLink>
                <NavLink
                  to="photos"
                  className={({ isActive }) =>
                    isActive ? activeStyle : baseStyle
                  }
                >
                  Photos
                </NavLink>
              </nav>
              <div className="bg-cyan-100 mt-3">
                <Outlet context={{ vans }} />
              </div>
            </div>
          </div>
        ) : (
          <div>LOADING...</div>
        )}
      </div>
    </>
  );
}

export default HostVanDetails;
