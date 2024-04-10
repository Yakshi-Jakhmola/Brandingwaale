import React from 'react'

const DigitalMarketingServices = ({ServicesImage, ServiceName}) => {
  return (
    <>
    <div className="flex items-center justify-center flex-col">
        <div className='w-20 h-20 bg-black text-center rounded-full shadow-xl p-3' >
            <img className='invert' src={ServicesImage} alt='seo-ranking'/>
        </div>
        <h6 className='mt-2 font-semibold text-lg'>{ServiceName}</h6>
    </div>
    </>
  )
}

export default DigitalMarketingServices