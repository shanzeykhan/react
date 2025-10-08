import React from 'react'

const Aboutus = ({aboutUs}) => {
  return (
     <div className=" w-full px-11 py-23">
      <div className=" h-68 bg-[url('/Frame1(1).svg')] px-11 text-white text-center flex flex-col justify-center items-center gap-3">
      
        <p className="text-3xl">
           {aboutUs.mainHeading}
        </p>
        <p className="text-lg mb-3">
            {aboutUs.subHeading}
        </p>
        <button className="bg-white text-black px-18 py-2 hover:shadow-xl hover:scale-101">{aboutUs.buttonText}</button>

      </div>
       
      </div>
  )
}

export default Aboutus