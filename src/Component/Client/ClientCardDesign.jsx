import React from "react";
import ClientData from './ClientData'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const ClientCardDesign = () => {
    const ClientSlider = {
        dots: false,
        infinite: true,
        arrows: false,
        speed: 300,
        slidesToShow: 8,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed:1000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 4,
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
    return(
        <>
            <div className="client-container bg-amber-50 py-7 container mx-auto">
                <Slider {...ClientSlider}>
                    {ClientData.map((val) =>(
                        <div key={val.id}>
                           <img src={val.ClientImage} alt="cliente-logo"/> 
                        </div>
                    ))}
                </Slider>
            </div>
        </>
    )
}
export default ClientCardDesign;