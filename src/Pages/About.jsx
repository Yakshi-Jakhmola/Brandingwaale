import React from "react";
import {FaCheckCircle} from "react-icons/fa";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";
import MainTopSectionData from "../Component/Service/MainTopSectionData";

const About = () => {
    return(
        <>
            <Navbar/>
            <MainTopSectionData
                TopSpan={"About us"}
                TopHead={"Why your business need Digital Marketing"}
                TopPara={"Globally parallel task quality methodologies whereas inexpensive sources. Uniquely administrate ubiquitous web services through diverse quality vectors syndicate error-free intellectual capital. Globally parallel task quality methodologies whereas inexpensive sources. Uniquely administrate ubiquitous web services through diverse quality vectors syndicate error-free intellectual capital. Globally parallel task quality methodologies whereas inexpensive sources. Uniquely administrate ubiquitous web services through diverse quality vectors syndicate error-free intellectual capital."}
                TopImage={"/about-cycle.png"}
            />
            <Footer/>
        </>
    )
}
export default About;