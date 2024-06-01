import React from "react";

const Featured = () => {
  return (
    <div className="w-full py-20">
      <div className="w-full px-20 border-b-[1px] border-zinc-700 pb-5">
        <h1 className="text-[5vw] font-medium">Featured Projects</h1>
      </div>
      <div className="px-20">
        <div className="cards w-full flex flex-col md:flex-row  gap-10 mt-10">
          <div className="card_container w-full md:w-1/2 h-[70vh] relative">
            <h1 className="hidden md:block absolute left-full z-[9] text-8xl leading-none tracking-tighter -translate-x-[50%] top-1/2 -translate-y-1/2 text-[#b9d35b]">
              FYDE
            </h1>
            <div className="card w-full h-full bg-blue-200 rounded-xl overflow-hidden">
              <img
                className="w-full h-full bg-cover"
                src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-1326x1101.png"
                alt=""
              />
            </div>
          </div>
          <div className="card_container w-full md:w-1/2 h-[70vh]">
            <div className="card w-full h-full bg-blue-200 rounded-xl overflow-hidden">
              <img
                src="https://ochi.design/wp-content/uploads/2022/12/PB-Front-4-1326x1101.png"
                className="w-full h-full bg-cover"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
