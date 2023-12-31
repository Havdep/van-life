import React from "react";
import bg from "./image 53.png";

function Home() {
  return (
    <>
      <div className=" relative h-[386.696px] " id="parent">
        <div className="items-center justify-center inline-block h-[386.696px]">
          <div className="justify-center items-center flex flex-col ">
            <img className="  w-[548.151px] h-[386.696px] " src={bg} alt="" />
          </div>
          <div className="absolute top-0 left-0  w-full h-full flex flex-col   justify-center items-center text-white">
            <p className="text-[36px] font-Inter font-extrabold leading-[42px] text-left font-sans w-[494.333px]">
              You got the travel plans, we got the travel vans.
            </p>
            <div className="w-[494.333px] mt-5 flex flex-col gap-14">
              <p className="text-left h-12 w-[494.333px] font-sans text-base font-medium leading-6 text-white">
                Add adventure to your life by joining the #vanlife movement.
                Rent the perfect van to make your perfect road trip.
              </p>
              <button
                className=" w-[207.897px ] px-[143px] py-[9px] 
            bg-[#FF8C38] text-center text-[15px] font-bold leading-[31.662px]  rounded-md"
              >
                Find your van
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
