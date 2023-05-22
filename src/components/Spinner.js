import React from 'react'

const spinner = () => {
  return (
    <div className='flex flex-col h-[50vh] max-md:h-[32vh] justify-center items-center'>
        <img  className='w-[510px] max-md:w-[200px]' src="https://www.hayscisd.net/cms/lib/TX02204837/Centricity/Domain/1136/animation-library-magicbook-022120.gif" alt="" />
        <h2 className='text-3xl max-md:text-xl font-semibold text-[#1a1a1a]'>Loading.....</h2>
    </div>
  )
}

export default spinner;





