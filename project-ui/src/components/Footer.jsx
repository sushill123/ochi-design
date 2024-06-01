import React from "react";

const Footer = () => {
  return (
    <div className="flex gap-5 w-full h-screen bg-zinc-200 p-20">
      <div className="w-full md:w-1/2 flex flex-row md:flex-col  md:justify-between h-full">
        <div className="heading">
          <h1 className="text-[5vw] md:text-[8vw] uppercase md:-mb-10">Eye -</h1>
          <h1 className="text-[5vw]  md:text-[8vw] uppercase md:-mb-10">Opening</h1>
        </div>
        <h3 className="hidden md:block">Ochi.</h3>
      </div>

      <div className="w-1/2 flex flex-col gap-5 md:justify-between h-full">
        <h1 className="text-[6vw] font-semibold">Presentations</h1>
        <div className="mt-10">
          <a
            className="block font-regular text-[5vw] md:text-[1.5vw] border-b-2 border-black w-fit"
            href="#"
          >
            Home
          </a>
          <a
            className="block font-regular text-[5vw] md:text-[1.5vw] border-b-2 border-black w-fit"
            href=""
          >
            Facebook
          </a>
          <a
            className="block font-regular text-[5vw] md:text-[1.5vw] border-b-2 border-black w-fit"
            href=""
          >
            Twitter
          </a>
          <a
            className="block font-regular text-[5vw] md:text-[1.5vw] border-b-2 border-black w-fit"
            href=""
          >
            Linkldn
          </a>
        </div>
        <div className="mt-[10vw] md:mt-[1vw] flex flex-col md:flex-row gap-4 md:gap-1 md:justify-between">
          <p>
            {" "}
            &copy; 2024 Ochi Design.{" "}
            <span className="border-b-2 border-zinc-400 w-fit">
              Legal Terms
            </span>
          </p>
          <p>
            design by{" "}
            <span className="border-b-2 border-zinc-400 font-bold">
              Sushill
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
