import React from 'react'
import "./Header.css"
import { FaFacebook } from "react-icons/fa";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { IoLogoInstagram } from "react-icons/io5";
import { FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdOutlineMarkEmailUnread } from "react-icons/md";


const Topheader = () => {
  return (
    <div class="maxpheader">
       <div class="maintopheader">
        <div class="topheader_wrap">
        <span class="toph"><FaLocationDot fontSize="20px" /> <p> Golden tulip Airport Road</p> </span>
        <span class="toph"><BsFillTelephoneFill fontSize="20px"/>: <p>08064318819</p></span>
        <span class="toph"> <MdOutlineMarkEmailUnread fontSize="20px"/>:<p>Devodinakachi@gmail.com</p></span>
        </div>

        <div class="topheader_right">
        <FaFacebook fontSize="25px" />
        <FaXTwitter fontSize="22px" />
        <TiSocialLinkedinCircular fontSize="25px" />
        <IoLogoInstagram fontSize="25px" />
        <FaYoutube fontSize="25px" />    
        </div>
    </div>
      

    </div>
   
  )
}

export default Topheader
