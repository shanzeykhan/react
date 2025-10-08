import React from 'react'

const Footer = () => {
  return (
    <div className='w-full px-18 pt-10 bg-gray-100'>
        <div className='w-full flex justify-between items-start flex-wrap'>
            <div className='px-5 py-5'>
                <h4 className='font-semibold'>Account</h4>
                <ul className='text-gray-500 mt-5'>
                   <li className='mb-2'> <a href='###'>Log In</a></li>
                        
                   <li className='mb-2'> <a href='###'>Sign Up</a></li>
                        
                   <li className='mb-2'> <a href='###'>Redeem a Gift Card</a></li>
                      
                </ul>

            </div>
            <div className='px-5 py-5'>
                <h4 className='font-semibold'>Company</h4>
                <ul className='text-gray-500 mt-5'>
                   <li className='mb-2'><a href='###'>About</a></li>
                        
                    <li className='mb-2'><a href='###'>Environmental Initiatives</a></li>
                     
                   <li className='mb-2'> <a href='###'>Factories</a></li>
                    
                    <li className='mb-2'><a href='###'>DEI</a></li>
                        
                    <li className='mb-2'><a href='###'>Careers</a></li>
                    
                    <li className='mb-2'><a href='###'>International</a></li>
                    <li className='mb-2'><a href='###'>Accessibility</a></li>
                </ul>

            </div>
            <div className='px-5 py-5'>
                <h4 className='font-semibold'>Get Help</h4>
                <ul className='text-gray-500 mt-5 '>
                    <li className='mb-2'><a href='###'>Help Center</a>
                        </li>
                    
                    <li className='mb-2'><a href='###'>Return Policy</a>
                        </li> 
                    
                    <li className='mb-2'><a href='###'>Shipping Info</a>
                        </li>
                    <li className='mb-2'><a href='###'>Bulk Orders</a></li>
                    
                </ul>

            </div>
            <div className='px-5 py-5'>
                <h4 className='font-semibold'>Connect</h4>
                <ul className='text-gray-500 mt-5'>
                    <li className='mb-2'>
                       <a href='###'>Facebook</a> 
                    </li>
                     <li className='mb-2' >
                        <a href='###'>Instagram</a>
                    </li>
                     <li className='mb-2'>
                       <a href='###'>Twitter</a>
                    </li>
                    <li className='mb-2'><a href='###'>Affiliates</a></li>
                    <li className='mb-2'><a href='###'>Out Stores</a></li>
                </ul>

            </div>
            <div className='px-5 py-5 flex items-center'>
                <input type='Email' name='email' placeholder='Email Address' className='bg-white  border-gray-200 border-2 px-4 py-5'/>
                <button className='bg-black px-4 py-5'><img src='ArrowRight (1).png'/></button>
            </div>

        </div>


        <div className='py-5 flex flex-wrap flex-col gap-4 text-gray-500 text-sm text-center'>
            <div className='w-full flex flex-wrap justify-center gap-5'>
                <a href='###'>Privacy Policy</a>
                <a href='###'>Terms of Service</a>
                <a href='###'>Do Not Sell or Share My Personal Information</a>
                <a href='###'>CS Supply Chain Transparency</a>
                <a href='###'>Vendor Code of Conduct</a>
                <a href='###'>Sitemap Pages</a>
                <a href='###'>Sitemap Products</a>
            </div>
            <div>
                <p>&copy; 2023 All Rights Reserved</p>
            </div>
        </div>
    </div>
  )
}

export default Footer