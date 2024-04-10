import React from 'react';

const MainSection = () =>{
    return(
        <>
           <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 grid-rows-1 container mx-auto pt-10 items-center'>
                <div>
                    <h1 className='text-2xl md:text-3xl lg:text-5xl xl:text-5xl font-bold uppercase'>Develop Your <span className='font-bold text-yellow'>Skills</span>  in a new and <span>unique way</span></h1>
                    <p className='text-lg my-5'>In today's rapidly evolving world, honing skills has become more critical than ever. Embracing a novel approach to skill development can pave the way for unparalleled growth and success.</p>
                    <button className='lightbtn'>Enroll Now</button>
                </div>
                <div className='mt-8 md:mt-0 lg:mt-0 xl:mt-0'>
                    <img src='/mainsection1.png'/>
                </div>
           </div> 
        </>
    )
}
export default MainSection;