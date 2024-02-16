import React, {useState}from 'react'
import "./Contactform.css"
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { IoPerson } from "react-icons/io5";
import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineEyeInvisible } from "react-icons/ai";


const Contactform = () => {
  // const [inputs, setInputs] = useState({});

  const [ inputs, setInputs] = useState({
    name: "",
     email: "",
     password:"",
     admin: false,
     required:"",
   });

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
  }


  return (
    <div className='contactform_container'>
      <div className='contactform_wrap' onSubmit={handleSubmit}>
        <div className='sign_topcontent'>
         <h1 className='sign_text'>Sign Up</h1>
         <div className='underline'></div>
        </div>

        <div className='input_wrap'>
        <div className='input_sign'>
        <IoPerson className='signup_icon'/>
          <input className='inputss'
           placeholder='Name'
           type='text'
           name="name"
           required="true"
           value={inputs.name || ""} 
           onChange={handleChange}
           />
        </div>

        <div className='input_sign'>
          <MdOutlineMarkEmailUnread className='signup_icon'/>
          <input className="inputss" 
          placeholder='Email Id'
          type='email'
          name="email"
          value={inputs.email || ""} 
           onChange={handleChange}/>
        </div>


        <div className='input_sign'>
        <RiLockPasswordLine className='signup_icon' />
          <input className='inputss' 
          placeholder='Password'
          name='password'
          type='number'
          value={inputs.password || ""} 
          onChange={handleChange}
          />
          <AiOutlineEye className='passwordeye' /> <AiOutlineEyeInvisible className='passwordclose'/> 
        </div>
       </div>
       
        <div className='signupbutton'>
          <button className='btn_sign' type="submit">Sign Up</button>
          <button className='btn_login'>Login </button>
        </div>
      </div>

    </div>
  )
}

export default Contactform



// {props.name === "password" ? props.view ? 
// <AiOutlineEyeInvisible fontSize={20} className='login_eye pointer' onClick={() => { props.setView(!props.view) }} />
//  : <MdRemoveRedEye fontSize={20} className='login_eye pointer' onClick={() => { props.setView(!props.view) }} />
//   : null}
        
