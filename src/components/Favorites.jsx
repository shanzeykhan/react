import React,{useState, useEffect} from "react";


const Favorites = ({favorites}) => {
  



  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(1);
  const [proList, setProList] = useState([]);

 


    useEffect(()=>{
      const productData= async ()=>{
        try{
        const response =await fetch("https://api.escuelajs.co/api/v1/products?offset=0&limit=15");
        const result= await response.json();
        console.log(result);
        setProList(result);
        }
        catch (err) {
        console.error("Error fetching Product data:", err);
      }
      };

      productData();
    
  },[]);


  useEffect(() => {
    const updateItemsPerView = () => {
      if (window.innerWidth >= 1024) {
        setItemsPerView(4);
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
      prev === 0 ? (proList.length - itemsPerView + 1) - 1 : currentIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => {
      console.log({ prev }, prev >= proList.length / itemsPerView);

      return currentIndex + 1 >= (proList.length - itemsPerView + 1)
        ? 0
        : currentIndex + 1;
    });
    console.log({ currentIndex });
  };

  return (
    <div className=" w-full pt-23 pb-19 grid-rows-3 row-gap-8">
      <p className="text-center text-3xl">{favorites.title}</p>
      <p className="text-center text-xl">
        {favorites.desc}
      </p>
      <div>
        <div id="img-card" className="w-full py-8 relative flex justify-center gap-3">
    
            <button onClick={prevSlide} className=" shadow absolute rounded-full left-4 top-[40%] z-10 hover:scale-110">
              <img src="CaretLeft.png" alt="leftscroll" />
            </button>


            <div className="overflow-hidden w-full max-w-[1200px]">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * 100/itemsPerView}%)`,
              width: `${(favorites.frame.length * 100) / favorites.frame.length}%`,
            }}
          >


          {proList.map((item) =>(
            <div key={item.id}
                className="relative flex-shrink-0 px-2"
                style={{
                  width: `${100 / proList.length}%`,
                  flex: `0 0 ${100 / itemsPerView}%`,
                }} >

            <img
              src={item.images[0]}
              alt="imgfavorite"
              className="w-[286px] h-[430px] mb-2"
            />
            <div className="flex justify-between">
              <p>{item.title}</p>
              <span>{`$${item.price}`}</span>
            </div>

          </div>
          ))}
          </div>
          </div>


            <button onClick={nextSlide} className="shadow absolute rounded-full right-4 top-[40%] z-10 hover:scale-110">
              <img src="CaretRight.png" alt="rightscroll" />
            </button>
        </div>

        <div className="flex justify-center items-center gap-4  py-5">
          {Array.from({ length: proList.length - itemsPerView + 1 }).map(
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
    </div>
  );
};

export default Favorites;
