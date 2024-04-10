import React, { useState } from 'react';
import {FaPhoneAlt} from "react-icons/fa";
import {FaEnvelope} from "react-icons/fa";
import {FaLocationArrow} from "react-icons/fa";
import MainTopSectionData from '../Component/Service/MainTopSectionData';
import Navbar from '../Component/Navbar';
import Footer from '../Component/Footer';
import Cta from '../Component/Cta';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Contact = () => {
    const [Name, SetName] = useState("");
    const [Email, SetEmail] = useState("");
    const [Phone, SetPhone] = useState("");
    const [Service, SetService] = useState("");
    const [Message, SetMessage] = useState("");

    const FormHandling = (i) => {
        i.preventDefault();
        try{
            if(Name === ""){
                return toast.error("Required Name")
            }
            else if(Name.length <= 2){
                return toast.warning("Greather than 2")
            }
            else if(!isNaN(Name)){
                return toast.warning("Number Not Allowed")
            }
    
            else if(Email === ""){
                return toast.error("Required Email Name")
            }
            else if(Email.indexOf('@') <=0){
                return toast.warning("@ not allowed")
            }
            else if(Email.lastIndexOf('.') > -4){
                return toast.warning("please check . position")
            }
    
            else if(Phone === ""){
                return toast.error("Required Phone Name")
            }
            else if(Phone.length <=10 || Phone.length <= 11){
                return toast.warning("Only 10 Digit Number Required")
            }
            else if(isNaN(Phone)){
                return toast.warning("Number Not Allowed")
            }
    
            else if(Message === ""){
                return toast.error("Required Name")
            }
            else if(Message.length <= 20){
                return toast.warning("Greather than 20")
            }
    
            else{
                return toast.success("Thankyou for submitting this form")
            }
        }
        catch(error){
            console.error(error)
        }
    }
  return (
    <>
        <Navbar/>
        <MainTopSectionData
            TopSpan={"Graphic Design"}
            TopHead={"Reach us"}
            TopPara={"Globally parallel task quality methodologies whereas inexpensive sources. Uniquely administrate ubiquitous web services through diverse quality vectors syndicate error-free intellectual capital. Globally parallel task quality methodologies whereas inexpensive sources. Uniquely administrate ubiquitous web services through diverse quality vectors syndicate error-free intellectual capital. Globally parallel task quality methodologies whereas inexpensive sources. Uniquely administrate ubiquitous web services through diverse quality vectors syndicate error-free intellectual capital."}
            TopImage={"/contact.webp"}
        />
        <div className='p-10 relative after:content-[""] after:absolute after:top-0 after:right-0 after:h-full after:w-1/5 after:bg-transparent xl:after:bg-yellow after:-z-40'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 grid-rows-1'>
                <div className='bg-white shadow-2xl p-5 xl:p-20'>
                    <h3 className='font-bold text-xl md:text-3xl lg:text-4xl xl:text-4xl mb-5'>Reach Us</h3>
                    <form className='mt-10 w-full mx-auto'>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 grid-rows-1 xl:space-x-3'>
                            <div className='inputdiv'>
                                <input className="inputBox" type='text' placeholder='Enter Your Name' name='conname' value={Name} onChange={(e) => SetName(e.target.value)}/>
                            </div>
                            <div className='inputdiv'>
                                <input className="inputBox" type='text' placeholder='Enter Your Email' name='conemail' value={Email} onChange={(e) => SetEmail(e.target.value)}/>
                            </div>
                        </div>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 grid-rows-1 xl:space-x-3'>
                            <div className='inputdiv'>
                                <input className="inputBox" type='text' placeholder='Enter Your Phone Number' name='conname' value={Phone} onChange={(e) => SetPhone(e.target.value)}/>
                            </div>
                            <div className='inputdiv'>
                                <input className="inputBox" type='text' placeholder='What Service You Want?' name='conname' value={Service} onChange={(e) => SetService(e.target.value)}/>
                            </div>
                        </div>
                        <div className='textareadiv'>
                            <input className="textareaBox" type='text' placeholder='Tell Us About Your Business' name='conname' value={Message} onChange={(e) => SetMessage(e.target.value)}/>
                        </div>
                        <button className='darkbtn w-full py-4' onClick={FormHandling}>Submit Enquiry</button>
                    </form>
                </div>
                <div className='bg-black h-full shadow-xl p-5 xl:p-20'>
                    <h3 className='font-bold text-xl md:text-3xl lg:text-4xl xl:text-4xl mb-5 text-white'>Get in Touch</h3>
                    <p className='text-slate-100'>To get in touch, I encourage you to reach out through whichever means you find most convenient. Whether it's via email, phone call, social media messaging, or even through a traditional letter, I'm eager to hear from you. </p>
                    <div className='my-4 border border-dashed border-lightblack'></div>
                    <div>
                        <div className='flex items-start gap-x-5 mt-10'>
                            <div>
                                <FaPhoneAlt className='text-white text-3xl'/>
                            </div>
                            <div>
                                <a href='tel: +91 96677 37755'>
                                    <h4 className='text-xl md:text-xl lg:text-xl xl:text-xl text-white'>+91 96677 37755</h4>
                                </a>
                            </div>
                        </div>
                        <div className='flex items-start gap-x-5 mt-10'>
                            <div>
                                <FaEnvelope className='text-white text-3xl'/>
                            </div>
                            <div>
                                <a href="mailto: sales@brandingwaale.com">
                                    <h4 className='text-xl md:text-xl lg:text-xl xl:text-xl text-white'>sales@brandingwaale.com</h4>
                                </a>
                            </div>
                        </div>
                        <div className='flex items-start gap-x-5 mt-10'>
                            <div>
                                <FaLocationArrow className='text-white text-3xl'/>
                            </div>
                            <div>
                               <a href="https://maps.app.goo.gl/AW9RW9xHe7MUEWxU8"> 
                                    <h4 className='text-xl md:text-xl lg:text-xl xl:text-xl text-white'>SCF 147, Second Floor, Huda Market, Sector 37, Faridabad, Haryana 121003</h4>
                               </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer
                position="top-right"
                autoClose={1000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
        </div>
        <Cta/>
        <Footer/>
    </>
  )
}
