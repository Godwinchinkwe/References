import React from 'react'
import "./Contact.css"
import { FaLocationDot } from "react-icons/fa6";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdOutlineMarkEmailUnread } from "react-icons/md";

const Contact = () => {
  return (
    <div class='contact_main'>
        <h1> Contact Us</h1> <br/>
        <h2>Contact US for any Query</h2>
      <div class="contact_wrap"> 
        <section class="section_a">
            <h2>Get in touch</h2>
            <p>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos </p>

            <div class="contat_side">
                <span class="contat_span"><FaLocationDot fontSize="33px" /> </span>
                <span> <h1>Office</h1>
                <p>Airport Golden Tulip</p></span>
            </div>

            <div class="contat_side">
                <span class="contat_span"><BsFillTelephoneFill fontSize="33px" /> </span>
                <span> <h1>Mobile</h1>
                <p>+234 8064 318 819</p></span>
            </div>

            <div class="contat_side">
                <span class="contat_span"><MdOutlineMarkEmailUnread fontSize="33px" /> </span>
                <span> <h1>Gmail</h1>
                <p>Devodinakachi@gmail.com</p></span>
            </div>
        </section>

        <section class="section_b">
          <h1>Please Drop a message </h1>
          <div class="contact_inputname">
            <input placeholder='Name'
            />
             <input placeholder='Gmail'/>
          </div>
          <input placeholder='Subject'/>
          <textarea
          placeholder='Message'></textarea>
          <button> Send Message</button>


        </section>

      </div>
    </div>
  )
}

export default Contact
