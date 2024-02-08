import React from 'react'
import "./Contact.css"
import { FaLocationDot } from "react-icons/fa6";
// import { BsFillTelephoneFill } from "react-icons/bs";
// import { MdOutlineMarkEmailUnread } from "react-icons/md";

const Contactform = () => {
  return (
    <div className='containerr'>
        <div className='heeder'>
            <div className='texxt'>Message me</div>
            <div className='underline'></div>
        </div>
        <div className='inputs'>
            <div className='input'>
            <FaLocationDot fontSize="33px" margin="0px 30px" />
            <input type='text'/>
            </div>
            <div className='input'>
            <FaLocationDot fontSize="33px" margin="0px 30px" />
            <input type='text'/>
            </div>
            <div className='input'>
            <FaLocationDot fontSize="33px" margin="0px 30px" />
            <input type='text'/>
            </div>
        </div>
        <div className='forgot_password'></div>
        <div className='submit_container'>
            <div className='submitt'> login</div>
        </div>
    </div>
  )
}

export default Contactform
