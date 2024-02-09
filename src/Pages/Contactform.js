import React, {useState} from 'react'
import "./Contact.css"
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { IoPerson } from "react-icons/io5";


const Contactform = () => {

  const [action , setAction] = useState("Sign up");

  return (
    <div className='containerr'>
        <div className='heeder'>
            <div className='texxt'>{action}</div>
            <div className='underline'></div>
        </div>
        <div className='inputs'>
          {action==="Login"? <div> </div>:
            <div className='input'>
            <IoPerson className="fontclass"/>
            <input type='text' placeholder='Name'/>
            </div>}
            <div className='input'>
            <MdOutlineMarkEmailUnread className="fontclass"/> 
            <input type='text' placeholder='Email Id'/>
            </div>
            <div className='input'>
            <RiLockPasswordLine className="fontclass"/>
            <input type='text' placeholder='Password'/>
            </div>
        </div>
        {action==="Sign up"?<div> </div>:
        <div className='forgot_password'> Lost Password ? <span>Click here </span></div>}
        <div className='submit_container'>
            <div className={action==="Login" ? "submitt gray": "submitt" } onClick={()=>{setAction("Sign up")}}> Sign up</div>
            <div className={action==="Sign up" ? "submitt gray": "submitt" } onClick={()=>{setAction("Login")}}> Login</div>
        </div>
    </div>
  )
}

export default Contactform
