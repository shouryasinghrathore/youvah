import React from 'react'
import ntl from "../images/ntl.png"
import p2 from "../images/p2.png"
import p3 from "../images/p3.png"
import p1 from "../images/p1.png"
import roc from "../images/rocket.png"
import book from "../images/book.png"
import cap from "../images/cap.png"
const Main = () => {
    return (
        <div>
            <div className='flex  flex-col text-center gap-y-8 mt-24 max-sm:border-none border-2 border-black p-1 max-w-[900px] mx-auto'>
                <h2 className='text-white text-xl'>See where our students are interning </h2>
                <div className='flex justify-between max-sm:gap-3  items-center w-full'>
                    <img width={180} src={p2} alt="" />
                    <img width={80} src={ntl} alt="" />
                    <img width={150} src={p3} alt="" />
                    <img width={90} src={p1} alt="" />

                </div>
            </div>


            <div className='max-w-[1400px]    drop-shadow-xl	  my-28 flex max-sm:flex-wrap max-sm:h-full mx-auto justify-center gap-8 items-center'>
                <div className='bg-[#202C38] max-sm:mb-28 max-sm:mt-12 w-[50%] max-sm:w-[100%] rounded-xl  max-sm:rounded m-2 max-sm:m-0  p-8 max-sm:p-5'>
                    <div className='flex-start flex-col mb-4 flex text-white' >
                        <h2 className='text-[30px] max-sm:text-[25px] font-[500] '>Content :</h2>
                        <p className='text-[15px]'>12 lessons• 2hr 3min • </p>
                    </div>

                    <ul className='flex flex-col gap-5 text-white max-sm:text-[12px]'>
                        <li className='flex justify-between items-center  py-3 border-b-2 border-dashed border-[#FDFBFF]'>
                            <span className='flex items-center  justify-center gap-2'>            Introductory Session (Live class) </span>
                            <span className='text-[12px] max-sm:text-[10px]'>2hr 3min • </span>
                        </li>
                        <li className='flex justify-between items-center gap-6 py-3 border-b-2 border-dashed border-[#FDFBFF]'>
                            <span>Getting into the Fundamentals </span>
                            <span className='text-[12px] max-sm:text-[10px]'>2hr 3min • </span>
                        </li>
                        <li className='flex justify-between items-center gap-6 py-3 border-b-2 border-dashed border-[#FDFBFF]'>
                            <span>Know your niche </span>
                            <span className='text-[12px] max-sm:text-[10px]'>2hr 3min • </span>
                        </li>
                        <li className='flex justify-between items-center gap-6 py-3 border-b-2 border-dashed border-[#FDFBFF]'>
                            <span>The Crux of Search Engine Optimization (SEO) What is SEO? </span>
                            <span className='text-[12px] max-sm:text-[10px]'>2hr 3min • </span>
                        </li>
                        <li className='flex justify-between items-center gap-6 py-3 border-b-2 border-dashed border-[#FDFBFF]'>
                            <span>The Key to Keywords </span>
                            <span className='text-[12px] max-sm:text-[10px]'>2hr 3min • </span>
                        </li>
                        <li className='flex justify-between items-center gap-6 py-3 border-b-2 border-dashed border-[#FDFBFF]'>
                            <span>Content Marketing - Ensuring the Reach </span>
                            <span className='text-[12px] max-sm:text-[10px]'>2hr 3min • </span>
                        </li>


                    </ul>

                    <div className=' text-center w-[100%] p-2 rounded-sm bg-transparent  text-white '> <button className=' b mt-5 inline-block mx-auto'>View All</button> </div>

                </div>




                <div className='  rounded-md m-2 p-10 max-sm:p-4 relative'>
                    <img src={book} className='absolute w-9 z-[100] max-sm:w-8 max-sm:left-[-1px] left-[13px] max-sm:top-[180px] top-[190px]' alt="" />
                    <img src={cap} className='absolute w-9 z-[100] max-sm:w-8 max-sm:left-[-1px] left-[13px] max-sm:bottom-[200px] bottom-[247px]' alt="" />
                    <img src={roc} className='absolute w-9 max-sm:left-[-1px] max-sm:w-8 max-sm:top-2  left-[13px] z-[100] top-5' alt="" />
                    <div className='flex flex-col gap-8 z-[2] relative'>
                        <div className='bg-[#33307B]  drop-shadow-lg p-4 text-white rounded-md'>
                            <h4 className=' text-[22px]'>Career opportunities :</h4>
                            <ol >
                                <li  >Life time access</li>
                                <li>Life time access</li>
                                <li>Life time access</li>
                            </ol>
                        </div>

                        <div className='bg-[#27295B]  drop-shadow-lg text-white p-4 rounded-md'>
                            <h4 className='text-[23px] '>Skills You Will Learn :</h4>
                            <ul style={{ listStyleType: 'decimal' }} className='mx-1' >
                                <li>Content Designing</li>
                                <li> Content Adaptation</li>
                                <li>Content Writing as a Career SEO:</li>
<li> SEO: Understanding search engine optimization (SEO)</li>                            </ul>
                        </div>

                        <div className='bg-[#27295B]  drop-shadow-lg text-white p-4 rounded-md'>
                            <h4 className=' text-[23px] '>Course Includes :</h4>
                            <ul className='list-decimal	 mx-1'>
                            
                                <li>
                                    Life time access

                                </li>
                                <li>Certificate of completion</li>

                            </ul>
                        </div>


                        <div className='flex  items-center mt-2 gap-1`'>
                            <div className='flex flex-col text-white  '>
                                <p className='text-[30px] max-sm:text-[18px]'>₹1000</p>
                                <span className='text-sm text-[10px]'><del>₹2000</del> 50% off</span>
                            </div>
                            <div className='mx-auto text-white  '>
                                <button className='text-xl  max-sm:text-lg gra px-28 w-full max-sm:py-1 max-sm:px-8 py-3 rounded-md'>Buy Now</button>
                            </div>

                        </div>

                    </div>

                </div>
            </div>




        </div>
    )
}

export default Main