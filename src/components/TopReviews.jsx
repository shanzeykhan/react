import React, { useState } from "react";

const TopReviews = ({topReviews}) => {
  

  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(1);

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? topReviews.frames.length / itemsPerView - 1 : currentIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => {
      console.log({ prev }, prev >= topReviews.frames.length / itemsPerView);

      return currentIndex + 1 >= topReviews.frames.length / itemsPerView
        ? 0
        : currentIndex + 1;
    });
    console.log({ currentIndex });
  };

  return (
    <div className="w-full px-9 ">
      <div className="relative flex items-center justify-center">
        <button
          onClick={prevSlide}
          className=" absolute left-0 z-4 shadow hover:scale-105"
        >
          <img src="CaretLeft.png" alt="leftscroll" />
        </button>


        <div className="overflow-hidden w-full  max-w-300">
            <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{
                transform: `translateX(-${currentIndex * 100}%)`,
                width: `${(topReviews.frames.length * 100) / topReviews.frames.length}%`,
                }}>

        

        {topReviews.frames.map((frames, index) => (
          <div key={index}
            className="flex items-center "
            style={{
                  width: `${100 / topReviews.frames.length}%`,
                  flex: `0 0 ${100 / itemsPerView}%`,
                }}
            >

            <div className=" px-16 text-black-400">
              <p>{topReviews.title}</p>
              <div className=" py-10 text-black-600">
                <p className="text-xl">
                  {/* {topReviews.Ratings} */}
                  &#9733; &#9733; &#9733; &#9733; &#9733;
                </p>
                <p className="mt-2 text-3xl ">{frames.reviewText}</p>
              </div>
              <p>
                {`-- ${frames.Author}`}
                <span className="underline">{`,${frames.productName}`}</span>
              </p>
            </div>
            <img src={frames.imgUrl} alt="" className="pr-16" />
          </div>
        ))}

        </div>
        </div>




        <button
          onClick={nextSlide}
          className=" absolute right-0 z-10 shadow  hover:scale-105"
        >
          <img src="CaretRight.png" alt="rightscroll" />
        </button>
      </div>


      <div className="flex justify-center gap-2 mt-4">
        {Array.from({ length: frames.length / itemsPerView }).map(
          (_, index) => (
            <div
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-3 w-3 rounded-full cursor-pointer ${
                currentIndex === index ? "bg-black" : "bg-gray-400"
              }`}
            ></div>
          )
        )}
      </div>


    </div>
  );
};

export default TopReviews;
