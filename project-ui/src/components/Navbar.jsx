import React from "react";

const Navbar = () => {
  // ARRAY OF NAV LINKS
  const arrLinks = ["Services", "About", "Insights", "Work"];

  return (
    <div>
      {/* NAVBAR */}
      <div
        id="nav"
        className='fixed z-[999] px-10 py-5 font-["Inter"] w-full flex justify-between items-center'
      >
        <div id="logo">
          <span>design by</span>{" "}
          <h3 className="font-bold text-2xl">Sushill.</h3>
        </div>
        <div id="links" className="hidden md:flex gap-5">
          {arrLinks.map((item, index) => (
            <a href="/" key={index} className="font-medium hover:text-blue-600">
              {item}
            </a>
          ))}
        </div>
        <div id="contact" className="font-medium hover:text-red-600">
          <a href="">Contact</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
