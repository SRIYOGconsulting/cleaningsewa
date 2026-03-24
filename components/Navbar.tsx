'use client'
import React, { useState, useEffect } from 'react'

const Navbar = () => {
  const [visible, setVisible] = useState(true);

  // Auto hide after 30 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 30000);

    return () => clearTimeout(timer); // cleanup
  }, []);

  return (
    <>
      {visible && 
        <div className='w-full bg-[#074842] text-white'>
          <div className='max-w-7xl mx-auto py-2.5 px-5 flex items-center justify-center'>
            
            {/* Center Content */}
            <div className='flex flex-col sm:flex-row items-center gap-3 text-center'>
              <p className='text-sm sm:text-[13px] lg:text-sm'>
                Grab a limited time offer. Free inspection or 10% discount in every services. 6 months service warranty. Hurry up.
              </p>

              <button className='text-sm italic hover:bg-[#ebebeb] hover:text-[#074842] border border-[#ebebeb] px-2 py-1 rounded-md'>
                Apply Now
              </button>
            </div>

          </div>
        </div>
      }
    </>
  )
}

export default Navbar