import React from 'react'

const Shopmore = ({shopMore}) => {
  return (
    <div className=" w-full px-11 flex justify-center gap-8">
        <div className="w-[430px] h-[534px] bg-[url('/Frame1(3).png')] bg-cover bg-center text-center flex flex-col justify-center items-center gap-6" >
            <h2 className="text-5xl text-white "> New Arrivals</h2>
            <button className=" bg-white text-black px-13 py-2 hover:shadow-lg hover:scale-101">SHOP THE LATEST</button>
        
        </div>
         <div className="w-[430px] h-[534px] bg-[url('/Frame2(2).png')] bg-cover bg-center text-center flex flex-col justify-center items-center gap-6" >
            <h2 className="text-5xl text-white "> Best-Sellers</h2>
            <button className=" bg-white text-black px-13 py-2 hover:shadow-lg hover:scale-101">SHOP YOUR FAVORITES</button>
        
        </div>
        <div className="w-[430px] h-[534px] bg-[url('/Frame3(2).png')] bg-cover bg-center text-center flex flex-col justify-center items-center gap-6" >
            <h2 className="text-5xl text-white "> The Holiday Outfit</h2>
            <button className=" bg-white text-black px-13 py-2 hover:shadow-lg hover:scale-101">SHOP OCCASION</button>
        
        </div>

      </div>
  )
}

export default Shopmore