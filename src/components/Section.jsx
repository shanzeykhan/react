import React from 'react'

const Section = () => {
  return (
    <div className="w-full px-46 py-23 flex justify-center gap-5">
            <div className="text-center">
                <p className="text-3xl">
                    Our Holiday Gift Picks
                </p>
                <img src="image (13).png" alt="" className="w-162 h-187 my-5"/>
                <p>
                    The best presents for everyone on your list.
                </p>
                <p className="underline text-xl mt-3">
                    Read More
                </p>
            </div>
             <div className="text-center">
                <p className="text-3xl">
                    Cleaner Fashion
                </p>
                <img src="image (14).png" alt="" className="w-162 h-187 my-5"/>
                <p>
                    See the sustainability efforts behind each of our products.
                </p>
                <p className="underline text-xl mt-3">
                    Learn More
                </p>
            </div>

        </div>
  )
}

export default Section