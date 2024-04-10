import React, { useState } from 'react';
import { FaPhone, FaBars, FaChevronDown, FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";
import { FaX } from "react-icons/fa6";

const Navbar = () => {
    const [menuShow, setMenuShow] = useState(false);
    const [mobileMenu, setMobileMenu] = useState(false);

    const dropdownClose = () => {
        setMenuShow(false);
    }

    const dropdownOpen = () => {
        setMenuShow(true);
    }

    const menuOpenHandler = () => {
        setMobileMenu(true);
    }

    const menuCloseHandler = () => {
        setMobileMenu(false);
    }

    return (
        <>
            <div className='py-3 px-5 bg-slate-50 shadow-xl'>
                <div className='container mx-auto flex items-center justify-between'>
                    <div className='w-40'>
                        <img src='/black-logo.gif' alt='logo' />
                    </div>
                    <div className=''>
                        <ul className='hidden md:hidden lg:flex xl:flex items-center gap-x-10 font-OutFit font-bold'>
                            <li><a href='/'>Home</a></li>
                            <li><a href='/About'>About</a></li>
                            <li className='relative' onMouseOver={dropdownOpen} onMouseLeave={dropdownClose}>
                                <a className='inline-flex items-center gap-x-2'>Services <FaChevronDown /></a>
                                {menuShow && (
                                    <ul className='navbarsubmenu'>
                                        <li><a className='navbarsubmenua' href='/DigitalMarketing'>Digital Marketing</a></li>
                                        <li><a className='navbarsubmenua' href='/WebDesigning'>Web Designing</a></li>
                                        <li><a className='navbarsubmenua'>Web Development</a></li>
                                        <li><a className='navbarsubmenua' href='/GraphicDesign'>Graphic Designing</a></li>
                                        <li><a className='navbarsubmenua' href='/SeoMarketing'>Seo Marketing</a></li>
                                        <li><a className='navbarsubmenua'>App Development</a></li>
                                    </ul>
                                )}
                            </li>
                            <li><a href='/Career'>Career</a></li>
                            <li><a href='/Portfolio'>Portfolio</a></li>
                            <li><a href='/Contact'>Contact</a></li>
                        </ul>
                    </div>
                    <div className='hidden md:hidden lg:flex xl:flex lightbtn'>
                        <button className='text-black hover:text-white'>+91 96677 37755</button>
                        <FaPhone className='w-8 h-8 text-center bg-white shadow-xl p-2 rounded-md hover:text-black' />
                    </div>
                    <div className='block md:block lg:hidden xl:hidden'>
                        <FaBars onClick={menuOpenHandler} />
                    </div>
                </div>
            </div>
            <div className={`mobile-device ${mobileMenu ? 'left-0' : '-left-full'}`}>
                <div className='w-40 mb-8'>
                    <img src='/black-logo.gif' alt='logo' />
                </div>
                <div className='absolute top-11 right-8'>
                    <FaX onClick={menuCloseHandler} />
                </div>
                <ul className='relative' onMouseOver={dropdownOpen} onMouseLeave={dropdownClose}>
                    <li><a href='/' className='mobilenavbara'>Home</a></li>
                    <li><a href='/About' className='mobilenavbara'>About</a></li>
                    <li className=''><a className='mobilenavbara'>Services</a>
                        <ul className=''>
                            <li><a className='mobilenavbara' href='/DigitalMarketing'>Digital Marketing</a></li>
                            <li><a className='mobilenavbara' href='/WebDesigning'>Web Designing</a></li>
                            <li><a className='mobilenavbara'>Web Development</a></li>
                            <li><a className='mobilenavbara' href='/GraphicDesign'>Graphic Designing</a></li>
                            <li><a className='mobilenavbara' href='/SeoMarketing'>Seo Marketing</a></li>
                            <li><a className='mobilenavbara'>App Development</a></li>
                        </ul>
                    </li>
                    <li><a href='/Career' className='mobilenavbara'>Career</a></li>
                    <li><a href='/Portfolio' className='mobilenavbara'>Portfolio</a></li>
                    <li><a href='/Contact' className='mobilenavbara'>Contact</a></li>
                </ul>
                <div className='grid grid-cols-5'>
                    <a href="https://www.facebook.com/brandingwaale/"><FaFacebook className="w-10 h-10 text-center border border-dashed border-black p-1.5 rounded-full"/></a>
                    <a href="https://www.instagram.com/brandingwaale/?hl=en"><FaInstagram className="w-10 h-10 text-center border border-dashed border-black p-1.5 rounded-full"/></a>
                    <a href="https://in.linkedin.com/company/brandingwaale"><FaLinkedin className="w-10 h-10 text-center border border-dashed border-black p-1.5 rounded-full"/></a>
                    <a href="https://twitter.com/brandingwaale?lang=en"><FaTwitter className="w-10 h-10 text-center border border-dashed border-black p-1.5 rounded-full"/></a>
                    <a href="https://www.youtube.com/channel/UCsx9Lah-S1Lcb99Yoywd9kQ"><FaYoutube className="w-10 h-10 text-center border border-dashed border-black p-1.5 rounded-full"/></a>             
                </div>
            </div>
        </>
    )
}

export default Navbar;