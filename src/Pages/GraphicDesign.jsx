import React, { useState } from 'react';
import Navbar from '../Component/Navbar';
import Footer from '../Component/Footer';
import Cta from '../Component/Cta';
import DigitalMarketingCompo from '../Component/Service/DigitalMarketingCompo';
import MainTopSectionData from '../Component/Service/MainTopSectionData';
import DigitalMarketingServices from '../Component/Service/DigitalMarketingServices';

const GraphicDesign = () => {
  return (
    <div>
        <Navbar/>
        <MainTopSectionData
            TopSpan={"Graphic Design"}
            TopHead={"Graphic Design"}
            TopPara={"Globally parallel task quality methodologies whereas inexpensive sources. Uniquely administrate ubiquitous web services through diverse quality vectors syndicate error-free intellectual capital. Globally parallel task quality methodologies whereas inexpensive sources. Uniquely administrate ubiquitous web services through diverse quality vectors syndicate error-free intellectual capital. Globally parallel task quality methodologies whereas inexpensive sources. Uniquely administrate ubiquitous web services through diverse quality vectors syndicate error-free intellectual capital."}
            TopImage={"/service/graphics/graphic-design.png"}
        />
        <div className='py-10 bg-gradientprimary'>
            <div className='container mx-auto'>
                <h2 className='centerheading'>How we do it</h2>
                <div className='flex items-center flex-wrap justify-center gap-10  xl:gap-20 mt-10'>
                    <DigitalMarketingServices
                        ServicesImage={"/service/graphics/logo-design.png"}
                        ServiceName={"Logo Design"}
                    />
                    <DigitalMarketingServices
                        ServicesImage={"/service/graphics/ads-design.png"}
                        ServiceName={"Adds Design"}
                    />
                    <DigitalMarketingServices
                        ServicesImage={"/service/graphics/motion-graphics.png"}
                        ServiceName={"Motion Graphics"}
                    />
                    <DigitalMarketingServices
                        ServicesImage={"/service/graphics/3d.png"}
                        ServiceName={"3D"}
                    />
                </div>
            </div>
        </div>
        <div className='py-10'>
            <div className='container mx-auto'>
                <span className='cursivehead text-center block'>FAQ</span>
                <h2 className='centerheading relative'>Frequently Asked Questions?</h2>
                <div className="grid2">
                    <div className="flex items-center justify-start">
                        <img src="/faq.png"/>
                    </div>
                    <div className=''>
                        <DigitalMarketingCompo
                            DigitalHead={"What services does Brandingwaale Webtech offer as a digital marketing agency?"}
                            DigitalPara={"Brandingwaale Webtech provides a wide range of digital marketing services. We cover everything you need to make your online presence shine, including SEO, social media marketing, content marketing, web design, web development, and more. Our goal is to boost your visibility and engagement online comprehensively."}
                        />
                        <DigitalMarketingCompo
                            DigitalHead={"What is Digital Marketing"}
                            DigitalPara={"Digital marketing is the component of marketing that uses the Internet and online-based digital technologies such as desktop computers, mobile phones, and other digital media and platforms to promote products and services."}
                        />
                        <DigitalMarketingCompo
                            DigitalHead={"What is Digital Marketing"}
                            DigitalPara={"Digital marketing is the component of marketing that uses the Internet and online-based digital technologies such as desktop computers, mobile phones, and other digital media and platforms to promote products and services."}
                        />
                        <DigitalMarketingCompo
                            DigitalHead={"What is Digital Marketing"}
                            DigitalPara={"Digital marketing is the component of marketing that uses the Internet and online-based digital technologies such as desktop computers, mobile phones, and other digital media and platforms to promote products and services."}
                        />
                    </div>
                </div>
            </div>
        </div>
        <Cta/>
        <Footer/>
    </div>
  )
}

export default GraphicDesign