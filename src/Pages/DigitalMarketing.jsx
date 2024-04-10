import React, { useState } from 'react';
import Navbar from '../Component/Navbar';
import Footer from '../Component/Footer';
import Cta from '../Component/Cta';
import DigitalMarketingCompo from '../Component/Service/DigitalMarketingCompo';
import MainTopSectionData from '../Component/Service/MainTopSectionData';
import DigitalMarketingServices from '../Component/Service/DigitalMarketingServices';

const DigitalMarketing = () => {
  return (
    <div>
        <Navbar/>
        <MainTopSectionData
            TopSpan={"Digital Marketing"}
            TopHead={"One Stop Digital Marketing Services"}
            TopPara={"Globally parallel task quality methodologies whereas inexpensive sources. Uniquely administrate ubiquitous web services through diverse quality vectors syndicate error-free intellectual capital. Globally parallel task quality methodologies whereas inexpensive sources. Uniquely administrate ubiquitous web services through diverse quality vectors syndicate error-free intellectual capital. Globally parallel task quality methodologies whereas inexpensive sources. Uniquely administrate ubiquitous web services through diverse quality vectors syndicate error-free intellectual capital."}
            TopImage={"/service/dm/digital-marketing.png"}
        />
        <div className='py-10 bg-gradientprimary'>
            <div className='container mx-auto'>
                <h2 className='centerheading'>How we do it</h2>
                <div className='flex items-center flex-wrap justify-center gap-10  xl:gap-20 mt-10'>
                    <DigitalMarketingServices
                        ServicesImage={"/service/dm/seo-ranking.png"}
                        ServiceName={"Seo Ranking"}
                    />
                    <DigitalMarketingServices
                        ServicesImage={"/service/dm/technical-seo.png"}
                        ServiceName={"Technical SEO"}
                    />
                    <DigitalMarketingServices
                        ServicesImage={"/service/dm/social-media.png"}
                        ServiceName={"Social Media"}
                    />
                    <DigitalMarketingServices
                        ServicesImage={"/service/dm/local-seo.png"}
                        ServiceName={"Local SEO"}
                    />
                    <DigitalMarketingServices
                        ServicesImage={"/service/dm/web-browser.png"}
                        ServiceName={"Web Browser"}
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

export default DigitalMarketing