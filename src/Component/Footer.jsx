import React from "react";
import {FaFacebook} from "react-icons/fa";
import {FaInstagram} from "react-icons/fa";
import {FaLinkedin} from "react-icons/fa";
import {FaTwitter} from "react-icons/fa";
import {FaYoutube} from "react-icons/fa";

const Footer = () => {
    return(
        <>
            <footer className="bg-amber-50 py-10">
               <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 grid-rows-1 items-start gap-x-4">
                    <div>
                        <img className="w-36 mb-5" src="/black-logo.gif"/>
                        <p>"Building Brands That Make a Difference" is Our Main Goal in our Company. Innovative Digital Solutions for Your Brand and Amplify Your Brand's Reach with Our Digital Solutions.</p>
                    </div>
                    <div className="my-5 md:my-0 lg:my-0 xl:my-0">
                        <h4 className="text-xl font-bold uppercase">Social Links</h4>
                        <div className="grid grid-cols-5 grid-rows-1 mt-4">
                            <a href="https://www.facebook.com/brandingwaale/"><FaFacebook className="w-10 h-10 text-center border border-dashed border-black p-1.5 rounded-full"/></a>
                            <a href="https://www.instagram.com/brandingwaale/?hl=en"><FaInstagram className="w-10 h-10 text-center border border-dashed border-black p-1.5 rounded-full"/></a>
                            <a href="https://in.linkedin.com/company/brandingwaale"><FaLinkedin className="w-10 h-10 text-center border border-dashed border-black p-1.5 rounded-full"/></a>
                            <a href="https://twitter.com/brandingwaale?lang=en"><FaTwitter className="w-10 h-10 text-center border border-dashed border-black p-1.5 rounded-full"/></a>
                            <a href="https://www.youtube.com/channel/UCsx9Lah-S1Lcb99Yoywd9kQ"><FaYoutube className="w-10 h-10 text-center border border-dashed border-black p-1.5 rounded-full"/></a>
                        </div>
                    </div>
                    <div>
                        <h4 className="text-xl font-bold uppercase">Locations</h4>
                        <p className="mt-4">SCF 147, Second Floor, Huda Market, Sector 37, Faridabad, Haryana 121003</p>
                    </div>
               </div>
            </footer>
            <div className="bg-black text-center p-2">
                <div className="contaier mx-auto">
                    <p className="text-white">Copyright © 2024 All rights reserved.</p>
                </div>
            </div>
        </>
    )
}
export default Footer;