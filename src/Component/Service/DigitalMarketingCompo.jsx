import { useState } from "react"

const DigitalMarketingCompo = ({DigitalHead, DigitalPara}) => {
    const [Show, SetShow] = useState(false)
    const ShowAccordion = () => {
        SetShow(!Show)
    }
  return (
    <div>
        <div onClick={ShowAccordion} className='mb-3'>
            <div className='flex items-center justify-between border-b-2 border-solid border-black py-2'>
                <h3 className='text-xl md:text-xl lg:text-xl xl:text-xl font-bold'>{DigitalHead}</h3>
                <p className='text-xl md:text-3xl lg:text-3xl xl:text-3xl font-extralight'>{Show ? "-" : "+"}</p> 
            </div>
            {Show && (
                <div className=''>
                    <p>{DigitalPara}</p>
            </div>
            )}
        </div>
    </div>
  )
}

export default DigitalMarketingCompo