import React from "react";

const Cards = () => {
  return (
    <div className="w-full h-screen bg-zinc-100 flex flex-col md:flex-row gap-5 items-center px-32">
      <div className="card_container  w-full md:w-1/2 h-[50vh] ">
        <div className="card relative w-full h-full bg-[#004D43] rounded-xl flex items-center justify-center">
          <img
            src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
            className="w-32"
            alt=""
          />
          <button className="absolute bottom-10 left-10  px-5 py-1 rounded-full border-[#b9d35b] text-white border-2">
            &copy;2024
          </button>
        </div>
      </div>
      <div className="card_container flex flex-col md:flex-row gap-5  w-full md:w-1/2 h-[50vh]">
        <div className=" relative card w-full md:w-1/2 h-full bg-[#2b534e] rounded-xl flex flex-col justify-center items-center">
          <img
            src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg"
            className="w-32"
            alt=""
          />
          <button className="text-[10px] absolute bottom-10 left-10  px-5 py-1 rounded-full border-[#ffffff] text-white border-2">
            Rating 5 on Clutch
          </button>
        </div>
        <div className=" relative card w-full md:w-1/2 h-full bg-[#0c1c1a] rounded-xl flex justify-center items-center">
          <img
            src="https://ochi.design/wp-content/uploads/2022/04/logo003.png"
            className="w-32"
            alt=""
          />
          <button className="text-[10px] absolute bottom-10 left-10  px-5 py-1 rounded-full border-[#dfe7c2] text-white border-2">
            Business Bootcamp Allumini
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
