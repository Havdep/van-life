import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function VansDetails() {
  const params = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`/api/vans/${params.id}`)
      .then((res) => res.json())
      .then((data) => setData(data.vans));
  }, [params.id]);

  return (
    <div className="flex justify-center items-center min-h-screen">
      {data ? (
        <div className=" p-6 bg-[#FFF7ED]  h-[1000px] w-[548.151px]">
          <p className="flex justify-start linetext-[15.946px] text-[#201F1D] font-medium leading-[22.923px] mb-[40px]">
            <u>Back to vans </u>
          </p>
          <div className="mb-8 flex items-center justify-center">
            <img
              src={data.imageUrl}
              alt={data.name}
              className="w-[497.323px] rounded-[5px]"
            />
          </div>
          <div className="mb-4 mt-[50px] justify-start ">
            <div className="flex justify-start mb-2">
              <div className="items-center bg-[#E17654] flex justify-center rounded-[5px] p-2 w-[85.711px] h-[33.886px]">
                <p className="first-letter:uppercase flex-col text-[#FFEAD0] text-center  font-semibold text-base">
                  {data.type}
                </p>
              </div>
            </div>
            <div className="flex justify-start">
              <h2 className="text-[32px] mt-[20px] font-bold text-center">
                {data.name}
              </h2>
            </div>
            <p className="text-xl flex justify-start mt-2 text-center font-bold">
              ${data.price}/day
            </p>
          </div>
          <p className="text-base leading-6 w-[494.333px] font-medium text-start text-[#161616]">
            {data.description}
          </p>
          <div className="flex justify-center w-[494.333px] bg-[#FF8C38] mt-6">
            <button className=" text-white font-bold text-lg p-3 rounded-lg">
              Rent this van
            </button>
          </div>
        </div>
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
}

export default VansDetails;
