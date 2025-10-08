import React from "react";

const Header = () => {
  return (
    <header>
      <div
        id="announc-bar"
        className="w-full h-8 px-7 py-1 bg-black text-white flex justify-between"
      >
        <div className="w-65"></div>
        <div id="ab-text" className="flex justify-center gap-1">
          <p>Get earlt access on launches and offers.</p>
          <button className="flex justify-center items-center">
          <a href="#" className="underline">
            Sign Up For Texts{" "}
          </a>
          <img className=" opacity-100" src="/ArrowRight.png" alt="icon" />
          </button>
        </div>
        <div className="flex justify-center gap-2">
          <img src="/Group.svg" alt="country-flag" />
          <p>USD</p>
        </div>
      </div>
      <nav
        className="w-full h-15 px-16 text-black flex justify-between items-center border-b-2 border-gray-200"
      >
        <div>
          <a className="px-3 py-4 hover:border-b-2 hover:border-black" href="###">
            Women
          </a>
          <a className="px-3 py-4 hover:border-b-2 hover:border-black" href="###">
            Men
          </a>
          <a className="px-3 py-4 hover:border-b-2 hover:border-black" href="###">
            About
          </a>
          <a className="px-3 py-4 hover:border-b-2 hover:border-black" href="###">
            Everworld Stories
          </a>
        </div>
        <img src="/Logo.png" alt="logo" />
        <div className="h-10 w-30 flex justify-between">
          <button className="hover:scale-110" ><img src="/Frame 1.png" alt="icon" /></button>
          <button className="hover:scale-110"><img src="/Frame 2.png" alt="icon" /></button>
          <button className="hover:scale-110"><img src="/Frame 3.png" alt="icon" /></button>
        </div>
      </nav>
      <nav
        className="h-15 text-black flex justify-center items-center"
      >
        <a className="px-3 py-4 hover:underline" href="#">
          Holiday Gifting
        </a>
        <a className="px-3 py-4 hover:underline" href="#">
          New Arrivals
        </a>
        <a className="px-3 py-4 hover:underline" href="#">
          Best-Sellers
        </a>
        <a className="px-3 py-4 hover:underline" href="#">
          Clothing
        </a>
        <a className="px-3 py-4 hover:underline" href="#">
          Tops & Sweaters
        </a>
        <a className="px-3 py-4 hover:underline" href="#">
          Pants & Jeans
        </a>
        <a className="px-3 py-4 hover:underline" href="#">
          Outerwear
        </a>
        <a className="px-3 py-4 hover:underline" href="#">
          Shoes & Bags
        </a>
        <a className="px-3 py-4 text-red-600 hover:underline" href="#">
          Sale
        </a>
      </nav>
    </header>
  );
};

export default Header;
