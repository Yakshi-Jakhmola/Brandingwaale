import React, { useState } from 'react'
import Navbar from '../Component/Navbar'
import MainTopSectionData from '../Component/Service/MainTopSectionData'
import Footer from '../Component/Footer'
import Slider from "react-slick";
import Portfoliodata from '../Pages/Portfoliodata'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Portfolio = ({id, Img}) => {
    const Portfolio1 = {
        dots: false,
        infinite: true,
        arrows: false,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed:1000,
        centerMode: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2.8,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]
    }
    const [activeTab, setActiveTab] = useState("all")
    const [gallery, setGallery] = useState(Portfoliodata)
    const  ItemFilter = (CategoryCheck) => {
        const CategoryUpdated = Portfoliodata.filter((val) => {
            return val.Category === CategoryCheck
        })
        setGallery(CategoryUpdated)
    }
  return (
    <>
        <Navbar/>
        <MainTopSectionData
            TopSpan={"our Work"}
            TopHead={"Our All Projects"}
            TopPara={"Globally parallel task quality methodologies whereas inexpensive sources. Uniquely administrate ubiquitous web services through diverse quality vectors syndicate error-free intellectual capital. Globally parallel task quality methodologies whereas inexpensive sources. Uniquely administrate ubiquitous web services through diverse quality vectors syndicate error-free intellectual capital. Globally parallel task quality methodologies whereas inexpensive sources. Uniquely administrate ubiquitous web services through diverse quality vectors syndicate error-free intellectual capital."}
            TopImage={"/portfolio.png"}
        />
        <div className='py-10'>
        <div className='container'>
            <h2 className='text-xl md:text-3xl lg:text-5xl xl:text-5xl font-bold'>Client's get always exceptional <br/> works from me...</h2>
        </div>
        <div className='w-full flex items-center justify-between'>
            <div className='w-4/12'>
                
            </div>
            <Slider {...Portfolio1} className='w-8/12 mt-10'>
                <div>
                    <div className='m-2'>
                        <img className='rounded-xl shadow-md' src='/portfolio/post.png'/>
                    </div>
                </div>
                <div>
                    <div className='m-2'>
                        <img className='rounded-xl shadow-md' src='/portfolio/brochure.png'/>
                    </div>
                </div>
                <div>
                    <div className='m-2'>
                        <img className='rounded-xl shadow-md' src='/portfolio/motion-graphics.png'/>
                    </div>
                </div>
            </Slider>
        </div>
    </div>
    <div className='py-10'>
        <div className='container'>
            <h2 className='text-right text-xl md:text-3xl lg:text-5xl xl:text-5xl font-bold'>Client's get always exceptional <br/> works from me...</h2>
        </div>
        <div className='w-full flex items-center justify-between'>
            <Slider {...Portfolio1} className='w-8/12 mt-10'>
                <div>
                    <div className='m-2'>
                        <img className='rounded-xl shadow-md' src='/portfolio/post.png'/>
                    </div>
                </div>
                <div>
                    <div className='m-2'>
                        <img className='rounded-xl shadow-md' src='/portfolio/brochure.png'/>
                    </div>
                </div>
                <div>
                    <div className='m-2'>
                        <img className='rounded-xl shadow-md' src='/portfolio/motion-graphics.png'/>
                    </div>
                </div>
            </Slider>
            <div className='w-4/12'>
                
            </div>
        </div>
    </div>
        <div className='py-10'>
            <div className='container'>
                <div>
                    <div className='flex items-center justify-center flex-wrap space-x-5'>
                        <button className={`navbtn ${activeTab === "all" ? "text-red-500":""}`} onClick={() => { setActiveTab("all"); setGallery(Portfoliodata)}}>All</button>
                        <button className={`navbtn ${activeTab === "webdesign" ? "text-red-500":""}`} onClick={() => {setActiveTab("webdesign");ItemFilter('webdesign')}}>Web Designing</button>
                        <button className='navbtn' onClick={() => ItemFilter('graphicdesign')}>Graphic Design</button>
                        <button className='navbtn'>Web Designing</button>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 lg:grid-cols-4 mt-5'>
                        {gallery.map((val) => (
                            <div className='m-3'  key={val.id}>
                                <img className='rounded-xl' src={val.Img}/>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
    </>
  )
}

export default Portfolio