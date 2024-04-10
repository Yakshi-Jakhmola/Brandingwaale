import React from 'react'
import ClientCardDesign from '../Component/Client/ClientCardDesign';
import ServiceCardDesign from '../Component/Service/ServicesCardDesign';
import Cta from '../Component/Cta';
import MainTopSectionData from '../Component/Service/MainTopSectionData';
import ProcessCardDesign from '../Component/Service/ProcessCardDesign';

const HeroSection = () => {
  return (
    <>
        <MainTopSectionData
            TopSpan={"Welcome"}
            TopHead={"Creative Solutions to  improve your business!"}
            TopPara={"In today's rapidly evolving world, honing skills has become more critical than ever. Embracing a novel approach to skill development can pave the way for unparalleled growth and success. Embracing a novel approach to skill development can pave the way for unparalleled growth and success. Embracing a novel approach to skill development can pave the way for unparalleled growth and success. "}
            TopImage={"/team.webp"}
        />
        <ClientCardDesign/>
        <div className='container mx-auto py-10'>
            <span className='cursivehead text-center block'>Process</span>
            <h2 className='centerheading relative'>Our Proven Process</h2>
            <div className='grid grid-cols-1 md:grid-cols-1 xl:grid-cols-2 lg:grid-cols-2'>
                <div className='mt-8 md:mt-0 lg:mt-0 xl:mt-0 flex items-center justify-start'>
                    <img src='/process.png'/>
                </div>
                <div>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 grid-rows-1 gap-3 mt-20'>
                        <ProcessCardDesign
                            ProcessNumber={"1"}
                            ProcessImage={"/blueprint.png"}
                            ProcessHead={"Website Blue Print"}
                            ProcessPara={"Determine the purpose of the website.  Identify the target audience and their needs."}
                        />
                        <ProcessCardDesign
                            ProcessNumber={"2"}
                            ProcessImage={"/design-creation.png"}
                            ProcessHead={"Design Creation"}
                            ProcessPara={"Determine the purpose of the website.  Identify the target audience and their needs."}
                        />
                        <ProcessCardDesign
                            ProcessNumber={"3"}
                            ProcessImage={"/development.png"}
                            ProcessHead={"Development"}
                            ProcessPara={"Determine the purpose of the website.  Identify the target audience and their needs."}
                        />
                        <ProcessCardDesign
                            ProcessNumber={"4"}
                            ProcessImage={"/launch.png"}
                            ProcessHead={"Launch"}
                            ProcessPara={"Determine the purpose of the website.  Identify the target audience and their needs."}
                        />
                    </div>
                </div>
            </div>
        </div>
        <ServiceCardDesign/>
        <Cta/>
    </>
  )
}

export default HeroSection;