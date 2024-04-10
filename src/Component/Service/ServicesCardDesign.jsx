import React from "react";
import ServicesData from './ServicesData';
const ServicesCardDesign = () => {
    return(
        <>
            <div className="container mx-auto py-10">
                <span className='cursivehead text-center block'>Services</span>
                <h2 className='centerheading'>How can we help you?</h2>
                    <div className="grid grid-rows-1 grid-cols-1 md:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 mt-10">
                        {ServicesData.map((val) =>(
                            <div key={val.id}>
                                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 grid-rows-1 mx-0 my-3 xl:m-3 lg:m-3 md:m-2 rounded-2xl shadow-2xl bg-white hover:bg-amber-50 hover:transition-all hover:duration-700 hover:ease-linear">
                                    <div className="py-8 pl-8">
                                        <h3 className="text-2xl font-bold">{val.ServiceHead}</h3>
                                        <p className="my-4">{val.ServicePara}</p>
                                        <button className="darkbtn">{val.ServiceBtn}</button>
                                    </div>
                                    <div className="flex items-end justify-end">
                                        <img className="" src={val.ServiceImage} alt="Services"/>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
            </div>
        </>
    )
}
export default ServicesCardDesign;