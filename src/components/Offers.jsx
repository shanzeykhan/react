import React from "react";

const Offers = ({offers}) => {
  return (
    <div className="w-full px-19 py-23 flex flex-col lg:flex-row justify-center items-center">
      <div className="w-103 px-14 flex flex-col items-center justify-center">
        <img src="image (18).png" alt="icon" />
        <div className="w-[302px] mt-5 text-center">
          <p className="font-semibold">{offers.heading1}</p>
          <p>{offers.desc1}</p>
        </div>
      </div>

      <div className="w-103 px-14 flex flex-col items-center justify-center">
        <img src="image (19).png" alt="icon" />
        <div className="w-[302px] mt-5 text-center">
          <p className="font-semibold">{offers.heading2}</p>
          <p>{offers.desc2}</p>
        </div>
      </div>

      <div className="w-103 px-14 flex flex-col items-center justify-center">
        <img src="image (20).png" alt="icon" />
        <div className="w-[302px] mt-5 text-center">
          <p className="font-semibold">{offers.heading3}</p>
          <p>{offers.desc3}</p>
        </div>
      </div>
    </div>
  );
};

export default Offers;
