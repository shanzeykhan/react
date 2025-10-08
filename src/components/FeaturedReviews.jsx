import React, { useState, useEffect } from "react";

const FeaturedReviews = ({ reviews }) => {

  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(1);
  const [featuredPro, setFeaturedPro] = useState([]);

  useEffect(()=>{
    const productData = async ()=>{
      try{
      const response = await fetch("https://api.escuelajs.co/api/v1/products?offset=0&limit=15") ;
      const data = await response.json();
      setFeaturedPro(data);
    }
    catch (err) {
        console.error("Error fetching Product data:", err);
      }
    };
    productData()

  },[] );





  useEffect(() => {
    const updateItemsPerView = () => {
      if (window.innerWidth >= 1024) {
        setItemsPerView(5);
      } else if (window.innerWidth >= 768) {
        setItemsPerView(3);
      } else {
        setItemsPerView(1);
      }
    };

    updateItemsPerView();
    window.addEventListener("resize", updateItemsPerView);
    return () => window.removeEventListener("resize", updateItemsPerView);
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? featuredPro.length / itemsPerView - 1 : currentIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => {
      console.log({ prev }, prev >= featuredPro.length / itemsPerView);

      return currentIndex + 1 >= featuredPro.length / itemsPerView
        ? 0
        : currentIndex + 1;
    });
    console.log({ currentIndex });
  };

  return (
    <div className="w-full px-11">
      <div className="px-14 pt-10 text-center mb-6">
        <p className="text-4xl mb-6">{reviews.title}</p>
        <p className="text-2xl text-gray-500">{reviews.desc}</p>
        <p className="text-2xl text-gray-500 underline cursor-pointer">
          Add Your Photo
        </p>
      </div>

      <div className="relative flex items-center justify-center">
        <button
          onClick={prevSlide}
          className="absolute left-2 z-20 bg-white rounded-full p-2 shadow hover:scale-110"
        >
          <img src="CaretLeft.png" alt="caret left" />
        </button>

        <div className="overflow-hidden w-full max-w-[1200px]">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
              width: `${(featuredPro.length * 100) / featuredPro.length}%`,
            }}
          >
            {featuredPro.map((item) => (
              <div
                key={item.id}
                className="relative flex-shrink-0 px-2"
                style={{
                  width: `${100 / featuredPro.length}%`,
                  flex: `0 0 ${100 / itemsPerView}%`,
                }}
              >
                <img
                  src={item.images[0]}
                  alt={`slide`}
                  className="w-full h-[225px] object-cover rounded-xl"
                />
                <button className="absolute right-3 top-3 z-10">
                  <img src="Icon Button.png" alt="cartbutton" />
                </button>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={nextSlide}
          className="absolute right-2 z-20 bg-white rounded-full p-2 shadow hover:scale-110"
        >
          <img src="CaretRight.png" alt="caret right" />
        </button>
      </div>

      <div className="flex justify-center gap-2 mt-4">
        {Array.from({ length: featuredPro.length / itemsPerView }).map(
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

export default FeaturedReviews;
