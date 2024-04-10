import React from 'react'

const try1 = () => {
  return (
    <div>
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
    </div>
  )
}

export default try1;