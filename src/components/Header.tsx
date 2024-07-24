import logo from "../assets/folders.png";
import React from "react";

interface HeaderProps {
  handleToggle: () => void;
}
export const Header: React.FC<HeaderProps> = ({ handleToggle }) => {
  return (
    <>
      <div className="mx-auto w-[90%] max-w-[1200px] flex items-center">
        <div
          className="sticky top-0 z-[1] translate-x-[35%] translate-y-[-10%] border-blue-200 border-4 hover:scale-[110%] transition duration-150 ease-in-out cursor-pointer"
          onClick={handleToggle}
        >
          <h1 className="text-2xl md:text-5xl lg:text-6xl bg-blue-600 p-5 text-white font-arsenal font-regular">
            Recursive components
          </h1>
        </div>
        <div className="flex-grow-0">
          <img
            className="w-full opacity-[0.3] backdrop-blur-3xl"
            src={logo}
            alt=""
          />
        </div>
      </div>
    </>
  );
};
