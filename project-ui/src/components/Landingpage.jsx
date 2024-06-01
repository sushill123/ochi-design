import { motion } from "framer-motion";
import React from "react";

const Landingpage = () => {
  return (
    <div
      data-scroll
      data-scroll-speed="-.3"
      data-scroll-section
      className="py-10 px-2 md:px-10 md:py-20 md:pt-20 md:w-full md:h-screen"
    >
      <div className="textstructure md:mt-12 md:px-1 md:px-15 mt-20">
        {["We Create", "👁️Eye Opening", "Presentations"].map((item, index) => {
          return (
            <div key={index}
              className="text-[8vw] leading-[9vw]   md:masker uppercase md:text-[9vw] md:leading-[8.5vw] md:tracking-tighter font-bold"
            >
              <h1>{item}</h1>
            </div>
          );
        })}
      </div>
      {/* header section text after heading */}
      <div className="border-t-2 border-zinc-600 mt-5 flex flex-col md:flex-row font-medium text-[3vw] md:text-[1.5vw] gap-5 md:justify-between w-full items-center py-3 px-12">
        {[
          "For Public and Private Companies",
          "From first pitch to frist IPO",
        ].map((item, index) => {
          return (
            <p key={index} className="">
              {item}
            </p>
          );
        })}
        <div className="">
          <p className="px-4 py-2 border-[1px] border-slate-400 rounded-xl font-medium shadow hover:shadow-xl">
            Start the Project Today
          </p>
        </div>
      </div>
    </div>
  );
};

export default Landingpage;
