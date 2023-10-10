import React from "react";
import { Nav } from "react-bootstrap";
import { Link, NavLink, Outlet } from "react-router-dom";

function HostLayout() {
  const baseStyle = "hover:underline shrink-0 text-lg font-base leading-[23px]";
  const activeStyle =
    "text-green-400 hover:underline shrink-0 text-lg font-base leading-[23px]";

  return (
    <>
      <div className="flex justify-center">
        <nav className="w-[548px] h-[21px] ">
          <div className="justify-center inline-flex items-center flex-row gap-[29px] ">
            <NavLink
              to="/host"
              end
              className={({ isActive }) => (isActive ? activeStyle : baseStyle)}
            >
              Dashboard
            </NavLink>
            <NavLink
              to="/host/income"
              className={({ isActive }) => (isActive ? activeStyle : baseStyle)}
            >
              Income
            </NavLink>
            <NavLink
              to="/host/vans"
              className={({ isActive }) => (isActive ? activeStyle : baseStyle)}
            >
              Vans
            </NavLink>
            <NavLink
              to="/host/reviews"
              className={({ isActive }) => (isActive ? activeStyle : baseStyle)}
            >
              Reviews
            </NavLink>
          </div>
        </nav>
      </div>
      <Outlet />
    </>
  );
}

export default HostLayout;
