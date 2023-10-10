import React from "react";
import { Link, NavLink } from "react-router-dom";

function Header() {
  const active = "p-2 text-lg font-bold underline text=[#161616]";

  return (
    <>
      <header className="mt-9 w-[548.151px] bg-[#FFF7ED] gap-[160px] inline-flex px-[26px] py-[36px] justify-center items-center">
        <div className=" flex items-center">
          <Link
            className="text-black text-[25.353px]  font-black leading-[40.271px]"
            to="/"
          >
            #VANLIFE
          </Link>
        </div>
        <div className=" flex flex-row gap-3 font-semibold">
          <div>
            <NavLink
              className={({ isActive }) => (isActive ? active : "p-2 text-lg")}
              to="/host"
            >
              Host
            </NavLink>
          </div>
          <div>
            <NavLink
              className={({ isActive }) => (isActive ? active : "p-2 text-lg")}
              to="/"
            >
              Home
            </NavLink>
          </div>
          <div>
            <NavLink
              className={({ isActive }) => (isActive ? active : "p-2 text-lg")}
              to="/about"
            >
              About
            </NavLink>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
