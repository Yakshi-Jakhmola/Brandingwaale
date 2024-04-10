import React from 'react'

const ProcessCardDesign = ({ProcessNumber, ProcessImage,ProcessHead, ProcessPara}) => {
  return (
    <>
        <div className='processcard p-5 relative bg-white shadow-2xl rounded-md  border-b-yellow border-b-4 border-b-solid flex items-start justify-end'>
            <div className='absolute top-4 right-4'>
                <h3 className='text-4xl font-bold w-16 h-16 rounded-full bg-gradientprimary text-center leading-relaxed'>{ProcessNumber}</h3>
            </div>
            <div>
                <div className='w-16 h-16'>
                    <img className='' src={ProcessImage} alt='services'/>
                </div>
                <h3 className='text-xl font-semibold mt-3'>{ProcessHead}</h3>
                <p>{ProcessPara}</p>
            </div>
        </div>
    </>
  )
}

export default ProcessCardDesign