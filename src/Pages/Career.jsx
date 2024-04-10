import React, { useState } from 'react'
import { FaX } from "react-icons/fa6";
import MainTopSectionData from '../Component/Service/MainTopSectionData'
import Navbar from '../Component/Navbar'
import Footer from '../Component/Footer'
import Careerdata from './Careerdata'
const Career = () => {
    const [jobpostopen, setjpbpostopen] = useState(false)

    const openjobform = () => {
        setjpbpostopen(true)
    }
    const closejobform = () => {
        setjpbpostopen(false)
    }
  return (
    <>
        <Navbar/>
        <MainTopSectionData
            TopSpan={"career"}
            TopHead={"Open Positions"}
            TopPara={"Globally parallel task quality methodologies whereas inexpensive sources. Uniquely administrate ubiquitous web services through diverse quality vectors syndicate error-free intellectual capital. Globally parallel task quality methodologies whereas inexpensive sources. Uniquely administrate ubiquitous web services through diverse quality vectors syndicate error-free intellectual capital. Globally parallel task quality methodologies whereas inexpensive sources. Uniquely administrate ubiquitous web services through diverse quality vectors syndicate error-free intellectual capital."}
            TopImage={"/portfolio.png"}
        />
        <div className='py-10'>
            <div className='container mx-auto'>
                {Careerdata.map((val) => (
                    <div key={val.id} className='flex items-start flex-wrap xl:flex-nowrap justify-between py-4 border-b border-b-black border-dashed'>
                        <div>
                            <h3 className='text-xl md:text-3xl lg:text-3xl mb-3 font-bold'>{val.CareerName}</h3>
                            <ul className='flex items-center space-x-3'>
                                <li><p>{val.Careerli1}</p></li>
                                <li><p>{val.Careerli2}</p></li>
                            </ul>
                        </div>
                        <div>
                            <button className='lightbtn' onClick={openjobform}>{val.Careerbtn}</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        <div className={`fixed top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 shadow-xl rounded-lg p-5 z-50 w-11/12 xl:w-96 bg-white ${jobpostopen ? 'block' : 'hidden'}`}>
            <form>
                <FaX className='absolute top-5 right-5' onClick={closejobform}/>
                <div className='flex flex-col mb-3'>
                <label className='labeldesign'>Name</label>
                    <input className='labelinput' type='text'/>
                </div>
                <div className='flex flex-col mb-3'>
                    <label className='labeldesign'>Email</label>
                    <input className='labelinput' type='text'/>
                </div>
                <div className='flex flex-col mb-3'>
                    <label className='labeldesign'>Phone Number</label>
                    <input className='labelinput' type='text'/>
                </div>
                <div className='flex flex-col mb-3'>
                    <label className='labeldesign'>Upload C.V</label>
                    <input className='labelinput' type='file'/>
                </div>
                <div className='flex flex-col mb-3'>
                    <label className='labeldesign'>Upload Portfolio</label>
                    <input className='labelinput' type='file'/>
                </div>
                <div className='flex flex-col mb-3'>
                    <label className='labeldesign'>Share Your Work Link</label>
                    <textarea className='labelinput resize-none'></textarea>
                </div>
                <button className='darkbtn'>Send Enquiry</button>
            </form>
        </div>
        <Footer/>
    </>
  )
}

export default Career