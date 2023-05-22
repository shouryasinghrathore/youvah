import React from 'react'
import leftimg from "../images/CW2.png"
import rightimg from "../images/CW1.png"
import v from "../images/visual.png"
import ele from "../images/ele.png"

const Hero = () => {
    return (
        <div className=' relative  p-2  '>

            <div className=' bg-[#29303b] overflow-hidden mt-12 mx-auto max-sm:h-[332px]     h-[350px] max-w-[1400px] relative rounded-md'>
                <img className='w-[430px] max-sm:hidden  h-[100%] absolute left-0 ' src={leftimg} alt="" />
                <img className='w-[430px] max-sm:hidden  h-[100%] absolute right-0 ' src={rightimg} alt="" />
                <img className='w-8 h-8 max-sm:hidden    absolute right-[430px] top-[105px] ' src={ele} alt="" />
                <div className='flex flex-col relative w-full gap-3 max-sm:gap-2 text-center justify-center mt-10 max-sm:mt-0 h-full text-white'>
                    <img src={v} className='absolute top-0 sm:hidden ' alt="" />
                    <h2 className='text-[2rem]   max-sm:mt-[13rem] max-sm:text-[1rem]'>Ace Our Single Shot Challenge !</h2>
                    <p className='w-[500px] max-sm:w-[250px]  mx-auto bg-transparent  max-sm:text-[.8rem] text-center '>Jumpstart Your Career with Our Free Assessment Test: Prove Your Skills and Secure an Internship Today!</p>
                    <button className='mt-5 gra px-2 py-3 text-lg w-[300px]  max-sm:hidden max-sm:w-[200px] max-sm:text-sm rounded-md mx-auto inline-block'>Take  A Free Assessment</button>
                    {/* <button className='mt-5 gra px-2 py-3 text-lg w-[300px]  max-sm:w-[200px] max-sm:text-sm rounded-md mx-auto '>Take  A Free Test</button> */}
                </div>
            </div>













        </div>
    )
}

export default Hero