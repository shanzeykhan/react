import React from 'react'

const ShopbyCategory = () => {
  return (
     <div id="category" className=" px-11 py-23 ">
        <p className="text-3xl text-center pb-7">Shop by Category</p>
        <div id="catg-img" className=" h-74 w-full flex justify-center gap-4 ">
          <div id="catg-img1">
            <img src="/image.png" alt="catg-img" className="w-65" />
            <p className="underline text-center">SHIRTS</p>
          </div>
          <div id="catg-img2">
            <img src="/image (1).png" alt="catg-img" className="w-65" />
            <p className="underline text-center">DENIM</p>
          </div>
          <div id="catg-img3">
            <img src="/image (2).png" alt="catg-img" className="w-65" />
            <p className="underline text-center">TEES</p>
          </div>
          <div id="catg-img4">
            <img src="/image (4).png" alt="catg-img" className="w-65" />
            <p className="underline text-center">PANTS</p>
          </div>
          <div id="catg-img5">
            <img src="/image (5).png" alt="catg-img" className="w-65" />
            <p className="underline text-center">SWEATERS</p>
          </div>
          <div id="catg-img5">
            <img src="/image (6).png" alt="catg-img" className="w-65" />
            <p className="underline text-center">OUTERWEAR</p>
          </div>
        </div>
      </div>
  )
}

export default ShopbyCategory