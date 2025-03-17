"use client";
import { useState } from "react";
export default function Home() {
  const [isHidden, setIsHidden] = useState(true);
  const [isToggle, setIsToggle] = useState(true);
  const transition = "transition-all duration-500";
  return (
    <section className="xs:flex-col sm:flex-col md:flex md:flex-row lg:flex lg:flex-row items-center h-96">
      <div
        className={` flex ${transition}  ${
          isToggle ? "items-center" : ""
        } justify-between flex-1 bg-red-600 w-full ${
          isToggle ? "h-12" : "h-36"
        } md:h-full sticky top-0 md:relative`}
      >
        <span>Left Nav</span>
        <span className="md:hidden">
          <button
            className="bg-cyan-500 text-white px-2 py-2 rounded-md"
            onClick={() => setIsToggle(!isToggle)}
          >
            Menu
          </button>
        </span>
      </div>
      <div className=" flex-4 bg-green-500 w-full h-full">
        <h3>Main Content</h3>
        <h6>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore
          officia aperiam numquam itaque eos inventore sit quam a incidunt
          maiores.
        </h6>
        <button
          className="bg-cyan-500 text-white px-2 py-2 rounded-md"
          onClick={() => setIsHidden(!isHidden)}
        >
          View Info
        </button>
      </div>
      <div
        className={`${transition} ${
          isHidden ? "flex-0" : "flex-1"
        } bg-yellow-400 h-16 md:h-full w-full`}
      >
        {isHidden ? "" : "Right Nav"}
      </div>
    </section>
  );
}
