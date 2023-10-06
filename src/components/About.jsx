import React from "react";
import img2 from "./image 54.png";

function About() {
  return (
    <>
      <div className="relative ">
        <div className="items-center justify-center inline-block">
          <div className=" w-[548.151px] h-[233.213px] flex flex-col  ">
            <img
              className="bg-cover  bg-no-repeat shrink-0 "
              src={img2}
              alt=""
            />
          </div>
          <div className=" w-[548.151px] h-[600.51px] flex bg-[#FFF7ED] flex-col items-center justify-center">
            <div className=" ">
              <p
                className=" text-left
            mb-8 mt-10 w-[494.333px] h-[76px] text-[#161616] text-[32px] font-bold leading-[38px] "
              >
                Don’t squeeze in a sedan when you could relax in a van.
              </p>
              <p className="mb-10 text-left w-[494px] h-[154px] text-[#161616] text-[16px] font-medium leading-[22px] ">
                Our mission is to enliven your road trip with the perfect travel
                van rental. Our vans are recertified before each trip to ensure
                your travel plans can go off without a hitch. <br />
                (Hitch costs extra 😉)
                <br />
                <br />
                Our team is full of vanlife enthusiasts who know firsthand the
                magic of touring the world on 4 wheels.
              </p>
            </div>
            <div className="bg-[#FFCC8D] w-[494px] h-[198px] rounded-[5px] ">
              <p className="w-[420px] mt-8 mx-[37px] mb-[25px] text-[#161616] text-start text-2xl font-bold leading-[30px] ">
                Your destination is waiting. Your van is ready.
              </p>
              <button
                className="text-[#FFF] text-[15.946px] font-bold
            leading-[23.919px] px-[22px] py-[12px] 
            rounded-lg bg-[#161616] mr-[282px] ml-[38px]"
              >
                Explore our vans
              </button>
            </div>
          </div>
          <div
            className=" absolute flex flex-col justify-center items-center
         bg-[#252525]  h-[74.748px] w-[548.151px] py-[25.681px] px-[106.284px] "
          >
            <footer
              className=" flex-col  text-[#AAAAAA] 
          text-center text-sm font-normal leading-[22.923px]"
            >
              Ⓒ 2022 #VANLIFE
            </footer>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
