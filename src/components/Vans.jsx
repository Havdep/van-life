import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Vans() {
  const [vans, setVans] = useState([]);
  useEffect(() => {
    fetch("/api/vans")
      .then((res) => res.json())
      .then((data) => setVans(data.vans));
  }, []);

  const VansItem = vans.map((van) => (
    <div key={van.id} className="inline-block mb-5 mr-5">
      <Link to={`/vans/${van.id}`}>
        <img
          src={van.imageUrl}
          alt=""
          className="rounded-[5px] w-[229.227px] h-[229.227px] shrink-0"
        />
        <div className="flex flex-col mt-2">
          <h3 className="text-[#161616] text-xl font-semibold leading-6">
            {van.name}
          </h3>
          <p className="text-[#161616] text-base font-semibold">
            ${van.price} /day
          </p>
        </div>
        <div className="mx-auto h-[33px] w-[86px] flex justify-center items-center rounded-[5px] bg-[#E17654]">
          <i className="flex first-letter:uppercase  text-[#FFEAD0]">
            {van.type}
          </i>
        </div>
      </Link>
    </div>
  ));

  return (
    <div className="flex justify-center items-center flex-col">
      <div className="bg-[#FFF7ED] w-[548.151px] p-6 ">
        <div className="flex flex-col w-full text-left">
          <div className="text-[32px] text-[#161616] font-bold leading-[33.652px]">
            Explore our van options
          </div>
          <div className="flex gap-4 justify-center mt-4">
            <button className="bg-[#FFEAD0] rounded-[5px] py-3 px-6">
              Simple
            </button>
            <button className="bg-[#FFEAD0] rounded-[5px] py-3 px-6">
              Luxury
            </button>
            <button className="bg-[#FFEAD0] rounded-[5px] py-3 px-6">
              Rugged
            </button>
            <span className="mt-[6px] text-[#4D4D4D] text-base font-medium underline">
              Clear Filters
            </span>
          </div>
        </div>
      </div>
      <div className="w-[548.151px] bg-[#FFF7ED] p-6">{VansItem}</div>
    </div>
  );
}

export default Vans;
