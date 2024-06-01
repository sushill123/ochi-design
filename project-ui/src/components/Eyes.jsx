import React, { useEffect, useState } from "react";

const Eyes = () => {
  const [rotate, setRotate] = useState(0);

  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      let mouseX = e.clientX;
      let mouseY = e.clientY;

      let deltaX = mouseX - window.innerWidth / 2;
      let deltaY = mouseY - window.innerHeight / 2;

      var angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      setRotate(angle - 180);
    });
  });

  return (
    <div id="eyes" className="w-full h-screen overflow-hidden ">
      <div data-scroll data-scroll-speed='-.8' className='relative h-full w-full bg-cover bg-center  bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg")]'>
        <div className="flex gap-10 absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]">
          <div className="w-[15vw] h-[15vw] rounded-full bg-zinc-100 flex items-center justify-center">
            <div
              id="eye_one"
              className="w-2/3 h-2/3 rounded-full bg-zinc-900 relative"
            >
              <div
                style={{
                  transform: `translate(-50%, -50%) rotate(${rotate}deg) `,
                }}
                className="line w-full h-10 absolute top-1/2 left-1/2  -translate-x-[50%] -translate-y-[50%] "
              >
                <div
                  id="eye_ball_one"
                  className="w-10 h-10 rounded-full bg-zinc-400"
                ></div>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center w-[15vw] h-[15vw] rounded-full bg-zinc-100">
            <div
              id="eye_two"
              className="w-2/3 h-2/3 rounded-full bg-zinc-900 relative"
            >
              <div
                style={{
                  transform: `translate(-50%, -50%) rotate(${rotate}deg) `,
                }}
                className="line w-full h-10 absolute top-1/2 left-1/2  -translate-x-[50%] -translate-y-[50%] "
              >
                <div
                  id="eye_ball_one"
                  className="w-10 h-10 rounded-full bg-zinc-400"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Eyes;
