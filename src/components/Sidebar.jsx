import React from "react";
import { Link, NavLink } from "react-router-dom";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import Logo from "../assets/logo_white_2.png";
import { MdOutlineCancel } from "react-icons/md";

const Sidebar = () => {
  const activeMenu = true;

  return (
    <div className="ml-3 h-screen md:overflow-hiddden overflow-auto md:hover:overflow-auto pb-10">
      {activeMenue && (
        <>
          <div className="flex justify-between items-center">
            <Link to="/" onClick={() => {}} className="ietms-center">
              <Logo />
            </Link>
            <TooltipComponent content="Menu" position="BottomCenter">
              <button
                type="button"
                onClick={() => {}}
                className="text-xl rounded-full p-3 hover:bg-light-gray mt-4 block md:hidden"
              >
                <MdOutlineCancel />
              </button>
            </TooltipComponent>
          </div>
          <div className="mt-10"></div>
        </>
      )}
    </div>
  );
};

export default Sidebar;
