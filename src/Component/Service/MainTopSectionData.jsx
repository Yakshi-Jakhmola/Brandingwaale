import React from 'react'

const MainTopSectionData = ({TopHead, TopPara, TopImage, TopSpan}) => {
  return (
    <div>
        <div className='pt-10'>
            <div className="container mx-auto">
                <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 grid-rows-1 items-center'>
                    <div>
                        <span className='cursivehead'>{TopSpan}</span>
                        <h1 className="text-2xl md:text-3xl lg:text-5xl xl:text-6xl font-bold">{TopHead}</h1>
                        <p className="text-lg mt-5">{TopPara}</p>
                    </div>
                    <div className="mt-8 md:mt-0 lg:mt-0 xl:mt-0 flex items-center justify-center">
                        <img src={TopImage}/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MainTopSectionData